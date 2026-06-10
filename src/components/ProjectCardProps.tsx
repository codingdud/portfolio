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
      className={`group card-surface transition-all duration-500 hover:scale-[1.01] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {project.featured && (
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1.5 h-1.5 bg-ink rounded-full" />
          <span className="text-xs font-medium text-ink-muted uppercase tracking-wider">Featured</span>
        </div>
      )}
      <h3 className="text-xl font-bold text-ink mb-3 tracking-tight">
        {project.title}
      </h3>
      <p className="text-ink-muted mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-surface-2 text-ink text-xs rounded-pill"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        {project.github && (
          <a
            href={project.github}
            className="btn-secondary gap-2 text-sm"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            className="btn-primary gap-2 text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            Demo
          </a>
        )}
      </div>
    </div>
  );
}
