/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Globe, 
  Settings, 
  Activity, 
  Database, 
  Server, 
  Search, 
  Cpu, 
  ShieldCheck, 
  Smartphone,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'ISP Management Systems',
    desc: 'Bespoke software for controlling MikroTik infrastructure, billing automation, and customer lifecycle management.',
    icon: Server,
    features: ['MikroTik API Integration', 'Bandwidth Management', 'User Authentication Systems']
  },
  {
    title: 'Full-Stack Web Engineering',
    desc: 'High-performance web applications built with React, Next.js, and Node.js with a focus on scalability and UX.',
    icon: Globe,
    features: ['SaaS Architectures', 'Admin Dashboards', 'API Development']
  },
  {
    title: 'Network Optimization',
    desc: 'Advanced networking solutions including MikroTik hotspot systems, enterprise WiFi, and secure LAN/WAN design.',
    icon: Activity,
    features: ['Hotspot Management', 'PPPoE Provisioning', 'Monitoring Solutions']
  },
  {
    title: 'ERP & Business Automation',
    desc: 'Custom workflows that connect sales, technical operations, and management into a unified digital system.',
    icon: Settings,
    features: ['Role-Based Workflows', 'PDF Export Automation', 'Field Technical Reporting']
  },
  {
    title: 'Cloud Infrastructure',
    desc: 'Deployment and management of cloud systems using Firebase, PostgreSQL, Netlify, and Vercel.',
    icon: Database,
    features: ['Server Management', 'Cloud Scaling', 'Database Hardening']
  },
  {
    title: 'ICT Consulting',
    desc: 'Strategic technology advice for digital transformation, cybersecurity, and ICT infrastructure deployment.',
    icon: Cpu,
    features: ['Infrastructure Surveys', 'Security Audits', 'Technical Documentation']
  }
];

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-28">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-display font-bold text-slate-900 dark:text-white mb-8 tracking-tighter"
        >
          Technology <span className="text-brand-blue italic">Services</span>
        </motion.h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-mono text-sm uppercase tracking-widest leading-loose">
          Engineering Digital Infrastructure For Business Growth And Operational Excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            className="group p-10 rounded-3xl glass border-slate-200 dark:border-white/5 hover:border-brand-blue/30 transition-all flex flex-col items-start h-full shadow-sm dark:shadow-none"
          >
            <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center text-brand-blue mb-8 group-hover:scale-110 transition-transform shadow-lg group-hover:shadow-brand-blue/20">
              <service.icon size={28} />
            </div>
            
            <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4 group-hover:text-brand-blue transition-colors">
              {service.title}
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
              {service.desc}
            </p>

            <ul className="space-y-3 mb-10 w-full">
              {service.features.map((f, idx) => (
                <li key={idx} className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                  <div className="w-1 h-1 rounded-full bg-brand-blue" />
                  {f}
                </li>
              ))}
            </ul>

            <Link 
              to="/contact" 
              className="w-full py-4 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-900 dark:text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 group-hover:bg-brand-blue group-hover:border-brand-blue group-hover:text-white transition-all shadow-sm dark:shadow-none"
            >
              Request Service
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Special Offer Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-32 p-16 rounded-[4rem] bg-gradient-to-br from-brand-blue/10 dark:from-brand-blue/10 via-slate-100 dark:via-slate-900/50 to-transparent border border-slate-200 dark:border-white/5 relative overflow-hidden shadow-sm dark:shadow-none"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">Expert Technical Integration</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed text-lg">
              Combining software development with practical ICT experience to build systems that don't just look good, but work reliably in real-world networking environments.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 px-4 py-2 rounded-full glass text-xs font-bold text-slate-900 dark:text-white uppercase border border-slate-200 dark:border-white/10">
                 <ShieldCheck className="text-brand-blue" size={16} /> Secure Systems
              </div>
              <div className="flex items-center gap-3 px-4 py-2 rounded-full glass text-xs font-bold text-slate-900 dark:text-white uppercase border border-slate-200 dark:border-white/10">
                 <Activity className="text-brand-blue" size={16} /> Live Monitoring
              </div>
              <div className="flex items-center gap-3 px-4 py-2 rounded-full glass text-xs font-bold text-slate-900 dark:text-white uppercase border border-slate-200 dark:border-white/10">
                 <Smartphone className="text-brand-blue" size={16} /> Multi-Device
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="text-slate-900 dark:text-white font-bold font-display uppercase tracking-widest text-xs">Technical Capability Matrix</h4>
            <div className="space-y-4">
              {[
                { name: 'MikroTik API v7', level: '95%' },
                { name: 'Full-Stack Performance', level: '90%' },
                { name: 'ISP Billing Automation', level: '85%' },
                { name: 'Security & Auth Protocols', level: '92%' }
              ].map(stat => (
                <div key={stat.name}>
                  <div className="flex justify-between text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">
                    <span>{stat.name}</span>
                    <span>{stat.level}</span>
                  </div>
                  <div className="h-1 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: stat.level }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="h-full bg-brand-blue" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
