import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import ParticleBackground from '../components/ui/particle-background';

/* ─── Data: FAQ Items ─── */
const FAQ_DATA = [
    {
        question: "What exactly does \"Connecting the Dots\" mean for my company?",
        answer: "Most businesses have essential tools that function as \"islands\" that don't communicate. We bridge this gap by designing and deploying an AI Core that links these islands—such as your financial tools, CRM, and inventory—into one unified system. This deletes manual work, speeds up operations, and allows your existing team to handle 10x the volume."
    },
    {
        question: "I already have my current systems and applications. Do I need to start over?",
        answer: "No. We specialise in building production-grade AI systems—including voice agents and automations—that integrate directly into your existing stack. We turn your current fragmented infrastructure into a powerful growth engine without forcing you to rebuild from scratch."
    },
    {
        question: "How is a \"Bespoke\" system different from just buying a standard software subscription?",
        answer: "Standard subscriptions are generic tools that often create more \"disconnected dots\". A bespoke system is a custom-engineered AI Infrastructure built specifically for your unique workflow. It offers enterprise-grade strategy and integration that standard off-the-shelf software cannot match."
    },
    {
        question: "Is a bespoke AI system more expensive than an off-the-shelf one?",
        answer: "Initially, bespoke engineering is a more focused investment, but it is often more affordable than traditional software in the long run. Off-the-shelf tools often come with \"hidden\" costs—like the time your team wastes trying to force them to talk to each other. We build a unified foundation that eliminates those inefficiencies from day one."
    },
    {
        question: "What are these \"Agentic Applications\" and how do they benefit me?",
        answer: "These are intelligent systems designed to perform tasks autonomously. Examples include Voice Agents that handle inbound calls 24/7 like a human receptionist, or Content Automation systems that auto-generate social posts and summaries. They benefit you by handling high-volume tasks with zero human intervention."
    },
    {
        question: "Are there ongoing costs after the AI system is built?",
        answer: "Our process includes an \"Evolve\" phase. While your core infrastructure is built to last, we monitor and optimize your AI as your business grows. This ensures your system stays \"smart\" and continues to handle your increasing operational volume without requiring a total rebuild."
    },
    {
        question: "Is my business too small for these \"Enterprise\" features?",
        answer: "No business is too small for efficiency. We bring production-grade AI systems—once only available to corporations—directly to the SME market. This gives you a massive competitive advantage, allowing you to handle 10x the volume of competitors who are still stuck in the \"manual grind\"."
    },
    {
        question: "How much of my team's manual work can we actually eliminate?",
        answer: "Our focus is on measurable impact, with clients reclaiming an average of 30+ hours per week. By automating tailored backend workflows and data-syncing between your \"islands,\" we eliminate the repetitive \"manual grind\" that currently slows your trajectory."
    },
    {
        question: "Why is a \"Strategic Consultation\" necessary before we start?",
        answer: "This is our Discovery phase where we uncover opportunities and align goals to build the right AI roadmap. We audit your current landscape to ensure every piece of technology we deploy is a direct investment in your bottom line, rather than just another operational expense."
    },
    {
        question: "How long does it take from the first audit to a finished bridge?",
        answer: "While full-scale AI transformations can vary, we pride ourselves on speed. For example, some specialized content automation systems can be delivered and integrated in as little as two weeks, providing a huge operational impact in a short timeframe."
    },
    {
        question: "Do I need to be a technical expert to manage these new tools?",
        answer: "Not at all. Our goal is to translate technical complexity into operational simplicity. We handle the engineering of the AI Core and back-end workflows so that you and your team can focus on growth using tools that are intuitive and easy to manage."
    },
    {
        question: "Can this system grow as my business scales?",
        answer: "Absolutely. We specifically design your AI Infrastructure for future scale. Whether you double your customer base or enter a new market, your agentic systems are built to expand their capacity alongside your business trajectory."
    },
    {
        question: "How secure is my data once everything is connected?",
        answer: "Security is a pillar of our Engineering model. We build production-grade AI systems and RAG pipelines that integrate securely into your existing stack. By bridging your \"data islands\" professionally, we actually reduce the security risks associated with fragmented, manual data transfers."
    },
    {
        question: "Will using AI make my business feel impersonal to my customers?",
        answer: "Actually, it can make it feel more personal. Our AI agents are designed to be human-like, sounding and acting like real professionals. By handling routine queries instantly, they ensure your customers never have to wait for a response, while freeing up your human team for the high-touch interactions that truly matter."
    },
    {
        question: "How do I know if this investment is actually paying off?",
        answer: "We translate technical complexity into measurable outcomes. We track specific results such as Avg. ROI in the first year, hours saved per week, and your team's increased capacity to handle volume. If the system isn't driving your business trajectory forward, we evolve and optimize it until it does."
    }
];

/* ─── FAQ Accordion Item ─── */
const FAQItem = ({ item, index, isOpen, onToggle }: {
    item: typeof FAQ_DATA[0];
    index: number;
    isOpen: boolean;
    onToggle: () => void;
}) => {
    // Generate 01, 02, etc.
    const num = String(index + 1).padStart(2, '0');

    return (
        <li className="border-b border-b-neutral-200">
            <button
                className={`w-full cursor-pointer py-6 flex items-center justify-between text-left gap-2 transition-colors duration-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-neutral-300 ${isOpen ? 'text-neutral-900' : 'text-neutral-500 hover:text-neutral-900'}`}
                onClick={onToggle}
                aria-expanded={isOpen}
                aria-controls={`faq-content-${index}`}
            >
                <div className="flex gap-5 items-start">
                    <span className={`text-sm font-light w-6 sm:mt-[4px] flex-shrink-0 ${isOpen ? 'text-neutral-900' : 'text-neutral-400'}`}>{num}</span>
                    <h3 className="text-base md:text-lg font-semibold sm:font-medium leading-tight md:leading-snug">
                        {item.question}
                    </h3>
                </div>
                <span className={`text-2xl transform transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? 'rotate-45' : ''}`}>+</span>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        id={`faq-content-${index}`}
                        initial={{ height: 0, opacity: 0, marginBottom: 0 }}
                        animate={{ height: 'auto', opacity: 1, marginBottom: '1.5rem' }}
                        exit={{ height: 0, opacity: 0, marginBottom: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="overflow-hidden"
                    >
                        <div className="pl-[2.8rem] pr-4 text-neutral-700 text-sm sm:text-base leading-relaxed">
                            <p>{item.answer}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </li>
    );
};

/* ─── Main FAQs Section ─── */
const FAQsSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress: transitionScrollProgress } = useScroll({
        target: containerRef,
        offset: ["start 75%", "start 100px"]
    });

    return (
        <section id="faqs" ref={containerRef} className="relative z-20 bg-white pt-24 pb-32">
            {/* Particle Background */}
            <ParticleBackground className="z-0" />

            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": FAQ_DATA.map(item => ({
                            "@type": "Question",
                            "name": item.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": item.answer
                            }
                        }))
                    })
                }}
            />

            <div className="relative z-10 container mx-auto px-4 sm:px-8 max-w-4xl">
                {/* Header */}
                <div className="grid gap-6 lg:gap-8 text-center justify-items-center max-w-[60rem] mx-auto mb-20">
                    <h2 className="text-sm uppercase tracking-wider text-neutral-600">
                        Frequently Asked Questions
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-neutral-900 tracking-tight">
                        Honest Answers <span className="italic">for Business Owners</span>
                    </h3>
                    <p className="text-sm max-w-[72ch] text-gray-600">
                        You're busy running a company, not a tech department. These are the straightforward answers to the questions that matter most when you're looking to stop the "manual grind" and start scaling with <strong className="font-semibold text-neutral-700">AI Infrastructure</strong>.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-4xl mx-auto">
                    <ul className="grid gap-0">
                        {FAQ_DATA.map((item, index) => (
                            <FAQItem
                                key={index}
                                item={item}
                                index={index}
                                isOpen={openIndex === index}
                                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                            />
                        ))}
                    </ul>
                </div>

                {/* CTA */}
                <div className="mt-24 text-center">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                        Ready to find your disconnected dots?
                    </h3>
                    <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                        If you’re tired of managing chaos and ready to start leading growth, let’s have a professional discussion about your specific challenges.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://cal.com/dixieraizpacheco/15min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button-animated relative inline-flex items-center justify-center overflow-hidden rounded-full transition-colors duration-300 whitespace-nowrap px-8 py-3 font-medium text-sm lg:text-base"
                            aria-label="Request Your Strategic Blueprint"
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const y = e.clientY - rect.top;
                                e.currentTarget.style.setProperty('--x', `${x}px`);
                                e.currentTarget.style.setProperty('--y', `${y}px`);
                            }}
                            style={{
                                backgroundColor: '#2c2cf3',
                                color: '#ffffff',
                                ['--x' as any]: '0px',
                                ['--y' as any]: '0px'
                            } as React.CSSProperties}
                        >
                            <span className="relative z-10">Request Your Strategic Blueprint</span>
                        </a>
                        <a
                            href="mailto:contact@dixieraizpacheco.com"
                            className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors duration-300"
                        >
                            Ask a Question via Email
                        </a>
                    </div>
                </div>
            </div>

            {/* Transition Curtain Bars - #C9D3D7 bars from Testimonials section above */}
            <div className="absolute inset-x-0 top-0 h-[40vh] z-50 pointer-events-none flex items-start">
                {[140, 90, 160, 85, 130].map((h, i) => (
                    <TransitionBar
                        key={i}
                        heightPct={h}
                        scrollProgress={transitionScrollProgress}
                        speed={1}
                    />
                ))}
            </div>
        </section>
    );
};

const TransitionBar = ({ heightPct, scrollProgress, speed }: { heightPct: number, scrollProgress: any, speed: number }) => {
    const y = useTransform(scrollProgress, [0, speed], ["0%", "-100%"]);

    return (
        <motion.div
            className="flex-1 bg-[#C9D3D7] relative"
            style={{
                height: `${heightPct}%`,
                y,
            }}
        />
    );
};

export default FAQsSection;
