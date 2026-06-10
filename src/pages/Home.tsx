import HeroSection from '../components/Home/HeroSection';
import ExperienceSection from '../components/Home/ExperienceSection';
import ProjectsSection from '../components/Home/ProjectsSection';
import SkillsSection from '../components/Home/SkillsSection';
import CertificationsSection from '../components/Home/CertificationsSection';
import SoftSkillsSection from '../components/Home/SoftSkillsSection';
import { motion } from 'framer-motion';

function Home() {
  return (
    <>
      <HeroSection />

      <div className="relative z-10">
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <SoftSkillsSection />

        {/* Scroll to Top */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="sticky bottom-8 left-full bg-surface-1 hover:bg-surface-2 text-ink p-3 rounded-full shadow-lg transition-colors duration-300 z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </div>
    </>
  );
}

export default Home;
