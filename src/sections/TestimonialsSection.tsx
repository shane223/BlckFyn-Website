import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/* ─── Wireframe SVG backgrounds (polygon-mesh style, per industry) ─── */
const wireframes: Record<string, React.ReactNode> = {
    wellness: (
        <svg viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="0.8" className="w-[440px] h-[440px] absolute -bottom-20 -right-20 text-neutral-500 opacity-[0.15] pointer-events-none select-none">
            {/* Heart / lotus wireframe */}
            <path d="M200 340 C200 340 60 240 60 160 C60 100 120 60 200 120 C280 60 340 100 340 160 C340 240 200 340 200 340Z" />
            <path d="M200 120 L160 180 L200 260 L240 180Z" />
            <path d="M60 160 L160 180" /><path d="M340 160 L240 180" />
            <path d="M200 340 L160 180" /><path d="M200 340 L240 180" />
            <path d="M120 120 L160 180 L100 200" /><path d="M280 120 L240 180 L300 200" />
            <circle cx="200" cy="120" r="3" /><circle cx="160" cy="180" r="3" /><circle cx="240" cy="180" r="3" />
            <circle cx="200" cy="260" r="3" /><circle cx="60" cy="160" r="3" /><circle cx="340" cy="160" r="3" />
            <path d="M130 100 L200 120 L270 100" /><path d="M100 200 L160 260 L200 340 L240 260 L300 200" />
            <path d="M160 260 L200 260 L240 260" />
        </svg>
    ),
    retail: (
        <svg viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="0.8" className="w-[440px] h-[440px] absolute -bottom-20 -right-20 text-neutral-500 opacity-[0.15] pointer-events-none select-none">
            {/* Shopping bag wireframe */}
            <path d="M100 140 L80 360 L320 360 L300 140Z" />
            <path d="M100 140 L120 140 L160 140 L200 140 L240 140 L280 140 L300 140" />
            <path d="M150 140 C150 140 150 80 200 80 C250 80 250 140 250 140" />
            <path d="M80 360 L200 340 L320 360" /><path d="M100 140 L200 160 L300 140" />
            <path d="M200 160 L200 340" /><path d="M120 200 L200 220 L280 200" />
            <path d="M90 280 L200 300 L310 280" /><path d="M120 200 L90 280" /><path d="M280 200 L310 280" />
            <circle cx="200" cy="80" r="3" /><circle cx="150" cy="140" r="3" /><circle cx="250" cy="140" r="3" />
            <circle cx="200" cy="160" r="3" /><circle cx="200" cy="220" r="3" /><circle cx="200" cy="300" r="3" />
            <circle cx="200" cy="340" r="3" />
            <path d="M140 180 L90 280" /><path d="M260 180 L310 280" />
        </svg>
    ),
    professional: (
        <svg viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="0.8" className="w-[440px] h-[440px] absolute -bottom-20 -right-20 text-neutral-500 opacity-[0.15] pointer-events-none select-none">
            {/* Briefcase wireframe */}
            <rect x="60" y="140" width="280" height="200" rx="8" />
            <path d="M150 140 L150 100 L250 100 L250 140" />
            <path d="M60 200 L340 200" /><path d="M60 260 L340 260" />
            <path d="M180 200 L180 260 L220 260 L220 200Z" />
            <path d="M60 200 L180 220 L220 220 L340 200" />
            <path d="M60 260 L180 240 L220 240 L340 260" />
            <path d="M120 140 L120 340" /><path d="M280 140 L280 340" />
            <circle cx="150" cy="100" r="3" /><circle cx="250" cy="100" r="3" />
            <circle cx="200" cy="200" r="3" /><circle cx="200" cy="260" r="3" />
            <path d="M150 100 L200 90 L250 100" /><path d="M60 170 L200 180 L340 170" />
            <path d="M60 300 L200 310 L340 300" />
        </svg>
    ),
    home: (
        <svg viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="0.8" className="w-[440px] h-[440px] absolute -bottom-20 -right-20 text-neutral-500 opacity-[0.15] pointer-events-none select-none">
            {/* House wireframe */}
            <path d="M200 60 L60 180 L60 360 L340 360 L340 180Z" />
            <path d="M160 360 L160 260 L240 260 L240 360" />
            <path d="M200 60 L200 180" /><path d="M60 180 L340 180" />
            <path d="M130 180 L130 360" /><path d="M270 180 L270 360" />
            <path d="M60 270 L340 270" />
            <path d="M80 220 L130 220 L130 270 L80 270Z" /><path d="M270 220 L320 220 L320 270 L270 270Z" />
            <circle cx="200" cy="60" r="3" /><circle cx="60" cy="180" r="3" /><circle cx="340" cy="180" r="3" />
            <circle cx="200" cy="180" r="3" /><circle cx="200" cy="260" r="3" />
            <path d="M200 60 L130 120 L60 180" /><path d="M200 60 L270 120 L340 180" />
            <path d="M130 120 L270 120" /><circle cx="130" cy="120" r="3" /><circle cx="270" cy="120" r="3" />
        </svg>
    ),
    auto: (
        <svg viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="0.8" className="w-[440px] h-[440px] absolute -bottom-20 -right-20 text-neutral-500 opacity-[0.15] pointer-events-none select-none">
            {/* Sports car wireframe */}
            <path d="M30 260 L50 240 L90 220 L130 180 L160 160 L200 150 L260 150 L300 160 L330 180 L360 220 L380 240 L380 260Z" />
            <path d="M130 180 L170 180 L200 150" /><path d="M300 160 L280 180 L260 180" />
            <path d="M170 180 L190 200 L230 200 L260 180" />
            <path d="M90 220 L130 220 L170 220 L230 220 L280 220 L330 220 L360 220" />
            <path d="M50 240 L90 240 L160 240 L250 240 L330 240 L380 240" />
            <path d="M30 260 L380 260" />
            <path d="M130 180 L100 220" /><path d="M330 180 L350 220" />
            <path d="M190 200 L180 220" /><path d="M230 200 L240 220" />
            <path d="M160 240 L160 260" /><path d="M250 240 L250 260" />
            <circle cx="110" cy="265" r="28" /><circle cx="110" cy="265" r="16" /><circle cx="110" cy="265" r="6" />
            <circle cx="310" cy="265" r="28" /><circle cx="310" cy="265" r="16" /><circle cx="310" cy="265" r="6" />
            <path d="M138 265 L282 265" />
            <path d="M200 150 L210 130 L250 125 L290 130 L300 160" />
            <circle cx="200" cy="150" r="3" /><circle cx="260" cy="150" r="3" /><circle cx="300" cy="160" r="3" />
            <circle cx="130" cy="180" r="3" /><circle cx="330" cy="180" r="3" />
            <circle cx="90" cy="220" r="3" /><circle cx="360" cy="220" r="3" />
            <path d="M210 130 L230 140 L250 125" /><circle cx="250" cy="125" r="3" />
            <path d="M50 250 L82 265" /><path d="M380 250 L338 265" />
        </svg>
    ),
};

const INDUSTRIES = [
    {
        id: "wellness",
        number: "01",
        title: "Wellness & Personal Care",
        subtitle: "Frictionless Booking & Lifelong Loyalty",
        metrics: [
            { value: "50%", label: "Less No-Shows" },
            { value: "20%", label: "More Repeats" },
            { value: "3x", label: "Appt Velocity" },
        ],
        systems: "AI Booking Agents, Integrated CRMs, Auto-Reminders",
        insight: "Wellness businesses bridge the distance between personal care and operational efficiency by deploying human-like AI Voice Agents that handle inbound calls 24/7, eliminating manual booking friction and no-show risks.",
        gradient: "from-orange-400 to-amber-500",
        accentColor: "#f97316", // orange-500
    },
    {
        id: "retail",
        number: "02",
        title: "Food, Retail & Leisure",
        subtitle: "Unified Operations & Profit Center Growth",
        metrics: [
            { value: "40%", label: "Online Rev" },
            { value: "22%", label: "AOV Growth" },
            { value: "5x", label: "Sales Conv" },
        ],
        systems: "Dining/Retail Mgmt, Custom Backend Automations, Inventory Apps",
        insight: "Retail and dining sectors transform the 'manual grind' into a seamless experience by bridging the gap between front-of-house service and Custom AI Automations that manage back-of-house inventory and customer loyalty data in real-time.",
        gradient: "from-green-400 to-teal-500",
        accentColor: "#0d9488", // teal-600
    },
    {
        id: "professional",
        number: "03",
        title: "Professional & Education",
        subtitle: "Automated Intelligence & Knowledge Scaling",
        metrics: [
            { value: "35%", label: "Time Saved" },
            { value: "5x", label: "Faster Onboard" },
            { value: "42%", label: "Doc Speed" },
        ],
        systems: "Content Automation, Secure Portals, Custom CRMs",
        insight: "Professional and educational firms achieve higher performance gains by implementing Content Automation systems that scrape data and auto-generate reports, articles, and summaries, replacing weeks of manual paperwork with instant digital blueprints.",
        gradient: "from-blue-400 to-indigo-500",
        accentColor: "#3b82f6", // blue-500
    },
    {
        id: "home",
        number: "04",
        title: "Home & Trade Services",
        subtitle: "Precision Scaling & Automated Job-Flow",
        metrics: [
            { value: "35%", label: "Faster Pay" },
            { value: "20%", label: "More Jobs" },
            { value: "100%", label: "Accuracy" },
        ],
        systems: "Field Service Mgmt, Intelligent Booking Bots, Job Tracking",
        insight: "Construction and trade businesses reach future scale by replacing paper-based bottlenecks with Intelligent Chat Agents on WhatsApp and web that qualify leads and book jobs automatically from quote to completion.",
        gradient: "from-pink-400 to-rose-600",
        accentColor: "#db2777", // pink-600
    },
    {
        id: "auto",
        number: "05",
        title: "Automotive & Technical",
        subtitle: "Auto Repair, Dealers, Computer/Electronics",
        metrics: [
            { value: "30%", label: "Efficiency" },
            { value: "15%", label: "Less Waste" },
            { value: "3x", label: "Visibility" },
        ],
        systems: "Workshop Mgmt, Inventory Apps, Customer Reminders",
        insight: "Automotive and technical shops connect their expertise to operational precision, ensuring their 'dot' is the first one customers find for reliable, fast-turnaround repairs.",
        gradient: "from-yellow-300 to-yellow-500",
        accentColor: "#eab308", // yellow-500
    },
];

const IndustryCard = ({ data }: { data: typeof INDUSTRIES[0] }) => (
    <div className="testimonial-card relative overflow-hidden rounded-3xl backdrop-blur-3xl bg-white/50 border border-white/60 shadow-sm p-6 lg:p-8 flex flex-col group hover:bg-white/60 transition-colors duration-300">

        {/* Wireframe Background Illustration */}
        {wireframes[data.id]}

        {/* Header: Icon & Title */}
        <div className="flex items-center gap-x-4 mb-6 relative z-10">
            <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-full border-[1px] border-white p-1 bg-white/30">
                {data.gradient ? (
                    <div
                        className={`h-full w-full bg-gradient-to-br ${data.gradient}`}
                        style={{
                            maskImage: 'url(/glob.svg)',
                            WebkitMaskImage: 'url(/glob.svg)',
                            maskSize: 'contain',
                            WebkitMaskSize: 'contain',
                            maskRepeat: 'no-repeat',
                            WebkitMaskRepeat: 'no-repeat',
                            maskPosition: 'center',
                            WebkitMaskPosition: 'center'
                        }}
                    />
                ) : (
                    <img
                        loading="lazy"
                        className="h-full w-full object-cover"
                        alt="Industry Icon"
                        src="/glob.svg"
                    />
                )}
            </div>
            <div className="flex flex-col gap-y-0.5 min-w-0">
                <span className="tracking-tight text-xl md:text-2xl truncate font-bold text-neutral-800">
                    {data.title}
                </span>
                <span className="text-xs font-medium leading-tight text-neutral-500 text-pretty line-clamp-2">
                    {data.subtitle}
                </span>
            </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 bg-neutral-800/[0.04] rounded-2xl p-4 mb-6 relative z-10">
            {data.metrics.map((m, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-1">
                    <span
                        className="text-3xl md:text-4xl font-extrabold tracking-tight leading-none"
                        style={{ color: data.accentColor }}
                    >
                        {m.value}
                    </span>
                    <span className="text-[10px] md:text-xs font-semibold text-neutral-500 uppercase tracking-wider leading-tight">
                        {m.label}
                    </span>
                </div>
            ))}
        </div>

        {/* Insight */}
        <div className="mb-6 relative z-10">
            <span className="text-[10px] font-bold uppercase text-neutral-400 tracking-widest block mb-2">Industry Insight</span>
            <p className="text-sm md:text-[15px] italic text-neutral-600 leading-relaxed">
                "{data.insight}"
            </p>
        </div>

        {/* Systems (Footer) */}
        <div className="mt-auto pt-4 border-t border-neutral-200/60 relative z-10">
            <span className="text-[10px] font-bold uppercase text-neutral-400 tracking-widest block mb-1.5">Systems</span>
            <p className="text-sm font-semibold text-neutral-700 leading-snug">
                {data.systems}
            </p>
        </div>
    </div>
);

const TestimonialsSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // 1. Scroll progress for Transition Bars (Finishes when header is reached)
    const { scrollYProgress: transitionScrollProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "start 100px"]
    });

    // 2. Scroll progress for Parallax Cards (Continues throughout the section's visibility)
    const { scrollYProgress: parallaxScrollProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Increased range for more noticeable continuous movement
    const yColumn1 = useTransform(parallaxScrollProgress, [0, 1], [0, 300]);
    const yColumn2 = useTransform(parallaxScrollProgress, [0, 1], [0, -300]);

    return (
        <section id="testimonials" className="relative bg-[#C9D3D7] z-30 overflow-clip">
            <div ref={containerRef} className="container mx-auto px-4 xs:px-8 pt-40 pb-0 grid gap-24 relative z-10">
                <div className="w-[min(64rem,100%)] flex flex-col gap-6 relative z-20">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight uppercase leading-[0.9]">
                        How Your Sector Wins
                    </h2>
                    <p className="text-xl md:text-2xl font-light text-neutral-600 leading-relaxed max-w-3xl">
                        We delete your manual grind so you can handle <strong className="font-semibold text-neutral-800">10x the volume</strong>. Once your <strong className="font-semibold text-neutral-800">AI Core</strong> is deployed, your technical friction becomes your greatest competitive asset.
                    </p>
                </div>

                <div className="grid xl:grid-cols-12 gap-10">
                    <div className="grid md:grid-cols-2 gap-10 xl:col-span-10 xl:col-start-2 items-start">

                        {/* Column 1 - Moving Up (Parallax) */}
                        <motion.div style={{ y: yColumn1 }} className="flex flex-col gap-10">
                            {/* 01: Wellness */}
                            <IndustryCard data={INDUSTRIES[0]} />
                            {/* 03: Professional */}
                            <IndustryCard data={INDUSTRIES[2]} />
                        </motion.div>

                        {/* Column 2 - Moving Down (Parallax) */}
                        <motion.div style={{ y: yColumn2 }} className="flex flex-col gap-10 pt-20">
                            {/* 02: Retail */}
                            <IndustryCard data={INDUSTRIES[1]} />
                            {/* 04: Home/Trade */}
                            <IndustryCard data={INDUSTRIES[3]} />
                            {/* 05: Auto */}
                            <IndustryCard data={INDUSTRIES[4]} />
                        </motion.div>

                    </div>
                </div>
            </div>

            {/* Blurry Background Decoration */}
            <div className="absolute overflow-x-clip inset-0 z-[1] pointer-events-none">
                <div
                    className="absolute rounded-full mix-blend-multiply -z-10 soft-circle"
                    style={{
                        backgroundColor: 'rgb(136, 136, 136)',
                        width: '600px',
                        height: '600px',
                        left: '60%',
                        top: '60%',
                        filter: 'blur(200px)',
                        opacity: 0.8
                    }}
                />
                <div
                    className="absolute rounded-full mix-blend-multiply -z-10 soft-circle"
                    style={{
                        backgroundColor: 'rgb(244, 83, 228)',
                        width: '200px',
                        height: '200px',
                        left: '50%',
                        top: '43%',
                        filter: 'blur(100px)',
                        opacity: 0.8
                    }}
                />
                <div
                    className="absolute rounded-full mix-blend-multiply -z-10 soft-circle"
                    style={{
                        backgroundColor: 'rgb(15, 118, 211)',
                        width: '400px',
                        height: '400px',
                        left: '70%',
                        top: '30%',
                        filter: 'blur(200px)',
                        opacity: 0.8
                    }}
                />
                <div
                    className="absolute rounded-full mix-blend-multiply -z-10 soft-circle"
                    style={{
                        backgroundColor: 'rgb(255, 255, 255)',
                        width: '200px',
                        height: '200px',
                        left: '50%',
                        top: '40%',
                        filter: 'blur(200px)',
                        opacity: 0.4
                    }}
                />
            </div>

            {/* Bottom Fade - Ensures clean transition to next section */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#C9D3D7] to-transparent z-20 pointer-events-none" />

            {/* Transition Curtain Bars - positioned at top of section */}
            <div className="absolute top-0 left-0 right-0 h-screen z-40 pointer-events-none flex items-start">
                {[140, 90, 160, 85, 130].map((h, i) => (
                    <TransitionBar
                        key={i}
                        heightPct={h}
                        scrollProgress={transitionScrollProgress}
                        speed={0.92 + (i * 0.015)}
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
            className="flex-1 bg-white relative"
            style={{
                height: `${heightPct}%`,
                y,
            }}
        />
    );
};

export default TestimonialsSection;
