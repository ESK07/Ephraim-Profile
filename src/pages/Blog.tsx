/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  ArrowUpRight, 
  Clock, 
  Calendar, 
  ChevronRight, 
  Search, 
  Tag as TagIcon 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    title: 'How MikroTik Routers Power ISP Networks in Zimbabwe',
    excerpt: 'Exploring the backbone of local internet service providers and how RouterOS provides the scalability needed for African infrastructure.',
    category: 'Networking',
    readTime: '8 min read',
    date: 'May 10, 2024',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2340&auto=format&fit=crop'
  },
  {
    title: 'Building an ISP Management System with Next.js and NestJS',
    excerpt: 'A technical deep dive into developing modern dashboards that control networking hardware via APIs for billing and user management.',
    category: 'Software Engineering',
    readTime: '12 min read',
    date: 'May 02, 2024',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000&auto=format&fit=crop'
  },
  {
    title: 'Why Small Businesses in Zimbabwe Need Professional Websites',
    excerpt: 'Beyond a simple landing page—how digital presence drives leads, trust, and business continuity in the modern local economy.',
    category: 'Digital Transformation',
    readTime: '5 min read',
    date: 'April 25, 2024',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop'
  },
  {
    title: 'Enterprise Networking Basics for Growing Companies',
    excerpt: 'Essential checklist for building secure, scalable office networks including WiFi coverage, security firewalls, and monitoring.',
    category: 'ICT Infrastructure',
    readTime: '10 min read',
    date: 'April 15, 2024',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2340&auto=format&fit=crop'
  }
];

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
        <div className="max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tighter"
          >
            Insights & <span className="text-brand-blue italic">Articles</span>
          </motion.h1>
          <p className="text-lg text-slate-400">
            Exploring the intersection of software engineering, networking, and digital transformation in the context of Africa's growing economy.
          </p>
        </div>
        
        <div className="relative group min-w-[300px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-hover:text-brand-blue transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search articles..." 
            className="w-full pl-12 pr-4 py-4 rounded-2xl glass border-white/5 focus:outline-none focus:border-brand-blue/50 text-white placeholder:text-slate-600 transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {posts.map((post, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group cursor-pointer flex flex-col glass rounded-[2.5rem] border-white/5 overflow-hidden hover:border-brand-blue/30 transition-all duration-500"
          >
            <div className="aspect-[16/9] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/10 transition-colors" />
            </div>

            <div className="p-10">
               <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="px-3 py-1 rounded bg-brand-blue/20 text-brand-blue text-[10px] font-bold uppercase tracking-wider border border-brand-blue/20">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    <Clock size={12} /> {post.readTime}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    <Calendar size={12} /> {post.date}
                  </div>
               </div>

               <h2 className="text-3xl font-display font-bold text-white mb-6 group-hover:text-brand-blue transition-colors leading-tight">
                  {post.title}
               </h2>

               <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-8">
                  {post.excerpt}
               </p>

               <div className="flex items-center justify-between pt-8 border-t border-white/5">
                  <span className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:text-brand-blue transition-colors">
                    Read Article <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <ArrowUpRight size={20} className="text-slate-600 group-hover:text-brand-blue group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
               </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Blog CTA */}
      <section className="mt-32 p-16 rounded-[4rem] bg-slate-900/50 border border-white/5 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[100px] rounded-full z-0" />
        <div className="relative z-10 flex flex-col items-center">
          <TagIcon className="text-brand-blue mb-6" size={40} />
          <h3 className="text-3xl font-display font-bold text-white mb-4 tracking-tight">Stay Updated on African Tech</h3>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed">
            I regularly publish articles about networking, software development, and the future of digital infrastructure in Zimbabwe.
          </p>
          <div className="flex w-full max-w-md p-2 rounded-2xl glass border-white/10">
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="flex-grow bg-transparent px-4 py-2 text-sm text-white focus:outline-none"
            />
            <button className="px-6 py-3 rounded-xl bg-brand-blue text-white text-xs font-bold uppercase tracking-widest shadow-lg shadow-blue-500/20">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
