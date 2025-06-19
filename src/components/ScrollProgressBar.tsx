// src/components/common/ScrollProgressBar.tsx
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const ScrollProgressBar = () => {
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      start: 0,
      end: () => document.documentElement.scrollHeight - window.innerHeight,
      onUpdate: (self) => {
        if (progressBarRef.current) {
          progressBarRef.current.style.width = `${self.progress * 100}%`;
        }
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-[9999]">
      <div className="h-1 w-full bg-gray-800/40 backdrop-blur-sm shadow-md">
        <div
          ref={progressBarRef}
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-150 ease-out rounded-r-full"
          style={{ width: '0%' }}
        />
      </div>
    </div>
  );
};

export default ScrollProgressBar;
