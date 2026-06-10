import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import SearchBar from '../components/SearchBar';
import { fadeUp, staggerContainer, smoothTransition } from '../utils/animations';

export interface Post {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    tags: string[];
  };
  default: React.ComponentType;
}

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);

  useEffect(() => {
    async function loadPosts() {
      const postModules = import.meta.glob('../content/posts/*.mdx');
      const loadedPosts: Post[] = [];

      for (const [path, module] of Object.entries(postModules)) {
        const mod = await module();
        const slug = path.split('/').pop()!.replace('.mdx', '');
        loadedPosts.push({ slug, ...(mod as any) });
      }

      loadedPosts.sort(
        (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
      );
      setPosts(loadedPosts);
    }

    loadPosts();
  }, []);

  const allTags = useMemo(
    () => [...new Set(posts.flatMap((p) => p.frontmatter.tags))],
    [posts]
  );

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.frontmatter.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesTag = !activeTag || post.frontmatter.tags.includes(activeTag);
    return matchesSearch && matchesTag;
  });

  const [featured, ...rest] = filteredPosts;

  return (
    <div>
      {/* Header */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={smoothTransition}
      >
        <h1 className="text-ink font-medium tracking-tight" style={{ fontSize: 'clamp(36px, 5vw, 56px)', letterSpacing: '-2px' }}>
          Writing
        </h1>
        <p className="text-ink-muted text-base mt-2">
          Thoughts on engineering, systems &amp; tools — {posts.length} posts
        </p>
      </motion.div>

      {/* Search + tag filters */}
      <motion.div
        className="space-y-4 mb-12"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...smoothTransition, delay: 0.1 }}
      >
        <SearchBar onSearch={setSearchTerm} />
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTag(null)}
            className={`px-4 py-1.5 text-xs font-medium rounded-pill transition-all duration-200 cursor-pointer ${
              !activeTag
                ? 'bg-ink text-canvas'
                : 'bg-surface-1 text-ink-muted hover:text-ink hover:bg-surface-2'
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={`px-4 py-1.5 text-xs font-medium rounded-pill transition-all duration-200 cursor-pointer ${
                activeTag === tag
                  ? 'bg-ink text-canvas'
                  : 'bg-surface-1 text-ink-muted hover:text-ink hover:bg-surface-2'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </motion.div>

      {filteredPosts.length === 0 ? (
        <p className="text-ink-muted text-center py-20">No posts match your search.</p>
      ) : (
        <>
          {/* Featured — newest post */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...smoothTransition, delay: 0.15 }}
            >
              <Link
                to={`/blog/${featured.slug}`}
                className="group relative block card-surface !p-8 md:!p-10 mb-12 border border-hairline hover:border-accent/30 overflow-hidden no-underline"
              >
                {/* Accent gradient edge */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-violet-500 to-pink-500" />

                <span className="text-accent text-[11px] font-semibold uppercase tracking-[0.2em]">
                  Latest
                </span>
                <h2 className="text-ink font-bold tracking-tight mt-3 leading-tight group-hover:text-accent transition-colors duration-300"
                  style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', letterSpacing: '-1px' }}>
                  {featured.frontmatter.title}
                </h2>
                <div className="flex items-center gap-3 mt-5 flex-wrap">
                  <span className="text-ink-muted text-sm">{formatDate(featured.frontmatter.date)}</span>
                  <span className="text-ink-muted/40">·</span>
                  {featured.frontmatter.tags.map((tag) => (
                    <span key={tag} className="text-ink-muted text-xs bg-surface-2 px-2.5 py-0.5 rounded-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                <FiArrowUpRight className="absolute top-8 right-8 w-6 h-6 text-ink-muted transition-all duration-300 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </motion.div>
          )}

          {/* Editorial numbered rows */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {rest.map((post, i) => (
              <motion.div key={post.slug} variants={fadeUp} transition={smoothTransition}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex items-center gap-5 md:gap-8 py-6 px-3 md:px-5 border-b border-hairline-soft rounded-md hover:bg-surface-1 transition-colors duration-200 no-underline"
                >
                  <span className="text-ink-muted/30 font-mono text-2xl md:text-3xl font-light shrink-0 w-12">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-ink font-semibold text-base md:text-lg tracking-tight transition-transform duration-300 group-hover:translate-x-1.5">
                      {post.frontmatter.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                      {post.frontmatter.tags.slice(0, 4).map((tag) => (
                        <span key={tag} className="text-ink-muted text-[11px]">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="text-ink-muted text-xs shrink-0 hidden sm:block">
                    {formatDate(post.frontmatter.date)}
                  </span>
                  <FiArrowRight className="w-4 h-4 text-accent opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 shrink-0" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </>
      )}
    </div>
  );
}

export default Blog;
