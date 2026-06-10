import { motion } from 'framer-motion';
import { FiExternalLink, FiCheckCircle } from 'react-icons/fi';
import {
  SiAmazonwebservices,
  SiGoogle,
  SiPostman,
  SiUdemy,
  SiCoursera,
} from 'react-icons/si';
import { fadeUp, staggerContainer, smoothTransition } from '../../utils/animations';
import type { IconType } from 'react-icons';

interface Certification {
  name: string;
  code: string;
  category: string;
  issuer: string;
  icon: IconType;
  color: string;
  url: string;
}

const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect",
    code: "(SAA-C03)",
    category: "Cloud",
    issuer: "Amazon Web Services",
    icon: SiAmazonwebservices,
    color: "#FF9900",
    url: "https://www.credly.com/badges/aws-certified-solutions-architect-associate"
  },
  {
    name: "Generative AI: Introduction and Applications",
    code: "",
    category: "AI/ML",
    issuer: "Coursera",
    icon: SiCoursera,
    color: "#0056D2",
    url: "https://www.coursera.org/account/accomplishments/verify/generative-ai"
  },
  {
    name: "Postman API Fundamentals Expert",
    code: "",
    category: "API",
    issuer: "Postman",
    icon: SiPostman,
    color: "#FF6C37",
    url: "https://badgr.com/public/assertions/postman-api-fundamentals"
  },
  {
    name: "Google Data Analytics Specialization",
    code: "",
    category: "Analytics",
    issuer: "Google",
    icon: SiGoogle,
    color: "#4285F4",
    url: "https://www.coursera.org/account/accomplishments/specialization/google-data-analytics"
  },
  {
    name: "Google UX Design Specialization",
    code: "",
    category: "Design",
    issuer: "Google",
    icon: SiGoogle,
    color: "#4285F4",
    url: "https://www.coursera.org/account/accomplishments/specialization/google-ux-design"
  },
  {
    name: "React - The Complete Guide",
    code: "",
    category: "Frontend",
    issuer: "Udemy",
    icon: SiUdemy,
    color: "#A435F0",
    url: "https://www.udemy.com/certificate/react-complete-guide"
  }
];

const CertificationsSection = () => {
  return (
    <section className="py-24">
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={smoothTransition}
      >
        Certifications
      </motion.h2>
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {certifications.map((cert, index) => {
          const Icon = cert.icon;
          return (
            <motion.a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-surface-1 rounded-card p-5 border-l-4 group block no-underline transition-shadow duration-300"
              style={{ borderLeftColor: cert.color }}
              variants={fadeUp}
              transition={smoothTransition}
              whileHover={{
                y: -4,
                boxShadow: `0 8px 30px ${cert.color}20`,
                transition: { type: 'spring', stiffness: 300, damping: 20 }
              }}
            >
              {/* Verified badge */}
              <FiCheckCircle className="absolute top-4 right-4 w-4 h-4 text-success opacity-60" />

              {/* Issuer icon */}
              <Icon className="w-10 h-10 mb-4" style={{ color: cert.color }} />

              {/* Name */}
              <h3 className="text-ink font-semibold text-base leading-tight mb-1">
                {cert.name}
              </h3>
              {cert.code && (
                <p className="text-ink-muted text-xs mt-0.5">{cert.code}</p>
              )}

              {/* Footer: category + link */}
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-hairline-soft">
                <span className="text-ink-muted text-xs uppercase tracking-wider">
                  {cert.category}
                </span>
                <FiExternalLink className="w-3.5 h-3.5 text-ink-muted group-hover:text-accent transition-colors duration-200" />
              </div>
            </motion.a>
          );
        })}
      </motion.div>
    </section>
  );
};

export default CertificationsSection;
