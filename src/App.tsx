import { useEffect, useRef } from 'react';
import Navbar from './sections/Navbar';
import HeroSection from './sections/HeroSection';
import WaveSection from './sections/WaveSection';
import OrbitSection from './sections/OrbitSection';
import LocationsSection from './sections/LocationsSection';
import ESGSection from './sections/ESGSection';
import Footer from './sections/Footer';

function App() {
  const scrollRef = useRef(0);
  const targetScrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      targetScrollRef.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll animation loop
  useEffect(() => {
    let animationId: number;

    const animate = () => {
      scrollRef.current += (targetScrollRef.current - scrollRef.current) * 0.1;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="relative bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <WaveSection />
        <OrbitSection />
        <LocationsSection />
        <ESGSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
