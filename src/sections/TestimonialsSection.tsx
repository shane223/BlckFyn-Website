import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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
            <div ref={containerRef} className="container mx-auto px-4 xs:px-8 py-40 grid gap-24 relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold w-[min(44rem,100%)]">
                    What Clients Say About <span className="italic">Working</span> With Me
                </h2>

                <div className="grid xl:grid-cols-12 gap-10">
                    <div className="grid md:grid-cols-2 gap-10 xl:col-span-10 xl:col-start-2 items-start">

                        {/* Column 1 - Moving Up (Parallax) */}
                        <motion.div style={{ y: yColumn1 }} className="flex flex-col gap-10">
                            {/* Testimonial 1 - Paul Dillinger */}
                            <div className="testimonial-card relative grid gap-y-6 overflow-hidden rounded-3xl backdrop-blur-3xl bg-white/50 border border-white/60 shadow-sm p-6 lg:p-10 min-h-[400px] flex flex-col justify-between">
                                <blockquote className="md:w-[min(20ch,100%)] flex-grow font-normal text-xl md:text-2xl">
                                    “Im happy to have such quality designer to work with.”
                                </blockquote>
                                <div className="flex w-fit flex-1 items-center gap-x-4 font-bold mt-auto">
                                    <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-full border-[1px] border-white">
                                        <img
                                            loading="lazy"
                                            className="h-full w-full object-cover"
                                            alt="Paul Dillinger - SuccessAmp LLC - CEO"
                                            src="https://dixieraizpacheco.com/_app/immutable/assets/paul-dillinger.D7hXXk4e.jpg"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-y-0 text-base">
                                        <span className="tracking-base">Paul Dillinger</span>
                                        <span className="flex text-pretty font-medium leading-base text-neutral-500">SuccessAmp LLC - CEO</span>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial 3 - Empress Of Cheer */}
                            <div className="testimonial-card relative grid gap-y-6 overflow-hidden rounded-3xl backdrop-blur-3xl bg-white/50 border border-white/60 shadow-sm p-6 lg:p-10 min-h-[400px] flex flex-col justify-between">
                                <blockquote className="md:w-[min(20ch,100%)] flex-grow font-normal text-xl md:text-2xl">
                                    “Thank you so much for being patient with me as we figured out the design that was hiding deep inside my heart.”
                                </blockquote>
                                <div className="flex w-fit flex-1 items-center gap-x-4 font-bold mt-auto">
                                    <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-full border-[1px] border-white">
                                        <img
                                            loading="lazy"
                                            className="h-full w-full object-cover"
                                            alt="Empress Of Cheer - Palace Grounds Co - Founder"
                                            src="https://dixieraizpacheco.com/_app/immutable/assets/empress-of-cheer.Bwf-UADt.jpg"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-y-0 text-base">
                                        <span className="tracking-base">Empress Of Cheer</span>
                                        <span className="flex text-pretty font-medium leading-base text-neutral-500">Palace Grounds Co - Founder</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Column 2 - Moving Down (Parallax) */}
                        <motion.div style={{ y: yColumn2 }} className="flex flex-col gap-10 pt-20">
                            {/* Testimonial 2 - Tim Hill */}
                            <div className="testimonial-card relative grid gap-y-6 overflow-hidden rounded-3xl backdrop-blur-3xl bg-white/50 border border-white/60 shadow-sm p-6 lg:p-10 min-h-[400px] flex flex-col justify-between">
                                <blockquote className="md:w-[min(20ch,100%)] flex-grow font-normal text-xl md:text-2xl">
                                    “An exceptional designer with meticulous attention to detail. His works speak for themselves.”
                                </blockquote>
                                <div className="flex w-fit flex-1 items-center gap-x-4 font-bold mt-auto">
                                    <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-full border-[1px] border-white">
                                        <img
                                            loading="lazy"
                                            className="h-full w-full object-cover"
                                            alt="Tim Hill - Social Status - Co-founder"
                                            src="https://dixieraizpacheco.com/_app/immutable/assets/tim-hill.Bbs9rMxE.jpeg"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-y-0 text-base">
                                        <span className="tracking-base">Tim Hill</span>
                                        <span className="flex text-pretty font-medium leading-base text-neutral-500">Social Status - Co-founder</span>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial 4 - Nathan Oldfield */}
                            <div className="testimonial-card relative grid gap-y-6 overflow-hidden rounded-3xl backdrop-blur-3xl bg-white/50 border border-white/60 shadow-sm p-6 lg:p-10 min-h-[400px] flex flex-col justify-between">
                                <blockquote className="md:w-[min(20ch,100%)] flex-grow font-normal text-xl md:text-2xl">
                                    “Love Dixie’s designs! They’re ridiculously good, especially at such a price. He’s a hidden gem for sure. His talent far exceeds the cost.”
                                </blockquote>
                                <div className="flex w-fit flex-1 items-center gap-x-4 font-bold mt-auto">
                                    <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-full border-[1px] border-white">
                                        <img
                                            loading="lazy"
                                            className="h-full w-full object-cover"
                                            alt="Nathan Oldfield - Cybercomp Services - Solution Architect"
                                            src="https://dixieraizpacheco.com/_app/immutable/assets/nathan-oldfield.CeL2GQeq.jfif"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-y-0 text-base">
                                        <span className="tracking-base">Nathan Oldfield</span>
                                        <span className="flex text-pretty font-medium leading-base text-neutral-500">Cybercomp Services - Solution Architect</span>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial 5 - Sarah Jenkins */}
                            <div className="testimonial-card relative grid gap-y-6 overflow-hidden rounded-3xl backdrop-blur-3xl bg-white/50 border border-white/60 shadow-sm p-6 lg:p-10 min-h-[400px] flex flex-col justify-between">
                                <blockquote className="md:w-[min(20ch,100%)] flex-grow font-normal text-xl md:text-2xl">
                                    “The strategic insights provided were invaluable. We’ve seen a 40% increase in efficiency since implementing the recommended systems.”
                                </blockquote>
                                <div className="flex w-fit flex-1 items-center gap-x-4 font-bold mt-auto">
                                    <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-full border-[1px] border-white">
                                        <img
                                            loading="lazy"
                                            className="h-full w-full object-cover"
                                            alt="Sarah Jenkins - TechFlow Solutions - CTO"
                                            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-y-0 text-base">
                                        <span className="tracking-base">Sarah Jenkins</span>
                                        <span className="flex text-pretty font-medium leading-base text-neutral-500">TechFlow Solutions - CTO</span>
                                    </div>
                                </div>
                            </div>
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
