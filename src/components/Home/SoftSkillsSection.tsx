import { motion } from 'framer-motion';
import { smoothTransition } from '../../utils/animations';

const softSkills = [
  { name: "Problem Resolution", icon: "🔧" },
  { name: "Data-Driven Decisions", icon: "📊" },
  { name: "Organized Workflow", icon: "📋" },
  { name: "Technology Integration", icon: "⚡" },
  { name: "Collaborative Teamwork", icon: "🤝" },
  { name: "Time Management", icon: "⏰" },
  { name: "Creative Solutions", icon: "💡" },
  { name: "User-Centric Design", icon: "👥" },
];

const MarqueeRow = ({ reverse = false }: { reverse?: boolean }) => {
  const items = [...softSkills, ...softSkills];

  return (
    <div className="relative overflow-hidden py-2 group">
      <div
        className={`flex gap-4 w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} group-hover:[animation-play-state:paused]`}
      >
        {items.map((skill, i) => (
          <div
            key={i}
            className="flex items-center gap-3 bg-surface-1 border border-hairline px-5 py-3 rounded-pill whitespace-nowrap hover:bg-surface-2 hover:border-accent/30 transition-colors duration-200"
          >
            <span className="text-lg">{skill.icon}</span>
            <span className="text-ink text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const SoftSkillsSection = () => {
  return (
    <section className="py-24">
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={smoothTransition}
      >
        Core Competencies
      </motion.h2>

      <motion.div
        className="space-y-4 w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <MarqueeRow />
        <MarqueeRow reverse />
      </motion.div>

      <motion.p
        className="text-ink-muted text-xs text-center mt-6 uppercase tracking-wider"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        Hover to pause
      </motion.p>
    </section>
  );
};

export default SoftSkillsSection;
