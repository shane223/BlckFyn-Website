import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ChatControlProps {
    isActive: boolean;
    onActivate: () => void;
    onDeactivate: () => void;
}

const PLACEHOLDERS = [
    "Ask me something",
    "What is BlckFyn's strategy?",
    "How can AI agents help me?",
    "Tell me about your team",
    "What sectors do you invest in?",
    "How do you handle ESG?"
];

const ChatControl = ({ onActivate }: ChatControlProps) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % PLACEHOLDERS.length);
        }, 5000); // 5 seconds refresh
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="w-64 lg:w-96 cursor-pointer group"
            onClick={onActivate}
        >
            <div
                className="relative w-full flex items-center gap-2 bg-[#F3F4F6] hover:bg-[#EDEFF2] rounded-full px-4 py-2.5 transition-colors border border-transparent"
            >
                {/* Animated Placeholder Text */}
                <div className="flex-1 overflow-hidden h-6 relative flex items-center">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={index}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 flex items-center text-gray-500 text-sm lg:text-base font-medium truncate"
                        >
                            {PLACEHOLDERS[index]}
                        </motion.span>
                    </AnimatePresence>
                </div>

                {/* Icons (Static, acting as visual cues) */}
                <div className="flex items-center gap-1">
                    {/* Send Icon */}
                    <div className="p-1.5 rounded-full bg-transparent text-gray-400 -rotate-90 group-hover:text-gray-600 transition-colors">
                        <svg height="20" viewBox="0 0 24 24" width="20" fill="currentColor">
                            <path d="M5.694 12L2.299 3.272a.75.75 0 0 1 .942-.982l.093.039l18 9a.75.75 0 0 1 .097 1.284l-.097.058l-18 9c-.583.291-1.217-.245-1.065-.848l.03-.095zL2.299 3.272zM4.402 4.54l2.61 6.71h6.627a.75.75 0 0 1 .743.648l.007.102a.75.75 0 0 1-.649.743l-.101.007H7.01l-2.609 6.71L19.322 12z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatControl;
