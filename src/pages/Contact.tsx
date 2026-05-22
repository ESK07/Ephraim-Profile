/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Github, 
  Linkedin, 
  Send, 
  ArrowRight,
  MessageSquare,
  Globe,
  Cpu
} from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'Software Development',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    alert('Thank you for your message! This is a demo submission.');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-28">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tighter"
        >
          Let's <span className="text-brand-blue italic">Build</span> Together
        </motion.h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto font-mono text-sm uppercase tracking-widest leading-loose">
          Ready to engineer your next digital solution. Reach out for projects, internships, or technical consultations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-brand-blue" />
              Contact Information
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Email Me</p>
                  <a href="mailto:ESKDIVINE@gmail.com" className="text-xl font-display font-bold text-white hover:text-brand-blue transition-colors">
                    ESKDIVINE@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-xl font-display font-bold text-white">Harare, Zimbabwe</p>
                  <p className="text-slate-400 text-sm">Southern Africa Region</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Connect Online</p>
                  <div className="flex gap-4 mt-2">
                    <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-brand-blue transition-all">
                      <Github size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-brand-blue transition-all">
                      <Linkedin size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-brand-blue transition-all">
                      <Globe size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="p-10 rounded-[2.5rem] bg-gradient-to-br from-brand-blue/10 to-transparent border border-white/5 relative overflow-hidden group">
             <Cpu className="text-brand-blue/20 absolute -bottom-10 -right-10 w-40 h-40 group-hover:scale-110 transition-transform duration-700" />
             <h3 className="text-2xl font-display font-bold text-white mb-4 relative z-10">Available for Opportunities</h3>
             <p className="text-slate-400 text-sm leading-relaxed mb-8 relative z-10">
               Currently accepting applications for software engineering internships, collaborative networking projects, and enterprise ICT support.
             </p>
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest border border-emerald-500/20 relative z-10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Active Status
             </div>
          </section>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="E.g. John Doe" 
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl glass border-white/5 focus:outline-none focus:border-brand-blue/50 text-white placeholder:text-slate-700 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="john@example.com" 
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl glass border-white/5 focus:outline-none focus:border-brand-blue/50 text-white placeholder:text-slate-700 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest ml-1">Service Interest</label>
              <select 
                className="w-full px-6 py-4 rounded-2xl glass border-white/5 focus:outline-none focus:border-brand-blue/50 text-white transition-all appearance-none cursor-pointer"
                value={formState.service}
                onChange={(e) => setFormState({...formState, service: e.target.value})}
              >
                <option value="Software Development" className="bg-slate-900">Software Development</option>
                <option value="ISP / Networking" className="bg-slate-900">ISP / Networking</option>
                <option value="Automation & ERP" className="bg-slate-900">Automation & ERP</option>
                <option value="Internship Inquiry" className="bg-slate-900">Internship Inquiry</option>
                <option value="General Consultation" className="bg-slate-900">General Consultation</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest ml-1">Message Detail</label>
              <textarea 
                rows={6}
                required
                placeholder="Tell me about your project or inquiry..." 
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
                className="w-full px-6 py-4 rounded-2xl glass border-white/5 focus:outline-none focus:border-brand-blue/50 text-white placeholder:text-slate-700 transition-all resize-none"
              />
            </div>

            <button 
              type="submit" 
              className="w-full py-5 rounded-2xl bg-brand-blue text-white font-bold flex items-center justify-center gap-3 hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20 group"
            >
              Send Message
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>

          <p className="mt-10 text-center text-slate-500 text-xs flex items-center justify-center gap-2">
             <ArrowRight size={14} /> Typically responds within 24-48 business hours
          </p>
        </div>
      </div>
    </div>
  );
}
