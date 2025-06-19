import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FiArrowLeft,FiArrowUp } from 'react-icons/fi';

import gsap from 'gsap';

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

  useEffect(() => {
    gsap.fromTo(
      '.post-content',
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }
    );
  }, [PostComponent]);

  if (!PostComponent || !frontmatter) return <div>Loading...</div>;

  return (
    <div className="relative">
      {/* Back Button (Bottom Left) */}
      <button
        onClick={() => navigate(-1)}
        className="sticky top-18 bg-gradient-to-r from-gray-700 to-gray-900 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 z-50"
        aria-label="Go back"
      >
        <FiArrowLeft/>
      </button>
      <article className="post-content prose prose-invert max-w-none">
        <h1>{frontmatter.title}</h1>
        <p className="text-gray-400 mb-4">Published on {frontmatter.date}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {frontmatter.tags.map((tag) => (
            <span key={tag} className="bg-blue-600 text-xs px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <PostComponent />
      </article>
      {/* Scroll to Top Button (Bottom Right) */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="sticky bottom-8 left-full  bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <FiArrowUp/>
      </button>
    </div>
  );
}

export default BlogPost;