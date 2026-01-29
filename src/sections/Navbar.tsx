import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Strategy', href: '#strategy' },
    { label: 'Innovation', href: '#innovation' },
    { label: 'Presence', href: '#presence' },
    { label: 'ESG', href: '#esg' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-black/5 py-4'
          : 'bg-transparent py-6'
        }`}
    >
      <div className="w-full px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <span className="w-10 h-10 relative">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-current transition-transform group-hover:rotate-12">
              <path d="M50 10 L90 50 L50 90 L50 70 L70 50 L50 30 Z" />
              <path d="M50 30 L30 50 L50 70 L50 30 Z" />
            </svg>
          </span>
          <span className="text-2xl font-extrabold tracking-wider uppercase">
            BLCFYN
          </span>
        </a>

        {/* Navigation Links */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative text-sm font-semibold uppercase tracking-widest text-gray-600 hover:text-black transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
