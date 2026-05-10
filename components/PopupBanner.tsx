'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, Bell } from 'lucide-react';
import Image from 'next/image';

export default function PopupBanner() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[2rem] overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col">
              {/* Image Header with Logo/Title */}
              <div className="relative h-64 md:h-80 w-full bg-medical-primary overflow-hidden">
                <Image 
                  src="/img/post.jpeg" 
                  alt="Sunrise College Admission 2026" 
                  fill 
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-medical-dark via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-8 right-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-medical-primary shadow-lg">
                      <Bell className="w-4 h-4" />
                    </div>
                    <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Admissions Announcement</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tighter leading-tight">
                    Session 2026-27 <br /> Admissions Open!
                  </h2>
                </div>
              </div>

              {/* Content Panel */}
              <div className="p-8 md:p-10 space-y-6">
                <p className="text-slate-600 font-bold leading-relaxed">
                  Join Sunrise College of Nursing for professional excellence. Limited seats available for <span className="text-medical-primary font-black">B.Sc Nursing, GNM, and ANM</span> courses.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col justify-center">
                    <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">Courses</p>
                    <p className="text-sm font-black text-slate-800">UG & Diplomas</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col justify-center">
                    <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">Scholarships</p>
                    <p className="text-sm font-black text-slate-800">Upto 50% Off</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="flex-1 bg-accent hover:bg-accent-dark text-medical-primary px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-accent/20 flex items-center justify-center gap-2"
                  >
                    Apply Now
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="flex-1 bg-white border-2 border-slate-100 text-slate-600 hover:border-medical-primary hover:text-medical-primary px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all"
                  >
                    Later
                  </button>
                </div>

                <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest pt-2">
                  Contact Counselor: +91 12345 67890
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
