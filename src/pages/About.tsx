/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Calendar, 
  Award, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';

const experience = [
  {
    company: 'Industrial Attachment',
    role: 'ICT Infrastructure & Networking',
    period: '2023 - 2024',
    desc: 'Hands-on exposure to enterprise networking, ISP systems, and field technical support.',
    duties: [
      'Starlink Satellite Internet installations and configuration',
      'Enterprise WiFi deployments and Access Point management',
      'MikroTik router configuration and network monitoring',
      'Site surveys and structured cabling for clients',
      'Troubleshooting LAN/WAN and VoIP systems',
      'System and server maintenance support'
    ]
  }
];

const education = [
  {
    institution: 'Computer Engineering Department',
    degree: 'BSc (Hons) in Computer Engineering',
    period: 'Current',
    location: 'Zimbabwe',
    details: 'Focusing on the integration of hardware and software systems, networking, and digital infrastructure.'
  }
];

const certifications = [
  { name: 'Full-Stack Software Development', issuer: 'Self-Directed / Academy', status: 'Completed' },
  { name: 'MikroTik Network Associate', issuer: 'Industrial Focus', status: 'Practitioner' },
  { name: 'Cloud Infrastructure & Firebase', issuer: 'Hands-on Projects', status: 'Expert' },
  { name: 'Cybersecurity Fundamentals', issuer: 'Research & Implementation', status: 'Applied' },
];

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="mb-20 text-center lg:text-left">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-display font-bold text-slate-900 dark:text-white mb-8 tracking-tighter"
        >
          About <span className="text-brand-blue italic">Ephraim</span>
        </motion.h1>
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-slate-400 font-mono text-sm uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <MapPin className="text-brand-blue" size={16} />
            Harare, Zimbabwe
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="text-brand-blue" size={16} />
            Computer Engineering
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="text-brand-blue" size={16} />
            Tech Professional
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24 mb-32">
        <div className="lg:col-span-2 space-y-10">
          <motion.section
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-brand-blue" />
              The Professional Journey
            </h2>
            <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              <p>
                Ephraim Simbarashe Kunaka is a Computer Engineering student and emerging technology professional 
                from Zimbabwe with a strong focus on software engineering, networking, ISP infrastructure, 
                automation, and digital transformation. 
              </p>
              <p>
                His work combines practical ICT field experience with modern full-stack development, enabling 
                him to design systems that solve real operational problems for businesses, ISPs, and 
                enterprise environments.
              </p>
              <p>
                He has extensive experience working with networking infrastructure, MikroTik routers, 
                hotspot systems, ISP management concepts, and cloud-based platforms. His long-term vision 
                is to build intelligent digital infrastructure solutions that support business growth and 
                technology innovation across Africa.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
             <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-3">
                <span className="w-8 h-px bg-brand-blue" />
                Industrial Attachment Experience
              </h2>
              <div className="space-y-12">
                {experience.map((exp, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative pl-8 border-l border-slate-200 dark:border-white/10 py-2"
                  >
                    <div className="absolute top-0 left-[-5px] w-[9px] h-[9px] rounded-full bg-brand-blue shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
                      <div>
                        <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white">{exp.role}</h4>
                        <p className="text-brand-blue font-mono text-sm uppercase tracking-wider">{exp.company}</p>
                      </div>
                      <span className="text-slate-500 font-mono text-sm">{exp.period}</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">{exp.desc}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {exp.duties.map((duty, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-slate-500">
                          <CheckCircle2 size={16} className="text-brand-blue shrink-0 mt-0.5" />
                          {duty}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
          </motion.section>
        </div>

        <aside className="space-y-12">
           <motion.section 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="p-8 rounded-3xl glass border-white/5"
           >
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <GraduationCap size={20} className="text-brand-blue" />
                Education
              </h3>
              <div className="space-y-8">
                {education.map((edu, i) => (
                  <div key={i}>
                    <p className="text-brand-blue font-mono text-xs uppercase tracking-widest mb-1">{edu.period}</p>
                    <h4 className="text-slate-900 dark:text-white font-bold mb-1">{edu.degree}</h4>
                    <p className="text-slate-500 text-sm mb-4">{edu.institution}</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{edu.details}</p>
                  </div>
                ))}
              </div>
           </motion.section>

           <motion.section 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="p-8 rounded-3xl glass border-white/5"
           >
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <Award size={20} className="text-brand-blue" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, i) => (
                  <div key={i} className="group p-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/5 hover:border-brand-blue/30 transition-all flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">{cert.name}</h4>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest">{cert.issuer}</p>
                    </div>
                    <ChevronRight size={14} className="text-slate-400 dark:text-slate-600 group-hover:text-brand-blue transition-all" />
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 py-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 text-slate-900 dark:text-white text-xs font-bold uppercase tracking-widest hover:bg-slate-200 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                Verify Credentials
                <ExternalLink size={14} />
              </button>
           </motion.section>
        </aside>
      </div>

      {/* SEO Friendly Link section */}
      <section className="pt-20 border-t border-white/5 text-center">
         <p className="text-slate-500 text-sm mb-8">Naturally connected as:</p>
         <div className="flex flex-wrap justify-center gap-4">
            {[
              'Computer Engineer Zimbabwe',
              'Software Developer Zimbabwe',
              'Network Specialist Harare',
              'ISP Infrastructure Expert'
            ].map(tag => (
              <span key={tag} className="px-4 py-2 rounded-full glass border-white/5 text-slate-400 text-xs font-mono">
                {tag}
              </span>
            ))}
         </div>
      </section>
    </div>
  );
}
