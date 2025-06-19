import { Link } from 'react-router-dom';
import type { Post } from '../pages/Blog';

interface BlogCardProps {
  post: Post;
}

function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
    >
      <h2 className="text-xl font-semibold mb-2">{post.frontmatter.title}</h2>
      <p className="text-gray-400 mb-2">{post.frontmatter.date}</p>
      <div className="flex flex-wrap gap-2">
        {post.frontmatter.tags.map((tag) => (
          <span
            key={tag}
            className="bg-blue-600 text-xs px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

export default BlogCard;