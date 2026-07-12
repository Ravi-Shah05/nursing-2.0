'use client';

import { motion } from 'motion/react';
import { School, GraduationCap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function DualPath() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-100/30 -skew-x-12 transform origin-top translate-x-1/2 -z-0"></div>
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -top-24 -left-24 w-96 h-96 bg-medical-primary/5 rounded-full blur-[100px]"
      />
      
      <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Path 1: Schools */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group bg-white rounded-[3rem] p-10 lg:p-14 border-2 border-slate-100 shadow-2xl shadow-slate-200/40 relative h-full flex flex-col overflow-hidden magic-hover"
          >
             <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-medical-light text-medical-primary rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-medical-primary/20">
                  <span className="w-1.5 h-1.5 bg-medical-primary rounded-full animate-pulse" />
                  Grades 1 to 12
                </div>
                <h3 className="text-4xl lg:text-6xl font-black mb-6 text-slate-900 tracking-tighter leading-none group-hover:text-medical-primary transition-all duration-500 transform group-hover:scale-[1.02]">Sunrise <br />Public School</h3>
                <p className="text-slate-700 mb-10 max-w-sm text-sm leading-relaxed font-bold">
                  English &amp; Gujarati medium education from Grade 1 to 12, with Science, Commerce &amp; Arts streams, smart classrooms, and expert academic collaborations.
                </p>
                <Link 
                  href="/school" 
                  className="w-fit flex items-center justify-center px-10 py-5 rounded-2xl bg-slate-900 text-white font-black hover:bg-medical-primary transition-all hover:scale-105 shadow-xl shadow-slate-900/10 uppercase tracking-widest text-xs"
                >
                  Explore School <ArrowRight className="ml-3 w-4 h-4" />
                </Link>
             </div>
             <motion.div 
               animate={{ rotate: [12, 15, 12] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-0 right-0 p-12 opacity-[0.04] scale-150 rotate-12 transition-transform group-hover:scale-125 text-medical-primary"
             >
                <School size={220} />
             </motion.div>
          </motion.div>

          {/* Path 2: Nursing & Healthcare */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="group bg-white rounded-[3rem] p-10 lg:p-14 border-2 border-slate-100 shadow-2xl shadow-slate-200/40 relative h-full flex flex-col overflow-hidden magic-hover"
          >
             <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-medical-light text-medical-dark rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-medical-primary/10">
                  <span className="w-1.5 h-1.5 bg-medical-primary rounded-full animate-pulse" />
                  Degrees & Diplomas
                </div>
                <h3 className="text-4xl lg:text-6xl font-black mb-6 text-slate-900 tracking-tighter leading-none group-hover:text-medical-primary transition-all duration-500 transform group-hover:scale-[1.02]">Nursing &amp; <br />Healthcare</h3>
                <p className="text-slate-700 mb-10 max-w-sm text-sm leading-relaxed font-bold text-balance">
                   Professional programs — M.Sc, P.B.B.Sc, B.Sc Nursing, GNM, ANM &amp; D.M.L.T — with 100% clinical exposure at Zydus &amp; Navadha hospitals and community health centers.
                </p>
                <Link 
                  href="/nursing" 
                  className="w-fit flex items-center justify-center px-10 py-5 rounded-2xl bg-medical-dark text-white font-black hover:bg-medical-primary transition-all hover:scale-105 shadow-xl shadow-medical-primary/10 uppercase tracking-widest text-xs"
                >
                  Explore Degrees <ArrowRight className="ml-3 w-4 h-4" />
                </Link>
             </div>
             <motion.div 
               animate={{ rotate: [-12, -15, -12] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-0 right-0 p-12 opacity-[0.04] scale-150 -rotate-12 transition-transform group-hover:scale-125 text-medical-dark"
             >
                <GraduationCap size={220} />
             </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
