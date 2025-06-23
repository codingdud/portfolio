import  { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HeroSection = () => {
  const webglRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Basic CSS animations for displays only
    function initBasicAnimations() {
      const midDisplay = document.getElementById('mid-display');
      const btmDisplay = document.getElementById('btm-display');

      // Mouse movement effect
      const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
        mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1;
        mousePos.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        
        if (midDisplay) {
          midDisplay.style.transform = `translate(${-mousePos.current.x * 10}px, ${mousePos.current.y * 10}px)`;
        }
        if (btmDisplay) {
          btmDisplay.style.transform = `translate(${-mousePos.current.x * 20}px, ${mousePos.current.y * 10}px)`;
        }
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }

    // Three.js Stars Animation - Fixed for full width and more asteroids
    function initStars() {
      const scene = new THREE.Scene();
      const geometry = new THREE.BufferGeometry();
      const count = 8000; // More asteroids/stars
      const positions = new Float32Array(count * 3);
      
      for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 1000;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 1000;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 1000;
      }
      
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      
      const material = new THREE.PointsMaterial({ 
        size: 2, 
        sizeAttenuation: true,
        color: 0x00ffff,
        transparent: true,
        opacity: 0.8
      });
      
      const stars = new THREE.Points(geometry, material);
      scene.add(stars);

      // Fixed camera aspect ratio for full width
      const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
      camera.position.z = 1;
      camera.rotation.x = Math.PI / 2;

      const renderer = new THREE.WebGLRenderer({ antialias: true });
      // Fixed renderer size for full width
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor('#282e39', 0.5);
      
      if (webglRef.current) {
        webglRef.current.appendChild(renderer.domElement);
      }

      // Added resize handler for responsive background
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', handleResize);

      function animate() {
        const positions = geometry.attributes.position.array;
        
        for (let i = 0; i < count; i++) {
          const i3 = i * 3;
          positions[i3 + 1] -= 2;
          
          // Updated boundary check for larger field
          if (positions[i3 + 1] < -500) {
            positions[i3 + 1] = 500;
          }
        }
        
        geometry.attributes.position.needsUpdate = true;
        stars.rotation.y += 0.001;
        
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      }
      
      animate();

      return () => {
        // Clean up resize listener
        window.removeEventListener('resize', handleResize);
        if (webglRef.current && renderer.domElement) {
          webglRef.current.removeChild(renderer.domElement);
        }
        geometry.dispose();
        material.dispose();
        renderer.dispose();
      };
    }

    // Three.js Floating Objects
    function initObjects() {
      const scene = new THREE.Scene();
      const objects: THREE.Mesh<THREE.IcosahedronGeometry, THREE.MeshStandardMaterial, THREE.Object3DEventMap>[] = [];
      
      // Create floating objects
      for (let i = 0; i < 3; i++) {
        const geometry = new THREE.IcosahedronGeometry(0.8, 0);
        const material = new THREE.MeshStandardMaterial({ 
          color: 0x6699ff, 
          metalness: 0.3, 
          roughness: 0.4 
        });
        
        const object = new THREE.Mesh(geometry, material);
        object.position.set(
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 4
        );
        
        scene.add(object);
        objects.push(object);
      }

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambientLight);
      
      const directionalLight = new THREE.DirectionalLight(0x00ffff, 0.8);
      directionalLight.position.set(5, 10, 0);
      scene.add(directionalLight);
      
      const directionalLight2 = new THREE.DirectionalLight(0xff6600, 0.6);
      directionalLight2.position.set(-5, -5, 2);
      scene.add(directionalLight2);

      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.z = 8;

      if (!canvasRef.current) {
        // If the canvas is not yet available, do not initialize the renderer
        return;
      }

      const renderer = new THREE.WebGLRenderer({ 
        canvas: canvasRef.current, 
        alpha: true,
        antialias: true
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      };

      window.addEventListener('resize', handleResize);

      const clock = new THREE.Clock();
      
      const animate = () => {
        const elapsedTime = clock.getElapsedTime();
        
        objects.forEach((object, index) => {
          object.rotation.x = elapsedTime * 0.5 + index;
          object.rotation.y = elapsedTime * 0.3 + index;
          object.position.y = Math.sin(elapsedTime + index) * 2;
          object.position.x = Math.cos(elapsedTime * 0.5 + index) * 3;
        });
        
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      };
      
      animate();

      return () => {
        window.removeEventListener('resize', handleResize);
        objects.forEach(obj => {
          obj.geometry.dispose();
          obj.material.dispose();
        });
        renderer.dispose();
      };
    }

    // Simple rotating circles animation
    function initCircleAnimations() {
      const circles = document.querySelectorAll('.graph-circle-lb');
      const topCircles = document.querySelectorAll('.circles-top');
      
      let rotation = 0;
      const animateCircles = () => {
        rotation += 1;
        circles.forEach((circle, index) => {
          (circle as HTMLElement).style.transform = `rotate(${rotation + index * 30}deg)`;
        });
        topCircles.forEach((circle, index) => {
          (circle as HTMLElement).style.transform = `rotate(${rotation * 0.5 + index * 45}deg)`;
        });
        requestAnimationFrame(animateCircles);
      };
      animateCircles();
    }

    // Initialize all animations
    const cleanupFunctions: ((() => void) | undefined)[] = [];
    
    try {
      cleanupFunctions.push(initBasicAnimations());
      cleanupFunctions.push(initStars());
      cleanupFunctions.push(initObjects());
      initCircleAnimations();
    } catch (error) {
      console.warn('Some animations failed to initialize:', error);
    }

    // Cleanup function
    return () => {
      cleanupFunctions.forEach(cleanup => {
        if (typeof cleanup === 'function') {
          cleanup();
        }
      });
    };
  }, []);

  return (
    <section className="relative h-[400px] w-full overflow-hidden bg-gray-900 flex items-center justify-center">
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        .svg-box svg {
          transition: all 0.3s ease;
        }
        
        #mid-display, #btm-display {
          transition: transform 0.1s ease;
        }
      `}</style>
      
      <div className="absolute inset-0 z-0" ref={webglRef}></div>
      
      {/* Moved displays container down using mt-24 (96px down) */}
      <div className="absolute inset-0 z-10 flex items-center justify-center mt-24">
        <div className="svg-box w-[600px] h-[600px]">
          <svg viewBox="0 0 900 800">
            <g id="Ship">
              <g id="mid-display">
                <rect width="320.3" height="207" x="248.8" y="116.3" fill="#282e39" stroke="#0ff" strokeMiterlimit="10" strokeWidth="5" opacity=".8" rx="18.4" />
                <g id="graph-btm">
                  <path id="graph-left" fill="#0ff" d="M439.7 292.1s4.5-19.4 8.7-19c3.6.3 4.6 9.2 7.3 9 3.4-.2 4-14 7.3-14.3 3-.2 4.7 10 8.3 10 4 0 5.1-12.6 8.8-12.8 4.1-.2 7.2 27.1 7.2 27.1z" />
                  <path id="graph-right" fill="#34496a" d="M502.6 292.1s4.5-19.4 8.8-19c3.5.3 4.6 9.2 7.3 9 3.4-.2 3.9-14 7.3-14.3 3-.2 4.7 10 8.3 10 4 0 5-12.6 8.7-12.8 4.2-.2 7.3 27.1 7.3 27.1z" />
                </g>
                <g id="planet">
                  <circle id="planet-base" cx="332.2" cy="207.8" r="37.3" fill="#34496a" />
                  <ellipse id="planet-circle" cx="331.5" cy="207.8" fill="none" stroke="#0ff" strokeMiterlimit="10" strokeWidth="5" rx="61.8" ry="12.7" />
                  <path id="planet-top" fill="#34496a" d="M294.9 207.8a37.3 37.3 0 0174.6 0z" />
                </g>
                <g className="graph-circle-lb" id="graph-cir-left">
                  <circle cx="290.4" cy="287.5" r="20.8" fill="#34496a" />
                  <path fill="#0ff" d="M290.4 287.5l5.3-20.1a20.8 20.8 0 0115.5 20z" />
                </g>
                <g className="graph-circle-lb" id="graph-cir-mid">
                  <circle cx="345.4" cy="287.5" r="20.8" fill="#34496a" />
                  <path fill="#0ff" d="M345.4 287.5l5.2-20.1a20.8 20.8 0 0115.5 20z" />
                </g>
                <g id="graph-cir">
                  <circle cx="396.4" cy="292.1" r="16.4" fill="none" stroke="#34496a" strokeMiterlimit="10" strokeWidth="2" />
                  <circle cx="396.4" cy="292.1" r="20.8" fill="none" stroke="#34496a" strokeMiterlimit="10" strokeWidth="2" />
                  <circle cx="396.4" cy="292.1" r="11.6" fill="none" stroke="#34496a" strokeMiterlimit="10" strokeWidth="2" />
                  <circle id="graph-cir-1" cx="408" cy="292.1" r="2.3" fill="#0ff" />
                  <circle id="graph-cir-2" cx="396.4" cy="275.7" r="2.3" fill="#0ff" />
                  <circle id="graph-cir-3" cx="417.2" cy="292.1" r="2.3" fill="#0ff" />
                  <circle id="graph-cir-mid-2" cx="396.4" cy="292.1" r="2.3" fill="#0ff" />
                </g>
                <circle cx="275.7" cy="139.7" r="11.8" fill="#34496a" />
                <circle id="left-top-circle" cx="275.7" cy="139.7" r="11.8" fill="#0ff" />
                <line x1="300.8" x2="387.1" y1="134.3" y2="134.9" fill="none" stroke="#34496a" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5" />
                <line x1="300.8" x2="338.5" y1="143.7" y2="143.9" fill="none" stroke="#34496a" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5" />
                <circle cx="448.1" cy="161.4" r="13.3" fill="none" stroke="#34496a" strokeMiterlimit="10" strokeWidth="5" />
                <path className="circles-top" id="circle-l" fill="none" stroke="#0ff" strokeMiterlimit="10" strokeWidth="5" d="M448 148.2a13.3 13.3 0 11-13.2 13.3 13.3 13.3 0 0113.3-13.3" />
                <circle cx="491.2" cy="161.4" r="13.3" fill="none" stroke="#34496a" strokeMiterlimit="10" strokeWidth="5" />
                <path className="circles-top" id="circle-m" fill="none" stroke="#0ff" strokeMiterlimit="10" strokeWidth="5" d="M491.2 148.2a13.3 13.3 0 11-13.3 13.3 13.3 13.3 0 0113.3-13.3" />
                <circle cx="534.4" cy="161.4" r="13.3" fill="none" stroke="#34496a" strokeMiterlimit="10" strokeWidth="5" />
                <path className="circles-top" id="circle-r" fill="none" stroke="#0ff" strokeMiterlimit="10" strokeWidth="5" d="M534.4 148.2a13.3 13.3 0 11-13.3 13.3 13.3 13.3 0 0113.3-13.3" />
              </g>
              <g id="btm-display">
                <g id="right-display">
                  <g id="right-display-display">
                    <path fill="#282e39" stroke="#0ff" strokeMiterlimit="10" strokeWidth="5" d="M654.7 461H508.6c-10.5 0-15.8-8.5-12-19l26.2-72a29.9 29.9 0 0125.8-18.9h146c10.5 0 15.8 8.5 12 19l-26.2 72a29.9 29.9 0 01-25.7 18.8z" opacity=".8" />
                    <g id="bars">
                      <polygon id="bar-3-btm" fill="#34496a" points="656.9 441.2 642.4 441.2 667.6 371.7 682.2 371.7 656.9 441.2" />
                      <polygon id="bar-3-top" fill="#0ff" points="656.9 441.2 642.4 441.2 653 412 667.5 412 656.9 441.2" />
                      <polygon id="bar-2-btm" fill="#34496a" points="633.7 441.2 619.2 441.2 644.5 371.7 659 371.7 633.7 441.2" />
                      <polygon id="bar-2-top" fill="#0ff" points="633.7 441.2 619.2 441.2 636 395.1 650.5 395.1 633.7 441.2" />
                      <polygon id="bar-1-btm" fill="#34496a" points="610.6 441.2 596.1 441.2 621.4 371.7 635.9 371.7 610.6 441.2" />
                      <polygon id="bar-1-top" fill="#0ff" points="610.6 441.2 596.1 441.2 604 419.5 618.5 419.5 610.6 441.2" />
                    </g>
                    <g id="btns" fill="#0ff">
                      <ellipse cx="546.8" cy="379.3" rx="6.5" ry="4.6" transform="rotate(-39.8 546.8 379.3)" />
                      <ellipse cx="562.7" cy="379.3" rx="6.5" ry="4.6" transform="rotate(-39.8 562.7 379.3)" />
                      <ellipse cx="578.6" cy="379.3" rx="6.5" ry="4.6" transform="rotate(-39.8 578.6 379.3)" />
                      <ellipse cx="594.5" cy="379.3" rx="6.5" ry="4.6" transform="rotate(-39.8 594.5 379.3)" />
                    </g>
                  </g>
                  <ellipse id="right-display-shadow" cx="593.3" cy="508.4" fill="#1e3855" rx="74" ry="10.9" />
                </g>
                <g id="left-display">
                  <g id="left-display-display">
                    <path fill="#282e39" stroke="#0ff" strokeMiterlimit="10" strokeWidth="5" d="M299 461H153c-10.4 0-22-8.5-25.8-19L101 370c-3.8-10.4 1.6-18.9 12-18.9h146c10.5 0 22 8.5 25.9 18.9l26.2 72c3.8 10.4-1.6 19-12 19z" opacity=".8" />
                    <line x1="217.3" x2="267.5" y1="377.7" y2="377.7" fill="#282e39" stroke="#0ff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5" opacity=".8" />
                    <line x1="224.5" x2="274.8" y1="397.6" y2="397.6" fill="#282e39" stroke="#0ff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5" opacity=".8" />
                    <line x1="231.8" x2="282" y1="417.5" y2="417.5" fill="#282e39" stroke="#0ff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5" opacity=".8" />
                    <line x1="239" x2="289.2" y1="437.3" y2="437.3" fill="#282e39" stroke="#0ff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5" opacity=".8" />
                  </g>
                  <ellipse id="left-display-shadow" cx="224.5" cy="511.5" fill="#1e3855" rx="74" ry="10.9" />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
      
      <canvas className="absolute inset-0 z-20 pointer-events-none" ref={canvasRef}></canvas>
      
      {/* Moved text up to make room for displays */}
      <div className="absolute z-30 text-center text-white pointer-events-none bottom-9">
        <h1 className="text-green-400 text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Animesh Kumar</h1>
        <p className="text-lg md:text-xl max-w-md mx-auto drop-shadow-md">Software Developer & Full Stack Engineer</p>
      </div>
    </section>
  );
};

export default HeroSection;
