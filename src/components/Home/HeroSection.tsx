import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.3,
        }
      );
    }
  }, []);

  return (
    <section 
      ref={heroRef}
      className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg"
    >
      <h1 className="text-5xl font-bold mb-4">Animesh Kumar</h1>
      <p className="text-xl mb-6">Software Developer & Full Stack Engineer</p>
      <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
        <span className="flex items-center gap-2">
          📞 +91 8863813462
        </span>
        <span className="flex items-center gap-2">
          📧 2128117@kiit.ac.in
        </span>
        <span className="flex items-center gap-2">
          💼 linkedin.com/animeshsysop
        </span>
        <span className="flex items-center gap-2">
          🔗 github.com/codingdud
        </span>
      </div>
    </section>
  );
};

export default HeroSection;