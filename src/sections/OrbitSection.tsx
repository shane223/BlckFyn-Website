import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const OrbitSection = () => {
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
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const orbitGroup = new THREE.Group();
    scene.add(orbitGroup);

    // === CIRCULAR ORBIT LINES ===
    const orbitRings: {
      mesh: THREE.Line;
      radius: number;
      speed: number;
      tiltX: number;
      tiltZ: number;
      phase: number;
    }[] = [];

    const ringCount = 12;

    for (let i = 0; i < ringCount; i++) {
      const radius = 3 + i * 0.9;
      const segments = 64 + i * 8;

      // Create circle geometry
      const circleGeo = new THREE.BufferGeometry();
      const circlePositions: number[] = [];

      for (let j = 0; j <= segments; j++) {
        const angle = (j / segments) * Math.PI * 2;
        circlePositions.push(
          Math.cos(angle) * radius,
          Math.sin(angle) * radius,
          0
        );
      }

      circleGeo.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(circlePositions, 3)
      );

      const circleMat = new THREE.LineBasicMaterial({
        color: 0x0a0a0a,
        transparent: true,
        opacity: 0.15 + (ringCount - i) * 0.03,
      });

      const circle = new THREE.Line(circleGeo, circleMat);

      // Random tilt for each ring
      const tiltX = (Math.random() - 0.5) * Math.PI * 0.6;
      const tiltZ = (Math.random() - 0.5) * Math.PI * 0.6;

      circle.rotation.x = tiltX;
      circle.rotation.z = tiltZ;

      orbitGroup.add(circle);

      orbitRings.push({
        mesh: circle,
        radius,
        speed: (0.1 + Math.random() * 0.2) * (i % 2 === 0 ? 1 : -1),
        tiltX,
        tiltZ,
        phase: Math.random() * Math.PI * 2,
      });
    }

    // === ORBITING DOTS ===
    const dotCount = 40;
    const orbitDots: {
      mesh: THREE.Mesh;
      ringIndex: number;
      angle: number;
      speed: number;
      size: number;
    }[] = [];

    const dotGeo = new THREE.SphereGeometry(1, 8, 8);

    for (let i = 0; i < dotCount; i++) {
      const ringIndex = Math.floor(Math.random() * ringCount);

      const dotMat = new THREE.MeshBasicMaterial({
        color: 0x0a0a0a,
        transparent: true,
        opacity: 0.7 + Math.random() * 0.3,
      });

      const dot = new THREE.Mesh(dotGeo, dotMat);
      const size = 0.08 + Math.random() * 0.1;
      dot.scale.setScalar(size);

      orbitGroup.add(dot);

      orbitDots.push({
        mesh: dot,
        ringIndex,
        angle: Math.random() * Math.PI * 2,
        speed: (0.3 + Math.random() * 0.5) * (Math.random() > 0.5 ? 1 : -1),
        size,
      });
    }

    // === CENTER CORE ===
    const coreGeo = new THREE.IcosahedronGeometry(1.2, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x0a0a0a,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    orbitGroup.add(core);

    // Core dots
    const coreDotGeo = new THREE.BufferGeometry();
    const corePositions = coreGeo.attributes.position.array.slice();
    coreDotGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(corePositions, 3)
    );
    const coreDotMat = new THREE.PointsMaterial({
      color: 0x0a0a0a,
      size: 0.1,
      transparent: true,
      opacity: 0.9,
    });
    const coreDots = new THREE.Points(coreDotGeo, coreDotMat);
    orbitGroup.add(coreDots);

    // === RADIAL LINES ===
    const radialLineCount = 20;
    const radialLineGeo = new THREE.BufferGeometry();
    const radialPositions: number[] = [];

    for (let i = 0; i < radialLineCount; i++) {
      const angle = (i / radialLineCount) * Math.PI * 2;
      radialPositions.push(0, 0, 0);
      radialPositions.push(
        Math.cos(angle) * 12,
        Math.sin(angle) * 12,
        0
      );
    }

    radialLineGeo.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(radialPositions, 3)
    );
    const radialLineMat = new THREE.LineBasicMaterial({
      color: 0x0a0a0a,
      transparent: true,
      opacity: 0.08,
    });
    const radialLines = new THREE.LineSegments(radialLineGeo, radialLineMat);
    orbitGroup.add(radialLines);

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
      orbitRings.forEach((ring) => {
        ring.mesh.rotation.z += ring.speed * 0.01;
        // Add subtle wobble
        ring.mesh.rotation.x =
          ring.tiltX + Math.sin(time * 0.5 + ring.phase) * 0.05;
        ring.mesh.rotation.y =
          Math.sin(time * 0.3 + ring.phase) * 0.03;
      });

      // Update orbiting dots
      orbitDots.forEach((dot) => {
        const ring = orbitRings[dot.ringIndex];
        dot.angle += dot.speed * 0.01;

        // Calculate position on the ring's plane
        const x = Math.cos(dot.angle) * ring.radius;
        const y = Math.sin(dot.angle) * ring.radius;

        // Apply ring's rotation to get world position
        const pos = new THREE.Vector3(x, y, 0);
        pos.applyEuler(ring.mesh.rotation);

        dot.mesh.position.copy(pos);

        // Pulse size
        const pulse = 1 + Math.sin(time * 3 + dot.angle) * 0.2;
        dot.mesh.scale.setScalar(dot.size * pulse);
      });

      // Rotate core
      core.rotation.y = time * 0.2;
      core.rotation.x = Math.sin(time * 0.3) * 0.1;
      coreDots.rotation.y = time * 0.2;
      coreDots.rotation.x = Math.sin(time * 0.3) * 0.1;

      // Rotate radial lines slowly
      radialLines.rotation.z = time * 0.02;

      // Parallax based on scroll
      const scrollFactor = scrollProgress.current;
      orbitGroup.rotation.y = scrollFactor * 0.5;
      orbitGroup.rotation.x = scrollFactor * 0.2;

      // Camera subtle movement
      camera.position.x = Math.sin(time * 0.1) * 0.5;
      camera.position.y = Math.cos(time * 0.15) * 0.3;
      camera.lookAt(0, 0, 0);

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
      id="innovation"
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Innovation Cards */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="group p-8 border-2 border-black hover:bg-black transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border-2 border-black group-hover:border-white flex items-center justify-center transition-colors">
                    <svg
                      className="w-6 h-6 group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-wide mb-2 group-hover:text-white transition-colors">
                      Digital Transformation
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-300 transition-colors">
                      Leveraging cutting-edge technology to modernize legacy
                      systems and create seamless digital experiences.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group p-8 border-2 border-black hover:bg-black transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border-2 border-black group-hover:border-white flex items-center justify-center transition-colors">
                    <svg
                      className="w-6 h-6 group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-wide mb-2 group-hover:text-white transition-colors">
                      Data Analytics
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-300 transition-colors">
                      Harnessing the power of big data and AI to drive
                      intelligent decision-making and predictive insights.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group p-8 border-2 border-black hover:bg-black transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border-2 border-black group-hover:border-white flex items-center justify-center transition-colors">
                    <svg
                      className="w-6 h-6 group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-wide mb-2 group-hover:text-white transition-colors">
                      Cybersecurity
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-300 transition-colors">
                      Implementing robust security frameworks to protect assets
                      and ensure regulatory compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2 lg:pl-12">
              <span className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-4 block">
                Innovation Hub
              </span>
              <h2 className="heading-lg text-black mb-6">
                Technology
                <br />
                & Innovation
              </h2>
              <p className="text-body mb-8">
                We invest in the future of finance. Our portfolio companies
                leverage emerging technologies to create competitive advantages
                and deliver exceptional value to their customers.
              </p>

              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 border border-gray-300 text-sm uppercase tracking-wider hover:border-black hover:bg-black hover:text-white transition-all cursor-pointer">
                  AI & Machine Learning
                </span>
                <span className="px-4 py-2 border border-gray-300 text-sm uppercase tracking-wider hover:border-black hover:bg-black hover:text-white transition-all cursor-pointer">
                  Blockchain
                </span>
                <span className="px-4 py-2 border border-gray-300 text-sm uppercase tracking-wider hover:border-black hover:bg-black hover:text-white transition-all cursor-pointer">
                  Cloud Infrastructure
                </span>
                <span className="px-4 py-2 border border-gray-300 text-sm uppercase tracking-wider hover:border-black hover:bg-black hover:text-white transition-all cursor-pointer">
                  API-First
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrbitSection;
