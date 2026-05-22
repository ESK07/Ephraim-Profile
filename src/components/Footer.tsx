/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, MapPin, ExternalLink, Cpu } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded bg-brand-blue flex items-center justify-center">
                <Cpu className="text-white w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Ephraim <span className="text-brand-blue">Kunaka</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Computer Engineer, software developer, and networking specialist from Zimbabwe. 
              Building intelligent digital infrastructure for the future of Africa.
            </p>
            <div className="flex gap-4">
              {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-blue transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Projects', 'Services', 'Blog'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-slate-400 hover:text-brand-blue text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-wider text-xs">Services</h4>
            <ul className="space-y-4">
              {[
                'Software Engineering',
                'ISP Systems',
                'Network Monitoring',
                'MikroTik Integration',
                'Cloud Infrastructure'
              ].map((item) => (
                <li key={item} className="text-slate-400 text-sm cursor-pointer hover:text-brand-blue transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-wider text-xs">Contact Information</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-blue shrink-0 mt-1" size={18} />
                <span className="text-slate-400 text-sm leading-relaxed">
                  Harare, Zimbabwe<br />
                  Southern Africa
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-blue shrink-0" size={18} />
                <a href="mailto:ESKDIVINE@gmail.com" className="text-slate-400 text-sm hover:text-white transition-colors">
                  ESKDIVINE@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs text-center md:text-left">
            © {currentYear} Ephraim Simbarashe Kunaka. All rights reserved. 
            Designed with <span className="text-red-500">♥</span> for the African Tech Innovator.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-500 hover:text-slate-300 text-xs underline underline-offset-4">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-slate-300 text-xs underline underline-offset-4">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-slate-300 text-xs underline underline-offset-4">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
