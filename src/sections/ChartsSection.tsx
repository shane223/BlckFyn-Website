import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const ChartsSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
    const scaleBackground = useTransform(scrollYProgress, [0, 1], [1.2, 1.1]);

    const yForeground = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
    const scaleForeground = useTransform(scrollYProgress, [0, 1], [1.05, 1.0]);

    return (
        <section ref={sectionRef} className="relative w-full min-h-screen bg-black text-white py-24 px-6 lg:px-16 overflow-hidden">
            {/* Parallax Background */}
            <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/charts-bg.png')",
                    y: yBackground,
                    scale: scaleBackground
                }}
            />
            <div className="relative z-10 max-w-[1920px] mx-auto px-6 lg:px-16">

                {/* Intro Text */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mb-24"
                >
                    <p className="text-2xl lg:text-3xl font-light leading-relaxed text-gray-300">
                        We translate technical complexity into operational simplicity by engineering measurable outcomes rather than just implementing tools.
                        We transform daily friction into a powerful growth engine that redefines your business trajectory.
                    </p>
                </motion.div>

                {/* Quote Block */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mb-16"
                >
                    <blockquote className="text-xl lg:text-2xl leading-relaxed text-gray-400">
                        "Whether you are refining an existing setup or building for future scale, we partner with you to turn your fragmented digital infrastructure into your business's greatest competitive asset."
                    </blockquote>
                </motion.div>

                {/* Grid - 4 bars, 4 columns even on mobile - Wrapped in parallax motion */}
                <motion.div
                    style={{ y: yForeground, scale: scaleForeground }}
                    className="grid grid-cols-4 gap-2 lg:gap-8 h-auto lg:h-[800px] pb-[5%]"
                >

                    {/* Bar 1 */}
                    <ChartBar
                        delay={1}
                        height="45%"
                        value="+ 45%"
                        title="COST OPTIMIZATION"
                        label="Precision scaling with zero operational waste"
                    />

                    {/* Bar 2 */}
                    <ChartBar
                        delay={2}
                        height="62%"
                        value="+ 68%"
                        title="REVENUE INCREASE"
                        label="Turning every connected dot into a profit centre"
                    />

                    {/* Bar 3 */}
                    <ChartBar
                        delay={3}
                        height="75%"
                        value="+ 85%"
                        title="CLIENT SATISFACTION"
                        label="Frictionless experiences that drive lifelong loyalty"
                    />

                    {/* Bar 4 - Tallest */}
                    <ChartBar
                        delay={4}
                        height="100%"
                        value="+ 125%"
                        title="OPERATIONAL VELOCITY"
                        label="Stop managing chaos and start leading growth"
                    />

                </motion.div>
            </div>
            {/* Bottom Fade - Ensures clean transition to next section */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
        </section>
    );
};

const ChartBar = ({
    delay,
    height,
    value,
    title,
    label
}: {
    delay: number;
    height: string;
    value: string;
    title: string;
    label: string;
}) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [fontSize, setFontSize] = useState('2rem');

    useEffect(() => {
        const updateFontSize = () => {
            if (contentRef.current) {
                const contentWidth = contentRef.current.offsetWidth;
                // Font size relative to content box width - smaller for mobile
                const calculatedSize = contentWidth * 0.12;
                const clampedSize = Math.max(10, Math.min(40, calculatedSize)); // Slightly smaller min for mobile
                setFontSize(`${clampedSize}px`);
            }
        };

        updateFontSize();
        window.addEventListener('resize', updateFontSize);
        return () => window.removeEventListener('resize', updateFontSize);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex flex-col h-full justify-end group mt-8 lg:mt-0"
        >
            {/* Value Label */}
            <div className="text-xs lg:text-sm font-bold mb-2 lg:mb-4 transition-colors text-white lg:text-gray-400 lg:group-hover:text-white">
                {value}
            </div>

            {/* Bar Body */}
            <div
                className="relative w-full overflow-hidden transition-all duration-700 ease-out bg-[#1a1a1a] lg:bg-[#111] lg:group-hover:bg-[#1a1a1a]"
                style={{ height }}
            >
                {/* Background Image - Visible on mobile, hover on desktop */}
                <div className="absolute inset-0 transition-opacity duration-700 opacity-40 lg:opacity-0 lg:group-hover:opacity-40">
                    <img
                        src="/bar-bg.jpg"
                        alt="Background"
                        className="w-full h-full object-cover transition-transform duration-1000 ease-out scale-100 lg:scale-110 lg:group-hover:scale-100"
                    />
                </div>

                {/* Content Container - 90% width for text sizing */}
                <div className="absolute inset-0 flex items-center justify-center p-2 lg:p-4 z-10">
                    <div
                        ref={contentRef}
                        className="w-[90%] h-[90%] flex flex-col justify-between"
                    >
                        {/* Top Content */}
                        <div className="transform transition-transform duration-500 ease-out translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0">
                            <h3
                                className="font-bold uppercase leading-tight mb-2 lg:mb-4"
                                style={{ fontSize }}
                            >
                                {title}
                            </h3>

                            {/* CTA - Visible on mobile, hover on desktop */}
                            <div className="transition-opacity duration-500 delay-100 opacity-100 lg:opacity-0 lg:group-hover:opacity-100">
                                <button className="text-[8px] lg:text-sm font-bold uppercase tracking-widest border-b border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-colors">
                                    Learn More
                                </button>
                            </div>
                        </div>

                        {/* Bottom Label */}
                        <div className="text-[8px] lg:text-sm text-gray-500 uppercase tracking-wide leading-relaxed transition-opacity duration-500 opacity-100 lg:opacity-50 lg:group-hover:opacity-100">
                            {label}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ChartsSection;
