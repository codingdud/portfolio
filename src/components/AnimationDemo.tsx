import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function AnimationDemo() {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(boxRef.current, {
      rotation: 360,
      scale: 1.2,
      duration: 2,
      ease: 'power2.inOut',
    })
      .to(boxRef.current, {
        x: 100,
        duration: 1,
        ease: 'bounce.out',
      })
      .to(boxRef.current, {
        x: 0,
        duration: 1,
        ease: 'bounce.out',
      });
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div
        ref={boxRef}
        className="w-24 h-24 bg-blue-500 rounded-lg mx-auto"
      ></div>
    </div>
  );
}