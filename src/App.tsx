import { Suspense, lazy } from 'react';
import Navbar from './sections/Navbar';
import HeroSection from './sections/HeroSection';
import Footer from './sections/Footer';

// Lazy load heavy 3D sections to improve initial load performance
const StrategySection = lazy(() => import('./sections/StrategySection'));
const ChartsSection = lazy(() => import('./sections/ChartsSection'));
const WhyItWorksSection = lazy(() => import('./sections/WhyItWorksSection'));
const HighlightSection = lazy(() => import('./sections/HighlightSection'));
const TestimonialsSection = lazy(() => import('./sections/TestimonialsSection'));

function App() {
  return (
    <div className="relative bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <Suspense fallback={<div className="h-screen w-full bg-[#0a0a0a]" />}>
          <ChartsSection />
          <WhyItWorksSection />
          <TestimonialsSection />
          <StrategySection />
          <HighlightSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;

