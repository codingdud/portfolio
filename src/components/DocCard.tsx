import { Link } from 'react-router-dom';
import type { Doc } from '../pages/Docs';

interface DocCardProps {
  doc: Doc;
}

function DocCard({ doc }: DocCardProps) {
  return (
    <Link
      to={`/docs/${doc.slug}`}
      className="block card-surface"
    >
      <h2 className="text-ink text-xl font-semibold mb-2">{doc.frontmatter.title}</h2>
      <p className="text-ink-muted text-sm mb-3">{doc.frontmatter.date}</p>
      <div className="flex flex-wrap gap-2">
        {doc.frontmatter.tags.map((tag: string) => (
          <span
            key={tag}
            className="bg-surface-2 text-ink text-xs px-3 py-1 rounded-pill"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

export default DocCard;
