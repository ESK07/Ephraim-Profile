/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, User } from 'lucide-react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const welcomeMessage = "Hi there! I'm Ephraim's AI assistant. Reach out if you have questions about my work or want to discuss a project!";

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-80 md:w-96 bg-slate-950 border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="bg-brand-blue/10 p-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center">
                  <User size={16} className="text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight">Ephraim Kunaka</h4>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/5 rounded-lg transition-colors text-slate-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="h-80 p-4 overflow-y-auto space-y-4 bg-slate-950/50">
              <div className="flex gap-3 max-w-[85%]">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                  <span className="text-[10px] font-bold text-brand-blue">EK</span>
                </div>
                <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none border border-white/5">
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {welcomeMessage}
                  </p>
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-slate-900/50">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-brand-blue/50"
                  onKeyDown={(e) => e.key === 'Enter' && setMessage('')}
                />
                <button 
                  onClick={() => setMessage('')}
                  className="p-2 aspect-square rounded-xl bg-brand-blue text-white hover:bg-blue-600 transition-colors flex items-center justify-center shrink-0"
                >
                  <Send size={16} />
                </button>
              </div>
              <p className="text-[9px] text-slate-600 text-center mt-3 uppercase tracking-widest font-medium">
                Responds within a few hours
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-brand-blue text-white flex items-center justify-center shadow-2xl shadow-blue-500/40 border border-white/20 relative group"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-slate-950 animate-bounce" />
        )}
      </motion.button>
    </div>
  );
}
