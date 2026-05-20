'use client';

import { motion } from 'motion/react';
import { Stethoscope, HeartPulse, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const courses = [
  {
    title: 'B.Sc. Nursing',
    duration: '4 Years',
    eligibility: '10+2 with PCB (45%)',
    icon: GraduationCap,
    description: 'A comprehensive degree program for aspirants aiming for senior nursing roles and global healthcare opportunities.',
    image: '/img/2.jpeg',
    color: 'border-medical-primary/10 bg-medical-light/50'
  },
  {
    title: 'GNM',
    duration: '3 Years',
    eligibility: '10+2 Any Stream (40%)',
    icon: HeartPulse,
    description: 'General Nursing and Midwifery focusing on bedside care, community health, and practical hospital training.',
    image: '/img/3.jpeg',
    color: 'border-amber-100 bg-amber-50/50'
  },
  {
    title: 'ANM',
    duration: '2 Years',
    eligibility: '10+2 Any Stream',
    icon: Stethoscope,
    description: 'A vocational nursing course specialized in community healthcare and basic maternity services.',
    image: '/img/4.jpeg',
  }
];

export default function Courses() {
  return (
    <section id="courses" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-medical-primary font-bold uppercase tracking-[0.2em] text-[10px] mb-4">Academic Excellence</div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter leading-none">Leading Nursing Programs</h2>
          </div>
          <p className="text-slate-700 max-w-sm text-sm border-l-2 border-medical-primary pl-6 font-medium">
            Affiliated with State Medical Faculty and Nursing Council. Recognized for academic excellence and clinical exposure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {courses.map((course, idx) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col h-full magic-hover p-4 rounded-3xl"
            >
              <div className="relative h-72 rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl shadow-slate-200 group-hover:shadow-medical-primary/20 transition-all">
                <Image src={course.image} alt={course.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-medical-dark shadow-sm z-10">
                  {course.duration} Program
                </div>
                {/* Shimmer Overlay */}
                <div className="absolute inset-0 shimmer pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="flex flex-col flex-grow px-2">
                <div className="flex items-center gap-5 mb-6">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 rounded-2xl bg-medical-light flex items-center justify-center shrink-0 shadow-lg shadow-medical-primary/10"
                  >
                    <course.icon className="w-7 h-7 text-medical-primary" />
                  </motion.div>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tighter group-hover:text-medical-primary transition-colors">{course.title}</h3>
                </div>
                
                <p className="text-slate-700 text-sm leading-relaxed mb-8 flex-grow font-semibold text-balance">
                  {course.description}
                </p>
                
                <div className="space-y-4 mb-10">
                  <div className="p-5 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200 group-hover:border-medical-primary/30 group-hover:bg-medical-light transition-all">
                    <p className="text-[10px] uppercase font-black text-slate-400 tracking-[0.2em] mb-2">Eligibility Criteria</p>
                    <div className="flex items-center gap-2">
                       <CheckCircle2 className="w-4 h-4 text-accent" />
                       <p className="text-sm font-black text-slate-800">{course.eligibility}</p>
                    </div>
                  </div>
                </div>

                <Link 
                  href={`/contact?course=${course.title}`}
                  className="w-full flex items-center justify-center py-5 rounded-2xl bg-slate-900 text-white font-black group-hover:bg-medical-primary transition-all shadow-2xl shadow-slate-900/10 uppercase tracking-widest text-xs"
                >
                  Apply Now <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
