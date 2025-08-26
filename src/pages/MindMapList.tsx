import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/ai';
import { FiAlertCircle, FiMap } from 'react-icons/fi';
import SearchBar from '../components/SearchBar';
import * as FaIcons from 'react-icons/fa';

interface MindMapDoc {
  slug: string;
  frontmatter: {
    title?: string;
    icon?: string;
    image?: string;
    raw?: string;
  };
}

const MindMapList: React.FC = () => {
  const [mindmaps, setMindmaps] = useState<MindMapDoc[]>([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function loadMindmaps() {
      const mindmapModules = import.meta.glob('../content/mindmap/*.mdx');
      const loaded: MindMapDoc[] = [];

      for (const [path, module] of Object.entries(mindmapModules)) {
        const mod = await module();
        const slug = path.split('/').pop()!.replace('.mdx', '');
        loaded.push({ slug, frontmatter: (mod as any).frontmatter });
      }

      setMindmaps(loaded);
    }

    loadMindmaps();
  }, []);

  const filteredMindmaps = mindmaps.filter((map) =>
    (map.frontmatter.title || map.frontmatter.raw || '').toLowerCase().includes(search.toLowerCase())
  );

// Add support for react-icons/fa

const renderIcon = (iconName?: string) => {
    if (!iconName) return <FiMap className="text-blue-400 text-3xl" />;
    // Try FiIcons first
    const FiIconComp = (FiIcons as Record<string, React.ComponentType<{ className?: string }>>)[iconName];
    if (FiIconComp) return <FiIconComp className="text-blue-400 text-3xl" />;
    // Then try FaIcons
    const FaIconComp = (FaIcons as Record<string, React.ComponentType<{ className?: string }>>)[iconName];
    if (FaIconComp) return <FaIconComp className="text-blue-400 text-3xl" />;
    return <FiMap className="text-blue-400 text-3xl" />;
};

  const handleCardClick = (slug: string) => {
    navigate(`/mindmap/${slug}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-10">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            🧠 Mind Maps
          </h1>
          <SearchBar onSearch={setSearch} placeholder="Search Mind Maps..." />
        </div>

        {filteredMindmaps.length === 0 ? (
          <div className="flex flex-col items-center text-gray-500 mt-20">
            <FiAlertCircle className="text-6xl mb-4" />
            <p className="text-xl">No mind maps found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredMindmaps.map((map) => (
              <div
                key={map.slug}
                onClick={() => handleCardClick(map.slug)}
                className="group relative bg-gray-800 rounded-3xl shadow-lg border border-gray-700 overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-500 hover:bg-gray-750"
              >
                {/* Image Section */ }
                <div className="relative h-56 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center overflow-hidden">
                  {map.frontmatter.image ? (
                    <img
                      src={map.frontmatter.image}
                      alt={map.frontmatter.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-gray-600 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      {renderIcon(map.frontmatter.icon)}
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-2">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      {renderIcon(map.frontmatter.icon)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-xl text-white mb-2 line-clamp-2 group-hover:text-blue-300 transition-colors duration-300">
                        {map.frontmatter.title ||
                          map.frontmatter.raw?.split('\n')[0] ||
                          map.slug}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Mind Map • {map.slug}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Subtle gradient border on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MindMapList;