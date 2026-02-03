import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ChartsSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

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

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 h-auto lg:h-[800px]">

                    {/* Column 1: Quote */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-between h-full"
                    >
                        <blockquote className="text-xl lg:text-2xl leading-relaxed text-gray-400 mb-12">
                            "We serve both major corporations and local businesses. Above all, we simply love what we do and value our partnership."
                        </blockquote>

                        <div className="flex items-center gap-4">
                            <div className="w-16 h-20 overflow-hidden bg-gray-800">
                                <img
                                    src="https://websitestyle.ai/wp-content/uploads/2025/09/dawid-szmigiel-website-style-ceo.jpg"
                                    alt="Founder"
                                    className="w-full h-full object-cover grayscale opacity-80"
                                />
                            </div>
                            <div>
                                <div className="text-sm font-bold tracking-widest uppercase text-white">David Miller</div>
                                <div className="text-xs font-medium tracking-widest uppercase text-gray-500 mt-1">Founder</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bars */}
                    <ChartBar
                        delay={0.2}
                        height="30%"
                        value="+ 101%"
                        title="Every Project Starts With an Idea"
                        label="WE REALIZE EVERY IDEA — EVEN THE WILDEST ONES"
                    />

                    <ChartBar
                        delay={0.3}
                        height="76%"
                        value="+ 246%"
                        title="Client Satisfaction"
                        label="OUR PORTFOLIO SPANS COMPLETELY DIFFERENT INDUSTRIES"
                    />

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

const ChartBar = ({ delay, height, value, title, label }: { delay: number, height: string, value: string, title: string, label: string }) => {
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
                style={{ height }} // Height should be applied inline primarily, or we can use generic classes if we map them
            >
                {/* Background Image (Reveals/Zooms on Hover) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700">
                    <img
                        src="https://websitestyle.ai/wp-content/uploads/2025/08/tlo-wykresu.jpg"
                        alt="Background"
                        className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
                    />
                </div>

                {/* Content Container */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">

                    {/* Top Content */}
                    <div className="transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <h3 className="text-3xl lg:text-4xl font-bold uppercase leading-tight mb-8">
                            {title}
                        </h3>

                        {/* CTA (Fades in on hover) */}
                        <div className="opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            <button className="text-sm font-bold uppercase tracking-widest border-b border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-colors">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Bottom Label */}
                    <div className="text-sm text-gray-500 uppercase tracking-wide leading-relaxed max-w-[80%] lg:opacity-50 lg:group-hover:opacity-100 transition-opacity duration-500">
                        {label}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ChartsSection;
