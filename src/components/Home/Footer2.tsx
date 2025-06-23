import React, { useEffect, useRef } from 'react';
import { useRelativeMouse } from '../../utils/useRelativeMouse';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement | null>(null);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  // Use the custom hook for mouse position
  const { mousePos, handleMouseMove, resetMouse } = useRelativeMouse();

  useEffect(() => {
    if (footerRef.current) {
      // Simple fade in animation
      footerRef.current.style.opacity = '0';
      footerRef.current.style.transform = 'translateY(20px)';
      setTimeout(() => {
        if (footerRef.current) {
          footerRef.current.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
          footerRef.current.style.opacity = '1';
          footerRef.current.style.transform = 'translateY(0)';
        }
      }, 100);
    }
  }, []);

  useEffect(() => {
    const animateDots = () => {
      dotsRef.current.forEach((dot) => {
        if (!dot || !footerRef.current) return;

        const rect = dot.getBoundingClientRect();
        const footerRect = footerRef.current.getBoundingClientRect();

        const dotX = rect.left + rect.width / 2 - footerRect.left;
        const dotY = rect.top + rect.height / 2 - footerRect.top;

        const deltaX = mousePos.x - dotX;
        const deltaY = mousePos.y - dotY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        // Magnetic effect - stronger when closer
        const maxDistance = 150;
        const strength = Math.max(0, (maxDistance - distance) / maxDistance);

        if (strength > 0) {
          const moveX = -(deltaX / distance) * strength * 30;
          const moveY = -(deltaY / distance) * strength * 30;

          dot.style.transform = `translate(${moveX}px, ${moveY}px)`;
          dot.style.opacity = Math.min(1, 0.4 + strength * 0.6).toString();
        } else {
          dot.style.transform = 'translate(0, 0)';
          dot.style.opacity = '0.4';
        }
      });

      animationFrameRef.current = requestAnimationFrame(animateDots);
    };

    if (mousePos.x !== 0 || mousePos.y !== 0) {
      animateDots();
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePos]);

  return (
    <footer
      ref={footerRef}
      className="text-gray-100 font-mono text-xs uppercase tracking-wider py-10 px-6 relative overflow-hidden"
      onMouseMove={e => handleMouseMove(e, footerRef as React.RefObject<HTMLElement>)}
      onMouseLeave={resetMouse}
    >
      <div className="max-w mx-auto relative z-10">
        {/* Top Menu */}
        <div className="flex justify-center space-x-10 mb-1">
          {['Articles', 'Design Challenges', 'Tools Database', '2024 Survey'].map((item, idx) => (
            <a key={idx} href="#" className="hover:text-white transition-colors duration-200">
              {item}
            </a>
          ))}
        </div>

        {/* Magnetic Dots Grid */}
        <div className="relative mb-10 h-80 overflow-hidden">
          <div className="grid grid-cols-40 gap-1 place-items-center absolute inset-0 p-4">
            {Array.from({ length: 400 }).map((_, i) => (
              <div
                key={i}
                ref={(el) => { dotsRef.current[i] = el; }}
                className="w-1 h-1 bg-purple-400 rounded-full transition-all duration-75 ease-out"
                style={{ opacity: 0.4 }}
              />
            ))}
          </div>
        </div>

        {/* Lower Nav */}
        <div className="flex flex-wrap justify-between items-center text-gray-500 border-t border-gray-700 pt-6">
          <div className="flex flex-wrap space-x-4 mb-2 sm:mb-0">
            {['About', 'Newsletter', 'Community', 'Media Kit', 'Privacy & Terms'].map((item, idx) => (
              <a key={idx} href="#" className="hover:text-white transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>
          <div className="flex space-x-4">
            {['X/Twitter', 'YouTube', 'LinkedIn', 'Instagram', 'TikTok'].map((item, idx) => (
              <a key={idx} href="#" className="hover:text-white transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex justify-between items-center mt-6">
          <p className="text-gray-600">
            &copy; 2025 – {new Date().getFullYear()} Design Tools. All rights reserved.
          </p>
          <button className="border border-white px-3 py-1 text-white hover:bg-white hover:text-black transition-all duration-200">
            blog
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;