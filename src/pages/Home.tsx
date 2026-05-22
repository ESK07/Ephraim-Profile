/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from '../sections/Hero';
import { motion } from 'motion/react';
import { 
  Code2, 
  Database, 
  Layers, 
  Layout, 
  Terminal, 
  Wifi, 
  ShieldCheck, 
  BarChart3,
  ArrowUpRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const skills = [
  { icon: Code2, title: 'Full-Stack Dev', desc: 'React, Next.js, Node.js, NestJS', color: 'text-blue-400' },
  { icon: Wifi, title: 'Networking', desc: 'MikroTik, ISP Systems, Hotspots', color: 'text-emerald-400' },
  { icon: Database, title: 'Cloud & DB', desc: 'PostgreSQL, Prisma, Firebase', color: 'text-purple-400' },
  { icon: ShieldCheck, title: 'Cybersecurity', desc: 'Auth, Firewall, Network Hardening', color: 'text-red-400' },
];

const featuredProjects = [
  {
    title: 'ISP Management Platform',
    category: 'Full-Stack / Networking',
    desc: 'Integrated MikroTik management system with billing and bandwidth control.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000&auto=format&fit=crop',
    tags: ['Next.js', 'MikroTik API', 'PostgreSQL']
  },
  {
    title: 'Enterprise Business ERP',
    category: 'Software Engineering',
    desc: 'Workflow automation system for sales, technical teams, and management.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    tags: ['TypeScript', 'Prisma', 'Tailwind']
  }
];

export default function Home() {
  return (
    <div className="space-y-32 pb-32">
      <Hero />

      {/* About Section Excerpt */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
             <div className="aspect-square bg-slate-900 rounded-3xl overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2340&auto=format&fit=crop" 
                  alt="Modern Technology" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-100 dark:from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <p className="font-mono text-blue-500 dark:text-blue-400 text-sm uppercase tracking-widest mb-2 font-bold">Zimbabwe-Based Innovator</p>
                  <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white">Ephraim Simbarashe Kunaka</h2>
                </div>
             </div>
             {/* decorative blob */}
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/5 blur-3xl rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-mono text-blue-500 dark:text-blue-400 uppercase tracking-[0.3em] font-bold mb-6">Discovery</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-8 leading-tight">
              Bridging the gap between <span className="text-blue-500 dark:text-blue-400">Software</span> and <span className="text-indigo-600 dark:text-indigo-400">Infrastructure</span>.
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Ephraim is a Computer Engineering student specializing in building real-world digital ecosystems. 
              His expertise spans from full-stack web applications to sophisticated ISP management systems and 
              MikroTik networking integration.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              With a focus on automation and reliability, he designs solutions that optimize connectivity 
              and business workflows for the modern African enterprise.
            </p>
            
            <Link to="/about" className="group flex items-center gap-3 text-slate-900 dark:text-white font-bold hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              More About Me 
              <span className="w-10 h-[1px] bg-slate-900 dark:bg-white group-hover:bg-blue-500 dark:group-hover:bg-blue-400 transition-colors" />
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-mono text-blue-500 dark:text-blue-400 uppercase tracking-[0.3em] font-bold mb-6">Expertise</h2>
          <h3 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white tracking-tight">Technical Prowess</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-black/40 border border-white/10 hover:border-blue-400/50 transition-all hover:shadow-2xl hover:shadow-blue-400/10 group backdrop-blur-md"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 mb-6 group-hover:scale-110 transition-transform ${skill.color}`}>
                <skill.icon size={24} />
              </div>
              <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-3">{skill.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-slate-900/30 py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h2 className="text-sm font-mono text-blue-500 dark:text-brand-blue uppercase tracking-[0.3em] font-bold mb-6 text-left">Case Studies</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight">Featured Engineering</h3>
            </div>
            <Link to="/projects" className="px-8 py-3 rounded-full border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm font-bold hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-950 transition-all">
              Browse All Work
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {featuredProjects.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-8 glow-blue border border-slate-200 dark:border-white/10">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors" />
                  <div className="absolute top-6 right-6 px-4 py-1 rounded-full glass text-[10px] uppercase font-bold tracking-widest text-slate-900 dark:text-white border border-slate-200 dark:border-white/20">
                    {project.category}
                  </div>
                </div>
                <h4 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-all" />
                </h4>
                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">{project.desc}</p>
                <div className="flex gap-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono text-slate-500 uppercase tracking-widest px-2 py-1 rounded bg-white/5 border border-white/5">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article Spotlight */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative rounded-[3rem] overflow-hidden border border-white/10 group"
        >
          <div className="absolute inset-0 bg-slate-950/80 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2340&auto=format&fit=crop" 
            alt="Featured Article" 
            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-1000"
          />
          
          <div className="relative z-20 p-12 md:p-20 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-[10px] uppercase tracking-widest font-bold"
              >
                Featured Insight
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-4"
              >
                How MikroTik Routers Power ISP Networks in Zimbabwe
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-slate-400 text-lg leading-relaxed max-w-2xl"
              >
                Exploring the backbone of local internet service providers and how RouterOS provides 
                the scalability needed for African infrastructure.
              </motion.p>
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-3 text-white font-bold group/btn"
              >
                Read Full Article
                <span className="w-8 h-px bg-white group-hover/btn:w-12 transition-all" />
                <ArrowUpRight size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </Link>
            </div>
            
            <div className="hidden lg:block w-px h-40 bg-white/10" />
            
            <div className="hidden lg:flex flex-col gap-8 shrink-0">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Read Time</p>
                <p className="text-2xl font-display font-bold text-slate-200 dark:text-white">8 Minutes</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Category</p>
                <p className="text-2xl font-display font-bold text-slate-200 dark:text-white">Networking</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Networking Specialization */}
      <section className="max-w-7xl mx-auto px-6 py-20 pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
           >
              <h2 className="text-sm font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.3em] font-bold mb-6">ISP & Core Networking</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-8 leading-tight">
                Advanced <span className="text-emerald-600 dark:text-emerald-400 text-shadow-sm shadow-emerald-500/20">MikroTik</span> Systems & ISP Infrastructure
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                Specializing in the intersection of hardware management and automation. Ephraim builds customer portals, 
                bandwidth controllers, and network monitoring dashboards that integrate directly with MikroTik RouterOS.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  'MikroTik API-Based Router Automation',
                  'Smart Hotspot & Billing Systems',
                  'PPPoE Customer Provisioning',
                  'Live Network Monitoring Dashboards',
                  'VLAN & Enterprise WiFi Configuration'
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-slate-700 dark:text-slate-300"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                     {item}
                  </motion.li>
                ))}
              </ul>

              <div className="p-6 rounded-2xl glass border-emerald-500/20 flex gap-6 items-center">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Terminal size={24} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm mb-1">Production Ready Systems</p>
                  <p className="text-slate-400 text-xs">Developed and deployed real-world ICP/ISP management solutions.</p>
                </div>
              </div>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative"
           >
              {/* Fake dashboard UI */}
              <div className="bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-2xl relative z-10 scale-95 lg:scale-100 lg:-rotate-2 hover:rotate-0 transition-transform duration-500">
                 <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">RouterOS Interface v7.x</span>
                 </div>

                 <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                       <p className="text-[10px] font-mono text-slate-500 uppercase mb-1">Bandwidth</p>
                       <p className="text-xl font-display font-bold text-white">450.2 <span className="text-slate-500 text-xs font-normal">Mbps</span></p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                       <p className="text-[10px] font-mono text-slate-500 uppercase mb-1">Active Users</p>
                       <p className="text-xl font-display font-bold text-white">1,248</p>
                    </div>
                 </div>

                 <div className="space-y-4">
                    {[
                      { name: 'Fiber Core 1', status: 'Online', color: 'bg-emerald-500', load: '75%' },
                      { name: 'Hotspot Gateway', status: 'Online', color: 'bg-emerald-500', load: '50%' },
                      { name: 'Billing API', status: 'Standby', color: 'bg-blue-500', load: '25%' },
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col gap-2 p-3 bg-white/5 rounded-lg border border-white/5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-white">{item.name}</span>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{item.status}</span>
                        </div>
                        <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: item.load }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 + (i * 0.2) }}
                            className={`h-full ${item.color}`} 
                          />
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
              {/* Backglow */}
              <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full z-0 opacity-50" />
           </motion.div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="max-w-5xl mx-auto px-6 text-center py-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-brand-blue/30 blur-[100px] rounded-full z-0" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
            Ready to Build the <span className="text-blue-600 dark:text-brand-blue">Next Big Thing</span>?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether it's a software project, a networking challenge, or a full-scale digital transformation, 
            Ephraim is ready to help you engineer the solution.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link 
              to="/contact" 
              className="px-10 py-5 rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-bold hover:scale-105 transition-transform shadow-2xl shadow-slate-900/10 dark:shadow-white/10"
            >
              Get In Touch
            </Link>
            <Link 
              to="/projects" 
              className="px-10 py-5 rounded-2xl glass text-slate-900 dark:text-white font-bold border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 transition-all"
            >
              View Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
