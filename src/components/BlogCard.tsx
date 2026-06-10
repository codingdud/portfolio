import { Link } from 'react-router-dom';
import type { Post } from '../pages/Blog';

interface BlogCardProps {
  post: Post;
}

function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="block card-surface"
    >
      <h2 className="text-ink text-xl font-semibold mb-2">{post.frontmatter.title}</h2>
      <p className="text-ink-muted text-sm mb-3">{post.frontmatter.date}</p>
      <div className="flex flex-wrap gap-2">
        {post.frontmatter.tags.map((tag) => (
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

export default BlogCard;
