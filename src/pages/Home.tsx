import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Section components
import HeroSection from '../components/Home/HeroSection';
import ExperienceSection from '../components/Home/ExperienceSection';
import ProjectsSection from '../components/Home/ProjectsSection';
import SkillsSection from '../components/Home/SkillsSection';
import CertificationsSection from '../components/Home/CertificationsSection';
import SoftSkillsSection from '../components/Home/SoftSkillsSection';

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const progressBarRef = useRef<HTMLDivElement|null>(null);

  useEffect(() => {
    setIsLoaded(true);

    // GSAP ScrollTrigger for scroll progress
    const trigger = ScrollTrigger.create({
      start: 0,
      end: () => document.documentElement.scrollHeight - window.innerHeight,
      onUpdate: (self) => {
        if (progressBarRef.current) {
          progressBarRef.current.style.width = `${self.progress * 100}%`;
        }
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div className='relative'>
      {/* Fixed Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div
          ref={progressBarRef}
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-150 ease-out"
          style={{ width: '0%' }}
        />
      </div>

      {/* Parallax Background */}
      <div className="parallax-bg fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900" />
      </div>

      {/* Main Content with fade-in effect */}
      <div
        className={`relative z-10 space-y-20 transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="hero-float">
          <HeroSection />
        </div>

        <div className="section-container">
          <ExperienceSection />
        </div>

        <div className="section-container">
          <ProjectsSection />
        </div>

        <div className="section-container">
          <SkillsSection />
        </div>

        <div className="section-container">
          <CertificationsSection />
        </div>

        <div className="section-container">
          <SoftSkillsSection />
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Home;
