import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const ChartsSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-9%", "9%"]);

    return (
        <section ref={sectionRef} className="relative w-full min-h-screen bg-black text-white py-24 px-6 lg:px-16 overflow-hidden">
            {/* Parallax Background */}
            <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/charts-bg.png')",
                    y
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
                        We leverage cutting-edge methodologies and technologies, emphasizing creativity and innovation.
                        As a strategic partner, we embrace new challenges and deliver exceptional results in complex scenarios.
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
                        "We serve both major corporations and local businesses. Above all, we simply love what we do and value our partnership."
                    </blockquote>
                </motion.div>

                {/* Grid - 3 bars with 10% bottom padding */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 h-auto lg:h-[800px] pb-[10%]">

                    {/* Bar 1 */}
                    <ChartBar
                        delay={0.2}
                        height="30%"
                        value="+ 101%"
                        title="Every Project Starts With an Idea"
                        label="WE REALIZE EVERY IDEA — EVEN THE WILDEST ONES"
                    />

                    {/* Bar 2 */}
                    <ChartBar
                        delay={0.3}
                        height="76%"
                        value="+ 246%"
                        title="Client Satisfaction"
                        label="OUR PORTFOLIO SPANS COMPLETELY DIFFERENT INDUSTRIES"
                    />

                    {/* Bar 3 */}
                    <ChartBar
                        delay={0.4}
                        height="100%"
                        value="+ 312%"
                        title="Tech Meets Aesthetics"
                        label="WE SUPPORT PUBLIC COMPANIES AND LOCAL BUSINESSES ALIKE"
                    />

                </div>
            </div>
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
                // Font size relative to content box width
                const calculatedSize = contentWidth * 0.15;
                const clampedSize = Math.max(16, Math.min(48, calculatedSize));
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
            className="flex flex-col h-full justify-end group mt-16 lg:mt-0"
        >
            {/* Value Label */}
            <div className="text-sm font-bold text-gray-400 mb-4 transition-colors group-hover:text-white">
                {value}
            </div>

            {/* Bar Body */}
            <div
                className="relative w-full bg-[#111] overflow-hidden transition-all duration-700 ease-out group-hover:bg-[#1a1a1a]"
                style={{ height }}
            >
                {/* Background Image (Reveals/Zooms on Hover) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700">
                    <img
                        src="https://websitestyle.ai/wp-content/uploads/2025/08/tlo-wykresu.jpg"
                        alt="Background"
                        className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
                    />
                </div>

                {/* Content Container - 90% width for text sizing */}
                <div className="absolute inset-0 flex items-center justify-center p-4 z-10">
                    <div
                        ref={contentRef}
                        className="w-[90%] h-[90%] flex flex-col justify-between"
                    >
                        {/* Top Content */}
                        <div className="transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-500 ease-out">
                            <h3
                                className="font-bold uppercase leading-tight mb-4"
                                style={{ fontSize }}
                            >
                                {title}
                            </h3>

                            {/* CTA (Fades in on hover) */}
                            <div className="opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                <button className="text-xs lg:text-sm font-bold uppercase tracking-widest border-b border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-colors">
                                    Learn More
                                </button>
                            </div>
                        </div>

                        {/* Bottom Label */}
                        <div className="text-xs lg:text-sm text-gray-500 uppercase tracking-wide leading-relaxed lg:opacity-50 lg:group-hover:opacity-100 transition-opacity duration-500">
                            {label}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ChartsSection;
