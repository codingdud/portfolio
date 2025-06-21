import ProjectCard from '../components/ProjectCardProps';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: 'Form Easy',
    description: 'A comprehensive form management system with real-time validation, analytics, and integration capabilities. Handles 10,000+ API requests weekly.',
    tech: ['React', 'Node.js', 'MongoDB', 'Docker', 'Redis'],
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    title: 'WebGen',
    description: 'Dynamic asset generation platform for web developers. Automates the creation of favicons, social media images, and web graphics.',
    tech: ['Next.js', 'Canvas API', 'Vercel', 'TypeScript'],
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    title: 'AOSP Optimizer',
    description: 'Rust-based optimization tool for Android system images. Improved img2simg performance by 30-25% with better memory management.',
    tech: ['Rust', 'Android', 'C++', 'Linux'],
    github: '#',
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-center mb-12">
          A collection of projects showcasing my expertise in full-stack development, mobile applications, and system optimization.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}