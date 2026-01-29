import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollY = useRef(0);
  const targetScrollY = useRef(0);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 10); // Changed to 10 to match index_bc

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // === GLOBE - Wireframe Sphere ===
    const globeRadius = 3.5; // Match index_bc

    // Main wireframe sphere
    const globeGeo = new THREE.IcosahedronGeometry(globeRadius, 2);
    const globeMat = new THREE.MeshBasicMaterial({
      color: 0x0a0a0a,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const globe = new THREE.Mesh(globeGeo, globeMat);
    mainGroup.add(globe);

    // Dots at vertices
    const positions = globeGeo.attributes.position.array;
    const dotGeo = new THREE.BufferGeometry();
    dotGeo.setAttribute('position', new THREE.BufferAttribute(positions.slice(), 3));
    const dotMat = new THREE.PointsMaterial({
      color: 0x0a0a0a,
      size: 0.14, // Match index_bc
      transparent: true,
      opacity: 0.9,
    });
    const dots = new THREE.Points(dotGeo, dotMat);
    mainGroup.add(dots);

    // === FLOATING NETWORK ===
    const networkGroup = new THREE.Group();
    mainGroup.add(networkGroup);

    // Network points
    const networkCount = 100; // Match index_bc
    const networkPos: number[] = [];

    for (let i = 0; i < networkCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 7 + Math.random() * 5;
      const height = (Math.random() - 0.5) * 8;

      networkPos.push(
        Math.cos(angle) * radius,
        height,
        Math.sin(angle) * radius
      );
    }

    const networkGeo = new THREE.BufferGeometry();
    networkGeo.setAttribute('position', new THREE.Float32BufferAttribute(networkPos, 3));
    const networkDotMat = new THREE.PointsMaterial({
      color: 0x0a0a0a,
      size: 0.08, // Match index_bc
      transparent: true,
      opacity: 0.74,
    });
    const networkDots = new THREE.Points(networkGeo, networkDotMat);
    networkGroup.add(networkDots);

    // Connection lines
    const lineGeo = new THREE.BufferGeometry();
    const linePositions: number[] = [];

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
      color: 0x0a0a0a,
      transparent: true,
      opacity: 0.19,
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

    const animate = () => {
      animationId = requestAnimationFrame(animate);
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
      const scrollFactor = Math.min(scrollY.current / 800, 1);
      const ease = 1 - Math.pow(1 - scrollFactor, 3);

      const startX = 5.75;
      const endX = 2.3;
      const startZ = -2;
      const endZ = -1;

      mainGroup.position.x = startX + (endX - startX) * ease;
      mainGroup.position.z = startZ + (endZ - startZ) * ease;
      mainGroup.position.y = Math.sin(time * 0.5) * 0.1;

      const startRot = -Math.PI / 4;
      const endRot = -Math.PI / 6;
      mainGroup.rotation.y = startRot + (endRot - startRot) * ease;

      const startScale = 1.54;
      const endScale = 1.21;
      mainGroup.scale.setScalar(startScale + (endScale - startScale) * ease);

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

    animate();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative h-screen w-full overflow-hidden bg-white"
    >
      {/* Three.js Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center px-6 lg:px-16">
        <div className="max-w-2xl">
          <h1 className="heading-xl text-black mb-6">
            Investors in
            <br />
            Financial Services
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 font-light leading-relaxed">
            Strategic investments across Europe with operational excellence
          </p>
          <div className="flex flex-wrap gap-6 text-sm uppercase tracking-widest text-gray-500 font-semibold">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-black rounded-full" />
              Entrepreneurial
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-black rounded-full" />
              Specialized
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-black rounded-full" />
              Value Creation
            </span>
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
