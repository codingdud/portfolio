import { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { smoothTransition, bounceTransition, staggerContainerFast } from '../../utils/animations';
import type { Variants } from 'framer-motion';

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    title: "Junior Software Intern",
    company: "EPAM Systems",
    period: "June 2025 – Oct 2025",
    location: "Bengaluru",
    achievements: [
      "Took ownership of backend performance optimization initiative, collaborating with my teams to reduce average API latency from ~650ms to ~450ms (30% improvement).",
      "Reduced initial page load time from 3.2s to 2.1s (34% improvement) using code-splitting, memoization, and bundle size optimization.",
      "Contributed to Docker-based CI/CD pipelines and microservices architecture, ensuring reliable deployments and high system availability in Agile sprint cycles.",
      "Engineered and optimised Jenkins CI/CD pipeline on AWS EC2, implementing abort rules for stale builds and caching npm dependencies across pipeline stages, reducing overall build time significantly.",
      "Configured automated customer-install PR review workflow, enabling structured code review gates on every pull request to maintain code quality and deployment standards.",
      "Implemented per-PR preview environments in GitLab, automatically generating live preview links on each pull request to allow stakeholders to review current content before merging.",
    ]
  },
  {
    title: "Software Developer Intern",
    company: "Sasken",
    period: "Feb 2025 – May 2025",
    location: "Bengaluru",
    achievements: [
      "Implemented and optimized AOSP's img2simg tool using Rust, improving system image conversion efficiency by 30-25%",
      "Implemented automated testing frameworks, reducing manual testing efforts by 40%"
    ]
  },
  {
    title: "React Developer Intern",
    company: "ATG",
    period: "Jun 2024 – Aug 2024",
    location: "Remote",
    achievements: [
      "Developed and optimized Android applications, including TechLearn (EdTech platform)",
      "Contributed to UI/UX improvements and API integration for seamless user experience",
      "Collaborated with cross-functional teams to enhance app performance and scalability"
    ]
  },
  {
    title: "Salesforce Developer Intern",
    company: "Salesforce",
    period: "Nov 2023 – Jan 2024",
    location: "Remote",
    achievements: [
      "Engineered 5+ customized Salesforce applications using Apex, Visualforce, and Lightning Web Components",
      "Conducted comprehensive testing of Batch Apex functionalities, ensuring 99.9% data accuracy"
    ]
  }
];

const achievementItem: Variants = {
  hidden: { opacity: 0, x: 12 },
  visible: { opacity: 1, x: 0 },
};

const VISIBLE_COUNT = 3;

const AchievementList = ({ achievements }: { achievements: string[] }) => {
  const [expanded, setExpanded] = useState(false);
  const visible = achievements.slice(0, VISIBLE_COUNT);
  const hidden = achievements.slice(VISIBLE_COUNT);

  return (
    <>
      <motion.ul
        className="space-y-2.5"
        variants={staggerContainerFast}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {visible.map((achievement) => (
          <motion.li
            key={achievement}
            className="text-ink-muted text-[14px] leading-relaxed flex items-start gap-3"
            variants={achievementItem}
            transition={smoothTransition}
          >
            <span className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0 bg-gradient-to-br from-accent to-violet-500" />
            {achievement}
          </motion.li>
        ))}
      </motion.ul>

      {hidden.length > 0 && (
        <>
          <AnimatePresence>
            {expanded && (
              <motion.ul
                className="space-y-2.5 mt-2.5 overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                {hidden.map((achievement) => (
                  <li
                    key={achievement}
                    className="text-ink-muted text-[14px] leading-relaxed flex items-start gap-3"
                  >
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0 bg-gradient-to-br from-violet-500 to-pink-500" />
                    {achievement}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-accent text-xs font-medium mt-3 cursor-pointer bg-transparent border-none hover:opacity-80 transition-opacity duration-200"
          >
            {expanded ? '− Show less' : `+ ${hidden.length} more`}
          </button>
        </>
      )}
    </>
  );
};

const TimelineEntry = ({ exp }: { exp: Experience }) => {
  return (
    <div className="relative grid grid-cols-[32px_1fr] md:grid-cols-[200px_56px_1fr]">
      {/* Sticky company/period label — desktop only */}
      <div className="hidden md:block md:sticky md:top-28 self-start text-right pr-6 pt-1">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={smoothTransition}
        >
          <h3 className="text-ink font-semibold text-lg tracking-tight">{exp.company}</h3>
          <p className="text-ink-muted text-xs mt-1">{exp.period}</p>
          <p className="text-ink-muted/70 text-xs">{exp.location}</p>
        </motion.div>
      </div>

      {/* Node on the beam */}
      <div className="relative">
        <motion.div
          className="absolute left-0 md:left-[19px] top-1.5 w-4 h-4 rounded-full bg-canvas border-2 border-accent flex items-center justify-center z-10"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={bounceTransition}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        </motion.div>
        {/* One-shot pulse ring */}
        <motion.div
          className="absolute left-0 md:left-[19px] top-1.5 w-4 h-4 rounded-full border border-accent z-0"
          initial={{ scale: 1, opacity: 0 }}
          whileInView={{ scale: [1, 2.2], opacity: [0.7, 0] }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        />
      </div>

      {/* Card */}
      <motion.div
        className="card-surface"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ type: 'spring', stiffness: 90, damping: 20 }}
        whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
      >
        {/* Mobile header — company/period (sticky column hidden) */}
        <div className="md:hidden mb-3">
          <h3 className="text-ink font-semibold text-lg tracking-tight">{exp.company}</h3>
          <p className="text-ink-muted text-xs mt-0.5">{exp.period} · {exp.location}</p>
        </div>

        <p className="text-ink font-bold text-lg tracking-tight mb-4">{exp.title}</p>

        <AchievementList achievements={exp.achievements} />
      </motion.div>
    </div>
  );
};

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 60%', 'end 60%'],
  });
  const beamScale = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section className="py-24">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={smoothTransition}
      >
        <h2 className="section-heading mb-2">Professional Experience</h2>
        <p className="text-ink-muted text-sm">
          {experiences.length} roles · 2023 — 2025
        </p>
      </motion.div>

      <div ref={sectionRef} className="relative">
        {/* Beam track */}
        <div className="absolute left-[7px] md:left-[226px] top-1.5 bottom-0 w-[2px] bg-hairline-soft rounded-full" />
        {/* Animated gradient fill */}
        <motion.div
          className="absolute left-[7px] md:left-[226px] top-1.5 bottom-0 w-[2px] origin-top rounded-full bg-gradient-to-b from-accent via-violet-500 to-pink-500"
          style={{ scaleY: beamScale, boxShadow: '0 0 12px rgba(0, 153, 255, 0.45)' }}
        />

        <div className="space-y-16">
          {experiences.map((exp) => (
            <TimelineEntry key={exp.company} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
