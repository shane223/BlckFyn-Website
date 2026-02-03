import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const WaveSection = () => {
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
    camera.position.set(0, 8, 12);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // === WIREFRAME WAVE TERRAIN ===
    const waveGroup = new THREE.Group();
    scene.add(waveGroup);

    // Create wave grid
    const gridSize = 60;
    const gridSegments = 80;
    const waveGeometry = new THREE.PlaneGeometry(
      gridSize,
      gridSize,
      gridSegments,
      gridSegments
    );

    // Store original positions for wave animation
    const originalPositions = waveGeometry.attributes.position.array.slice();

    const waveMaterial = new THREE.MeshBasicMaterial({
      color: 0x0a0a0a,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });

    const waveMesh = new THREE.Mesh(waveGeometry, waveMaterial);
    waveMesh.rotation.x = -Math.PI / 2.5;
    waveMesh.position.y = -2;
    waveGroup.add(waveMesh);

    // Floating particles above wave
    const particleCount = 150;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds: number[] = [];

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 40;
      particlePositions[i * 3 + 1] = Math.random() * 8;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 40;
      particleSpeeds.push(0.5 + Math.random() * 1);
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x0a0a0a,
      size: 0.15,
      transparent: true,
      opacity: 0.6,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    waveGroup.add(particles);

    // Connection lines between nearby particles
    const lineGeo = new THREE.BufferGeometry();
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x0a0a0a,
      transparent: true,
      opacity: 0.1,
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    waveGroup.add(lines);

    // Animation
    const clock = new THREE.Clock();

    let animationId: number;

    const updateWave = (time: number) => {
      const positions = waveGeometry.attributes.position.array as Float32Array;

      for (let i = 0; i < positions.length; i += 3) {
        const x = originalPositions[i];
        const y = originalPositions[i + 1];

        // Multiple wave frequencies for organic movement
        const wave1 = Math.sin(x * 0.3 + time * 0.8) * 0.8;
        const wave2 = Math.sin(y * 0.2 + time * 0.6) * 0.6;
        const wave3 = Math.sin((x + y) * 0.15 + time * 0.4) * 0.4;
        const wave4 = Math.sin(Math.sqrt(x * x + y * y) * 0.1 - time * 0.5) * 0.5;

        positions[i + 2] = wave1 + wave2 + wave3 + wave4;
      }

      waveGeometry.attributes.position.needsUpdate = true;
    };

    const updateParticles = (time: number, delta: number) => {
      const positions = particleGeo.attributes.position.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        // Float upward
        positions[i * 3 + 1] += particleSpeeds[i] * delta * 0.5;

        // Reset if too high
        if (positions[i * 3 + 1] > 10) {
          positions[i * 3 + 1] = -2;
          positions[i * 3] = (Math.random() - 0.5) * 40;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
        }

        // Add slight horizontal drift
        positions[i * 3] += Math.sin(time + i) * 0.01;
        positions[i * 3 + 2] += Math.cos(time + i * 0.5) * 0.01;
      }

      particleGeo.attributes.position.needsUpdate = true;

      // Update connection lines
      const linePositions: number[] = [];
      const maxDistance = 6;
      const maxConnections = 3;

      for (let i = 0; i < particleCount; i++) {
        let connections = 0;
        for (let j = i + 1; j < particleCount && connections < maxConnections; j++) {
          const dx = positions[i * 3] - positions[j * 3];
          const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
          const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxDistance) {
            linePositions.push(
              positions[i * 3],
              positions[i * 3 + 1],
              positions[i * 3 + 2],
              positions[j * 3],
              positions[j * 3 + 1],
              positions[j * 3 + 2]
            );
            connections++;
          }
        }
      }

      lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    };

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
      const delta = clock.getDelta();

      // Smooth scroll progress
      scrollProgress.current +=
        (targetScrollProgress.current - scrollProgress.current) * 0.08;

      // Update wave
      updateWave(time);

      // Update particles
      updateParticles(time, delta);

      // Parallax rotation based on scroll
      const scrollFactor = scrollProgress.current;
      waveGroup.rotation.y = scrollFactor * 0.3;
      waveGroup.rotation.z = scrollFactor * 0.1;

      // Camera parallax
      camera.position.x = Math.sin(scrollFactor * 0.5) * 2;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    // Intersection Observer for scroll progress
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const ratio = entry.intersectionRatio;
            targetScrollProgress.current = ratio;
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
      id="strategy"
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, transparent 0%, #ffffff 15%)',
        zIndex: 20
      }}
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <span className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-4 block">
                  Our Approach
                </span>
                <h2 className="heading-lg text-black mb-6">
                  Strategic
                  <br />
                  Investment
                </h2>
                <p className="text-body max-w-lg">
                  We combine deep sector expertise with hands-on operational
                  capabilities to transform financial services businesses across
                  Europe.
                </p>
              </div>

              <div className="space-y-4">
                <div className="group p-6 border-2 border-black hover:bg-black transition-all duration-500 cursor-pointer">
                  <h3 className="text-xl font-bold uppercase tracking-wide mb-2 group-hover:text-white transition-colors">
                    Buyout Strategy
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-300 transition-colors">
                    Investing in high-quality financial services companies with
                    proven cash flows and scalable operations.
                  </p>
                </div>

                <div className="group p-6 border-2 border-black hover:bg-black transition-all duration-500 cursor-pointer">
                  <h3 className="text-xl font-bold uppercase tracking-wide mb-2 group-hover:text-white transition-colors">
                    Growth Strategy
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-300 transition-colors">
                    Backing innovative FinTech companies reshaping the future of
                    financial services and digital transformation.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Stats */}
            <div className="lg:pl-12">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-8 border border-gray-200 hover:border-black transition-colors">
                  <div className="text-5xl lg:text-6xl font-extrabold text-black mb-2">
                    €2.5B
                  </div>
                  <div className="text-sm uppercase tracking-widest text-gray-500">
                    Assets Under Management
                  </div>
                </div>

                <div className="text-center p-8 border border-gray-200 hover:border-black transition-colors">
                  <div className="text-5xl lg:text-6xl font-extrabold text-black mb-2">
                    15+
                  </div>
                  <div className="text-sm uppercase tracking-widest text-gray-500">
                    Portfolio Companies
                  </div>
                </div>

                <div className="text-center p-8 border border-gray-200 hover:border-black transition-colors">
                  <div className="text-5xl lg:text-6xl font-extrabold text-black mb-2">
                    25%
                  </div>
                  <div className="text-sm uppercase tracking-widest text-gray-500">
                    Average IRR
                  </div>
                </div>

                <div className="text-center p-8 border border-gray-200 hover:border-black transition-colors">
                  <div className="text-5xl lg:text-6xl font-extrabold text-black mb-2">
                    5
                  </div>
                  <div className="text-sm uppercase tracking-widest text-gray-500">
                    European Offices
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaveSection;
