import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const accentColors = [
  '#facc15', // yellow-400
  '#4ade80', // green-400
  '#60a5fa', // blue-400
  '#a78bfa', // purple-400
  '#fb923c', // orange-400
  '#f87171', // red-400
  '#f472b6', // pink-400
  '#2dd4bf', // teal-400
  '#22d3ee', // cyan-400
];

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const dotsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
      );
    }
    sectionsRef.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.2 + 0.5,
          ease: 'power2.out',
        }
      );
    });
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;

    dotsRef.current.forEach((dot) => {
      const rect = dot.getBoundingClientRect();
      const dx = clientX - (rect.left + rect.width / 2);
      const dy = clientY - (rect.top + rect.height / 2);
      const dist = Math.sqrt(dx * dx + dy * dy);
      const moveX = dx / dist * Math.min(20, 150 / dist);
      const moveY = dy / dist * Math.min(20, 150 / dist);

      const color = accentColors[Math.floor(Math.random() * accentColors.length)];

      gsap.to(dot, {
        x: moveX,
        y: moveY,
        borderRadius: `${50 + Math.random() * 50}%`,
        backgroundColor: color,
        scale: 1.5,
        duration: 0.4,
        ease: 'power3.out',
      });
    });
  };

  return (
    <footer
      ref={footerRef}
      onMouseMove={handleMouseMove}
      className="relative  text-gray-300 font-mono text-xs uppercase tracking-wider py-10 px-6 overflow-hidden"
    >
      {/* Dots as Background for Footer */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 400 }).map((_, i) => {
          const style = {
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            backgroundColor: accentColors[i % accentColors.length],
            borderRadius: '50%',
          };
          return (
            <span
              key={i}
              ref={(el) => { if (el) dotsRef.current[i] = el; }}
              className="absolute w-1 h-1"
              style={style as React.CSSProperties}
            ></span>
          );
        })}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-10">
        {/* Menu */}
        <div
          ref={(el) => { if (el) sectionsRef.current[0] = el; }}
          className="flex justify-center space-x-6 text-sm"
        >
          {['Articles', 'UX Challenges', 'Design Tools', '2024 Survey'].map((item, idx) => (
            <a
              key={idx}
              href="#"
              className="footer-hover text-white transition-colors duration-200 hover:brightness-150"
            >
              {item}
            </a>
          ))}
        </div>
         {/* Magnetic Dots Grid */}
        <div className="relative mb-10 h-40 overflow-hidden">
        </div>
        {/* Lower Nav */}
        <div
          ref={(el) => { if (el) sectionsRef.current[1] = el; }}
          className="flex flex-wrap justify-between items-center border-t border-gray-700 pt-6 text-xs text-gray-500"
        >
          <div className="flex flex-wrap space-x-4 mb-2 sm:mb-0">
            {['About', 'Newsletter', 'Community', 'Media Kit', 'Privacy'].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="footer-hover text-white transition-colors duration-200 hover:brightness-150"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex space-x-4">
            {['X/Twitter', 'YouTube', 'LinkedIn', 'Instagram'].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="footer-hover text-white transition-colors duration-200 hover:brightness-150"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div
          ref={(el) => { if (el) sectionsRef.current[2] = el; }}
          className="flex justify-between items-center mt-6 text-gray-600"
        >
          <p>&copy; 2017 – {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          <button className="border border-white px-4 py-1 text-white hover:bg-white hover:text-gray-900 transition">
            Read Manifesto
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
