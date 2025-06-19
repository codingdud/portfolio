import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import gsap from 'gsap';

function DocPost() {
  const { slug } = useParams<{ slug: string }>();
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
    <article className="doc-content prose prose-invert max-w-none">
      <h1>{frontmatter.title}</h1>
      <DocComponent />
    </article>
  );
}

export default DocPost;