import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useRelativeMouse } from '../../utils/useRelativeMouse';
import { Link } from 'react-router-dom';
import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaStackOverflow,
  FaDocker,
  FaNpm,
} from 'react-icons/fa';
import { fadeUp, staggerContainer, smoothTransition } from '../../utils/animations';

const SOCIAL_LINKS = [
  { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/codingdud' },
  { name: 'Dev.to', icon: <FaDev />, url: 'https://dev.to/codingdud' },
  { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://linkedin.com/in/codingdud' },
  { name: 'Twitter/X', icon: <FaTwitter />, url: 'https://twitter.com/codingdud' },
  { name: 'YouTube', icon: <FaYoutube />, url: 'https://youtube.com/@codingdud' },
  { name: 'Instagram', icon: <FaInstagram />, url: 'https://instagram.com/codingdud' },
  { name: 'Stack Overflow', icon: <FaStackOverflow />, url: 'https://stackoverflow.com/users/codingdud' },
  { name: 'DockerHub', icon: <FaDocker />, url: 'https://hub.docker.com/u/codingdud' },
  { name: 'npm', icon: <FaNpm />, url: 'https://www.npmjs.com/~codingdud' },
];

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement | null>(null);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  const { mousePos, handleMouseMove, resetMouse } = useRelativeMouse();

  useEffect(() => {
    const animateDots = () => {
      dotsRef.current.forEach((dot) => {
        if (!dot || !footerRef.current) return;

        const rect = dot.getBoundingClientRect();
        const footerRect = footerRef.current.getBoundingClientRect();

        const dotX = rect.left + rect.width / 2 - footerRect.left;
        const dotY = rect.top + rect.height / 2 - footerRect.top;

        const deltaX = mousePos.x - dotX;
        const deltaY = mousePos.y - dotY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        const maxDistance = 150;
        const strength = Math.max(0, (maxDistance - distance) / maxDistance);

        if (strength > 0) {
          const moveX = -(deltaX / distance) * strength * 10;
          const moveY = -(deltaY / distance) * strength * 10;

          dot.style.transform = `translate(${moveX}px, ${moveY}px)`;
          dot.style.opacity = Math.min(1, 0.4 + strength * 0.6).toString();
        } else {
          dot.style.transform = 'translate(0, 0)';
          dot.style.opacity = '0.4';
        }
      });

      animationFrameRef.current = requestAnimationFrame(animateDots);
    };

    if (mousePos.x !== 0 || mousePos.y !== 0) {
      animateDots();
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePos]);

  return (
    <motion.footer
      ref={footerRef}
      className="bg-canvas text-ink-muted text-xs uppercase tracking-wider py-16 px-6 relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      onMouseMove={e => handleMouseMove(e, footerRef as React.RefObject<HTMLElement>)}
      onMouseLeave={resetMouse}
    >
      <motion.div
        className="max-w-[1199px] mx-auto relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Top Links */}
        <motion.div className="flex justify-center flex-wrap gap-8 mb-2" variants={fadeUp} transition={smoothTransition}>
          {[
            { name: 'Docker CLI Guide', url: '/docs/docker-cli-guid' },
            { name: 'Shell Scripting for DevOps', url: '/docs/shell-script-devops' },
            { name: 'Contributing to a GitHub Project', url: '/docs/guid-github' },
          ].map((item, idx) => (
            <Link
              key={idx}
              to={item.url}
              className="text-ink-muted hover:text-accent transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </motion.div>

        {/* Magnetic Dots Grid */}
        <div className="relative mb-10 h-64 overflow-hidden">
          <div className="grid grid-cols-30 gap-1 place-items-center absolute inset-0 p-4">
            {Array.from({ length: 300 }).map((_, i) => (
              <div
                key={i}
                ref={(el) => { dotsRef.current[i] = el; }}
                className="w-1 h-1 rounded-full bg-ink-muted/30 transition-all duration-75 ease-out"
              />
            ))}
          </div>
        </div>

        {/* Lower Nav */}
        <motion.div
          className="flex flex-wrap justify-between items-center pt-6 border-t border-hairline-soft"
          variants={fadeUp}
          transition={smoothTransition}
        >
          <div className="flex flex-wrap gap-4 mb-2 sm:mb-0">
            {['React', 'Redux', 'Express', 'Docker', 'Kubernetes'].map((item, idx) => (
              <span key={idx} className="text-ink-muted">{item}</span>
            ))}
          </div>
          <div className="flex gap-4">
            {SOCIAL_LINKS.map(({ name, icon, url }, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-muted hover:text-ink transition-colors duration-200"
                aria-label={name}
              >
                {icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div className="flex flex-wrap justify-between items-center mt-6 gap-4" variants={fadeUp} transition={smoothTransition}>
          <p className="text-ink-muted">
            &copy; {new Date().getFullYear()} Animesh Kumar. Designed for tomorrow, coded today.
          </p>
          <Link to="/blog" className="btn-primary text-xs uppercase tracking-wider">
            Blog
          </Link>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
