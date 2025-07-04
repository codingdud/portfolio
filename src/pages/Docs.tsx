import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar'; // Import your SearchBar component

export interface Doc {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    tags: string[];
  };
}

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

  const filteredDocs = docs.filter((doc) =>
    doc.frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Documentation</h1>
      <SearchBar onSearch={setSearchTerm} placeholder="Search Docs..."/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredDocs.map((doc) => (
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
