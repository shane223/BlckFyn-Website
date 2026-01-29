import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const offices = [
  { city: 'Paris', address: '2 Place Rio de Janeiro\n75008 Paris' },
  { city: 'Amsterdam', address: '43 Roemer Visscherstraat\n1054 EW Amsterdam' },
  { city: 'Brussels', address: '106 Avenue Louise\n1050 Brussels' },
  { city: 'Frankfurt', address: 'Ulmenstrasse 37-39\n60325 Frankfurt' },
  { city: 'London', address: '40 Bruton Street\nLondon W1J 6QZ' },
];

const LocationsSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useRef(0);
  const targetScrollProgress = useRef(0);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 15);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const mapGroup = new THREE.Group();
    scene.add(mapGroup);

    // === EUROPE MAP POINTS ===
    // Approximate coordinates for European cities (normalized)
    const cityPositions: { [key: string]: { x: number; y: number; z: number } } =
    {
      Paris: { x: -1, y: 1.5, z: 0 },
      Amsterdam: { x: -0.5, y: 2.5, z: 0 },
      Brussels: { x: -0.8, y: 2.2, z: 0 },
      Frankfurt: { x: 0.2, y: 2, z: 0 },
      London: { x: -1.5, y: 2.8, z: 0 },
    };

    // Create city markers
    const cityDots: THREE.Mesh[] = [];

    Object.entries(cityPositions).forEach(([city, pos]) => {
      // City dot
      const dotGeo = new THREE.SphereGeometry(0.15, 16, 16);
      const dotMat = new THREE.MeshBasicMaterial({
        color: 0x0a0a0a,
        transparent: true,
        opacity: 0.9,
      });
      const dot = new THREE.Mesh(dotGeo, dotMat);
      dot.position.set(pos.x * 2, pos.y * 2, pos.z);
      mapGroup.add(dot);
      cityDots.push(dot);

      // Pulse ring around city
      const ringGeo = new THREE.RingGeometry(0.2, 0.25, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x0a0a0a,
        transparent: true,
        opacity: 0.4,
        side: THREE.DoubleSide,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.set(pos.x * 2, pos.y * 2, pos.z);
      ring.lookAt(0, 0, 10);
      mapGroup.add(ring);

      // Connection lines between cities
      if (city === 'Paris') {
        Object.entries(cityPositions).forEach(([otherCity, otherPos]) => {
          if (otherCity !== city) {
            const lineGeo = new THREE.BufferGeometry();
            const linePositions = [
              pos.x * 2,
              pos.y * 2,
              pos.z,
              otherPos.x * 2,
              otherPos.y * 2,
              otherPos.z,
            ];
            lineGeo.setAttribute(
              'position',
              new THREE.Float32BufferAttribute(linePositions, 3)
            );
            const lineMat = new THREE.LineBasicMaterial({
              color: 0x0a0a0a,
              transparent: true,
              opacity: 0.15,
            });
            const line = new THREE.Line(lineGeo, lineMat);
            mapGroup.add(line);
          }
        });
      }
    });

    // === BACKGROUND GRID ===
    const gridSize = 30;
    const gridDivisions = 20;
    const gridGeo = new THREE.BufferGeometry();
    const gridPositions: number[] = [];

    for (let i = 0; i <= gridDivisions; i++) {
      const pos = (i / gridDivisions - 0.5) * gridSize;
      // Horizontal lines
      gridPositions.push(-gridSize / 2, pos, -5);
      gridPositions.push(gridSize / 2, pos, -5);
      // Vertical lines
      gridPositions.push(pos, -gridSize / 2, -5);
      gridPositions.push(pos, gridSize / 2, -5);
    }

    gridGeo.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(gridPositions, 3)
    );
    const gridMat = new THREE.LineBasicMaterial({
      color: 0x0a0a0a,
      transparent: true,
      opacity: 0.08,
    });
    const grid = new THREE.LineSegments(gridGeo, gridMat);
    mapGroup.add(grid);

    // === FLOATING PARTICLES ===
    const particleCount = 80;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 25;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    particleGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    );
    const particleMat = new THREE.PointsMaterial({
      color: 0x0a0a0a,
      size: 0.1,
      transparent: true,
      opacity: 0.4,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    mapGroup.add(particles);

    // Animation
    const clock = new THREE.Clock();

    let animationId: number;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Smooth scroll progress
      scrollProgress.current +=
        (targetScrollProgress.current - scrollProgress.current) * 0.08;

      // Pulse city dots
      cityDots.forEach((dot, i) => {
        const scale = 1 + Math.sin(time * 2 + i) * 0.2;
        dot.scale.setScalar(scale);
      });

      // Rotate map group subtly
      mapGroup.rotation.y = Math.sin(time * 0.1) * 0.05;
      mapGroup.rotation.x = Math.cos(time * 0.08) * 0.03;

      // Parallax based on scroll
      const scrollFactor = scrollProgress.current;
      mapGroup.position.y = scrollFactor * 1;

      renderer.render(scene, camera);
    };

    // Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            targetScrollProgress.current = entry.intersectionRatio;
          }
        });
      },
      {
        threshold: Array.from({ length: 100 }, (_, i) => i / 100),
        rootMargin: '-10% 0px -10% 0px',
      }
    );

    observer.observe(container);

    // Resize handler
    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    animate();

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="presence"
      className="relative min-h-screen w-full overflow-hidden bg-white"
    >
      {/* Three.js Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center px-6 lg:px-16 py-24">
        <div className="w-full max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-4 block">
              Our Presence
            </span>
            <h2 className="heading-lg text-black mb-4">
              European Network
            </h2>
            <p className="text-xl text-gray-600 italic max-w-2xl mx-auto">
              Transforming complexity into sustainable value
            </p>
            <div className="w-24 h-0.5 bg-black mx-auto mt-8" />
          </div>

          {/* Tagline */}
          <p className="text-center text-lg text-gray-600 mb-12">
            Five strategic locations across Western Europe
          </p>

          {/* Office Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {offices.map((office, index) => (
              <div
                key={office.city}
                className="group p-6 border-2 border-gray-200 hover:border-black text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-white/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold uppercase tracking-wide mb-3 text-black">
                  {office.city}
                </h3>
                <p className="text-gray-600 text-sm whitespace-pre-line leading-relaxed">
                  {office.address}
                </p>
                <div className="w-full h-1 bg-black mt-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
