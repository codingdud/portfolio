import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiFileText } from 'react-icons/fi';
import * as SiIcons from 'react-icons/si';
import type { IconType } from 'react-icons';
import SearchBar from '../components/SearchBar';
import { fadeUp, staggerContainer, smoothTransition } from '../utils/animations';

export interface Doc {
  slug: string;
  frontmatter: {
    title: string;
    description?: string;
    date?: string;
    tags?: string[];
    icon?: string;
    iconColor?: string;
  };
}

const iconFor = (frontmatter: Doc['frontmatter']): { Icon: IconType; color: string } => {
  const color = frontmatter.iconColor || '#999999';
  if (frontmatter.icon) {
    const Icon = (SiIcons as Record<string, IconType>)[frontmatter.icon];
    if (Icon) return { Icon, color };
  }
  return { Icon: FiFileText, color };
};

const formatDate = (date?: string) =>
  date ? new Date(date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : '—';

function Docs() {
  const [docs, setDocs] = useState<Doc[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function loadDocs() {
      const docModules = import.meta.glob('../content/docs/*.mdx');
      const loadedDocs: Doc[] = [];

      for (const [path, module] of Object.entries(docModules)) {
        const mod = await module();
        const slug = path.split('/').pop()!.replace('.mdx', '');
        loadedDocs.push({ slug, frontmatter: (mod as any).frontmatter });
      }

      setDocs(loadedDocs);
    }

    loadDocs();
  }, []);

  const filteredDocs = docs.filter(
    (doc) =>
      doc.frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.frontmatter.tags?.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div>
      {/* Terminal prompt header */}
      <motion.div
        className="mb-10 font-mono"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={smoothTransition}
      >
        <div className="flex items-center gap-2 text-lg md:text-2xl">
          <span className="text-success">~/docs</span>
          <span className="text-ink-muted">$</span>
          <span className="text-ink">ls -la guides/</span>
          <motion.span
            className="inline-block w-[10px] h-[1.2em] bg-ink align-middle"
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        </div>
        <p className="text-ink-muted text-sm mt-3 font-body">
          Hands-on guides &amp; references — {docs.length} entries
        </p>
      </motion.div>

      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...smoothTransition, delay: 0.1 }}
      >
        <SearchBar onSearch={setSearchTerm} placeholder="Search Docs..." />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {filteredDocs.map((doc) => {
          const { Icon, color } = iconFor(doc.frontmatter);
          return (
            <motion.div
              key={doc.slug}
              variants={fadeUp}
              transition={smoothTransition}
              whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
            >
              <Link
                to={`/docs/${doc.slug}`}
                className="block bg-surface-1 rounded-card border border-hairline hover:border-accent/40 transition-colors duration-300 overflow-hidden no-underline group"
              >
                {/* Terminal title bar */}
                <div className="flex items-center gap-2 px-4 py-2.5 bg-surface-2 border-b border-hairline-soft">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  <span className="text-ink-muted text-xs font-mono ml-2 truncate">
                    $ man {doc.slug}
                  </span>
                </div>

                {/* Body */}
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <Icon className="w-9 h-9 shrink-0 mt-0.5" style={{ color }} />
                    <div className="min-w-0">
                      <h2 className="text-ink font-semibold text-lg tracking-tight leading-snug group-hover:text-accent transition-colors duration-300">
                        {doc.frontmatter.title}
                      </h2>
                      {doc.frontmatter.description && (
                        <p className="text-ink-muted text-xs leading-relaxed mt-2 line-clamp-2">
                          {doc.frontmatter.description}
                        </p>
                      )}
                      {doc.frontmatter.tags && (
                        <p className="text-ink-muted/70 text-[11px] font-mono mt-2.5 truncate">
                          {doc.frontmatter.tags.map((t) => `#${t}`).join('  ')}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* ls -l footer */}
                  <div className="flex items-center justify-between mt-5 pt-3 border-t border-hairline-soft font-mono text-[11px] text-ink-muted/70">
                    <span>drwxr--r--</span>
                    <span>updated {formatDate(doc.frontmatter.date)}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>

      {filteredDocs.length === 0 && (
        <p className="text-ink-muted font-mono text-sm text-center py-20">
          ls: no matches found
        </p>
      )}
    </div>
  );
}

export default Docs;
