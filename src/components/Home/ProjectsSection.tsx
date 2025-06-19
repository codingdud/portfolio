import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

type Project = {
  title: string;
  date: string;
  description: string;
  tags: string[];
  color: 'yellow'|'green'|'blue'|'purple'|'orange'|'red'|'pink'|'teal'|'cyan';
  github?: string;
  live?:string;
};

const projects: Project[] = [
  {
    title: "WebGen",
    date: "January 2025",
    description: "Web-based Asset Generation Application for creating digital assets including backgrounds, headers, and icons",
    tags: ["React", "Redux", "Node", "Typescript"],
    color: "yellow",
    github: "https://github.com/codingdud/webgen",
    live: "https://webgen-seven.vercel.app"
  },
  {
    title: "Student Accommodation Finder",
    date: "April 2024",
    description: "Platform serving 500+ students with geospatial data integration and responsive React.js UI",
    tags: ["React.js", "Node.js", "Redux", "Geospatial"],
    color: "green",
    github: "https://github.com/codingdud/minor-project",
    live: "https://stayhub.animeshk.me/"
  },
  {
    title: "Form Easy",
    date: "December 2023",
    description: "Scalable form management application processing 10,000+ API requests per week",
    tags: ["React.js", "MongoDB", "Docker", "RESTful API"],
    color: "blue",
    github: "https://github.com/codingdud/Formease",
    live: "https://simpform.vercel.app"
  },
  {
    title: "A Streamlit-based ETL application",
    date: "December 2024",
    description: "allows users to search, download, transform, and analyze data files with integrated AI capabilities.",
    tags: ["Streamlit", "Pandas", "Excel"],
    color: "purple",
    github: "https://github.com/codingdud/etl-streamlit/tree/main/etl-app",
    live: "https://github.com/codingdud/etl-streamlit"
  },
  {
    title: "AlgoDocHub",
    date: "December 2024",
    description: "A comprehensive resource for mastering algorithms and data structures",
    tags: ["C++", "algorithem","DSA"],
    color: "cyan",
    github: "https://github.com/codingdud/AlgoDocHub",
    live: "https://github.com/codingdud/AlgoDocHub/wiki"
  },
  {
    title: "coolicons",
    date: "December 2024",
    description: "A icon library for React",
    tags: ["Storybook", "svg"],
    color: "teal",
    github: "https://github.com/codingdud/coolicons/tree/main",
    live: "https://github.com/codingdud/coolicons/pkgs/npm/coolicons"
  },
  {
    title: "PhotoSeekAI",
    date: "December 2024",
    description: "Facial Recognition and Photo Management API",
    tags: ["flask", "cloudnary","PostgreSQL"],
    color: "red",
    github: "https://github.com/codingdud/majorproject",
    live: "https://my-flask-app-latest-fbf3.onrender.com/api"
  },
  {
    title: "PhotoFlow",
    date: "December 2024",
    description: "UI degin for Photo sharing Social app",
    tags: ["Reactnative", "Reanimation"],
    color: "orange",
    github: "https://github.com/codingdud/PhotoFlow",
    live: "https://github.com/codingdud/PhotoFlow/releases/tag/beta"
  }
];

const getColorClasses = (color: Project['color']): string => {
  const colorMap: Record<Project['color'], string> = {
    yellow: 'text-yellow-400',
    green: 'text-green-400',
    blue: 'text-blue-400',
    purple: 'text-purple-400',
    orange: 'text-orange-400',
    red: 'text-red-400',
    pink: 'text-pink-400',
    teal: 'text-teal-400',
    cyan: 'text-cyan-400',
  };
  return colorMap[color];
};

const ProjectsSection: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (projectsRef.current) {
      gsap.fromTo(
        projectsRef.current.querySelectorAll('.project-card'),
        { scale: 0.8, opacity: 0, y: 50 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'back.out(1.7)',
          stagger: 0.2,
          scrollTrigger: {
            trigger: projectsRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  return (
    <section ref={projectsRef} className="px-4 py-12">
      <h2 className="text-3xl font-semibold mb-8 text-center">Featured Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="project-card bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            <h3 className={`text-xl font-bold mb-2 ${getColorClasses(project.color)}`}>
              {project.title}
            </h3>
            <p className="text-sm text-gray-400 mb-3">{project.date}</p>
            <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex}
                  className="px-2 py-1 bg-gray-600 hover:bg-gray-500 rounded text-xs transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4 items-center">
                {project.github && (
                    <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    aria-label="GitHub Repository"
                    >
                    <FiGithub className="w-5 h-5" />
                    </a>
                )}
                {project.live && (
                    <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-green-400 transition-colors"
                    aria-label="Live Project"
                    >
                    <FiExternalLink className="w-5 h-5" />
                    </a>
                )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
