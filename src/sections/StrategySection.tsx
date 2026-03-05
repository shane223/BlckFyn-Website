import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import ReactDOM from 'react-dom';
import BlueprintWizard from '@/components/BlueprintWizard';
import EnquiryWizard from '@/components/EnquiryWizard';

const StrategySection = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 75%", "start 100px"]
    });

    // Parallax for background image
    const { scrollYProgress: bgScrollProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    // Image starts at the bottom (shows colors), moves up as you scroll
    const backgroundY = useTransform(bgScrollProgress, [0, 1], ["0%", "-30%"]);

    const scrollProgress = useRef(0);
    const targetScrollProgress = useRef(0);

    const [expandedCard, setExpandedCard] = useState<'blueprint' | 'enquiry' | null>(null);

    // EmailJS Configuration - To be replaced by the user
    // See implementation_plan.md for instructions
    const EMAILJS_SERVICE_ID = "service_1a3n15m";
    const EMAILJS_TEMPLATE_ID_BLUEPRINT = "template_w0fp2kd";
    const EMAILJS_TEMPLATE_ID_ENQUIRY = "template_gpyf37i";
    const EMAILJS_PUBLIC_KEY = "ebe4q-RkFjdz9Hgf9";

    useEffect(() => {
        if (!canvasRef.current || !containerRef.current) return;

        const canvas = canvasRef.current;
        const container = containerRef.current;

        // Scene setup
        const scene = new THREE.Scene();
        scene.background = null; // Transparent — bg image shown via CSS

        const camera = new THREE.PerspectiveCamera(
            55,
            container.clientWidth / container.clientHeight,
            0.1,
            1000
        );
        camera.position.set(0, 0, 18);

        const renderer = new THREE.WebGLRenderer({
            canvas,
            antialias: true, // Re-enabled per user request
            alpha: true,
        });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(1); // Deep Optimization: Cap at 1x resolution

        const orbitGroup = new THREE.Group();
        scene.add(orbitGroup);

        // === CIRCULAR ORBIT LINES (WHITE) ===
        const orbitRings: {
            mesh: THREE.Line;
            radius: number;
            speed: number;
            tiltX: number;
            tiltZ: number;
            phase: number;
        }[] = [];

        const ringCount = 12;

        for (let i = 0; i < ringCount; i++) {
            const radius = 3 + i * 0.9;
            const segments = 64 + i * 8;

            // Create circle geometry
            const circleGeo = new THREE.BufferGeometry();
            const circlePositions: number[] = [];

            for (let j = 0; j <= segments; j++) {
                const angle = (j / segments) * Math.PI * 2;
                circlePositions.push(
                    Math.cos(angle) * radius,
                    Math.sin(angle) * radius,
                    0
                );
            }

            circleGeo.setAttribute(
                'position',
                new THREE.Float32BufferAttribute(circlePositions, 3)
            );

            const circleMat = new THREE.LineBasicMaterial({
                color: 0xffffff, // While lines
                transparent: true,
                opacity: 0.15 + (ringCount - i) * 0.03,
            });

            const circle = new THREE.Line(circleGeo, circleMat);

            // Random tilt for each ring
            const tiltX = (Math.random() - 0.5) * Math.PI * 0.6;
            const tiltZ = (Math.random() - 0.5) * Math.PI * 0.6;

            circle.rotation.x = tiltX;
            circle.rotation.z = tiltZ;

            orbitGroup.add(circle);

            orbitRings.push({
                mesh: circle,
                radius,
                speed: (0.1 + Math.random() * 0.2) * (i % 2 === 0 ? 1 : -1),
                tiltX,
                tiltZ,
                phase: Math.random() * Math.PI * 2,
            });
        }

        // === ORBITING DOTS (WHITE) ===
        const dotCount = 40;
        const orbitDots: {
            mesh: THREE.Mesh;
            ringIndex: number;
            angle: number;
            speed: number;
            size: number;
        }[] = [];

        const dotGeo = new THREE.SphereGeometry(1, 8, 8);

        for (let i = 0; i < dotCount; i++) {
            const ringIndex = Math.floor(Math.random() * ringCount);

            const dotMat = new THREE.MeshBasicMaterial({
                color: 0xffffff, // White dots
                transparent: true,
                opacity: 0.7 + Math.random() * 0.3,
            });

            const dot = new THREE.Mesh(dotGeo, dotMat);
            const size = 0.08 + Math.random() * 0.1;
            dot.scale.setScalar(size);

            orbitGroup.add(dot);

            orbitDots.push({
                mesh: dot,
                ringIndex,
                angle: Math.random() * Math.PI * 2,
                speed: (0.3 + Math.random() * 0.5) * (Math.random() > 0.5 ? 1 : -1),
                size,
            });
        }

        // === CENTER CORE (WHITE) ===
        const coreGeo = new THREE.IcosahedronGeometry(1.2, 1);
        const coreMat = new THREE.MeshBasicMaterial({
            color: 0xffffff, // White core
            wireframe: true,
            transparent: true,
            opacity: 0.5,
        });
        const core = new THREE.Mesh(coreGeo, coreMat);
        orbitGroup.add(core);

        // Core dots
        const coreDotGeo = new THREE.BufferGeometry();
        const corePositions = coreGeo.attributes.position.array.slice();
        coreDotGeo.setAttribute(
            'position',
            new THREE.BufferAttribute(corePositions, 3)
        );
        const coreDotMat = new THREE.PointsMaterial({
            color: 0xffffff, // White core dots
            size: 0.1,
            transparent: true,
            opacity: 0.9,
        });
        const coreDots = new THREE.Points(coreDotGeo, coreDotMat);
        orbitGroup.add(coreDots);

        // === RADIAL LINES (WHITE) ===
        const radialLineCount = 20;
        const radialLineGeo = new THREE.BufferGeometry();
        const radialPositions: number[] = [];

        for (let i = 0; i < radialLineCount; i++) {
            const angle = (i / radialLineCount) * Math.PI * 2;
            radialPositions.push(0, 0, 0);
            radialPositions.push(
                Math.cos(angle) * 12,
                Math.sin(angle) * 12,
                0
            );
        }

        radialLineGeo.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(radialPositions, 3)
        );
        const radialLineMat = new THREE.LineBasicMaterial({
            color: 0xffffff, // White radial lines
            transparent: true,
            opacity: 0.08,
        });
        const radialLines = new THREE.LineSegments(radialLineGeo, radialLineMat);
        orbitGroup.add(radialLines);

        // Animation
        const clock = new THREE.Clock();

        let animationId: number;

        const animate = () => {
            animationId = requestAnimationFrame(animate);

            // PAUSE RENDER LOOP IF NOT VISIBLE (Saves heavy CPU trigonometry)
            if (!isIntersecting.current) return;

            const time = clock.getElapsedTime();

            // Smooth scroll progress
            scrollProgress.current +=
                (targetScrollProgress.current - scrollProgress.current) * 0.08;

            // Rotate rings
            orbitRings.forEach((ring) => {
                ring.mesh.rotation.z += ring.speed * 0.01;
                // Add subtle wobble
                ring.mesh.rotation.x =
                    ring.tiltX + Math.sin(time * 0.5 + ring.phase) * 0.05;
                ring.mesh.rotation.y =
                    Math.sin(time * 0.3 + ring.phase) * 0.03;
            });

            // Update orbiting dots
            orbitDots.forEach((dot) => {
                const ring = orbitRings[dot.ringIndex];
                dot.angle += dot.speed * 0.01;

                // Calculate position on the ring's plane
                const x = Math.cos(dot.angle) * ring.radius;
                const y = Math.sin(dot.angle) * ring.radius;

                // Apply ring's rotation to get world position
                const pos = new THREE.Vector3(x, y, 0);
                pos.applyEuler(ring.mesh.rotation);

                dot.mesh.position.copy(pos);

                // Pulse size
                const pulse = 1 + Math.sin(time * 3 + dot.angle) * 0.2;
                dot.mesh.scale.setScalar(dot.size * pulse);
            });

            // Rotate core
            core.rotation.y = time * 0.2;
            core.rotation.x = Math.sin(time * 0.3) * 0.1;
            coreDots.rotation.y = time * 0.2;
            coreDots.rotation.x = Math.sin(time * 0.3) * 0.1;

            // Rotate radial lines slowly
            radialLines.rotation.z = time * 0.02;

            // Parallax based on scroll
            const scrollFactor = scrollProgress.current;
            orbitGroup.rotation.y = scrollFactor * 0.5;
            orbitGroup.rotation.x = scrollFactor * 0.2;

            // Camera subtle movement
            camera.position.x = Math.sin(time * 0.1) * 0.5;
            camera.position.y = Math.cos(time * 0.15) * 0.3;
            camera.lookAt(0, 0, 0);

            camera.position.x = Math.sin(time * 0.1) * 0.5;
            camera.position.y = Math.cos(time * 0.15) * 0.3;
            camera.lookAt(0, 0, 0);

            // Render
            renderer.render(scene, camera);
        };

        // Intersection Observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    isIntersecting.current = entry.isIntersecting;
                    if (entry.isIntersecting) {
                        targetScrollProgress.current = entry.intersectionRatio;
                    }
                });
            },
            {
                threshold: Array.from({ length: 100 }, (_, i) => i / 100),
                rootMargin: '-10% 0px -10% 0px',
            }
        );

        observer.observe(container);

        // Resize handler
        const handleResize = () => {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        };

        window.addEventListener('resize', handleResize);

        // Visibility tracking
        const isIntersecting = { current: true };

        animate();

        return () => {
            observer.disconnect();
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);

            // Strict Cleanup
            scene.traverse((object) => {
                if (object instanceof THREE.Mesh || object instanceof THREE.Points || object instanceof THREE.Line || object instanceof THREE.LineSegments) {
                    object.geometry.dispose();
                    if (Array.isArray(object.material)) {
                        object.material.forEach(m => m.dispose());
                    } else {
                        object.material.dispose();
                    }
                }
            });
            renderer.dispose();
        };
    }, []);

    return (
        <>
            <section ref={containerRef} className="relative w-full min-h-screen overflow-hidden">

                {/* Parallax Background */}
                <motion.div
                    className="absolute inset-x-0 z-0 pointer-events-none"
                    style={{
                        top: "-15%",
                        height: "130%",
                        backgroundImage: "url('/bg_gradient_1.webp')",
                        backgroundSize: "cover",
                        backgroundPosition: "bottom right",
                        backgroundRepeat: "no-repeat",
                        y: backgroundY,
                    }}
                />

                {/* Transition Curtain Bars */}
                <div className="absolute inset-0 z-40 pointer-events-none flex items-start">
                    {[140, 90, 160, 85, 130].map((h, i) => (
                        <TransitionBar
                            key={i}
                            heightPct={h}
                            scrollProgress={scrollYProgress}
                            speed={1}
                        />
                    ))}
                </div>

                {/* Three.js Canvas */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full"
                    style={{ zIndex: 1 }}
                />

                {/* Content Overlay */}
                <div className="relative z-10 min-h-screen flex items-center px-6 lg:px-16 py-12">
                    <div className="w-full max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">

                            {/* Left Content */}
                            <motion.div
                                className="section-content text-white"
                                animate={{
                                    opacity: expandedCard ? 0 : 1,
                                    x: expandedCard ? -300 : 0,
                                }}
                                transition={{
                                    duration: expandedCard ? 0.2 : 0.4,
                                    ease: expandedCard ? [0.4, 0, 1, 1] : [0, 0, 0.2, 1],
                                }}
                                style={{ pointerEvents: expandedCard ? 'none' : 'auto' }}
                            >
                                <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tight mb-8 text-black">Ready to Win the Next Decade?</h2>
                                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                                    If you're tired of managing chaos and ready to start leading growth, let's have a professional discussion about your specific challenges. We bridge the gap between your current manual friction and a future of <strong className="text-black">10x operational volume</strong> through bespoke AI infrastructure.
                                </p>
                            </motion.div>

                            {/* Right Content - Cards */}
                            <div className="strategy-cards flex flex-col gap-6">

                                {/* Blueprint Card */}
                                <motion.div
                                    layoutId="blueprint-card"
                                    className="glass-card p-10 cursor-pointer"
                                    onClick={() => !expandedCard && setExpandedCard('blueprint')}
                                    animate={{
                                        opacity: expandedCard === 'enquiry' ? 0 : 1,
                                        y: expandedCard === 'enquiry' ? -40 : 0,
                                    }}
                                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                                    whileHover={!expandedCard ? { scale: 1.02 } : {}}
                                >
                                    <h3 className="text-2xl text-gray-900 font-bold mb-4">REQUEST YOUR STRATEGIC BLUEPRINT</h3>
                                    <p className="text-gray-700">
                                        Identify your 'disconnected dots' through our automated discovery tool. Receive a bespoke PDF roadmap designed to delete your manual grind and turn your infrastructure into a powerful growth engine.
                                    </p>
                                    {!expandedCard && (
                                        <p className="text-sm text-gray-500 mt-4 font-medium">Click to request →</p>
                                    )}
                                </motion.div>

                                {/* Enquiry Card */}
                                <motion.div
                                    layoutId="enquiry-card"
                                    className="glass-card p-10 cursor-pointer"
                                    onClick={() => !expandedCard && setExpandedCard('enquiry')}
                                    animate={{
                                        opacity: expandedCard === 'blueprint' ? 0 : 1,
                                        y: expandedCard === 'blueprint' ? 40 : 0,
                                    }}
                                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                                    whileHover={!expandedCard ? { scale: 1.02 } : {}}
                                >
                                    <h3 className="text-2xl text-gray-900 font-bold mb-4">SEND A GENERAL ENQUIRY</h3>
                                    <p className="text-gray-700">
                                        Start a direct conversation about a specific technical or strategic challenge. Let's explore how we can bridge your gaps and deploy an <strong className="text-gray-900">AI Core</strong> tailored to your unique business trajectory.
                                    </p>
                                    {!expandedCard && (
                                        <p className="text-sm text-gray-500 mt-4 font-medium">Click to inquire →</p>
                                    )}
                                </motion.div>

                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* Expanded Card Portal — renders to document.body to bypass parent CSS transforms */}
            {ReactDOM.createPortal(
                <AnimatePresence>
                    {expandedCard && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                key="backdrop"
                                style={{ position: 'fixed', inset: 0, zIndex: 9998 }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setExpandedCard(null)}
                            />

                            {/* Expanded Card */}
                            <motion.div
                                key="expanded"
                                layoutId={`${expandedCard}-card`}
                                className="glass-card p-12 lg:p-16 overflow-y-auto w-[90vw] md:w-[80vw] lg:w-[55vw]"
                                style={{
                                    position: 'fixed',
                                    top: '10vh',
                                    left: 0,
                                    right: 0,
                                    margin: '0 auto',
                                    height: '80vh',
                                    zIndex: 9999,
                                }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            >
                                {/* Close button */}
                                <button
                                    onClick={() => setExpandedCard(null)}
                                    className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:bg-black/10 transition-colors text-xl font-light"
                                >
                                    ✕
                                </button>

                                {expandedCard === 'blueprint' && (
                                    <BlueprintWizard
                                        onClose={() => setExpandedCard(null)}
                                        emailjsServiceId={EMAILJS_SERVICE_ID}
                                        emailjsTemplateId={EMAILJS_TEMPLATE_ID_BLUEPRINT}
                                        emailjsPublicKey={EMAILJS_PUBLIC_KEY}
                                    />
                                )}

                                {expandedCard === 'enquiry' && (
                                    <EnquiryWizard
                                        onClose={() => setExpandedCard(null)}
                                        emailjsServiceId={EMAILJS_SERVICE_ID}
                                        emailjsTemplateId={EMAILJS_TEMPLATE_ID_ENQUIRY}
                                        emailjsPublicKey={EMAILJS_PUBLIC_KEY}
                                    />
                                )}
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
};

const TransitionBar = ({ heightPct, scrollProgress, speed }: { heightPct: number, scrollProgress: any, speed: number }) => {
    const y = useTransform(scrollProgress, [0, speed], ["0%", "-100%"]);

    return (
        <motion.div
            className="flex-1 bg-white relative"
            style={{
                height: `${heightPct}%`,
                y,
            }}
        />
    );
};

export default StrategySection;

