import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MarkmapHooks from '../components/MarkmapHooks';
import { FiArrowLeft } from 'react-icons/fi';

// Updated glob import for Vite 5+ (.mdx for mindmaps)
const mindmapModules = import.meta.glob('../content/mindmap/*.mdx', { eager: true });

const MindMapPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find the MDX file by id
  const entry = Object.entries(mindmapModules).find(([path]) =>
    path.endsWith(`/${id}.mdx`)
  );

  let title = 'Mind Map';
  let image: string | undefined;
  let raw = '# Not found\nNo mind map found.';

  if (entry) {
    const mod = entry[1] as any;
    // Get frontmatter fields
    title = mod.frontmatter?.title || title;
    image = mod.frontmatter?.image;
    raw = mod.frontmatter?.raw || raw;
  }



  return (
    <div className="fixed inset-0 w-full min-h-screen bg-[#181A20] flex flex-col">
      <div className="flex items-center px-4 pt-4 mb-2">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-white hover:text-blue-400 transition"
          aria-label="Go back"
        >
          <FiArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex-1 flex items-center justify-end">
          {image && (
            <img
              src={image}
              alt={title}
              className="w-8 h-8 object-contain rounded mr-2"
              style={{ background: '#fff' }}
            />
          )}
          <h1 className="text-2xl font-bold text-white text-right pr-2">{title}</h1>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full h-full">
          <MarkmapHooks initialValue={raw} />
        </div>
      </div>
    </div>
  );
};

export default MindMapPage;