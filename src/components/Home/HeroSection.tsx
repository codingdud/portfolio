import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

// Register SplitText plugin
gsap.registerPlugin(SplitText);

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const bgGradientRef = useRef<HTMLDivElement>(null);
  const splitTextRef = useRef<SplitText | null>(null);

  useEffect(() => {
    // Ensure fonts are loaded to prevent layout shifts
    document.fonts.ready.then(() => {
      if (
        heroRef.current &&
        headingRef.current &&
        subheadingRef.current &&
        contactRef.current &&
        bgGradientRef.current
      ) {
        // Initialize SplitText for heading
        splitTextRef.current = new SplitText(headingRef.current, {
          type: 'words,chars',
          wordsClass: 'word++',
          charsClass: 'char++',
          autoSplit: true,
          aria: 'auto',
          mask: 'chars',
          onSplit: (self: SplitText) => {
            const tl = gsap.timeline();
            tl.from(self.chars, {
              y: 100,
              autoAlpha: 0,
              duration: 0.8,
              ease: 'power3.out',
              stagger: 0.03,
            });
            return tl;
          },
        });

        // Animate subheading and contact info
        gsap.fromTo(
          [subheadingRef.current, contactRef.current],
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.2,
            delay: 0.5,
          }
        );

        // Mouse interaction: Parallax effect on heading characters
        const chars = splitTextRef.current.chars as HTMLElement[];
        const handleMouseMove = (e: MouseEvent) => {
          const { clientX, clientY } = e;
          const { left, top, width, height } = heroRef.current!.getBoundingClientRect();
          const centerX = left + width / 2;
          const centerY = top + height / 2;
          const moveX = (clientX - centerX) / width;
          const moveY = (clientY - centerY) / height;

          // Parallax effect on characters
          chars.forEach((char: HTMLElement, index: number) => {
            gsap.to(char, {
              x: moveX * 20 * (1 - index / chars.length),
              y: moveY * 20 * (1 - index / chars.length),
              duration: 0.3,
              ease: 'power1.out',
            });
          });

          // Background gradient shift
          gsap.to(bgGradientRef.current!, {
            background: `radial-gradient(circle at ${(50 + moveX * 20)}% ${(50 + moveY * 20)}%, rgba(255,255,255,0.15), transparent 70%)`,
            duration: 0.5,
            ease: 'power1.out',
          });
        };

        // Reset parallax on mouse leave
        const handleMouseLeave = () => {
          gsap.to(chars, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.3)',
          });
          gsap.to(bgGradientRef.current!, {
            background: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15), transparent 70%)`,
            duration: 0.5,
            ease: 'power1.out',
          });
        };

        // Magnetic effect for contact items
        const contactItems = contactRef.current.querySelectorAll<
          HTMLSpanElement | HTMLAnchorElement
        >('span, a');
        // Declare handlers above forEach so they're available for cleanup
        const handleItemMouseMove = (e: MouseEvent) => {
          const item = e.currentTarget as HTMLElement;
          const { clientX, clientY } = e;
          const { left, top, width, height } = item.getBoundingClientRect();
          const centerX = left + width / 2;
          const centerY = top + height / 2;
          const moveX = (clientX - centerX) / width;
          const moveY = (clientY - centerY) / height;

          gsap.to(item, {
            x: moveX * 10,
            y: moveY * 10,
            scale: 1.05,
            color: '#ffffff',
            duration: 0.3,
            ease: 'power2.out',
          });
        };
        const handleItemMouseLeave = (e: MouseEvent) => {
          const item = e.currentTarget as HTMLElement;
          gsap.to(item, {
            x: 0,
            y: 0,
            scale: 1,
            color: '#d1d5db',
            duration: 0.3,
            ease: 'power2.out',
            onComplete: () => {
              gsap.set(item, { clearProps: 'all' });
            },
          });
        };
        contactItems.forEach((item) => {
          item.addEventListener('mousemove', handleItemMouseMove as EventListener);
          item.addEventListener('mouseleave', handleItemMouseLeave as EventListener);
          item.addEventListener('mouseenter', () =>
            gsap.to(item, { scale: 1.05, color: '#ffffff', duration: 0.3 })
          );
        });

        // Add mouse move and leave listeners to hero section
        heroRef.current.addEventListener('mousemove', handleMouseMove);
        heroRef.current.addEventListener('mouseleave', handleMouseLeave);

        // Cleanup
        return () => {
          heroRef.current?.removeEventListener('mousemove', handleMouseMove);
          heroRef.current?.removeEventListener('mouseleave', handleMouseLeave);
          contactItems.forEach((item) => {
            item.removeEventListener('mousemove', handleItemMouseMove as EventListener);
            item.removeEventListener('mouseleave', handleItemMouseLeave as EventListener);
            item.removeEventListener('mouseenter', () => {});
          });
          splitTextRef.current?.revert();
        };
      }
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative text-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16 px-4 sm:px-8 rounded-xl overflow-hidden min-h-[400px] flex items-center justify-center"
    >
      {/* Background gradient */}
      <div
        ref={bgGradientRef}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent_70%)] opacity-50"
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <h1
          ref={headingRef}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight"
          style={{ fontKerning: 'none', textRendering: 'optimizeSpeed' }}
        >
          Animesh Kumar
        </h1>
        <p
          ref={subheadingRef}
          className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200"
        >
          Software Developer & Full Stack Engineer
        </p>
        <div
          ref={contactRef}
          className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm sm:text-base text-gray-300"
        >
          <span className="flex items-center gap-2 hover:cursor-pointer">
            📞 +91 8863813462
          </span>
          <a
            href="mailto:2128117@kiit.ac.in"
            className="flex items-center gap-2 hover:cursor-pointer"
          >
            📧 2128117@kiit.ac.in
          </a>
          <a
            href="https://linkedin.com/in/animeshsysop"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:cursor-pointer"
          >
            💼 linkedin.com/animeshsysop
          </a>
          <a
            href="https://github.com/codingdud"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:cursor-pointer"
          >
            🔗 github.com/codingdud
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;