/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';

export default function RootLayout() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-blue selection:text-white">
      {/* Background elements */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 opacity-20 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <Navbar />
      
      <main className="flex-grow pt-24">
        <Outlet />
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
}
