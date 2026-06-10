import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { smoothTransition } from '../../utils/animations';

import accommodation from '../../assets/project_image/accommodation.png';
import webgen from '../../assets/project_image/webgen.png';
import algo from '../../assets/project_image/algo.png';
import coolicons from '../../assets/project_image/coolicons.png';
import etl from '../../assets/project_image/etl.png';
import formeassy from '../../assets/project_image/formeassy.png';
import photoflow from '../../assets/project_image/photoflow.png';
import photoseekai from '../../assets/project_image/photoseekai.png';
import feedback from '../../assets/project_image/feedback.png';
import uilibexp from '../../assets/project_image/uilibexp.png';

type Project = {
  title: string;
  date: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  image?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "React UI Library Picker",
    date: "August 2025",
    description: "A modern, responsive web application for discovering and comparing React UI component libraries. Built with React, TypeScript, and Tailwind CSS.",
    tags: ["React", "Tailwind", "radix-ui", "Framer Motion"],
    github: "https://github.com/GoodCode-Society/ui-library-explorer",
    live: "https://ui-library-explorer.vercel.app/",
    image: uilibexp,
    featured: true,
  },
  {
    title: "WebGen",
    date: "January 2025",
    description: "Web-based Asset Generation Application for creating digital assets including backgrounds, headers, and icons.",
    tags: ["React", "Redux", "Node", "Typescript"],
    github: "https://github.com/codingdud/webgen",
    live: "https://webgen-seven.vercel.app",
    image: webgen,
    featured: true,
  },
  {
    title: "Student Accommodation Finder",
    date: "April 2024",
    description: "Platform serving 500+ students with geospatial data integration and responsive React.js UI.",
    tags: ["React.js", "Node.js", "Redux", "Geospatial"],
    github: "https://github.com/codingdud/minor-project",
    live: "https://stayhub.animeshk.me/",
    image: accommodation,
  },
  {
    title: "Form Easy",
    date: "December 2023",
    description: "Scalable form management application processing 10,000+ API requests per week.",
    tags: ["React.js", "MongoDB", "Docker", "RESTful API"],
    github: "https://github.com/codingdud/Formease",
    live: "https://simpform.vercel.app",
    image: formeassy,
  },
  {
    title: "ETL Streamlit App",
    date: "December 2024",
    description: "Allows users to search, download, transform, and analyze data files with integrated AI capabilities.",
    tags: ["Streamlit", "Pandas", "Excel"],
    github: "https://github.com/codingdud/etl-streamlit/tree/main/etl-app",
    live: "https://github.com/codingdud/etl-streamlit",
    image: etl,
  },
  {
    title: "AlgoDocHub",
    date: "December 2024",
    description: "A comprehensive resource for mastering algorithms and data structures.",
    tags: ["C++", "Algorithms", "DSA"],
    github: "https://github.com/codingdud/AlgoDocHub",
    live: "https://github.com/codingdud/AlgoDocHub/wiki",
    image: algo,
  },
  {
    title: "coolicons",
    date: "December 2024",
    description: "A lightweight, tree-shakeable icon library for React with full TypeScript support.",
    tags: ["Storybook", "SVG", "npm"],
    github: "https://github.com/codingdud/coolicons/tree/main",
    live: "https://github.com/codingdud/coolicons/pkgs/npm/coolicons",
    image: coolicons,
  },
  {
    title: "PhotoSeekAI",
    date: "December 2024",
    description: "Facial recognition and photo management API powered by machine learning.",
    tags: ["Flask", "Cloudinary", "PostgreSQL"],
    github: "https://github.com/codingdud/majorproject",
    live: "https://my-flask-app-latest-fbf3.onrender.com/api",
    image: photoseekai,
  },
  {
    title: "PhotoFlow",
    date: "December 2024",
    description: "UI design for a photo sharing social app built with React Native and Reanimated.",
    tags: ["React Native", "Reanimated"],
    github: "https://github.com/codingdud/PhotoFlow",
    live: "https://github.com/codingdud/PhotoFlow/releases/tag/beta",
    image: photoflow,
  },
  {
    title: "Feedback System",
    date: "June 2025",
    description: "A lightweight feedback system for managers and employees built with Next.js and FastAPI.",
    tags: ["Next.js", "FastAPI", "SQLite"],
    github: "https://feedback-system-peach-two.vercel.app/",
    live: "https://github.com/codingdud/feedback-system",
    image: feedback,
  }
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleHoverStart = () => {
    setIsHovered(true);
    cardRef.current?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative w-[820px] rounded-card-lg overflow-hidden shrink-0 snap-start"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ ...smoothTransition, delay: Math.min(index * 0.08, 0.4) }}
      whileHover={{ scale: 1.12, transition: { type: 'spring', stiffness: 200, damping: 18 } }}
      onHoverStart={handleHoverStart}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Image + card scale together as one unit */}
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto block"
          draggable={false}
        />
      ) : (
        <div className="w-full aspect-video bg-surface-2" />
      )}

      {/* Ambient top darkening — keeps top of image from blowing out */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-transparent" />

      {/* Dynamic text block — gradient grows upward with content */}
      <div className="absolute bottom-0 left-0 right-0 px-5 pb-5 pt-16 bg-gradient-to-t from-black/96 via-black/85 to-transparent">

        {/* Date */}
        <p className="text-ink/45 text-[10px] uppercase tracking-widest mb-2">
          {project.date}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] text-ink/70 bg-white/10 px-2 py-0.5 rounded-pill border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-ink font-bold tracking-tight leading-tight mb-2 text-base">
          {project.title}
        </h3>

        {/* Description — reveals on hover, sized to content */}
        <AnimatePresence>
          {isHovered && (
            <motion.p
              className="text-ink/65 leading-relaxed overflow-hidden text-xs line-clamp-3"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {project.description}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Links */}
        <div className="flex gap-2 mt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/12 hover:bg-white/22 text-ink text-xs font-medium rounded-pill backdrop-blur-sm border border-white/15 transition-colors duration-200 no-underline"
            >
              <FiGithub className="w-3.5 h-3.5" /> Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-ink text-canvas text-xs font-medium rounded-pill transition-colors duration-200 no-underline hover:opacity-90"
            >
              <FiExternalLink className="w-3.5 h-3.5" /> Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });
  const isPaused = useRef(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const tick = () => {
      if (!isPaused.current) {
        el.scrollLeft += 0.8;
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
          el.scrollLeft = 0;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section id="projects" className="py-24">
      {/* Header */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={smoothTransition}
      >
        <h2 className="section-heading mb-3">Projects</h2>
        <p className="text-ink-muted text-sm">Scroll to explore →</p>
      </motion.div>

      {/* Scroll track */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-canvas to-transparent pointer-events-none z-20" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-canvas to-transparent pointer-events-none z-20" />

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-scroll scrollbar-hide px-8 py-10"
          onMouseEnter={() => { isPaused.current = true; }}
          onMouseLeave={() => { isPaused.current = false; }}
          onTouchStart={() => { isPaused.current = true; }}
          onTouchEnd={() => { isPaused.current = false; }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
          <div className="shrink-0 w-4" />
        </div>
      </div>

      {/* Scroll progress */}
      <div className="mt-5 mx-4 h-[2px] bg-surface-2 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-accent rounded-full origin-left"
          style={{ scaleX: scrollXProgress }}
        />
      </div>

      <motion.p
        className="text-ink-muted text-xs text-center mt-3 uppercase tracking-wider"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        {projects.length} Projects
      </motion.p>
    </section>
  );
};

export default ProjectsSection;
