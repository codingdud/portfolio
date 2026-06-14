import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiSend, FiGithub, FiLinkedin, FiMail, FiCheck,
  FiGlobe, FiLayers, FiServer, FiCpu,
  FiSmartphone, FiCloud, FiTool, FiMessageCircle,
} from 'react-icons/fi';
import type { Transition } from 'framer-motion';
import { smoothTransition } from '../utils/animations';

const CONTACT_EMAIL = 'codingdud@gmail.com';

/* ─── service data — each has its own color identity ─── */
const SERVICES = [
  { id: 'web',         icon: FiGlobe,         label: 'Web Development',      sub: ['Custom Web App', 'SaaS Platform', 'Admin Dashboard', 'MVP Development', 'E-commerce', 'Landing Page', 'CRM / Internal Tool'] },
  { id: 'frontend',    icon: FiLayers,        label: 'Frontend Dev',         sub: ['React.js', 'Next.js', 'UI Modernization', 'TypeScript Migration', 'Component Library', 'Performance Optimization', 'SEO / Core Web Vitals'] },
  { id: 'backend',     icon: FiServer,        label: 'Backend Engineering',  sub: ['REST API', 'Auth & RBAC', 'Database Design', 'WebSockets', 'Payment Integration', 'Background Jobs', 'Microservices'] },
  { id: 'ai',          icon: FiCpu,           label: 'AI Solutions',         sub: ['AI Chatbot', 'RAG Application', 'AI Agent', 'OpenAI / Claude Integration', 'Document Q&A', 'Workflow Automation', 'Multi-Agent System'] },
  { id: 'mobile',      icon: FiSmartphone,    label: 'Mobile Apps',          sub: ['React Native App', 'Cross-Platform Dev', 'API Integration', 'Push Notifications', 'App Store Deployment'] },
  { id: 'cloud',       icon: FiCloud,         label: 'Cloud & DevOps',       sub: ['Docker', 'AWS Deployment', 'CI/CD Pipeline', 'VPS Setup', 'Monitoring', 'Production Support'] },
  { id: 'maintenance', icon: FiTool,          label: 'Maintenance & Support',sub: ['Bug Fixes', 'Feature Additions', 'Performance Fixes', 'Security Updates', 'Code Review', 'Technical Consulting'] },
  { id: 'hi',          icon: FiMessageCircle, label: 'Just Say Hi',          sub: ['Quick question', 'Feedback', 'Networking', 'Open Source idea', 'Something else'] },
];

const SOCIAL = [
  { icon: FiGithub,   label: 'codingdud',          href: 'https://github.com/codingdud' },
  { icon: FiLinkedin, label: 'in/animeshsysops',        href: 'https://linkedin.com/in/animeshsysops' },
  { icon: FiMail,     label: 'codingdud@gmail.com', href: `mailto:${CONTACT_EMAIL}` },
];

const subReveal: Transition = { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] };


export default function Contact() {
  const [service,  setService]  = useState('');
  const [subPicks, setSubPicks] = useState<string[]>([]);
  const [message,  setMessage]  = useState('');
  const [sent,     setSent]     = useState(false);

  const selectedSvc = SERVICES.find(s => s.id === service);

  const toggleSub = (sub: string) =>
    setSubPicks(p => p.includes(sub) ? p.filter(x => x !== sub) : [...p, sub]);

  const pickService = (id: string) => {
    setService(id);
    setSubPicks([]);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const svcLabel  = selectedSvc?.label ?? '';
    const subLabel  = subPicks.join(', ');
    const subject   = svcLabel ? `[${svcLabel}] ${subLabel || 'Inquiry'}` : 'Portfolio Contact';
    const body = [
      svcLabel && `Service: ${svcLabel}`,
      subLabel && `Interested in: ${subLabel}`,
      message && `\nMessage:\n${message}`,
    ].filter(Boolean).join('\n');
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <div className="pt-12 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 items-start">

        {/* ── LEFT: terminal info panel ── */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...smoothTransition, delay: 0.05 }}
          className="hidden lg:flex flex-col gap-8 sticky top-24"
        >
          <div className="relative">
            <span
              className="absolute -top-6 -left-1 text-[96px] font-black text-ink/[0.03] leading-none select-none pointer-events-none"
              aria-hidden
            >
              HI.
            </span>
            <h1
              className="text-ink font-semibold leading-[1.1] relative z-10"
              style={{ fontSize: 'clamp(28px, 3vw, 44px)', letterSpacing: '-1.5px' }}
            >
              Let's build<br />
              <span className="text-accent">something</span><br />
              together.
            </h1>
          </div>

          {/* terminal card */}
          <div className="bg-surface-1 border border-hairline rounded-lg p-5 font-mono text-xs space-y-2">
            <p className="text-ink-muted/50">// system_status</p>
            <div className="flex items-center gap-2">
              <span className="text-accent">›</span>
              <span className="text-ink-muted w-20">status</span>
              <span className="inline-flex items-center gap-1.5">
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-success inline-block"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                />
                <span className="text-success">available</span>
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-accent">›</span>
              <span className="text-ink-muted w-20">location</span>
              <span className="text-ink">India 🇮🇳</span>
            </div>
            <div className="flex gap-2">
              <span className="text-accent">›</span>
              <span className="text-ink-muted w-20">response</span>
              <span className="text-ink">&lt; 24h</span>
            </div>
            <div className="flex gap-2">
              <span className="text-accent">›</span>
              <span className="text-ink-muted w-20">open_to</span>
              <span className="text-ink">[freelance, fulltime]</span>
            </div>
            <p className="pt-0.5">
              <motion.span
                className="text-ink-muted/60"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
              >▋</motion.span>
            </p>
          </div>

          {/* social */}
          <div className="flex flex-col gap-2.5">
            {SOCIAL.map(({ icon: Icon, label, href }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-3 text-ink-muted hover:text-ink transition-colors duration-200 w-fit">
                <span className="w-8 h-8 rounded-md bg-surface-1 border border-hairline flex items-center justify-center group-hover:border-accent transition-colors duration-200 shrink-0">
                  <Icon className="w-3.5 h-3.5" />
                </span>
                <span className="text-xs font-mono">{label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* ── RIGHT: single-step form ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...smoothTransition, delay: 0.15 }}
        >
          {sent ? (
            <motion.div
              className="bg-surface-1 border border-hairline rounded-card-lg p-10 flex flex-col items-center gap-5 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={smoothTransition}
            >
              <motion.div
                className="w-14 h-14 rounded-full bg-success/10 border border-success/30 flex items-center justify-center text-2xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', damping: 12, stiffness: 180, delay: 0.1 }}
              >
                ✉️
              </motion.div>
              <div>
                <h2 className="text-ink text-xl font-semibold">Message ready!</h2>
                <p className="text-ink-muted text-sm mt-2 max-w-xs mx-auto">
                  Your mail client opened with everything pre-filled. Hit send and I'll reply within 24h.
                </p>
              </div>
              <button
                onClick={() => { setSent(false); setService(''); setSubPicks([]); setMessage(''); }}
                className="btn-secondary px-6 py-2 text-sm"
              >
                Send another
              </button>
            </motion.div>
          ) : (
            <div className="bg-surface-1 border border-hairline rounded-card-lg p-8 relative overflow-hidden">
              {/* subtle glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/4 rounded-full blur-[80px] pointer-events-none" />

              <form onSubmit={handleSend} className="relative z-10 flex flex-col gap-7">

                {/* ── service picker ── */}
                <div className="flex flex-col gap-3">
                  <span className="text-sm font-medium text-ink">What can I help with?</span>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES.map(svc => {
                      const active = service === svc.id;
                      return (
                        <button
                          key={svc.id}
                          type="button"
                          onClick={() => pickService(svc.id)}
                          className={`flex items-center gap-2 px-4 py-2 rounded-pill border text-sm transition-all duration-200 ${
                            active
                              ? 'border-accent bg-accent/8 text-ink'
                              : 'border-hairline text-ink-muted hover:text-ink hover:border-hairline-soft'
                          }`}
                        >
                          <svc.icon className={`w-3.5 h-3.5 shrink-0 ${active ? 'text-accent' : ''}`} />
                          {svc.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* ── sub-service chips ── */}
                <AnimatePresence>
                  {selectedSvc && (
                    <motion.div
                      key={selectedSvc.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={subReveal}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-3">
                        <span className="text-sm font-medium text-ink flex items-center gap-2">
                          <selectedSvc.icon className="w-4 h-4 text-accent" />
                          Specifically&hellip;
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {selectedSvc.sub.map(s => {
                            const picked = subPicks.includes(s);
                            return (
                              <button
                                key={s}
                                type="button"
                                onClick={() => toggleSub(s)}
                                className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-pill border transition-all duration-200 ${
                                  picked
                                    ? 'border-accent text-accent bg-accent/8'
                                    : 'border-hairline text-ink-muted hover:border-hairline-soft hover:text-ink'
                                }`}
                              >
                                {picked && <FiCheck className="w-3 h-3 shrink-0" />}
                                {s}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ── message ── */}
                <div className="flex flex-col gap-3">
                  <span className="text-sm font-medium text-ink">Message</span>
                  <textarea
                    rows={4}
                    placeholder="Describe your project, idea, or just say hi…"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="w-full bg-surface-2/40 border border-hairline rounded-lg px-4 py-3 text-sm text-ink placeholder:text-ink-muted/40 focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
                  />
                </div>

                {/* ── submit ── */}
                <motion.button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2 py-3 text-sm"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {service ? `Send — ${selectedSvc?.label}` : 'Send Message'}
                  <FiSend className="w-3.5 h-3.5" />
                </motion.button>

              </form>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
