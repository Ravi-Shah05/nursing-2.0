'use client';

import { motion } from 'motion/react';
import { Stethoscope, HeartPulse, GraduationCap, Award, BookMarked, FlaskConical, ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import Link from 'next/link';
import { nursingCourses } from '@/lib/site';

const iconMap: Record<string, typeof GraduationCap> = {
  'M.Sc': Award,
  'P.B.B.Sc': BookMarked,
  'B.Sc': GraduationCap,
  'GNM': HeartPulse,
  'ANM': Stethoscope,
  'DMLT': FlaskConical,
};

export default function Courses() {
  return (
    <section id="courses" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-medical-primary font-bold uppercase tracking-[0.2em] text-[10px] mb-4">Structured Pathways · Distinguished Careers</div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter leading-none">Programs Offered</h2>
          </div>
          <p className="text-slate-700 max-w-sm text-sm border-l-2 border-medical-primary pl-6 font-medium">
            Conducted per Indian Nursing Council &amp; Gujarat Nursing Council guidelines, and affiliated with Shri Govind Guru University, Godhra.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nursingCourses.map((course, idx) => {
            const Icon = iconMap[course.short] ?? GraduationCap;
            return (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="group flex flex-col h-full magic-hover bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/40 hover:border-medical-primary/20"
              >
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 rounded-2xl bg-medical-light flex items-center justify-center shrink-0 shadow-lg shadow-medical-primary/10"
                  >
                    <Icon className="w-8 h-8 text-medical-primary" />
                  </motion.div>
                  <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-medical-dark">
                    <Clock className="w-3.5 h-3.5" /> {course.duration}
                  </div>
                </div>

                <h3 className="text-3xl font-black text-slate-900 tracking-tighter group-hover:text-medical-primary transition-colors mb-1">{course.title}</h3>
                <p className="text-[11px] font-black uppercase tracking-widest text-accent-dark mb-5">{course.type}</p>

                <p className="text-slate-700 text-sm leading-relaxed mb-6 flex-grow font-semibold text-balance">
                  {course.description}
                </p>

                <div className="p-5 bg-slate-50/60 rounded-2xl border border-dashed border-slate-200 group-hover:border-medical-primary/30 group-hover:bg-medical-light/50 transition-all mb-6">
                  <p className="text-[10px] uppercase font-black text-slate-400 tracking-[0.2em] mb-2">Eligibility</p>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent-dark shrink-0 mt-0.5" />
                    <p className="text-[13px] font-bold text-slate-800 leading-snug">{course.eligibility}</p>
                  </div>
                  {course.intake && (
                    <p className="text-[11px] font-black text-medical-primary uppercase tracking-widest mt-3 pl-6">Intake: {course.intake}</p>
                  )}
                </div>

                <Link
                  href={`/contact?course=${encodeURIComponent(course.title)}`}
                  className="w-full flex items-center justify-center py-4 rounded-2xl bg-slate-900 text-white font-black group-hover:bg-medical-primary transition-all shadow-xl shadow-slate-900/10 uppercase tracking-widest text-xs"
                >
                  Apply Now <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center mt-14 text-sm font-bold text-slate-500 italic">
          &ldquo;Aligned with Standards. Approved for Excellence.&rdquo; — Annual intake as approved by the regulatory councils.
        </p>
      </div>
    </section>
  );
}
