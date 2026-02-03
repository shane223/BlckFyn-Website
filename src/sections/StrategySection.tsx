import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import * as THREE from 'three';

const StrategySection = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    const scrollProgress = useRef(0);
    const targetScrollProgress = useRef(0);

    useEffect(() => {
        if (!canvasRef.current || !containerRef.current) return;

        const canvas = canvasRef.current;
        const container = containerRef.current;

        // Scene setup
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0a0a0a); // Dark background

        const camera = new THREE.PerspectiveCamera(
            55,
            container.clientWidth / container.clientHeight,
            0.1,
            1000
        );
        camera.position.set(0, 0, 18);

        const renderer = new THREE.WebGLRenderer({
            canvas,
            antialias: true,
            alpha: true,
        });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

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

            renderer.render(scene, camera);
        };

        // Intersection Observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
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

        animate();

        return () => {
            observer.disconnect();
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
            renderer.dispose();
        };
    }, []);

    return (
        <section ref={containerRef} className="relative w-full min-h-screen bg-[#0a0a0a] overflow-hidden">

            {/* Transition Curtain Bars - positioned at top of section */}
            <div className="absolute inset-0 z-40 pointer-events-none flex items-start">
                {[140, 90, 160, 85, 130].map((h, i) => (
                    <TransitionBar
                        key={i}
                        heightPct={h}
                        scrollProgress={scrollYProgress}
                        speed={0.3 + (i * 0.05)}
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
            <div className="relative z-10 min-h-screen flex items-center px-6 lg:px-16 py-24">
                <div className="w-full max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">

                        {/* Left Content - From index_bc.html */}
                        <div className="section-content text-white">
                            <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tight mb-8">Our Strategy</h2>
                            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                                We combine deep sector expertise with hands-on operational capabilities to transform financial
                                services businesses across Europe.
                            </p>
                            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                                Focusing on asset-light models and technology-enabled growth in both established and emerging
                                markets.
                            </p>
                        </div>

                        {/* Right Content - Cards from index_bc.html */}
                        <div className="strategy-cards flex flex-col gap-6">
                            <div className="strategy-card bg-white p-10 border-2 border-white relative overflow-hidden group transition-all duration-300 hover:bg-[#0a0a0a] hover:border-white">
                                <h3 className="text-2xl text-black font-bold mb-4 group-hover:text-white transition-colors">Buyout Strategy</h3>
                                <p className="text-gray-600 group-hover:text-gray-300 transition-colors">
                                    Investing in high-quality financial services companies with proven cash flows and scalable
                                    operations.
                                </p>
                            </div>
                            <div className="strategy-card bg-white p-10 border-2 border-white relative overflow-hidden group transition-all duration-300 hover:bg-[#0a0a0a] hover:border-white">
                                <h3 className="text-2xl text-black font-bold mb-4 group-hover:text-white transition-colors">Growth Strategy</h3>
                                <p className="text-gray-600 group-hover:text-gray-300 transition-colors">
                                    Backing innovative FinTech companies reshaping the future of financial services and digital
                                    transformation.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
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
