import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiRust,
  SiReact,
  SiNodedotjs,
  SiDocker,
  SiTensorflow,
  SiNextdotjs,
  SiKubernetes,
} from 'react-icons/si';
import { fadeUp, staggerContainer, smoothTransition } from '../../utils/animations';
import type { IconType } from 'react-icons';

type Category = 'Languages' | 'Frameworks' | 'Tools';

interface Skill {
  name: string;
  icon: IconType;
  color: string;
  category: Category;
  details: string[];
}

const skills: Skill[] = [
  // Languages
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    category: "Languages",
    details: ["ES6+ Features", "Async/Await & Promises", "DOM & Web APIs", "Event Loop & Workers"]
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    category: "Languages",
    details: ["Advanced Type Systems", "Generics & Utility Types", "Strict Mode", "Type Guards"]
  },
  {
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
    category: "Languages",
    details: ["FastAPI & Flask", "Pandas & NumPy", "ML/AI Pipelines", "Automation Scripts"]
  },
  {
    name: "C/C++",
    icon: SiCplusplus,
    color: "#00599C",
    category: "Languages",
    details: ["DSA & Competitive", "SDL2 Game Dev", "STL Containers", "Memory Management", "Smart Pointers"]
  },
  {
    name: "Rust",
    icon: SiRust,
    color: "#CE422B",
    category: "Languages",
    details: ["Systems Programming", "Memory Safety", "AOSP img2simg Tool", "Concurrency"]
  },
  // Frameworks
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
    category: "Frameworks",
    details: ["Redux & State Mgmt", "Performance Optimization", "Custom Hooks", "Bundler Config"]
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#FFFFFF",
    category: "Frameworks",
    details: ["SSR & SSG", "API Routes", "App Router", "Image Optimization"]
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
    category: "Frameworks",
    details: ["Express REST APIs", "Middleware Chains", "Auth (JWT/OAuth)", "WebSockets"]
  },
  {
    name: "TensorFlow",
    icon: SiTensorflow,
    color: "#FF6F00",
    category: "Frameworks",
    details: ["Model Training", "Computer Vision", "NLP Pipelines", "PyTorch Interop"]
  },
  // Tools
  {
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED",
    category: "Tools",
    details: ["Multistage Builds", "Compose & Volumes", "Networking", "Docker Hub CI/CD"]
  },
  {
    name: "Kubernetes",
    icon: SiKubernetes,
    color: "#326CE5",
    category: "Tools",
    details: ["Pods & Affinity Rules", "StatefulSets", "Prometheus & Grafana", "Envoy Service Mesh", "Metadata & Log Collection"]
  },
];

const categories = [...new Set(skills.map(s => s.category))];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Languages');
  const [selected, setSelected] = useState<Skill | null>(null);

  const filtered = skills.filter(s => s.category === activeCategory);

  return (
    <section className="py-24">
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={smoothTransition}
      >
        Technical Skills
      </motion.h2>

      {/* Category Tabs */}
      <div className="flex justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => { setActiveCategory(cat); setSelected(null); }}
            className={`px-5 py-2 text-sm font-medium rounded-pill transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-ink text-canvas'
                : 'bg-surface-1 text-ink-muted hover:text-ink hover:bg-surface-2'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-[1fr_1fr] gap-8 items-start">
        {/* Left: Icon Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-3"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            {filtered.map((skill) => {
              const Icon = skill.icon;
              const isActive = selected?.name === skill.name;

              return (
                <motion.button
                  key={skill.name}
                  className={`flex flex-col items-center justify-center p-5 rounded-card transition-colors duration-200 cursor-pointer border ${
                    isActive
                      ? 'bg-surface-2 border-accent/30'
                      : 'bg-surface-1 border-transparent hover:bg-surface-2'
                  }`}
                  variants={fadeUp}
                  transition={smoothTransition}
                  whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelected(isActive ? null : skill)}
                >
                  <Icon className="w-8 h-8 mb-2" style={{ color: skill.color }} />
                  <span className="text-ink text-xs font-medium tracking-tight text-center">{skill.name}</span>
                </motion.button>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Right: Detail Panel */}
        <div className="min-h-[280px] flex items-start">
          <AnimatePresence mode="wait">
            {selected ? (
              <motion.div
                key={selected.name}
                className="w-full bg-surface-1 rounded-card p-6 border border-hairline"
                initial={{ opacity: 0, x: 20, scale: 0.97 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.97 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <selected.icon className="w-8 h-8" style={{ color: selected.color }} />
                  <div>
                    <h3 className="text-ink text-xl font-semibold tracking-tight">{selected.name}</h3>
                    <span className="text-ink-muted text-xs uppercase tracking-wider">{selected.category}</span>
                  </div>
                </div>
                <div className="border-t border-hairline-soft mt-4 pt-4">
                  <ul className="space-y-3">
                    {selected.details.map((detail, i) => (
                      <motion.li
                        key={detail}
                        className="text-ink-muted text-sm flex items-center gap-3"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.3 }}
                      >
                        <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: selected.color }} />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="placeholder"
                className="w-full bg-surface-1/50 rounded-card p-6 border border-dashed border-hairline flex items-center justify-center min-h-[280px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className="text-ink-muted text-sm text-center">
                  Select a skill to see details
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
