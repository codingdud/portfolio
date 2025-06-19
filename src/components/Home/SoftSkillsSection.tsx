import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SoftSkillsSection = () => {
  const softSkillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (softSkillsRef.current) {
      gsap.fromTo(
        softSkillsRef.current.querySelectorAll('.skill-tag'),
        { 
          scale: 0,
          opacity: 0,
          rotation: 180
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.9,
          ease: 'back.out(1.7)',
          stagger: 0.1,
          scrollTrigger: {
            trigger: softSkillsRef.current,
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  const softSkills = [
    { name: "Problem Resolution", icon: "🔧" },
    { name: "Data-Driven Decisions", icon: "📊" },
    { name: "Organized Workflow", icon: "📋" },
    { name: "Technology Integration", icon: "⚡" },
    { name: "Collaborative Teamwork", icon: "🤝" },
    { name: "Time Management", icon: "⏰" },
    { name: "Creative Solutions", icon: "💡" },
    { name: "User-Centric Design", icon: "👥" }
  ];

  return (
    <section ref={softSkillsRef} className="text-center">
      <h2 className="text-3xl font-semibold mb-8">Core Competencies</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {softSkills.map((skill, index) => (
          <div 
            key={index}
            className="skill-tag px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-110 cursor-pointer shadow-lg hover:shadow-xl"
          >
            <span className="mr-2">{skill.icon}</span>
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SoftSkillsSection;