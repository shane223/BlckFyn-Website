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
                                    <motion.span key={i} variants={letterVariant} className="text-gray-800 inline-block">{char === ' ' ? '\u00A0' : char}</motion.span>
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

            {/* Bottom Fade - Ensures clean transition to next section */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />
        </section >
    );
};

const ContentBlock = ({ item, index }: { item: any, index: number }) => {
    return (
        <div className="flex flex-col min-h-[80vh] lg:min-h-screen py-12 lg:py-16 group">

            {/* Video Background Block */}
            <div className="relative w-full h-[50vh] lg:h-[60vh] overflow-hidden mb-8 lg:mb-12">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    poster={item.poster}
                >
                    <source src={item.videoMp4} type="video/mp4" />
                    <source src={item.videoWebm} type="video/webm" />
                </video>
            </div>

            {/* Content Below Video */}
            <div>
                {/* Number Badge */}
                <div className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent mb-6">0{index + 1}</div>

                {/* Title */}
                <h3 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight uppercase text-black">
                    {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-2xl">
                    {item.description}
                </p>
            </div>
        </div>
    );
};

const contentItems = [
    {
        title: "Strategic Consultation",
        description: <span><strong className="text-black">The Blueprint:</strong> We audit your current operations to identify exactly where your "dots" are disconnected. We provide a professional IT and AI roadmap that serves as a bridge between your current manual processes and your future growth goals, ensuring every piece of technology you use is a direct investment in your bottom line.</span>,
        videoMp4: "https://cdn.prod.website-files.com/63f9f100025c058594957cca%2F6871acefa162f4b7055b7e9c_Humanize-min20-transcode.mp4",
        videoWebm: "https://cdn.prod.website-files.com/63f9f100025c058594957cca%2F6871acefa162f4b7055b7e9c_Humanize-min20-transcode.webm",
        poster: "https://cdn.prod.website-files.com/63f9f100025c058594957cca%2F6871acefa162f4b7055b7e9c_Humanize-min20-poster-00001.jpg"
    },
    {
        title: "Custom Business Systems",
        description: <span><strong className="text-black">The Foundation:</strong> We build and integrate the central systems your business lives on. Whether you need a high-performing Website, an E-commerce platform, a CRM, or dedicated Financial, HR, and Inventory Management systems, we develop unified tools tailored to your specific workflow. In the AI Age, we create custom Agentic Applications that are smarter and more affordable than traditional off-the-shelf software.</span>,
        videoMp4: "https://cdn.prod.website-files.com/63f9f100025c058594957cca%2F6871ad06931dd8bd17abb0d8_BoostRecall-min20-transcode.mp4",
        videoWebm: "https://cdn.prod.website-files.com/63f9f100025c058594957cca%2F6871ad06931dd8bd17abb0d8_BoostRecall-min20-transcode.webm",
        poster: "https://cdn.prod.website-files.com/63f9f100025c058594957cca%2F6871ad06931dd8bd17abb0d8_BoostRecall-min20-poster-00001.jpg"
    },
    {
        title: "Intelligent Automation",
        description: <span><strong className="text-black">The Connection:</strong> We bridge the gaps between your existing software by using intelligent automation to make your apps finally talk to each other. By linking your data and automating repetitive manual entry, we create a more efficient operation where information flows smoothly between departments. This removes the "manual grind," allowing your team to focus on high-priority tasks rather than moving data between spreadsheets.</span>,
        videoMp4: "https://cdn.prod.website-files.com/63f9f100025c058594957cca%2F6871ae5392343b26587fb871_SayMore-min20-transcode.mp4",
        videoWebm: "https://cdn.prod.website-files.com/63f9f100025c058594957cca%2F6871ae5392343b26587fb871_SayMore-min20-transcode.webm",
        poster: "https://cdn.prod.website-files.com/63f9f100025c058594957cca%2F6871ae5392343b26587fb871_SayMore-min20-poster-00001.jpg"
    },
    {
        title: "Digital Growth Engines",
        description: <span><strong className="text-black">The Visibility:</strong> We connect your brand to your target market. By combining AI-driven SEO with intelligent lead-generation systems, we ensure your business is the first one customers find. We turn your technical infrastructure into a reliable engine that consistently captures digital interest and converts it into measurable revenue growth.</span>,
        videoMp4: "https://cdn.prod.website-files.com/63f9f100025c058594957cca%2F6871ad28156c4722bf866c69_Unlimited-min20-transcode.mp4",
        videoWebm: "https://cdn.prod.website-files.com/63f9f100025c058594957cca%2F6871ad28156c4722bf866c69_Unlimited-min20-transcode.webm",
        poster: "https://cdn.prod.website-files.com/63f9f100025c058594957cca%2F6871ad28156c4722bf866c69_Unlimited-min20-poster-00001.jpg"
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
