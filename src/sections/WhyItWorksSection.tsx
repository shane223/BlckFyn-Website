import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';


const WhyItWorksSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "start start"]
    });

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

            {/* White overlay to cover any gap from ChartsSection */}
            <div className="absolute inset-x-0 top-0 h-2 bg-white z-60"></div>

            {/* Transition Curtain Bars - positioned at top of section */}
            <div className="absolute inset-x-0 top-0 h-[30vh] z-50 pointer-events-none flex items-start">
                {[160, 90, 160, 85, 150].map((h, i) => (
                    <TransitionBar
                        key={i}
                        heightPct={h}
                        scrollProgress={scrollYProgress}
                        speed={i === 1 ? 0.7 : i === 3 ? 0.55 : 0.3 + (i * 0.05)}
                    />
                ))}
            </div>

            <div className="flex flex-col lg:flex-row bg-white gap-0">

                {/* Left Column - Sticky Title */}
                <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen sticky top-0 flex items-start pt-24 lg:pt-32 z-10 bg-white">
                    <div className="text-center lg:text-left px-6 lg:px-16 overflow-hidden">
                        <motion.h2
                            className="heading-xl font-bold tracking-tighter leading-none flex flex-col items-start"
                            variants={containerVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <span className="flex overflow-hidden">
                                {['W', 'H', 'Y'].map((char, i) => (
                                    <motion.span key={i} variants={letterVariant} className="text-gray-800 inline-block">{char}</motion.span>
                                ))}
                            </span>
                            <span className="flex overflow-hidden">
                                {['I', 'T'].map((char, i) => (
                                    <motion.span key={i} variants={letterVariant} className="text-gray-800 inline-block">{char}</motion.span>
                                ))}
                            </span>
                            <span className="flex overflow-hidden">
                                {['W', 'O', 'R', 'K', 'S'].map((char, i) => (
                                    <motion.span key={i} variants={letterVariant} className="text-black inline-block">{char}</motion.span>
                                ))}
                            </span>
                        </motion.h2>
                    </div>
                </div>

                {/* Right Column - Scrollable Content */}
                <div className="w-full lg:w-1/2 relative bg-white z-20 pr-6 lg:pr-16">
                    {contentItems.map((item, index) => (
                        <ContentBlock key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
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
            <div className="px-6 lg:px-12">
                {/* Number Badge */}
                <div className="text-sm font-mono text-purple-400 mb-4">0{index + 1}</div>

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
        title: "Bring Your Brand To Life",
        description: "A character gives your brand a personality—something people can relate to emotionally. This makes your brand feel more approachable and engaging. Instead of interacting with a logo, users engage with a 'character' that feels alive.",
        videoMp4: "https://cdn.prod.website-files.com/63f9f100025c058594957cca%2F6871acefa162f4b7055b7e9c_Humanize-min20-transcode.mp4",
        videoWebm: "https://cdn.prod.website-files.com/63f9f100025c058594957cca%2F6871acefa162f4b7055b7e9c_Humanize-min20-transcode.webm",
        poster: "https://cdn.prod.website-files.com/63f9f100025c058594957cca%2F6871acefa162f4b7055b7e9c_Humanize-min20-poster-00001.jpg"
    },
    {
        title: "Boost Recall & Recognition",
        description: "People are wired to remember faces and stories more than static symbols. A mascot acts like a visual anchor, reinforcing memory through consistent presence and personality.",
        videoMp4: "https://cdn.prod.website-files.com/63f9f100025c058594957cca%2F6871ad06931dd8bd17abb0d8_BoostRecall-min20-transcode.mp4",
        videoWebm: "https://cdn.prod.website-files.com/63f9f100025c058594957cca%2F6871ad06931dd8bd17abb0d8_BoostRecall-min20-transcode.webm",
        poster: "https://cdn.prod.website-files.com/63f9f100025c058594957cca%2F6871ad06931dd8bd17abb0d8_BoostRecall-min20-poster-00001.jpg"
    },
    {
        title: "Say More With Less",
        description: "A mascot can make abstract product qualities like speed, ease of use, or scalability tangible and visual. It's much easier to show that your product is 'fast' by portraying your character zipping through space.",
        videoMp4: "https://cdn.prod.website-files.com/63f9f100025c058594957cca%2F6871ae5392343b26587fb871_SayMore-min20-transcode.mp4",
        videoWebm: "https://cdn.prod.website-files.com/63f9f100025c058594957cca%2F6871ae5392343b26587fb871_SayMore-min20-transcode.webm",
        poster: "https://cdn.prod.website-files.com/63f9f100025c058594957cca%2F6871ae5392343b26587fb871_SayMore-min20-poster-00001.jpg"
    },
    {
        title: "Unlimited Possibilities",
        description: "Mascots are incredibly flexible tools for storytelling. They can appear in different contexts, adapt to various campaigns, and express a range of emotions or scenarios without needing to rewrite your brand language.",
        videoMp4: "https://cdn.prod.website-files.com/63f9f100025c058594957cca%2F6871ad28156c4722bf866c69_Unlimited-min20-transcode.mp4",
        videoWebm: "https://cdn.prod.website-files.com/63f9f100025c058594957cca%2F6871ad28156c4722bf866c69_Unlimited-min20-transcode.webm",
        poster: "https://cdn.prod.website-files.com/63f9f100025c058594957cca%2F6871ad28156c4722bf866c69_Unlimited-min20-poster-00001.jpg"
    }
];

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

export default WhyItWorksSection;
