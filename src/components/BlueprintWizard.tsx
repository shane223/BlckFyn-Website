import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

// ─── Types ───────────────────────────────────────────────────────────────────
interface FormData {
    user_name: string;
    user_email: string;
    industry: string;
    industry_description: string;
    fragmented_landscape: string;
    manual_friction: string;
    scaling_ambition: string;
}

const STEPS = 5;


// ─── Step transition variants ────────────────────────────────────────────────
const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

// ─── Component ───────────────────────────────────────────────────────────────
interface BlueprintWizardProps {
    onClose: () => void;
    emailjsServiceId: string;
    emailjsTemplateId: string;
    emailjsPublicKey: string;
}

export const BlueprintWizard = ({
    onClose,
    emailjsServiceId,
    emailjsTemplateId,
    emailjsPublicKey,
}: BlueprintWizardProps) => {
    const [step, setStep] = useState(1);
    const [dir, setDir] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const [form, setForm] = useState<FormData>({
        user_name: '',
        user_email: '',
        industry: '',
        industry_description: '',
        fragmented_landscape: '',
        manual_friction: '',
        scaling_ambition: '',
    });

    const formRef = useRef<HTMLFormElement>(null);

    const goNext = () => {
        setDir(1);
        setStep((s) => Math.min(s + 1, STEPS));
    };

    const goBack = () => {
        setDir(-1);
        setStep((s) => Math.max(s - 1, 1));
    };

    const set = (field: keyof FormData, value: string) =>
        setForm((f) => ({ ...f, [field]: value }));

    const canContinue = () => {
        if (step === 1) return form.user_name.trim() !== '' && /\S+@\S+\.\S+/.test(form.user_email);
        if (step === 2) return form.industry.trim() !== '' && form.industry_description.trim() !== '';
        if (step === 3) return form.fragmented_landscape.trim() !== '';
        if (step === 4) return form.manual_friction.trim() !== '';
        if (step === 5) return form.scaling_ambition.trim() !== '';
        return true;
    };

    const handleSubmit = async () => {
        if (!canContinue()) return;
        setIsSubmitting(true);
        try {
            if (emailjsServiceId === 'service_placeholder') {
                await new Promise((r) => setTimeout(r, 1500));
            } else {
                await emailjs.send(
                    emailjsServiceId,
                    emailjsTemplateId,
                    {
                        user_name: form.user_name,
                        user_email: form.user_email,
                        industry: form.industry,
                        industry_description: form.industry_description,
                        fragmented_landscape: form.fragmented_landscape,
                        manual_friction: form.manual_friction,
                        scaling_ambition: form.scaling_ambition,
                    },
                    emailjsPublicKey
                );
            }
            setSubmitStatus('success');
            setTimeout(() => {
                onClose();
                setSubmitStatus('idle');
            }, 2500);
        } catch (err) {
            console.error(err);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    // ─── Step content definitions ───────────────────────────────────────────
    const stepContent = () => {
        switch (step) {
            case 1:
                return (
                    <div className="flex flex-col gap-6">
                        <StepHeader
                            title="Let's start with you"
                            subtitle="We'll use this to send your bespoke blueprint."
                        />
                        <div className="flex flex-col gap-5">
                            <Field label="Full Name">
                                <input
                                    autoFocus
                                    type="text"
                                    value={form.user_name}
                                    onChange={(e) => set('user_name', e.target.value)}
                                    placeholder="John Doe"
                                    className="wizard-input"
                                />
                            </Field>
                            <Field label="Business Email">
                                <input
                                    type="email"
                                    value={form.user_email}
                                    onChange={(e) => set('user_email', e.target.value)}
                                    placeholder="john@company.com"
                                    className="wizard-input"
                                />
                            </Field>
                        </div>
                    </div>
                );

            case 2:
                return (
                    <div className="flex flex-col gap-6">
                        <StepHeader
                            title="What's your industry?"
                            subtitle="Describe the core focus of your business."
                        />
                        <div className="flex flex-col gap-5">
                            <Field label="Industry">
                                <input
                                    autoFocus
                                    type="text"
                                    value={form.industry}
                                    onChange={(e) => set('industry', e.target.value)}
                                    placeholder="e.g. Healthcare, Finance, Retail..."
                                    className="wizard-input"
                                />
                            </Field>
                            <Field label="Description">
                                <textarea
                                    rows={3}
                                    value={form.industry_description}
                                    onChange={(e) => set('industry_description', e.target.value)}
                                    placeholder="Briefly describe what your company does..."
                                    className="wizard-input resize-none"
                                />
                            </Field>
                        </div>
                    </div>
                );

            case 3:
                return (
                    <div className="flex flex-col gap-6">
                        <StepHeader
                            title="The Fragmented Landscape"
                            subtitle="Which systems are currently &quot;islands&quot; that don't talk to each other? (e.g., CRM, Finance, Inventory)"
                        />
                        <textarea
                            autoFocus
                            rows={5}
                            value={form.fragmented_landscape}
                            onChange={(e) => set('fragmented_landscape', e.target.value)}
                            placeholder="Our CRM and accounting software require manual syncing every day..."
                            className="wizard-input resize-none"
                        />
                    </div>
                );

            case 4:
                return (
                    <div className="flex flex-col gap-6">
                        <StepHeader
                            title="The Manual Friction"
                            subtitle="What repetitive tasks currently consume your team's time every week?"
                        />
                        <textarea
                            autoFocus
                            rows={5}
                            value={form.manual_friction}
                            onChange={(e) => set('manual_friction', e.target.value)}
                            placeholder="Data entry from emails into our database, weekly report compilation..."
                            className="wizard-input resize-none"
                        />
                    </div>
                );

            case 5:
                return (
                    <div className="flex flex-col gap-6">
                        <StepHeader
                            title="Your Scaling Ambition"
                            subtitle="If we deleted your manual work today, what is your primary goal for the next 12 months?"
                        />
                        <textarea
                            autoFocus
                            rows={5}
                            value={form.scaling_ambition}
                            onChange={(e) => set('scaling_ambition', e.target.value)}
                            placeholder="Achieve 10x capacity without expanding headcount..."
                            className="wizard-input resize-none"
                        />
                    </div>
                );

            default:
                return null;
        }
    };

    // ─── Success / Error screens ────────────────────────────────────────────
    if (submitStatus === 'success') {
        return (
            <div className="flex flex-col items-center justify-center h-full gap-6 text-center px-4">
                <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Blueprint Request Received</h2>
                <p className="text-gray-500 text-lg">We'll be in touch within 24 hours with your personalised roadmap.</p>
            </div>
        );
    }

    if (submitStatus === 'error') {
        return (
            <div className="flex flex-col items-center justify-center h-full gap-6 text-center px-4">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Something went wrong</h2>
                <p className="text-gray-500 text-lg">Please try again or email us directly.</p>
                <button onClick={() => setSubmitStatus('idle')} className="mt-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-black transition-colors">
                    Try Again
                </button>
            </div>
        );
    }

    // ─── Main wizard UI ─────────────────────────────────────────────────────
    return (
        <div className="h-full flex flex-col">
            {/* ── Top bar ── */}
            <div className="flex items-center gap-4 mb-8">
                {step === 1 ? (
                    <span className="flex items-center gap-1.5 text-sm font-medium text-gray-400 shrink-0 select-none cursor-not-allowed">
                        Start
                    </span>
                ) : (
                    <button
                        onClick={goBack}
                        className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors shrink-0"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                        Back
                    </button>
                )}

                {/* Progress bar */}
                <div className="flex-1 h-0.5 bg-gray-300 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-green-500 rounded-full"
                        animate={{ width: `${(step / STEPS) * 100}%` }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                    />
                </div>

                <span className="text-sm font-medium text-gray-400 shrink-0">
                    <span className="text-gray-500">{step}</span> / {STEPS}
                </span>
            </div>

            {/* ── Step content (animated) ── */}
            <div className="flex-1 overflow-hidden relative">
                <AnimatePresence mode="wait" custom={dir}>
                    <motion.div
                        key={step}
                        custom={dir}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="absolute inset-0 overflow-y-auto pb-4"
                    >
                        <form ref={formRef} onSubmit={(e) => e.preventDefault()}>
                            {stepContent()}
                        </form>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* ── Bottom CTA ── */}
            <div className="pt-6">
                <button
                    type="button"
                    disabled={!canContinue() || isSubmitting}
                    onClick={step < STEPS ? goNext : handleSubmit}
                    className="w-full py-4 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2
                               bg-gray-900 text-white hover:bg-black
                               disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <>
                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Sending...
                        </>
                    ) : step < STEPS ? (
                        'Continue'
                    ) : (
                        'Request My Blueprint'
                    )}
                </button>
            </div>
        </div>
    );
};

// ─── Small helpers ────────────────────────────────────────────────────────────
const StepHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="mb-2">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-snug mb-2">{title}</h2>
        <p className="text-gray-500 text-base leading-relaxed">{subtitle}</p>
    </div>
);

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
    <div className="flex flex-col gap-1.5">
        <label className="text-xs uppercase tracking-widest font-semibold text-gray-500">{label}</label>
        {children}
    </div>
);

export default BlueprintWizard;
