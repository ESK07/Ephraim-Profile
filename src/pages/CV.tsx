/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Download, Printer, Share2, Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function CV() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="flex justify-between items-center mb-12 no-print">
         <h1 className="text-3xl font-display font-bold text-white">Digital CV</h1>
         <div className="flex gap-4">
            <button 
              onClick={handlePrint}
              className="px-4 py-2 rounded-lg glass border-white/10 text-white text-sm font-bold flex items-center gap-2 hover:bg-white/10"
            >
              <Printer size={16} /> Print
            </button>
            <button className="px-6 py-2 rounded-lg bg-brand-blue text-white text-sm font-bold flex items-center gap-2 shadow-lg shadow-blue-500/20">
              <Download size={16} /> Download PDF
            </button>
         </div>
      </div>

      <div className="bg-white text-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl p-12 md:p-20 print:shadow-none print:rounded-none">
        {/* Header */}
        <header className="border-b-2 border-slate-900 pb-12 mb-12 flex flex-col md:flex-row justify-between items-start gap-8">
           <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-2 tracking-tight">
                EPHRAIM SIMBARASHE KUNAKA
              </h2>
              <p className="text-xl font-mono text-slate-500 uppercase tracking-widest font-bold">
                Computer Engineer & Software Developer
              </p>
           </div>
           <div className="space-y-2 text-sm font-medium">
              <div className="flex items-center gap-3 text-slate-600">
                 <Mail size={16} /> ESKDIVINE@gmail.com
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                 <MapPin size={16} /> Harare, Zimbabwe
              </div>
              <div className="flex items-center gap-3 text-slate-600 font-bold text-slate-900">
                 <Globe size={16} /> ephraimkunaka.com
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
           <div className="md:col-span-1 space-y-12">
              <section>
                 <h3 className="text-lg font-display font-bold uppercase tracking-widest border-b border-slate-200 pb-2 mb-6">Expertise</h3>
                 <ul className="space-y-3 text-sm font-medium text-slate-600">
                    <li>Full-Stack Development</li>
                    <li>MikroTik RouterOS</li>
                    <li>ISP Management</li>
                    <li>Network Monitoring</li>
                    <li>Enterprise IT Support</li>
                    <li>Database Engineering</li>
                    <li>Cybersecurity Fundamentals</li>
                 </ul>
              </section>

              <section>
                 <h3 className="text-lg font-display font-bold uppercase tracking-widest border-b border-slate-200 pb-2 mb-6">Technologies</h3>
                 <div className="flex flex-wrap gap-2">
                    {['Next.js', 'TypeScript', 'Node.js', 'Prisma', 'PostgreSQL', 'Firebase', 'Radius', 'RouterOS API'].map(t => (
                      <span key={t} className="px-2 py-1 bg-slate-100 rounded text-[10px] font-bold uppercase tracking-widest">
                        {t}
                      </span>
                    ))}
                 </div>
              </section>

              <section>
                 <h3 className="text-lg font-display font-bold uppercase tracking-widest border-b border-slate-200 pb-2 mb-6">Contact</h3>
                 <p className="text-sm font-medium text-slate-500 leading-relaxed italic">
                   "Building the digital infrastructure required for Africa's technological evolution."
                 </p>
              </section>
           </div>

           <div className="md:col-span-2 space-y-12">
              <section>
                 <h3 className="text-lg font-display font-bold uppercase tracking-widest border-b border-slate-200 pb-2 mb-8">Professional Profile</h3>
                 <p className="text-slate-600 leading-relaxed font-medium">
                   Highly adaptive Computer Engineering student with a dual expertise in high-level software development 
                   and core networking (MikroTik/ISP systems). Proven track record in developing real-world business automation 
                   platforms and managing complex ICT infrastructure deployments including Starlink and enterprise WiFi networks.
                 </p>
              </section>

              <section>
                 <h3 className="text-lg font-display font-bold uppercase tracking-widest border-b border-slate-200 pb-2 mb-8">Core Experience</h3>
                 <div className="space-y-10">
                    <div>
                       <div className="flex justify-between items-baseline mb-2">
                          <h4 className="font-bold text-slate-900 uppercase">Industrial Attachment (ICT Infrastructure)</h4>
                          <span className="text-xs font-bold font-mono text-slate-400">2023 - 2024</span>
                       </div>
                       <ul className="list-disc list-inside space-y-2 text-sm text-slate-600 font-medium">
                          <li>Lead technician for Starlink enterprise installations across Zimbabwe.</li>
                          <li>Configured MikroTik routers for ISP hotspot and billing management.</li>
                          <li>Designed and deployed multi-node enterprise WiFi coverage solutions.</li>
                          <li>Conducted field site surveys and technical auditing for enterprise clients.</li>
                       </ul>
                    </div>

                    <div>
                       <div className="flex justify-between items-baseline mb-2">
                          <h4 className="font-bold text-slate-900 uppercase">Independent System Development</h4>
                          <span className="text-xs font-bold font-mono text-slate-400">Ongoing</span>
                       </div>
                       <ul className="list-disc list-inside space-y-2 text-sm text-slate-600 font-medium">
                          <li>Developed a full-stack ISP Management Engine integrated with RouterOS.</li>
                          <li>Architected a role-based business ERP for technical field reporting.</li>
                          <li>Built custom real-time network monitoring dashboards for infrastructure status.</li>
                       </ul>
                    </div>
                 </div>
              </section>

              <section>
                 <h3 className="text-lg font-display font-bold uppercase tracking-widest border-b border-slate-200 pb-2 mb-8">Education</h3>
                 <div>
                    <div className="flex justify-between items-baseline mb-2">
                       <h4 className="font-bold text-slate-900 uppercase">BSc (Hons) Computer Engineering</h4>
                       <span className="text-xs font-bold font-mono text-slate-400">In Progress</span>
                    </div>
                    <p className="text-sm font-medium text-slate-600">Zimbabwe-Based University</p>
                    <p className="text-xs text-slate-400 mt-2">Relevant Coursework: Computer Networks, Software Engineering, Database Systems, Operating Systems, Cybersecurity.</p>
                 </div>
              </section>
           </div>
        </div>
      </div>
      
      <style>{`
        @media print {
          .no-print { display: none; }
          body { background: white; }
          main { padding-top: 0; }
          nav { display: none; }
          footer { display: none; }
        }
      `}</style>
    </div>
  );
}
