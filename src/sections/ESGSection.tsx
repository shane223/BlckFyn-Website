import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ESGSection = () => {
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
    scene.background = new THREE.Color(0xf8f9fa);

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 12);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const esgGroup = new THREE.Group();
    scene.add(esgGroup);

    // === THREE INTERLOCKING RINGS (ESG Symbol) ===
    const ringConfigs = [
      { axis: 'x', color: 0x0a0a0a, radius: 3, tube: 0.08 },
      { axis: 'y', color: 0x0a0a0a, radius: 3, tube: 0.08 },
      { axis: 'z', color: 0x0a0a0a, radius: 3, tube: 0.08 },
    ];

    const rings: THREE.Mesh[] = [];

    ringConfigs.forEach((config, i) => {
      const ringGeo = new THREE.TorusGeometry(config.radius, config.tube, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({
        color: config.color,
        wireframe: true,
        transparent: true,
        opacity: 0.4,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);

      if (config.axis === 'x') {
        ring.rotation.y = Math.PI / 2;
      } else if (config.axis === 'z') {
        ring.rotation.x = Math.PI / 2;
      }

      // Offset each ring slightly
      ring.position.x = Math.sin((i * Math.PI * 2) / 3) * 0.5;
      ring.position.y = Math.cos((i * Math.PI * 2) / 3) * 0.5;

      esgGroup.add(ring);
      rings.push(ring);
    });

    // === CENTER CORE ===
    const coreGeo = new THREE.IcosahedronGeometry(1, 2);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x0a0a0a,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    esgGroup.add(core);

    // Core particles
    const coreDotGeo = new THREE.BufferGeometry();
    const corePositions = coreGeo.attributes.position.array.slice();
    coreDotGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(corePositions, 3)
    );
    const coreDotMat = new THREE.PointsMaterial({
      color: 0x0a0a0a,
      size: 0.08,
      transparent: true,
      opacity: 0.8,
    });
    const coreDots = new THREE.Points(coreDotGeo, coreDotMat);
    esgGroup.add(coreDots);

    // === FLOATING PARTICLES ===
    const particleCount = 100;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 5 + Math.random() * 5;

      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi);
    }

    particleGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    );
    const particleMat = new THREE.PointsMaterial({
      color: 0x0a0a0a,
      size: 0.06,
      transparent: true,
      opacity: 0.4,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    esgGroup.add(particles);

    // === CONNECTION LINES ===
    const lineGeo = new THREE.BufferGeometry();
    const linePositions: number[] = [];

    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = particlePositions[i * 3] - particlePositions[j * 3];
        const dy = particlePositions[i * 3 + 1] - particlePositions[j * 3 + 1];
        const dz = particlePositions[i * 3 + 2] - particlePositions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < 3 && Math.random() < 0.03) {
          linePositions.push(
            particlePositions[i * 3],
            particlePositions[i * 3 + 1],
            particlePositions[i * 3 + 2],
            particlePositions[j * 3],
            particlePositions[j * 3 + 1],
            particlePositions[j * 3 + 2]
          );
        }
      }
    }

    lineGeo.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(linePositions, 3)
    );
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x0a0a0a,
      transparent: true,
      opacity: 0.08,
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    esgGroup.add(lines);

    // Animation
    const clock = new THREE.Clock();

    let animationId: number;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Smooth scroll progress
      scrollProgress.current +=
        (targetScrollProgress.current - scrollProgress.current) * 0.08;

      // Rotate rings
      rings[0].rotation.x = time * 0.15;
      rings[1].rotation.y = time * 0.2;
      rings[2].rotation.z = time * 0.1;

      // Rotate core
      core.rotation.y = time * 0.1;
      core.rotation.x = Math.sin(time * 0.2) * 0.1;
      coreDots.rotation.y = time * 0.1;
      coreDots.rotation.x = Math.sin(time * 0.2) * 0.1;

      // Rotate particles
      particles.rotation.y = time * 0.02;
      lines.rotation.y = time * 0.02;

      // Parallax based on scroll
      const scrollFactor = scrollProgress.current;
      esgGroup.rotation.x = scrollFactor * 0.3;
      esgGroup.rotation.y = scrollFactor * 0.2;

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
      id="esg"
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: '#f8f9fa' }}
    >
      {/* Three.js Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center px-6 lg:px-16 py-24">
        <div className="w-full max-w-5xl mx-auto text-center">
          {/* Label */}
          <span className="text-sm uppercase tracking-[0.3em] text-gray-500 font-bold mb-8 block">
            Responsible Investment
          </span>

          {/* ESG Pillars */}
          <div className="flex flex-wrap justify-center gap-12 lg:gap-20 mb-12">
            <div className="group cursor-pointer">
              <h3 className="text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-2 group-hover:scale-110 transition-transform">
                Environmental
              </h3>
              <div className="w-0 h-0.5 bg-black mx-auto group-hover:w-full transition-all duration-500" />
            </div>
            <div className="group cursor-pointer">
              <h3 className="text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-2 group-hover:scale-110 transition-transform">
                Social
              </h3>
              <div className="w-0 h-0.5 bg-black mx-auto group-hover:w-full transition-all duration-500" />
            </div>
            <div className="group cursor-pointer">
              <h3 className="text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-2 group-hover:scale-110 transition-transform">
                Governance
              </h3>
              <div className="w-0 h-0.5 bg-black mx-auto group-hover:w-full transition-all duration-500" />
            </div>
          </div>

          {/* Description */}
          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
            Committed to the highest ethical standards, integrity and transparency
            — the foundations of our investment philosophy.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
            <div className="p-6 border-2 border-gray-300 hover:border-black transition-colors">
              <div className="text-3xl font-extrabold mb-1">100%</div>
              <div className="text-sm uppercase tracking-wider text-gray-500">
                ESG Integration
              </div>
            </div>
            <div className="p-6 border-2 border-gray-300 hover:border-black transition-colors">
              <div className="text-3xl font-extrabold mb-1">Carbon</div>
              <div className="text-sm uppercase tracking-wider text-gray-500">
                Neutral by 2030
              </div>
            </div>
            <div className="p-6 border-2 border-gray-300 hover:border-black transition-colors">
              <div className="text-3xl font-extrabold mb-1">UN PRI</div>
              <div className="text-sm uppercase tracking-wider text-gray-500">
                Signatory
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="#"
            className="inline-block px-10 py-4 bg-black text-white text-sm font-bold uppercase tracking-widest border-2 border-black hover:bg-transparent hover:text-black transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default ESGSection;
