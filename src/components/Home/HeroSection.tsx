import { useState, useEffect, useRef } from 'react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from 'framer-motion';
import { FiChevronDown, FiArrowUpRight } from 'react-icons/fi';

const NAME = 'Animesh Kumar';

const roles = [
  'Software Developer',
  'Full Stack Engineer',
  'DevOps Enthusiast',
  'Open Source Builder',
];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [roleIdx, setRoleIdx] = useState(0);

  // Rotating role text
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIdx((i) => (i + 1) % roles.length);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  // Mouse-follow spotlight
  const mx = useMotionValue(-600);
  const my = useMotionValue(-600);
  const sx = useSpring(mx, { damping: 30, stiffness: 200 });
  const sy = useSpring(my, { damping: 30, stiffness: 200 });
  const spotlight = useMotionTemplate`radial-gradient(600px at ${sx}px ${sy}px, rgba(0, 153, 255, 0.07), transparent 80%)`;

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="grain-overlay bg-canvas min-h-[85vh] flex flex-col items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Ambient drifting orbs */}
      <motion.div
        className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-accent/15 blur-[120px] pointer-events-none"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-32 -right-20 w-[450px] h-[450px] rounded-full bg-violet-600/12 blur-[120px] pointer-events-none"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Mouse spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{ background: spotlight }}
      />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Status pill */}
        <motion.div
          className="inline-flex items-center gap-2 bg-surface-1 border border-hairline rounded-pill px-4 py-1.5 mb-8"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-success"
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span className="text-ink-muted text-xs font-medium tracking-wide">
            Available for work
          </span>
        </motion.div>

        {/* Per-character name reveal */}
        <h1 className="display-hero" style={{ perspective: '800px' }}>
          {NAME.split('').map((char, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ opacity: 0, y: 80, rotateX: 90, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
              transition={{
                type: 'spring',
                damping: 18,
                stiffness: 120,
                delay: 0.3 + i * 0.04,
              }}
            >
              {char === ' ' ? ' ' : char}
            </motion.span>
          ))}
        </h1>

        {/* Rotating role */}
        <motion.div
          className="mt-6 h-9 md:h-10 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={roles[roleIdx]}
              className="block text-ink-muted text-lg md:text-2xl tracking-tight"
              initial={{ y: 24, opacity: 0, filter: 'blur(6px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              exit={{ y: -24, opacity: 0, filter: 'blur(6px)' }}
              transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {roles[roleIdx]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex items-center justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.a
            href="#projects"
            className="btn-primary px-8 py-3 text-base group"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
            <FiArrowUpRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
          <motion.a
            href="https://github.com/codingdud"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-8 py-3 text-base"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiChevronDown className="w-5 h-5 text-ink-muted/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
