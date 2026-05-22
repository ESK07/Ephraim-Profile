/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, Download, Server, Cpu, Globe, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-10 pb-20 overflow-hidden">
      {/* Background VFX */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-ping" />
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-500 rounded-full animate-ping delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-[10px] uppercase tracking-widest font-bold mb-8">
            Computer Engineering • Software Development • Networking
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold leading-[0.95] tracking-tight text-slate-900 dark:text-white mb-8">
            Engineering <span className="text-gradient">Infrastructure</span><br/>For The Future.
          </h1>
          
          <p className="text-slate-400 text-sm md:text-base mb-10 leading-relaxed max-w-md">
            Specializing in ISP management systems, MikroTik automation, and full-stack digital transformation. Building scalable ICT ecosystems across Zimbabwe and Africa.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link 
              to="/projects"
              className="px-8 py-4 bg-blue-600 text-white font-bold text-xs uppercase tracking-widest rounded-sm shadow-lg shadow-blue-900/20 hover:bg-blue-700 transition-all group shrink-0"
            >
              Explore Projects
            </Link>
            <button className="px-8 py-4 border border-slate-200 dark:border-white/20 hover:border-slate-400 dark:hover:border-white/40 text-slate-900 dark:text-white font-bold text-xs uppercase tracking-widest rounded-sm transition-all shrink-0">
              Download CV
            </button>
          </div>

          <div className="mt-12 border-l-2 border-blue-600 pl-6 space-y-6">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-black text-blue-400 mb-2">Networking specialist</h4>
              <p className="text-[11px] text-slate-500 uppercase leading-none mb-2 font-mono">MikroTik • Hotspot • PPPoE • Monitoring</p>
              <div className="h-1 w-full max-w-[200px] bg-slate-800 rounded-full"><div className="h-full w-[95%] bg-blue-600" /></div>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-black text-purple-400 mb-2">Full-Stack Development</h4>
              <p className="text-[11px] text-slate-500 uppercase leading-none mb-2 font-mono">Next.js • Node.js • TypeScript • Cloud</p>
              <div className="h-1 w-full max-w-[200px] bg-slate-800 rounded-full"><div className="h-full w-[88%] bg-purple-600" /></div>
            </div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, ease: "easeOut" }}
           className="relative hidden lg:block"
        >
          {/* Status Dashboard Mockup */}
          <div className="relative z-10 bg-white/80 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl p-8 backdrop-blur-md shadow-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 dark:text-slate-300">Network Node Statistics</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-100 dark:bg-white/5 rounded-lg border border-slate-200 dark:border-white/5">
                <div className="text-[9px] text-slate-500 uppercase tracking-widest mb-1">Uptime</div>
                <div className="text-3xl font-mono font-bold text-slate-900 dark:text-white tracking-tighter">99.9%</div>
              </div>
              <div className="p-4 bg-slate-100 dark:bg-white/5 rounded-lg border border-slate-200 dark:border-white/5">
                <div className="text-[9px] text-slate-500 uppercase tracking-widest mb-1">Latency</div>
                <div className="text-3xl font-mono font-bold text-slate-900 dark:text-white tracking-tighter">12ms</div>
              </div>
              <div className="p-4 bg-slate-100 dark:bg-white/5 rounded-lg border border-slate-200 dark:border-white/5">
                <div className="text-[9px] text-slate-500 uppercase tracking-widest mb-1">Throughput</div>
                <div className="text-3xl font-mono font-bold text-slate-900 dark:text-white tracking-tighter">1.2G<span className="text-xs">bps</span></div>
              </div>
              <div className="p-4 bg-slate-100 dark:bg-white/5 rounded-lg border border-slate-200 dark:border-white/5">
                <div className="text-[9px] text-slate-500 uppercase tracking-widest mb-1">Active Nodes</div>
                <div className="text-3xl font-mono font-bold text-slate-900 dark:text-white tracking-tighter">42</div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-4 opacity-40 grayscale group-hover:grayscale-0 transition-all">
              {['React', 'Vercel', 'Cisco', 'MikroTik', 'Prisma'].map(tech => (
                <span key={tech} className="text-[10px] font-bold tracking-widest uppercase">{tech}</span>
              ))}
            </div>
          </div>

          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-blue/30 blur-[60px] rounded-full z-0" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-600/30 blur-[60px] rounded-full z-0" />
        </motion.div>
      </div>
    </section>
  );
}
