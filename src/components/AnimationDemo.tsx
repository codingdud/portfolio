import { motion } from 'framer-motion';

export default function AnimationDemo() {
  return (
    <div className="p-6 bg-surface-1 rounded-card">
      <motion.div
        className="w-24 h-24 bg-accent rounded-lg mx-auto"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
