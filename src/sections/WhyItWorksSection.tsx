import { useRef } from 'react';
import { motion } from 'framer-motion';


const WhyItWorksSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);

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
        <section ref={containerRef} className="relative w-full bg-white text-black z-30">
            <div className="flex flex-col lg:flex-row bg-white">

                {/* Left Column - Sticky Title */}
                <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen sticky top-0 flex items-center justify-center z-10 bg-white border-b lg:border-b-0 border-gray-200">
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

                {/* Right Column - Scrolling Content */}
                <div className="w-full lg:w-1/2 relative bg-[#0a0a0a] z-20">
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
        <div className="relative min-h-screen flex flex-col justify-end p-8 lg:p-16 border-l border-gray-900 overflow-hidden group">

            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                    poster={item.poster}
                >
                    <source src={item.videoMp4} type="video/mp4" />
                    <source src={item.videoWebm} type="video/webm" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-lg mb-12">
                <div className="text-sm font-mono text-purple-400 mb-4">0{index + 1}</div>
                <h3 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight uppercase relative inline-block">
                    {item.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
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

export default WhyItWorksSection;
