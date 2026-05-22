/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Code2, 
  Wifi, 
  Terminal, 
  ShieldCheck, 
  Layers, 
  Database,
  Grid,
  Zap,
  Globe,
  Settings,
  Activity,
  Server
} from 'lucide-react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  ResponsiveContainer 
} from 'recharts';

const radarData = [
  { subject: 'Software', A: 95, fullMark: 100 },
  { subject: 'Networking', A: 96, fullMark: 100 },
  { subject: 'Cloud', A: 88, fullMark: 100 },
  { subject: 'Security', A: 92, fullMark: 100 },
  { subject: 'Design', A: 80, fullMark: 100 },
  { subject: 'DevOps', A: 85, fullMark: 100 },
];

const skillCategories = [
  {
    title: 'Software Engineering',
    icon: Code2,
    color: 'text-blue-400',
    skills: [
      { name: 'Full-Stack Development', level: '95%' },
      { name: 'React / Next.js', level: '90%' },
      { name: 'TypeScript', level: '88%' },
      { name: 'Node.js / NestJS', level: '85%' },
      { name: 'API Design (REST)', level: '92%' },
      { name: 'Auth Systems (JWT/OAuth)', level: '90%' }
    ]
  },
  {
    title: 'Networking & ISP Systems',
    icon: Wifi,
    color: 'text-emerald-400',
    skills: [
      { name: 'MikroTik RouterOS v6/v7', level: '96%' },
      { name: 'ISP Hotspot Billing', level: '92%' },
      { name: 'Radius / User Manager', level: '85%' },
      { name: 'Bandwidth Management', level: '90%' },
      { name: 'Network Monitoring', level: '94%' },
      { name: 'Enterprise WiFi Mesh', level: '88%' }
    ]
  },
  {
    title: 'Cloud & Infrastructure',
    icon: Server,
    color: 'text-purple-400',
    skills: [
      { name: 'PostgreSQL / Prisma', level: '88%' },
      { name: 'Firebase / Firestore', level: '90%' },
      { name: 'Vercel / Netlify Ops', level: '95%' },
      { name: 'Linux Server Basics', level: '80%' },
      { name: 'Docker Fundamentals', level: '75%' },
      { name: 'Infrastructure as Code', level: '70%' }
    ]
  },
  {
    title: 'Professional Tools',
    icon: Terminal,
    color: 'text-amber-400',
    skills: [
      { name: 'Git / GitHub Workflow', level: '92%' },
      { name: 'Postman / API Testing', level: '95%' },
      { name: 'Figma (UI/UX Design)', level: '80%' },
      { name: 'Technical Documentation', level: '90%' },
      { name: 'Agile / SCRUM', level: '85%' },
      { name: 'System Auditing', level: '88%' }
    ]
  }
];

export default function Skills() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 pb-40">
      {/* Header Section with Radar Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-slate-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
            Technical <span className="text-gradient">Ecosystem</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl font-mono text-sm uppercase tracking-[0.2em] leading-relaxed mb-10">
            A comprehensive multidimensional audit of engineering proficiencies across software, hardware, and scalable infrastructure.
          </p>
          
          <div className="flex gap-10">
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-slate-900 dark:text-white mb-1">04+</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-blue-500 dark:text-blue-400">Years Experience</span>
            </div>
            <div className="border-l border-slate-200 dark:border-white/10" />
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-slate-900 dark:text-white mb-1">20+</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-purple-600 dark:text-purple-400">Key Deployments</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.2 }}
           className="relative h-[400px] w-full glass rounded-[3rem] p-8 border-white/5 flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-blue-500/5 blur-[80px]" />
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="65%" data={radarData}>
              <PolarGrid stroke="#334155" />
              <PolarAngleAxis 
                dataKey="subject" 
                tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em' }} 
              />
              <Radar
                name="Proficiency"
                dataKey="A"
                stroke="#60a5fa"
                fill="#3b82f6"
                fillOpacity={0.2}
              />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Skills Detail Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {skillCategories.map((group, i) => (
          <motion.section 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-10 rounded-[2.5rem] bg-white/70 dark:bg-black/40 border border-slate-200 dark:border-white/10 hover:border-brand-blue/30 transition-all group backdrop-blur-md shadow-sm dark:shadow-none"
          >
            <div className="flex items-center gap-6 mb-12">
              <div className={`w-14 h-14 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center ${group.color} group-hover:scale-110 transition-transform`}>
                <group.icon size={28} />
              </div>
              <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white tracking-tight">{group.title}</h2>
            </div>

            <div className="space-y-8">
              {group.skills.map((skill, idx) => (
                <div key={idx} className="space-y-3">
                   <div className="flex justify-between items-end">
                      <span className="text-sm font-bold text-slate-600 dark:text-slate-300">{skill.name}</span>
                      <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest">{skill.level}</span>
                   </div>
                   <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-900 rounded-full overflow-hidden border border-slate-200 dark:border-white/5">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        transition={{ duration: 1.5, ease: "circOut", delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                      />
                   </div>
                </div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
      <section className="mt-32 p-16 rounded-[4rem] bg-gradient-to-br from-brand-blue/5 to-transparent border border-slate-200 dark:border-white/5 text-center">
         <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider">Interested in Collaboration?</h3>
         <p className="text-slate-600 dark:text-slate-400 text-sm mb-10 max-w-xl mx-auto leading-relaxed">
            Ephraim is always looking to expand his technical horizon through challenging projects 
            and research-driven development.
         </p>
         <div className="flex justify-center gap-10">
            <div className="flex flex-col items-center">
               <span className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-1">04+</span>
               <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Years Code</span>
            </div>
            <div className="w-px h-12 bg-slate-200 dark:bg-white/5 self-center" />
            <div className="flex flex-col items-center">
               <span className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-1">20+</span>
               <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Deployments</span>
            </div>
            <div className="w-px h-12 bg-slate-200 dark:bg-white/5 self-center" />
            <div className="flex flex-col items-center">
               <span className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-1">100%</span>
               <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Commitment</span>
            </div>
         </div>
      </section>
    </div>
  );
}
