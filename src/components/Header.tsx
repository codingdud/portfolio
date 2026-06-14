import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiMenu, FiX } from 'react-icons/fi';
import ScrollProgressBar from './ScrollProgressBar';
import { slideDown, smoothTransition } from '../utils/animations';

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <ScrollProgressBar />
      <motion.header
        className="header-nav bg-canvas sticky top-0 z-50 h-14 flex items-center border-b border-hairline-soft"
        variants={slideDown}
        initial="hidden"
        animate="visible"
        transition={smoothTransition}
      >
        <nav className="max-w-[1199px] mx-auto px-6 w-full flex justify-between items-center">
          <Link to="/" className="text-lg font-medium text-ink tracking-tight">
            Animesh Kumar
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/blog" className="text-sm text-ink-muted hover:text-ink transition-colors duration-200">
              Blog
            </Link>
            <Link to="/docs" className="text-sm text-ink-muted hover:text-ink transition-colors duration-200">
              Docs
            </Link>
            <Link to="/mindmaps" className="text-sm text-ink-muted hover:text-ink transition-colors duration-200">
              Mind Maps
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="https://github.com/codingdud"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary gap-2"
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub className="w-4 h-4" />
              GitHub
            </motion.a>
            <Link
              to="/contact"
              className="btn-primary"
            >
              Contact
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-ink"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="md:hidden absolute top-14 left-0 right-0 bg-canvas border-t border-hairline px-6 py-4 flex flex-col gap-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <Link to="/blog" onClick={() => setMobileOpen(false)} className="text-sm text-ink-muted py-2">
                Blog
              </Link>
              <Link to="/docs" onClick={() => setMobileOpen(false)} className="text-sm text-ink-muted py-2">
                Docs
              </Link>
              <Link to="/mindmaps" onClick={() => setMobileOpen(false)} className="text-sm text-ink-muted py-2">
                Mind Maps
              </Link>
              <div className="flex gap-3 pt-2">
                <a href="https://github.com/codingdud" target="_blank" rel="noopener noreferrer" className="btn-secondary gap-2">
                  <FiGithub className="w-4 h-4" /> GitHub
                </a>
                <Link to="/contact" className="btn-primary">Contact</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

export default Header;
