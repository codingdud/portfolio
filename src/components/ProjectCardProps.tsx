import { useEffect, useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`project-${index}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      id={`project-${index}`}
      data-animate
      className={`group bg-gray-200/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-2xl p-6 border border-gray-300/50 dark:border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
      } ${project.featured ? 'ring-1 ring-blue-500/30' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {project.featured && (
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">Featured</span>
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-blue-200/30 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs rounded-full border border-blue-300/50 dark:border-blue-700/50"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        {project.github && (
          <a
            href={project.github}
            className="inline-flex items-center gap-2 px-3 py-2 bg-gray-300/50 dark:bg-gray-700/50 hover:bg-gray-400/50 dark:hover:bg-gray-600/50 text-gray-900 dark:text-white rounded-lg transition-colors text-sm"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            className="inline-flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            Demo
          </a>
        )}
      </div>
    </div>
  );
}