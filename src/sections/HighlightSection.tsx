import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HighlightSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const yForeground = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
    const scaleForeground = useTransform(scrollYProgress, [0, 1], [1.05, 1.0]); // Subtle zoom out effect
    const scaleBackground = useTransform(scrollYProgress, [0, 1], [1.1, 1.0]);

    return (
        <section ref={sectionRef} className="relative w-full h-[80vh] lg:h-screen overflow-hidden bg-black flex items-center justify-center">

            {/* Background - Space Station */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y: yBackground, scale: scaleBackground }}
            >
                <img
                    src="https://cdn.prod.website-files.com/68c9c3107effc2ea46e1a81f/68c9c3107effc2ea46e1ae3b_03-BG-min.jpg"
                    alt="Space Station Background"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-black/30 z-10" />

            {/* Content Text */}
            <div className="relative z-20 text-center px-4 mix-blend-overlay">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-6xl lg:text-[10vw] font-black text-white leading-none tracking-tighter uppercase"
                >
                    Free<br />
                    Wall<br />
                    Papers
                </motion.h2>
            </div>

            {/* Foreground - Astronaut (Parallax) */}
            <motion.div
                className="absolute inset-x-0 bottom-0 z-30 flex justify-center pointer-events-none"
                style={{ y: yForeground, scale: scaleForeground }}
            >
                <img
                    src="https://cdn.prod.website-files.com/68c9c3107effc2ea46e1a81f/68c9c3107effc2ea46e1ae3c_03-Full-FG-min.png"
                    alt="Astronaut"
                    className="w-auto h-[120vh] object-cover max-w-none"
                />
            </motion.div>

            {/* Transition Curtain Bars */}
            <div className="absolute inset-0 z-40 pointer-events-none flex items-start">
                {[140, 90, 160, 85, 130].map((h, i) => (
                    <TransitionBar
                        key={i}
                        heightPct={h}
                        scrollProgress={scrollYProgress}
                        speed={0.3 + (i * 0.05)} // Vary speed for each bar (0.3, 0.35, 0.4...)
                    />
                ))}
            </div>

        </section>
    );
};

const TransitionBar = ({ heightPct, scrollProgress, speed }: { heightPct: number, scrollProgress: any, speed: number }) => {
    // Vary the end range based on speed. Faster bars finish transition earlier (smaller end range value) or later.
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

export default HighlightSection;
