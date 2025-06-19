import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CertificationsSection = () => {
  const certificationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (certificationsRef.current) {
      gsap.fromTo(
        certificationsRef.current.querySelectorAll('.cert-card'),
        { 
          y: 30, 
          opacity: 0,
          rotateX: 15
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: certificationsRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      code: "(SAA-C03)",
      category: "Cloud"
    },
    {
      name: "Generative AI: Introduction and Applications",
      code: "",
      category: "AI/ML"
    },
    {
      name: "Postman API Fundamentals Expert",
      code: "",
      category: "API"
    },
    {
      name: "Google Data Analytics Specialization",
      code: "",
      category: "Analytics"
    },
    {
      name: "Google UX Design Specialization",
      code: "",
      category: "Design"
    },
    {
      name: "React - The Complete Guide",
      code: "",
      category: "Frontend"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colorMap = {
      Cloud: 'bg-orange-600',
      'AI/ML': 'bg-purple-600',
      API: 'bg-blue-600',
      Analytics: 'bg-green-600',
      Design: 'bg-pink-600',
      Frontend: 'bg-cyan-600'
    };
    return colorMap[category as keyof typeof colorMap] || 'bg-gray-600';
  };

  return (
    <section ref={certificationsRef}>
      <h2 className="text-3xl font-semibold mb-8 text-center">Certifications</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div 
            key={index}
            className="cert-card bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-700 hover:border-gray-600"
          >
            <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${getCategoryColor(cert.category)}`}>
              {cert.category}
            </div>
            <h3 className="text-green-400 font-semibold mb-1 leading-tight">
              {cert.name}
            </h3>
            {cert.code && (
              <p className="text-gray-400 text-sm">{cert.code}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;