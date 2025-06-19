import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const experienceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (experienceRef.current) {
      gsap.fromTo(
        experienceRef.current.querySelectorAll('.experience-card'),
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          stagger: 0.3,
          scrollTrigger: {
            trigger: experienceRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Sasken",
      period: "Feb 2025 – Present",
      location: "Bengaluru",
      color: "blue",
      achievements: [
        "Implemented and optimized AOSP's img2simg tool using Rust, improving system image conversion efficiency by 30-25%",
        "Implemented automated testing frameworks, reducing manual testing efforts by 40%"
      ]
    },
    {
      title: "Virtual Developer Intern",
      company: "ATG",
      period: "Jun 2024 – Aug 2024",
      location: "Remote",
      color: "green",
      achievements: [
        "Developed and optimized Android applications, including TechLearn (EdTech platform)",
        "Contributed to UI/UX improvements and API integration for seamless user experience",
        "Collaborated with cross-functional teams to enhance app performance and scalability"
      ]
    },
    {
      title: "Virtual Developer Intern",
      company: "Salesforce",
      period: "Nov 2023 – Jan 2024",
      location: "Remote",
      color: "purple",
      achievements: [
        "Engineered 5+ customized Salesforce applications using Apex, Visualforce, and Lightning Web Components",
        "Conducted comprehensive testing of Batch Apex functionalities, ensuring 99.9% data accuracy"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: { border: 'border-blue-500', text: 'text-blue-400' },
      green: { border: 'border-green-500', text: 'text-green-400' },
      purple: { border: 'border-purple-500', text: 'text-purple-400' }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section ref={experienceRef}>
      <h2 className="text-3xl font-semibold mb-8 text-center">Professional Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => {
          const colors = getColorClasses(exp.color);
          return (
            <div 
              key={index}
              className={`experience-card bg-gray-800 p-6 rounded-lg border-l-4 ${colors.border} hover:bg-gray-700 transition-colors duration-300`}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className={`text-xl font-bold ${colors.text}`}>{exp.title}</h3>
                  <p className="text-lg font-semibold">{exp.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-300">{exp.period}</p>
                  <p className="text-gray-400">{exp.location}</p>
                </div>
              </div>
              <ul className="text-gray-300 space-y-2">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>• {achievement}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceSection;