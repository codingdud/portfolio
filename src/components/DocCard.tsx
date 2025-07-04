import { Link } from 'react-router-dom';
import type { Doc } from '../pages/Docs';

interface DocCardProps {
  doc: Doc;
}

function DocCard({ doc }: DocCardProps) {
  return (
    <Link
      to={`/docs/${doc.slug}`}
      className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
    >
      <h2 className="text-xl font-semibold mb-2">{doc.frontmatter.title}</h2>
      <p className="text-gray-400 mb-2">{doc.frontmatter.date}</p>
      <div className="flex flex-wrap gap-2">
        {doc.frontmatter.tags.map((tag: string) => (
          <span
            key={tag}
            className="bg-green-600 text-xs px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

export default DocCard;
