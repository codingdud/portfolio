import { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import SearchBar from '../components/SearchBar';

export interface Post {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    tags: string[];
  };
  default: React.ComponentType;
}

function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function loadPosts() {
      const postModules = import.meta.glob('../content/posts/*.mdx');
      const loadedPosts: Post[] = [];

      for (const [path, module] of Object.entries(postModules)) {
        const mod = await module();
        const slug = path.split('/').pop()!.replace('.mdx', '');
        loadedPosts.push({ slug, ...(mod as any) });
      }

      setPosts(loadedPosts);
    }

    loadPosts();
  }, []);

  const filteredPosts = posts.filter(
    (post) =>
      post.frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.frontmatter.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Blog</h1>
      <SearchBar onSearch={setSearchTerm} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Blog;