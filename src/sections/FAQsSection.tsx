import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import ParticleBackground from '../components/ui/particle-background';

/* ─── Data: FAQ Items ─── */
const FAQ_DATA = [
    {
        question: "What exactly does \"Connecting the Dots\" mean for my company?",
        answer: "Most businesses have essential tools, but they often function as \"islands\" that don't communicate. We bridge the gap by creating a Bespoke IT Strategy that links your current systems—such as your financial tools, customer databases, and operational apps—into one unified engine. This eliminates the manual grind of moving data by hand and allows your business to function with operational excellence."
    },
    {
        question: "I already have my current systems and applications such as my financial software and CRM. Do I need to start over?",
        answer: "Not at all. Our goal is to build a bridge, not a barrier. We perform a Strategic Consultation to audit what you are currently using. We then build the custom connections needed so your existing applications finally work together, ensuring your previous technology purchases become a direct investment in your future growth."
    },
    {
        question: "How is a \"Bespoke\" system different from just buying a standard software subscription?",
        answer: "Standard software is built for the mass market, which often means it won't fit your unique workflow perfectly. A bespoke system is tailored specifically to your needs. We provide Enterprise-grade features—the high-level power usually reserved for large corporations—but scaled and designed specifically for a growing SME."
    },
    {
        question: "Is a bespoke system more expensive than an off-the-shelf one?",
        answer: "While the initial setup is a specialized investment, it is far more accessible than a massive corporate enterprise system. Because it is built specifically for you, you avoid paying for unnecessary features and the hidden costs of trying to \"force\" a generic tool to work for your unique business."
    },
    {
        question: "What are these \"Agentic Applications\" and how do they benefit me?",
        answer: "In the AI Age, we can build custom \"agents\" that act as intelligent digital team members. They don't just store data; they act on it—handling tasks like triaging leads or managing inventory forecasts. These are smarter and more effective than traditional software, providing you with specialized value creation."
    },
    {
        question: "Are there ongoing costs after the system is built?",
        answer: "Yes. While you own the system, some of our Agentic Applications require ongoing AI processing power to remain effective. Just like a utility, there is a monthly usage fee to cover the AI processing of your data, ensuring your automation remains sharp and responsive 24/7."
    },
    {
        question: "Is my business too small for these \"Enterprise\" features?",
        answer: "If you are struggling with manual data entry, repetitive tasks, or disconnected information, you are the perfect size. Our mission is to make high-end, strategic technology and innovation excellence accessible to SMEs so they can compete at a higher level without needing a corporate-sized budget."
    },
    {
        question: "How much of my team's manual work can we actually eliminate?",
        answer: "By \"Connecting the Dots,\" we target the repetitive bottlenecks that slow your team down. While we focus on seamless automation, our goal is to handle the heavy lifting so your staff can focus on high-value tasks that actually drive growth and client satisfaction."
    },
    {
        question: "Why is a \"Strategic Consultation\" necessary before we start?",
        answer: "We believe in having a clear Blueprint before any work begins. This initial audit allows us to see exactly where your operations are disconnected. It provides the IT and AI roadmap that ensures every cent you spend is tied to a specific goal for your bottom line."
    },
    {
        question: "How long does it take from the first audit to a finished bridge?",
        answer: "We move with a focus on operational velocity. While every bespoke project is different, most initial bridges and integrations are operational within 4 to 8 weeks, allowing you to see the professional difference in your daily workflow as quickly as possible."
    },
    {
        question: "Do I need to be a technical expert to manage these new tools?",
        answer: "Absolutely not. You are an expert in running your business, and our goal is to keep it that way. We handle the hands-on operational complexities behind the scenes so you don't have to. Your daily interface is designed for operational simplicity—clean, professional, and intuitive—allowing you to focus on leading your growth while the advanced technology works for you under the hood."
    },
    {
        question: "Can this system grow as my business scales?",
        answer: "Yes. One of the biggest problems with standard software is that you eventually outgrow it. Our bespoke builds are modular. We can add new \"dots\" and build more \"bridges\" as your revenue increases and your operational needs evolve."
    },
    {
        question: "How secure is my data once everything is connected?",
        answer: "Security is a core pillar of our Bespoke IT Strategy. When we connect your systems, we ensure that data is handled with the same high-level security protocols used by enterprise systems, protecting your business, your data, and your customers."
    },
    {
        question: "Will this make my business feel impersonal to my customers?",
        answer: "It’s actually the opposite. By automating the \"manual grind,\" you and your staff have more time to provide a personal, high-touch service. The technology handles the data so the humans can handle the relationships, leading to higher client satisfaction."
    },
    {
        question: "How do I know if this investment is actually paying off?",
        answer: "We focus on Value Creation. During our consultation, we identify the specific bottlenecks that are costing you time and money. When those gaps are closed and your team becomes more efficient, the return on your investment is measured through cost optimization and increased output."
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
                        You’re busy running a company, not a tech department. Here are the straight answers to the questions that matter most when you’re looking to stop the "manual grind" and start scaling.
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
