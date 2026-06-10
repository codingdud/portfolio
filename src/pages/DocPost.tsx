import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiArrowUp } from 'react-icons/fi';
import { MDXProvider } from '@mdx-js/react';
import { mdxComponents } from '../components/MDXComponents';

function DocPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [DocComponent, setDocComponent] = useState<React.ComponentType | null>(null);
  const [frontmatter, setFrontmatter] = useState<{ title: string } | null>(null);

  useEffect(() => {
    async function loadDoc() {
      try {
        const module = await import(`../content/docs/${slug}.mdx`);
        setDocComponent(() => module.default);
        setFrontmatter(module.frontmatter);
      } catch (error) {
        console.error('Failed to load doc:', error);
      }
    }

    loadDoc();
  }, [slug]);

  if (!DocComponent || !frontmatter) return <div>Loading...</div>;

  return (
    <div>
      <motion.button
        onClick={() => navigate(-1)}
        className="sticky top-18 bg-surface-1 hover:bg-surface-2 text-ink p-3 rounded-full shadow-lg transition-colors duration-300 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Go back"
      >
        <FiArrowLeft/>
      </motion.button>
      <motion.article
        className="doc-content prose prose-invert max-w-none"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h1>{frontmatter.title}</h1>
        <MDXProvider components={mdxComponents}>
          <DocComponent />
        </MDXProvider>
      </motion.article>

      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="sticky bottom-8 left-full bg-surface-1 hover:bg-surface-2 text-ink p-3 rounded-full shadow-lg transition-colors duration-300 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <FiArrowUp/>
      </motion.button>
    </div>
  );
}

export default DocPost;
