import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Doc {
  slug: string;
  frontmatter: {
    title: string;
  };
}

function Docs() {
  const [docs, setDocs] = useState<Doc[]>([]);

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

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Documentation</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {docs.map((doc) => (
          <Link
            key={doc.slug}
            to={`/docs/${doc.slug}`}
            className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
          >
            <h2 className="text-xl font-semibold">{doc.frontmatter.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Docs;