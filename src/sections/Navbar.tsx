import { useState } from 'react';
import ChatControl from '../components/ChatControl';
import ChatDrawer from '../components/ChatDrawer';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      {/* Backdrop Overlay - Visible when Drawer is open */}
      <div
        className={`
          fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300
          ${isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        onClick={() => setIsDrawerOpen(false)}
      />

      {/* Sliding Chat Drawer */}
      <ChatDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />

      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-black/5 py-4 lg:py-6"
      >
        <div className="w-full px-6 lg:px-12 flex justify-between items-center gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <span className="w-10 h-10 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-current transition-transform group-hover:rotate-12">
                <path d="M50 10 L90 50 L50 90 L50 70 L70 50 L50 30 Z" />
                <path d="M50 30 L30 50 L50 70 L50 30 Z" />
              </svg>
            </span>
            <span className="text-2xl font-extrabold tracking-wider uppercase hidden sm:block">
              BLCFYN
            </span>
          </a>

          {/* Chat Search Control - Triggers Drawer */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <ChatControl
              isActive={isDrawerOpen}
              onActivate={() => setIsDrawerOpen(true)}
              onDeactivate={() => { }} // No auto-close from control needed
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
