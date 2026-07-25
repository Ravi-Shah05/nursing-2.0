'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, Bell } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';

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
        <div className="fixed inset-0 z-100 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg max-h-[92vh] bg-white rounded-3xl sm:rounded-4xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-9 h-9 sm:w-10 sm:h-10 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col overflow-y-auto min-h-0">
              {/* Image Header with Logo/Title */}
              <div className="relative h-44 sm:h-64 md:h-80 w-full bg-medical-primary overflow-hidden shrink-0">
                <Image
                  src="/img/campus-nursing.jpeg"
                  alt="Sunrise College of Nursing, Dahod — Admissions 2026-27"
                  fill
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-linear-to-t from-medical-dark via-transparent to-transparent" />

                <div className="absolute bottom-4 sm:bottom-6 left-5 right-5 sm:left-8 sm:right-8">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-lg flex items-center justify-center text-medical-primary shadow-lg shrink-0">
                      <Bell className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <span className="text-white text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em]">Admissions Announcement</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tighter leading-tight">
                    Session 2026-27 <br /> Admissions Open!
                  </h2>
                </div>
              </div>

              {/* Content Panel */}
              <div className="p-5 sm:p-8 md:p-10 space-y-4 sm:space-y-6">
                <p className="text-slate-600 font-bold leading-relaxed text-sm sm:text-base">
                  Join Sunrise College of Nursing, Dahod for professional excellence. Seats available for <span className="text-medical-primary font-black">M.Sc, P.B.B.Sc, B.Sc Nursing, GNM, ANM &amp; D.M.L.T</span> programs.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-slate-50 p-3.5 sm:p-4 rounded-2xl border border-slate-100 flex flex-col justify-center">
                    <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">Programs</p>
                    <p className="text-sm font-black text-slate-800">UG · PG · Diplomas</p>
                  </div>
                  <div className="bg-slate-50 p-3.5 sm:p-4 rounded-2xl border border-slate-100 flex flex-col justify-center">
                    <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">Approved By</p>
                    <p className="text-sm font-black text-slate-800">Gujarat Nursing Council</p>
                  </div>
                  <div className="sm:col-span-2 bg-slate-50 p-3.5 sm:p-4 rounded-2xl border border-slate-100 flex flex-col justify-center">
                    <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">Affiliated With</p>
                    <p className="text-sm font-black text-slate-800">{site.recognition.university}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1 sm:pt-2">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 bg-accent hover:bg-accent-dark text-medical-primary px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-accent/20 flex items-center justify-center gap-2"
                  >
                    Apply Now
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex-1 bg-white border-2 border-slate-100 text-slate-600 hover:border-medical-primary hover:text-medical-primary px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all"
                  >
                    Later
                  </button>
                </div>

                <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest pt-1 sm:pt-2">
                  Contact Counselor: {site.phoneDisplay}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
