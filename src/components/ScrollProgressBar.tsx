import { motion, useScroll } from 'framer-motion';

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed top-0 left-0 w-full z-[9999]">
      <div className="h-0.5 w-full bg-surface-1">
        <motion.div
          className="h-full bg-ink origin-left rounded-r-full"
          style={{ scaleX: scrollYProgress }}
        />
      </div>
    </div>
  );
};

export default ScrollProgressBar;
