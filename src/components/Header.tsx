import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { FiGithub } from 'react-icons/fi';

function Header() {
  useEffect(() => {
    gsap.fromTo(
      '.header-nav',
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
    );
    gsap.fromTo(
    '.github-link',
    { opacity: 0, x: 50 },
    { opacity: 1, x: 0, delay: 1, duration: 0.6, ease: 'back.out(1.7)' }
  );
  }, []);

  return (
    <header className="header-nav bg-gray-800 py-4 sticky top-0 z-50">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Portfolio</Link>
        <div className="space-x-4">
          <Link to="/blog" className="hover:text-blue-400">Blog</Link>
          <Link to="/docs" className="hover:text-blue-400">Docs</Link>
          <a
            href="https://github.com/your-username/your-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link inline hover:text-purple-400 flex items-center"
            aria-label="GitHub Repository"
          >
             <FiGithub className=" inline w-4 h-4" />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;