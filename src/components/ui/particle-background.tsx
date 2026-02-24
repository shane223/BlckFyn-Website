import React, { useEffect, useRef, useCallback } from 'react';

// --- Types ---

interface Particle {
    x: number;
    y: number;
    originX: number;
    originY: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
    angle: number;
}

interface BackgroundParticle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    alpha: number;
    phase: number;
    color: string;
}

interface MouseState {
    x: number;
    y: number;
    isActive: boolean;
}

// --- Configuration ---

const PARTICLE_DENSITY = 0.00012;
const BG_PARTICLE_DENSITY = 0.00004;
const MOUSE_RADIUS = 160;
const RETURN_SPEED = 0.08;
const DAMPING = 0.90;
const REPULSION_STRENGTH = 1.2;

// Color palette: grey, blue, green
const COLORS = [
    '#9ca3af', // grey-400
    '#6b7280', // grey-500
    '#d1d5db', // grey-300
    '#3b82f6', // blue-500
    '#60a5fa', // blue-400
    '#93c5fd', // blue-300
    '#22c55e', // green-500
    '#4ade80', // green-400
    '#86efac', // green-300
];

const BG_COLORS = [
    '#d1d5db', // grey-300
    '#e5e7eb', // grey-200
    '#bfdbfe', // blue-200
    '#bbf7d0', // green-200
];

const randomRange = (min: number, max: number) => Math.random() * (max - min) + min;
const pickRandom = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

// --- Component ---

interface ParticleBackgroundProps {
    className?: string;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ className = '' }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const particlesRef = useRef<Particle[]>([]);
    const backgroundParticlesRef = useRef<BackgroundParticle[]>([]);
    const mouseRef = useRef<MouseState>({ x: -1000, y: -1000, isActive: false });
    const frameIdRef = useRef<number>(0);

    // Initialize Particles
    const initParticles = useCallback((width: number, height: number) => {
        const particleCount = Math.floor(width * height * PARTICLE_DENSITY);
        const newParticles: Particle[] = [];

        for (let i = 0; i < particleCount; i++) {
            const x = Math.random() * width;
            const y = Math.random() * height;

            newParticles.push({
                x, y,
                originX: x,
                originY: y,
                vx: 0,
                vy: 0,
                size: randomRange(1, 2.5),
                color: pickRandom(COLORS),
                angle: Math.random() * Math.PI * 2,
            });
        }
        particlesRef.current = newParticles;

        // Background ambient particles
        const bgCount = Math.floor(width * height * BG_PARTICLE_DENSITY);
        const newBgParticles: BackgroundParticle[] = [];

        for (let i = 0; i < bgCount; i++) {
            newBgParticles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.15,
                vy: (Math.random() - 0.5) * 0.15,
                size: randomRange(0.5, 1.5),
                alpha: randomRange(0.10, 0.33),
                phase: Math.random() * Math.PI * 2,
                color: pickRandom(BG_COLORS),
            });
        }
        backgroundParticlesRef.current = newBgParticles;
    }, []);

    // Animation Loop
    const animate = useCallback((time: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // --- Background Particles (Drifting) ---
        const bgParticles = backgroundParticlesRef.current;

        for (let i = 0; i < bgParticles.length; i++) {
            const p = bgParticles[i];
            p.x += p.vx;
            p.y += p.vy;

            // Wrap around
            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;

            // Twinkle
            const twinkle = Math.sin(time * 0.002 + p.phase) * 0.5 + 0.5;
            const currentAlpha = p.alpha * (0.3 + 0.7 * twinkle);

            ctx.globalAlpha = currentAlpha;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.globalAlpha = 1.0;

        // --- Main Foreground Physics ---
        const particles = particlesRef.current;
        const mouse = mouseRef.current;

        // Phase 1: Apply Forces (Mouse & Spring)
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];

            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Mouse Repulsion
            if (mouse.isActive && distance < MOUSE_RADIUS) {
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;
                const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS;

                const repulsion = force * REPULSION_STRENGTH;
                p.vx -= forceDirectionX * repulsion * 5;
                p.vy -= forceDirectionY * repulsion * 5;
            }

            // Spring Force (Return to Origin)
            const springDx = p.originX - p.x;
            const springDy = p.originY - p.y;

            p.vx += springDx * RETURN_SPEED;
            p.vy += springDy * RETURN_SPEED;
        }

        // Phase 2: Resolve Collisions (limited for performance)
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const p1 = particles[i];
                const p2 = particles[j];

                const dx = p2.x - p1.x;
                const dy = p2.y - p1.y;
                const distSq = dx * dx + dy * dy;
                const minDist = p1.size + p2.size;

                if (distSq < minDist * minDist) {
                    const dist = Math.sqrt(distSq);

                    if (dist > 0.01) {
                        const nx = dx / dist;
                        const ny = dy / dist;

                        // Push apart
                        const overlap = minDist - dist;
                        const pushX = nx * overlap * 0.5;
                        const pushY = ny * overlap * 0.5;

                        p1.x -= pushX;
                        p1.y -= pushY;
                        p2.x += pushX;
                        p2.y += pushY;

                        // Elastic collision
                        const dvx = p1.vx - p2.vx;
                        const dvy = p1.vy - p2.vy;
                        const velocityAlongNormal = dvx * nx + dvy * ny;

                        if (velocityAlongNormal > 0) {
                            const m1 = p1.size;
                            const m2 = p2.size;
                            const restitution = 0.85;
                            const impulseMagnitude = (-(1 + restitution) * velocityAlongNormal) / (1 / m1 + 1 / m2);

                            const impulseX = impulseMagnitude * nx;
                            const impulseY = impulseMagnitude * ny;

                            p1.vx += impulseX / m1;
                            p1.vy += impulseY / m1;
                            p2.vx -= impulseX / m2;
                            p2.vy -= impulseY / m2;
                        }
                    }
                }
            }
        }

        // Phase 3: Integration & Drawing
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];

            p.vx *= DAMPING;
            p.vy *= DAMPING;

            p.x += p.vx;
            p.y += p.vy;

            // Draw
            const velocity = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
            const opacity = Math.min(0.55 + velocity * 0.1, 1.0);

            ctx.globalAlpha = opacity;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.globalAlpha = 1.0;

        frameIdRef.current = requestAnimationFrame(animate);
    }, []);

    // Resize Handler
    useEffect(() => {
        const container = containerRef.current;
        const canvas = canvasRef.current;

        const handleResize = () => {
            if (container && canvas) {
                const { width, height } = container.getBoundingClientRect();
                const dpr = Math.min(window.devicePixelRatio || 1, 2);

                canvas.width = width * dpr;
                canvas.height = height * dpr;
                canvas.style.width = `${width}px`;
                canvas.style.height = `${height}px`;

                const ctx = canvas.getContext('2d');
                if (ctx) ctx.scale(dpr, dpr);

                initParticles(width, height);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [initParticles]);

    // Start Animation with IntersectionObserver
    useEffect(() => {
        const container = containerRef.current;
        const isVisible = { current: true };

        const loop = (time: number) => {
            if (isVisible.current) {
                animate(time);
            } else {
                frameIdRef.current = requestAnimationFrame(loop);
            }
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                const wasVisible = isVisible.current;
                isVisible.current = entry.isIntersecting;
                if (isVisible.current && !wasVisible) {
                    frameIdRef.current = requestAnimationFrame(loop);
                }
            },
            { threshold: 0 }
        );

        if (container) {
            observer.observe(container);
        }

        frameIdRef.current = requestAnimationFrame(loop);

        return () => {
            observer.disconnect();
            cancelAnimationFrame(frameIdRef.current);
        };
    }, [animate]);

    // Mouse tracking via window-level listener so dots respond even under FAQ content
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Only activate if mouse is within the container bounds
            const isInside = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;
            mouseRef.current = {
                x,
                y,
                isActive: isInside,
            };
        };

        const handleMouseLeave = () => {
            mouseRef.current.isActive = false;
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
        >
            <canvas ref={canvasRef} className="block w-full h-full" />
        </div>
    );
};

export default ParticleBackground;
