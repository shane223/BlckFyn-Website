import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import * as THREE from 'three';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollY = useRef(0);
  const targetScrollY = useRef(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]); // Parallax effect

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null; // Transparent background to show CSS image

    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 10); // Changed to 10 to match index_bc

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true, // Re-enabled per user request
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(1); // Deep Optimization: Cap at 1x resolution

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // === GLOBE - Wireframe Sphere ===
    const globeRadius = 3.5; // Match index_bc

    // Main wireframe sphere
    const globeGeo = new THREE.IcosahedronGeometry(globeRadius, 2);
    const globeMat = new THREE.MeshBasicMaterial({
      color: 0x333333, // Lighter than 0x111111
      wireframe: true,
      transparent: true,
      opacity: 0.4, // Slightly reduced opacity
    });
    const globe = new THREE.Mesh(globeGeo, globeMat);
    mainGroup.add(globe);

    // Dots at vertices
    const positions = globeGeo.attributes.position.array;
    const dotGeo = new THREE.BufferGeometry();
    dotGeo.setAttribute('position', new THREE.BufferAttribute(positions.slice(), 3));

    // Add colors to dots
    const dotColors: number[] = [];
    const color = new THREE.Color();
    const posAttribute = globeGeo.attributes.position;

    for (let i = 0; i < posAttribute.count; i++) {
      // Use position to determine color (visualize as a spectrum)
      const y = posAttribute.getY(i);

      // "Gradient and random" - Mix position-based hue with randomness
      // Base hue from Y position for gradient + random offset
      let hue = (y / globeRadius + 1) / 2;
      hue += (Math.random() - 0.5) * 0.2; // Add randomness to the gradient

      color.setHSL(hue % 1, 1.0, 0.45); // Darker tone (lower lightness)
      dotColors.push(color.r, color.g, color.b);
    }

    dotGeo.setAttribute('color', new THREE.Float32BufferAttribute(dotColors, 3));

    const dotMat = new THREE.PointsMaterial({
      size: 0.14,
      transparent: true,
      opacity: 0.9,
      vertexColors: true, // Enable vertex colors
    });
    const dots = new THREE.Points(dotGeo, dotMat);
    mainGroup.add(dots);

    // === FLOATING NETWORK ===
    const networkGroup = new THREE.Group();
    mainGroup.add(networkGroup);

    // Network points
    const networkCount = 100; // Match index_bc
    const networkPos: number[] = [];
    const networkColors: number[] = [];

    for (let i = 0; i < networkCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 7 + Math.random() * 5;
      const height = (Math.random() - 0.5) * 8;

      networkPos.push(
        Math.cos(angle) * radius,
        height,
        Math.sin(angle) * radius
      );

      // Rainbow color for network dots based on angle/height
      const hue = (angle / (Math.PI * 2) + (height / 8)) % 1;
      color.setHSL(hue, 0.9, 0.45); // Darker tone (lower lightness)
      networkColors.push(color.r, color.g, color.b);
    }

    const networkGeo = new THREE.BufferGeometry();
    networkGeo.setAttribute('position', new THREE.Float32BufferAttribute(networkPos, 3));
    networkGeo.setAttribute('color', new THREE.Float32BufferAttribute(networkColors, 3));

    const networkDotMat = new THREE.PointsMaterial({
      size: 0.08,
      transparent: true,
      opacity: 0.74,
      vertexColors: true,
    });
    const networkDots = new THREE.Points(networkGeo, networkDotMat);
    networkGroup.add(networkDots);

    // Connection lines
    const lineGeo = new THREE.BufferGeometry();
    const linePositions: number[] = [];
    // Reverting to single color for lines, no vertex colors needed

    for (let i = 0; i < networkCount; i++) {
      for (let j = i + 1; j < networkCount; j++) {
        const dx = networkPos[i * 3] - networkPos[j * 3];
        const dy = networkPos[i * 3 + 1] - networkPos[j * 3 + 1];
        const dz = networkPos[i * 3 + 2] - networkPos[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < 5.5 && Math.random() < 0.105) { // Match index_bc
          linePositions.push(
            networkPos[i * 3],
            networkPos[i * 3 + 1],
            networkPos[i * 3 + 2],
            networkPos[j * 3],
            networkPos[j * 3 + 1],
            networkPos[j * 3 + 2]
          );
        }
      }
    }

    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));

    const lineMat = new THREE.LineBasicMaterial({
      color: 0x0a0a0a, // Dark line color
      transparent: true,
      opacity: 0.15, // Subtle opacity
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    networkGroup.add(lines);

    // === INITIAL POSITION ===
    // Match index_bc exactly
    mainGroup.position.set(5.75, 0, -2);
    mainGroup.rotation.y = -Math.PI / 4;
    mainGroup.scale.setScalar(1.54);

    // Animation
    const clock = new THREE.Clock();

    let animationId: number;
    const isIntersecting = { current: true }; // Ref to track visibility without re-triggering effect

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // PAUSE RENDER LOOP IF NOT VISIBLE
      if (!isIntersecting.current) return;

      const time = clock.getElapsedTime();

      // Smooth scroll
      scrollY.current += (targetScrollY.current - scrollY.current) * 0.1;

      // Globe rotation
      globe.rotation.y = time * 0.1;
      dots.rotation.y = time * 0.1;

      // Network animation
      networkGroup.rotation.y = time * 0.05;
      networkDotMat.opacity = 0.74 + Math.sin(time * 2) * 0.1;
      lineMat.opacity = 0.19 + Math.sin(time * 1.5) * 0.03;

      // Parallax scroll effect (matching index_bc logic)
      const scrollFactor = scrollY.current / 800; // Removed clamping to allow continuous movement

      // Move down to left sideway logic
      // Initial position: x=5.75, y=0
      // Target movement: Left (x decrease), Down (y decrease)
      mainGroup.position.x = 5.75 - scrollFactor * 4.0; // Move left significantly
      mainGroup.position.y = -scrollFactor * 2.5; // Move down

      // Original Z parallax
      mainGroup.position.z = -2 + scrollFactor * 0.5;

      // Rotation
      mainGroup.rotation.y = -Math.PI / 4 - scrollFactor * 0.5;

      // Scale
      const scale = Math.max(1.54 - scrollFactor * 0.3, 0.5);
      mainGroup.scale.setScalar(scale);

      renderer.render(scene, camera);
    };

    // Scroll handler
    const handleScroll = () => {
      targetScrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Resize handler
    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Performance: Intersection Observer to pause animation
    const observer = new IntersectionObserver(([entry]) => {
      isIntersecting.current = entry.isIntersecting;
    }, { threshold: 0 });
    observer.observe(container);

    animate();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);

      // Strict Cleanup
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Points || object instanceof THREE.Line || object instanceof THREE.LineSegments) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach(m => m.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      renderer.dispose();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: 'url(/hero-bg.png)',
          y: backgroundY
        }}
      />

      {/* Three.js Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none" // Add pointer-events-none to let clicks pass through if needed, though usually canvas handles interactions
        style={{ zIndex: 1 }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center px-6 lg:px-16">
        <div className="max-w-4xl">
          <h1 className="heading-xl text-black mb-6 uppercase">
            We Bridge The
            <br />Gap &amp; Connect
            <br /> The Dots.
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 font-light leading-relaxed max-w-2xl">
            Closing the distance between your current operations and your future scale through Bespoke IT Strategy, Applied AI, and Seamless Automation
          </p>
          <ul className="flex flex-col gap-3 text-sm lg:text-base font-semibold text-gray-800 tracking-wide">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-black rounded-full" />
              <span>STRATEGIC <span className="text-gray-500 font-normal">(IT & AI Consultation)</span></span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-black rounded-full" />
              <span>INTELLIGENT <span className="text-gray-500 font-normal">(Agentic App Development)</span></span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-black rounded-full" />
              <span>CONNECTED <span className="text-gray-500 font-normal">(Digital Automation)</span></span>
            </li>
          </ul>

          {/* Consultation Button */}
          <div className="mt-8">
            <a
              href="https://cal.com/dixieraizpacheco/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="button-animated relative inline-flex items-center justify-center overflow-hidden rounded-full transition-colors duration-300 whitespace-nowrap text-sm lg:text-base px-6 py-3"
              aria-label="Let's discuss your challenge"
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
              <span className="relative z-10">Let's discuss your challenge</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gray-400 animate-bounce">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
