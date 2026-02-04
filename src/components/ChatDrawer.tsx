import { useEffect, useRef } from 'react';

interface ChatDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const ChatDrawer = ({ isOpen, onClose }: ChatDrawerProps) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    // Handle escape key to close
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (isOpen && event.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    // Auto-focus iframe when opened
    useEffect(() => {
        if (isOpen && iframeRef.current) {
            // Small timeout to allow transition/render to complete or start
            setTimeout(() => {
                iframeRef.current?.contentWindow?.focus();
            }, 100);
        }
    }, [isOpen]);

    return (
        <div
            className={`
        fixed inset-y-0 right-0 z-[60] w-full md:w-[40%] bg-white shadow-2xl transform transition-transform duration-300 ease-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}
        >
            <div className="h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <h2 className="text-xl font-bold text-gray-900">AI Assistant</h2>
                    <button
                        onClick={onClose}
                        className="p-2 -mr-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label="Close panel"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Content / Chatbot Placeholder */}
                {/* Content / Chatbot Widget */}
                <div className="flex-1 overflow-hidden bg-white">
                    <iframe
                        ref={iframeRef}
                        src="http://localhost:3000/widget/yROCqK7SWqH8Vz68Fwrf-A"
                        className="w-full h-full border-none"
                        title="AI Chatbot Widget"
                    />
                </div>
            </div>
        </div>
    );
};

export default ChatDrawer;
