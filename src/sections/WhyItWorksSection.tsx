import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import * as THREE from 'three';


const WhyItWorksSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const { scrollYProgress: transitionScrollProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "start start"]
    });

    useEffect(() => {
        if (!canvasRef.current || !containerRef.current) return;

        const canvas = canvasRef.current;
        const container = containerRef.current;

        // Scene setup
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xffffff); // White background

        const camera = new THREE.PerspectiveCamera(
            60,
            container.clientWidth / container.clientHeight,
            0.1,
            1000
        );
        camera.position.set(0, 0, 30); // Further back to see more field

        const renderer = new THREE.WebGLRenderer({
            canvas,
            antialias: false, // Optimized
            alpha: true,
            powerPreference: "high-performance"
        });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(1); // Optimized

        const group = new THREE.Group();
        scene.add(group);

        // === PARTICLES & CONNECTIONS ===
        const particleCount = 100; // Adjusted count
        const particlePositions = new Float32Array(particleCount * 3);
        const particleSpeeds: number[] = [];

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particlePositions[i * 3] = (Math.random() - 0.5) * 60; // x
            particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 40; // y
            particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 30; // z
            particleSpeeds.push(0.2 + Math.random() * 0.5);
        }

        const particleGeo = new THREE.BufferGeometry();
        particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

        const particleMat = new THREE.PointsMaterial({
            color: 0x000000,
            size: 0.18,
            transparent: true,
            opacity: 0.35, // Reduced from 0.5
        });

        const particles = new THREE.Points(particleGeo, particleMat);
        group.add(particles);

        // Lines
        const lineGeo = new THREE.BufferGeometry();
        const lineMat = new THREE.LineBasicMaterial({
            color: 0x000000,
            transparent: true,
            opacity: 0.08, // Reduced from 0.12
        });
        const lines = new THREE.LineSegments(lineGeo, lineMat);
        group.add(lines);

        // Animation
        const clock = new THREE.Clock();
        let animationId: number;
        let isVisible = false;

        const animate = () => {
            animationId = requestAnimationFrame(animate);

            if (!isVisible) return;

            const time = clock.getElapsedTime();
            const positions = particleGeo.attributes.position.array as Float32Array;

            // Update particles
            for (let i = 0; i < particleCount; i++) {
                // Float gently
                positions[i * 3 + 1] += particleSpeeds[i] * 0.02; // Move up

                // Horizontal drift
                positions[i * 3] += Math.sin(time * 0.5 + i) * 0.01;

                // Reset loops
                if (positions[i * 3 + 1] > 20) {
                    positions[i * 3 + 1] = -20;
                    positions[i * 3] = (Math.random() - 0.5) * 60;
                }
            }
            particleGeo.attributes.position.needsUpdate = true;

            // Update Connection Lines
            const linePositions: number[] = [];
            const connectDistance = 8;

            for (let i = 0; i < particleCount; i++) {
                // Optimize: check only a subset of neighbors or use spatial hash (simplifying to brute force with low count for proper look)
                for (let j = i + 1; j < particleCount; j++) {
                    const dx = positions[i * 3] - positions[j * 3];
                    const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
                    const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
                    const distSq = dx * dx + dy * dy + dz * dz;

                    if (distSq < connectDistance * connectDistance) {
                        linePositions.push(
                            positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
                            positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
                        );
                    }
                }
            }
            lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));


            // Slight camera sway
            group.rotation.y = Math.sin(time * 0.1) * 0.05;

            renderer.render(scene, camera);
        };

        // Resize
        const handleResize = () => {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        };
        window.addEventListener('resize', handleResize);

        // Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                isVisible = entry.isIntersecting;
            });
        }, { threshold: 0 });
        observer.observe(container);

        animate();

        return () => {
            observer.disconnect();
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
            renderer.dispose();
            particleGeo.dispose();
            particleMat.dispose();
            lineGeo.dispose();
            lineMat.dispose();
        };
    }, []);

    const letterVariant = {
        hidden: { y: "100%", opacity: 0 },
        visible: {
            y: "0%",
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" as const }
        }
    };

    const containerVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1,
                duration: 0.8
            }
        }
    };

    return (
        <section ref={containerRef} className="relative w-full bg-white text-black z-30 -mt-1">

            {/* Background Canvas */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ zIndex: 0 }}
            />

            <div className="flex flex-col lg:flex-row bg-transparent gap-0 relative z-10">

                {/* Left Column - Sticky Title */}
                <div className="w-full lg:w-[55%] h-[50vh] lg:h-screen sticky top-0 flex items-start pt-24 lg:pt-32 z-10 bg-transparent">
                    <div className="text-center lg:text-left px-6 lg:px-16 pr-16">
                        <motion.h2
                            className="heading-xl font-bold tracking-tighter leading-none flex flex-col items-start"
                            variants={containerVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <span className="flex overflow-hidden">
                                {['W', 'H', 'A', 'T', ' ', 'W', 'E'].map((char, i) => (
                                    <motion.span key={i} variants={letterVariant} className="text-black inline-block">{char === ' ' ? '\u00A0' : char}</motion.span>
                                ))}
                            </span>
                            <span className="flex overflow-hidden">
                                {['C', 'A', 'N', ' ', 'D', 'O'].map((char, i) => (
                                    <motion.span key={i} variants={letterVariant} className="text-black inline-block">{char === ' ' ? '\u00A0' : char}</motion.span>
                                ))}
                            </span>
                        </motion.h2>
                    </div>
                </div>

                {/* Right Column - Scrollable Content */}
                <div className="w-full lg:w-[45%] relative bg-transparent z-20 pr-6 lg:pr-16">
                    {contentItems.map((item, index) => (
                        <ContentBlock key={index} item={item} index={index} />
                    ))}
                </div>
            </div>

            {/* Transition Curtain Bars - Matches Previous Section (White) */}
            <div className="absolute inset-x-0 top-0 h-[30vh] z-50 pointer-events-none flex items-start">
                {[160, 90, 160, 85, 150].map((h, i) => (
                    <TransitionBar
                        key={i}
                        heightPct={h}
                        scrollProgress={transitionScrollProgress}
                        speed={i === 1 ? 0.7 : i === 3 ? 0.55 : 0.3 + (i * 0.05)}
                        color="bg-white"
                    />
                ))}
            </div>


        </section >
    );
};

const ContentBlock = ({ item, index }: { item: any, index: number }) => {
    return (
        <div className="flex flex-col min-h-[80vh] lg:min-h-screen py-12 lg:py-16 group">

            {/* Content Above Video */}
            <div className="mb-8 lg:mb-12">
                {/* Number Badge */}
                <div className="text-6xl lg:text-8xl font-bold mb-6 tracking-tighter" style={{ background: 'linear-gradient(to right, #5fbb46, #059fab)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>0{index + 1}</div>

                {/* Title */}
                <h3 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight uppercase text-black">
                    {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                    {item.description}
                </p>
            </div>

            {/* Video Background Block */}
            <div className="relative w-full h-[50vh] lg:h-[60vh] overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    poster={item.poster}
                >
                    {item.videoMp4 && <source src={item.videoMp4} type="video/mp4" />}
                    {item.videoWebm && <source src={item.videoWebm} type="video/webm" />}
                </video>
            </div>
        </div>
    );
};

const contentItems = [
    {
        title: "Strategic Transformation",
        description: <span><strong className="text-black">The Blueprint:</strong> We perform a deep-dive <strong className="text-black">Discovery</strong> of your current operations to identify exactly where your "dots" are disconnected. We design a professional <strong className="text-black">AI Roadmap</strong> that serves as a strategic bridge between your manual processes and your future scale, ensuring every piece of technology you use is a direct investment in your bottom line.</span>,
        videoMp4: "/Strategic_Consultation.mp4",
        videoWebm: "",
        poster: ""
    },
    {
        title: "Agentic Systems Engineering",
        description: <span><strong className="text-black">The Foundation:</strong> We build and integrate the central <strong className="text-black">AI Core</strong> your business lives on. By unifying your fragmented operational "islands" into bespoke <strong className="text-black">Agentic Applications</strong>, we develop production-grade systems tailored specifically to your unique workflow. These enterprise-grade solutions integrate directly into your stack to <strong className="text-black">delete manual work</strong> and empower your team to handle <strong className="text-black">10x the volume</strong>, offering a smarter and more affordable alternative to traditional off-the-shelf software.</span>,
        videoMp4: "/Custom_Business_Systems.mp4",
        videoWebm: "",
        poster: ""
    },
    {
        title: "Seamless Digital Automation",
        description: <span><strong className="text-black">The Connectivity:</strong> We delete the "manual grind" by engineering tailored backend workflows and intelligent <strong className="text-black">AI Agents</strong>—such as Voice and Chat agents—that integrate directly into your existing stack. We turn your isolated "data islands" into a unified engine, empowering your existing team to handle <strong className="text-black">10x the volume</strong> with zero operational waste.</span>,
        videoMp4: "/Intelligent_Automation.mp4",
        videoWebm: "",
        poster: ""
    },
    {
        title: "Performance Growth Engines",
        description: <span><strong className="text-black">The Visibility:</strong> We connect your brand to your target market through a full-spectrum <strong className="text-black">AI-driven marketing ecosystem</strong>. Once your <strong className="text-black">AI Core</strong> is established, we transform your technical infrastructure into a high-velocity engine that automates everything from <strong className="text-black">AI-guided content and image generation</strong> to <strong className="text-black">intelligent competitor analysis and remarketing</strong>. By leveraging <strong className="text-black">agentic systems</strong> to dominate your digital landscape, we ensure your business is not just found first, but consistently converts digital interest into <strong className="text-black">measurable revenue growth</strong>.</span>,
        videoMp4: "/Digital Growth Engines.mp4",
        videoWebm: "",
        poster: ""
    }
];

export default WhyItWorksSection;

const TransitionBar = ({ heightPct, scrollProgress, speed, color }: { heightPct: number, scrollProgress: any, speed: number, color: string }) => {
    const y = useTransform(scrollProgress, [0, speed], ["0%", "-100%"]);

    return (
        <motion.div
            className={`flex-1 relative ${color}`}
            style={{
                height: `${heightPct}%`,
                y,
            }}
        />
    );
};
