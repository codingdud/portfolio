import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/ai';
import { FiAlertCircle, FiMap } from 'react-icons/fi';
import SearchBar from '../components/SearchBar';
import * as FaIcons from 'react-icons/fa';
import { fadeUp, staggerContainer, smoothTransition } from '../utils/animations';

interface MindMapDoc {
  slug: string;
  frontmatter: {
    title?: string;
    icon?: string;
    image?: string;
    raw?: string;
    tags?: string[];
  };
}

const Constellation = () => (
  <svg
    className="absolute top-0 right-0 w-[420px] h-[220px] text-accent opacity-10 pointer-events-none select-none"
    viewBox="0 0 420 220"
    fill="none"
  >
    <line x1="60" y1="60" x2="180" y2="30" stroke="currentColor" strokeWidth="1" />
    <line x1="180" y1="30" x2="290" y2="90" stroke="currentColor" strokeWidth="1" />
    <line x1="290" y1="90" x2="380" y2="40" stroke="currentColor" strokeWidth="1" />
    <line x1="180" y1="30" x2="220" y2="150" stroke="currentColor" strokeWidth="1" />
    <line x1="290" y1="90" x2="220" y2="150" stroke="currentColor" strokeWidth="1" />
    <line x1="60" y1="60" x2="110" y2="170" stroke="currentColor" strokeWidth="1" />
    <line x1="110" y1="170" x2="220" y2="150" stroke="currentColor" strokeWidth="1" />
    <circle cx="60" cy="60" r="4" fill="currentColor" />
    <circle cx="180" cy="30" r="5" fill="currentColor" />
    <circle cx="290" cy="90" r="4" fill="currentColor" />
    <circle cx="380" cy="40" r="3" fill="currentColor" />
    <circle cx="220" cy="150" r="5" fill="currentColor" />
    <circle cx="110" cy="170" r="3" fill="currentColor" />
  </svg>
);

const MindMapList: React.FC = () => {
  const [mindmaps, setMindmaps] = useState<MindMapDoc[]>([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function loadMindmaps() {
      const mindmapModules = import.meta.glob('../content/mindmap/*.mdx');
      const loaded: MindMapDoc[] = [];

      for (const [path, module] of Object.entries(mindmapModules)) {
        const mod = await module();
        const slug = path.split('/').pop()!.replace('.mdx', '');
        loaded.push({ slug, frontmatter: (mod as any).frontmatter });
      }

      setMindmaps(loaded);
    }

    loadMindmaps();
  }, []);

  const filteredMindmaps = mindmaps.filter(
    (map) =>
      (map.frontmatter.title || map.frontmatter.raw || '').toLowerCase().includes(search.toLowerCase()) ||
      map.frontmatter.tags?.some((tag) =>
        tag.toLowerCase().includes(search.toLowerCase())
      )
  );

  const renderIcon = (iconName?: string, className = 'text-2xl') => {
    if (!iconName) return <FiMap className={`text-ink ${className}`} />;
    const FiIconComp = (FiIcons as Record<string, React.ComponentType<{ className?: string }>>)[iconName];
    if (FiIconComp) return <FiIconComp className={`text-ink ${className}`} />;
    const FaIconComp = (FaIcons as Record<string, React.ComponentType<{ className?: string }>>)[iconName];
    if (FaIconComp) return <FaIconComp className={`text-ink ${className}`} />;
    return <FiMap className={`text-ink ${className}`} />;
  };

  const handleCardClick = (slug: string) => {
    navigate(`/mindmap/${slug}`);
  };

  return (
    <div className="min-h-screen bg-canvas text-ink relative">
      <Constellation />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={smoothTransition}
        >
          <h1 className="text-ink font-medium tracking-tight" style={{ fontSize: 'clamp(36px, 5vw, 56px)', letterSpacing: '-2px' }}>
            Mind Maps
          </h1>
          <p className="text-ink-muted text-base mt-2">
            Visual knowledge, mapped — {mindmaps.length} maps
          </p>
        </motion.div>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...smoothTransition, delay: 0.1 }}
        >
          <SearchBar onSearch={setSearch} placeholder="Search Mind Maps..." />
        </motion.div>

        {filteredMindmaps.length === 0 ? (
          <div className="flex flex-col items-center text-ink-muted mt-20">
            <FiAlertCircle className="text-6xl mb-4" />
            <p className="text-xl">No mind maps found.</p>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {filteredMindmaps.map((map) => (
              <motion.div
                key={map.slug}
                onClick={() => handleCardClick(map.slug)}
                className="group relative h-64 rounded-card-lg overflow-hidden cursor-pointer border border-hairline hover:border-accent/40 transition-colors duration-300"
                variants={fadeUp}
                transition={smoothTransition}
                whileHover={{
                  y: -4,
                  boxShadow: '0 12px 40px rgba(0, 153, 255, 0.12)',
                  transition: { type: 'spring', stiffness: 300, damping: 20 },
                }}
              >
                {/* Image / fallback */}
                {map.frontmatter.image ? (
                  <img
                    src={map.frontmatter.image}
                    alt={map.frontmatter.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-surface-1 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-surface-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      {renderIcon(map.frontmatter.icon, 'text-4xl')}
                    </div>
                  </div>
                )}

                {/* Bottom gradient + title overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Icon chip */}
                <div className="absolute top-4 left-4 w-10 h-10 rounded-md bg-black/50 backdrop-blur-sm border border-white/15 flex items-center justify-center">
                  {renderIcon(map.frontmatter.icon, 'text-xl')}
                </div>

                {/* Title on image */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-ink font-bold text-xl tracking-tight leading-tight line-clamp-2 group-hover:text-accent transition-colors duration-300">
                    {map.frontmatter.title ||
                      map.frontmatter.raw?.split('\n')[0] ||
                      map.slug}
                  </h3>
                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    <span className="text-ink-muted text-xs uppercase tracking-wider">
                      Mind Map
                    </span>
                    {map.frontmatter.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] text-ink/75 bg-white/10 px-2 py-0.5 rounded-pill backdrop-blur-sm border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MindMapList;
