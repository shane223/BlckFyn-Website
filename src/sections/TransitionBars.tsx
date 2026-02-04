import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TransitionBars = ({ bgColor = "bg-white" }: { bgColor?: string }) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    return (
        <section ref={sectionRef} className="relative w-full h-[30vh] overflow-hidden">
            {/* Transition Curtain Bars */}
            <div className="absolute inset-0 z-40 pointer-events-none flex items-start">
                {[140, 90, 160, 85, 130].map((h, i) => (
                    <TransitionBar
                        key={i}
                        heightPct={h}
                        scrollProgress={scrollYProgress}
                        speed={0.3 + (i * 0.05)}
                        bgColor={bgColor}
                    />
                ))}
            </div>
        </section>
    );
};

const TransitionBar = ({ heightPct, scrollProgress, speed, bgColor }: { heightPct: number, scrollProgress: any, speed: number, bgColor: string }) => {
    const y = useTransform(scrollProgress, [0, speed], ["0%", "-100%"]);

    return (
        <motion.div
            className={`flex-1 ${bgColor} relative`}
            style={{
                height: `${heightPct}%`,
                y,
            }}
        />
    );
};

export default TransitionBars;
