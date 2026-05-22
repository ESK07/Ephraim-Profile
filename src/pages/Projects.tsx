/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Github, 
  ExternalLink, 
  Search, 
  Code2, 
  Server, 
  Monitor, 
  Shield, 
  Activity,
  ArrowUpRight 
} from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'ISP Management Platform',
    category: 'ISP / MikroTik',
    desc: 'A full-stack ISP management platform designed to integrate with MikroTik routers for customer management, bandwidth control, and network visibility.',
    tech: ['Next.js', 'NestJS', 'PostgreSQL', 'MikroTik API', 'Prisma'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000&auto=format&fit=crop',
    icon: Server,
    features: ['Router Integration', 'Role-Based Access', 'Billing Workflows', 'Network Monitoring']
  },
  {
    title: 'MikroTik Billing & Hotspot',
    category: 'Networking',
    desc: 'Smart hotspot and billing system concept for managing internet users, vouchers, sessions, and bandwidth policies.',
    tech: ['TypeScript', 'TailwindCSS', 'Firebase', 'Radius API'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2340&auto=format&fit=crop',
    icon: Activity,
    features: ['Voucher System', 'Session Tracking', 'Payment Workflows', 'User Portal']
  },
  {
    title: 'Enterprise Business ERP',
    category: 'Software Engineering',
    desc: 'Platform for connecting sales teams and management through role-based dashboards, sales orders, and report automation.',
    tech: ['React', 'Node.js', 'Prisma', 'PostgreSQL', 'Zustand'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    icon: Code2,
    features: ['Role-Based Login', 'Proposal Management', 'PDF Export', 'Alert Notifications']
  },
  {
    title: 'Network Monitoring Dashboard',
    category: 'Infrastructure',
    desc: 'Infrastructure monitoring dashboard to track router status, service health, uptime, latency, and real-time alerts.',
    tech: ['React', 'Framer Motion', 'Socket.io', 'UpTime API'],
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2340&auto=format&fit=crop',
    icon: Monitor,
    features: ['Live Status', 'Latencey Checks', 'Uptime Metrics', 'Service Status Page']
  },
  {
    title: 'Corporate Web Engine',
    category: 'Web Development',
    desc: 'Professional business website system with high SEO optimization and responsive layouts for enterprise branding.',
    tech: ['Next.js', 'Framer Motion', 'TailwindCSS', 'SEO Engine'],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2344&auto=format&fit=crop',
    icon: Shield,
    features: ['SEO-Friendly Pages', 'Responsive UI', 'Contact Engine', 'Service Analytics']
  }
];

const categories = ['All', 'ISP / MikroTik', 'Software Engineering', 'Networking', 'Infrastructure', 'Web Development'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-display font-bold text-slate-900 dark:text-white mb-8 tracking-tighter"
        >
          Selected <span className="text-brand-blue italic">Engineering</span>
        </motion.h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          A collection of digital systems ranging from complex ISP infrastructure management 
          to full-stack business automation solutions.
        </p>
      </div>

      {/* Filter */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mb-20"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
              activeCategory === cat 
                ? 'bg-brand-blue border-brand-blue text-white' 
                : 'bg-white/5 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:border-brand-blue/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {filteredProjects.map((project, i) => (
          <motion.div
            layout
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative flex flex-col glass rounded-[2.5rem] border-slate-200 dark:border-white/5 overflow-hidden hover:border-brand-blue/30 transition-all transition-colors duration-500 shadow-sm dark:shadow-none"
          >
            <div className="relative aspect-[16/9] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/10 transition-colors" />
              
              <div className="absolute top-8 left-8">
                 <div className="w-12 h-12 rounded-2xl bg-brand-blue text-white flex items-center justify-center shadow-2xl shadow-brand-blue/30 scale-90 group-hover:scale-100 transition-transform">
                   <project.icon size={24} />
                 </div>
              </div>

              <div className="absolute top-8 right-8 flex gap-2">
                <button className="w-10 h-10 rounded-full glass border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                  <Github size={18} />
                </button>
                <button className="w-10 h-10 rounded-full glass border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                  <ExternalLink size={18} />
                </button>
              </div>
            </div>

            <div className="p-10 flex-grow">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-mono font-bold text-brand-blue uppercase tracking-[0.2em]">
                  {project.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-slate-700" />
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                  Production Ready
                </span>
              </div>
              
              <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-4 group-hover:text-brand-blue transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed line-clamp-3">
                {project.desc}
              </p>

              <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-10">
                {project.features.map(f => (
                  <div key={f} className="flex items-center gap-2 text-xs text-slate-500">
                    <div className="w-1 h-1 rounded-full bg-brand-blue/50" />
                    {f}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-8 border-t border-white/5">
                {project.tech.map(t => (
                  <span key={t} className="px-3 py-1 rounded bg-slate-900 text-[10px] font-mono text-slate-500 uppercase tracking-widest border border-white/5 group-hover:border-brand-blue/20 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* GitHub Callout */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 p-12 rounded-[3rem] bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 blur-[80px] rounded-full" />
        <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4">Open Source & Research</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto font-mono text-sm">
          EXPLORE_MORE_CODE_AND_DOCUMENTATION_ON_MY_GITHUB_PORTFOLIO
        </p>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-bold hover:scale-105 transition-transform"
        >
          <Github size={20} />
          Follow My Repositories
          <ArrowUpRight size={18} />
        </a>
      </motion.section>
    </div>
  );
}
