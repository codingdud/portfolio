import { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { FiArrowLeft,FiArrowUp } from 'react-icons/fi';
import { MDXProvider } from '@mdx-js/react';
import { mdxComponents } from '../components/MDXComponents';
import gsap from 'gsap';

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

  useEffect(() => {
    gsap.fromTo(
      '.doc-content',
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }
    );
  }, [DocComponent]);

  if (!DocComponent || !frontmatter) return <div>Loading...</div>;

  return (
    <div>
      {/* Back Button (Bottom Left) */}
      <button
        onClick={() => navigate(-1)}
        className="sticky top-18 bg-gradient-to-r from-gray-700 to-gray-900 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 z-50"
        aria-label="Go back"
      >
        <FiArrowLeft/>
      </button>
      <article className="doc-content prose prose-invert max-w-none">
        <h1>{frontmatter.title}</h1>
        <MDXProvider components={mdxComponents}>
          <DocComponent />
        </MDXProvider>
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

export default DocPost;