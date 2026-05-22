/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Cpu, Github, Linkedin, MessageSquare, Moon, Sun } from 'lucide-react';

const navLinks = [
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Services', path: '/services' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.add('light');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled ? 'py-4 glass border-white/10' : 'py-6 bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-end justify-between">
        <Link 
          to="/" 
          className="flex flex-col group"
          onClick={() => setIsOpen(false)}
        >
          <div className="text-[10px] uppercase tracking-[0.4em] text-blue-400 font-bold mb-1">
            Digital Infrastructure Architect
          </div>
          <div className="flex items-center gap-2">
            <span className="font-display font-light text-2xl tracking-tighter text-slate-900 dark:text-white">
              Ephraim Simbarashe <span className="font-bold">Kunaka</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[11px] uppercase tracking-widest font-semibold transition-all hover:text-blue-400 ${
                location.pathname === link.path ? 'text-blue-400' : 'text-slate-300 opacity-60'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-6 py-2 bg-blue-600 text-white text-[11px] uppercase tracking-widest font-bold rounded-sm shadow-lg shadow-blue-900/20 hover:bg-blue-700 transition-all"
          >
            Contact
          </Link>

          <button
            onClick={toggleTheme}
            className="p-2 ml-4 rounded-full glass border-white/10 text-slate-300 hover:text-blue-400 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} className="text-slate-700" />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-700 dark:text-slate-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-white/10 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-lg font-medium text-slate-300 hover:text-brand-blue"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 w-full py-3 rounded-xl bg-brand-blue text-white text-center font-bold"
                onClick={() => setIsOpen(false)}
              >
                Hire Me
              </Link>
              <div className="flex gap-4 mt-4 pt-4 border-t border-white/5">
                <Github className="w-5 h-5 opacity-60" />
                <Linkedin className="w-5 h-5 opacity-60" />
                <MessageSquare className="w-5 h-5 opacity-60" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
