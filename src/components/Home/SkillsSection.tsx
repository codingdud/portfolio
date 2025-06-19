import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SkillBar from '../SkillBar';

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (skillsRef.current) {
      // Animate section title
      gsap.fromTo(
        skillsRef.current.querySelector('h2'),
        { y: -30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top 85%',
          },
        }
      );

      // Animate skill categories
      gsap.fromTo(
        skillsRef.current.querySelectorAll('.skill-category'),
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          stagger: 0.3,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animate skill bars with delay
      setTimeout(() => {
        if (skillsRef.current) {
            const skillBars = skillsRef.current.querySelectorAll('.skill-bar');

            gsap.fromTo(
            skillBars,
            { width: 0, opacity: 0 },
            {
                width: 'auto',
                opacity: 1,
                duration: 1.5,
                ease: 'power3.out',
                stagger: 0.1,
                scrollTrigger: {
                trigger: skillsRef.current,
                start: 'top 70%',
                },
            }
            );
        }
        }, 500);

    }
  }, []);

  const programmingLanguages = [
    { skill: "JavaScript", level: 95 },
    { skill: "TypeScript", level: 88 },
    { skill: "Python", level: 85 },
    { skill: "C/C++", level: 80 },
    { skill: "Rust", level: 75 }
  ];

  const technologies = [
    { skill: "React.js/Next.js", level: 92 },
    { skill: "Node.js/Express.js", level: 88 },
    { skill: "React Native", level: 85 },
    { skill: "Docker", level: 82 },
    { skill: "TensorFlow/PyTorch", level: 78 }
  ];

  return (
    <section ref={skillsRef}>
      <h2 className="text-3xl font-semibold mb-8 text-center">Technical Skills</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="skill-category">
          <h3 className="text-xl font-semibold mb-6 text-blue-400">Programming Languages</h3>
          <div className="space-y-4">
            {programmingLanguages.map((item, index) => (
              <div key={index} className="skill-bar">
                <SkillBar skill={item.skill} level={item.level} />
              </div>
            ))}
          </div>
        </div>
        <div className="skill-category">
          <h3 className="text-xl font-semibold mb-6 text-green-400">Technologies & Frameworks</h3>
          <div className="space-y-4">
            {technologies.map((item, index) => (
              <div key={index} className="skill-bar">
                <SkillBar skill={item.skill} level={item.level} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;