import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiArrowUp } from 'react-icons/fi';
import { MDXProvider } from '@mdx-js/react';
import { mdxComponents } from '../components/MDXComponents';

function BlogPost() {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  const [PostComponent, setPostComponent] = useState<React.ComponentType | null>(null);
  const [frontmatter, setFrontmatter] = useState<{ title: string; date: string; tags: string[] } | null>(null);

  useEffect(() => {
    async function loadPost() {
      try {
        const module = await import(`../content/posts/${slug}.mdx`);
        setPostComponent(() => module.default);
        setFrontmatter(module.frontmatter);
      } catch (error) {
        console.error('Failed to load post:', error);
      }
    }

    loadPost();
  }, [slug]);

  if (!PostComponent || !frontmatter) return <div>Loading...</div>;

  return (
    <div className="relative">
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
        className="post-content prose prose-invert max-w-none"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h1>{frontmatter.title}</h1>
        <p className="text-ink-muted mb-4">Published on {frontmatter.date}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {frontmatter.tags.map((tag) => (
            <span key={tag} className="bg-surface-2 text-ink text-xs px-3 py-1 rounded-pill">
              {tag}
            </span>
          ))}
        </div>
        <MDXProvider components={mdxComponents}>
          <PostComponent />
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

export default BlogPost;
