'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'motion/react';
import { ChevronRight, ShieldCheck, Award, Users } from 'lucide-react';
import Image from 'next/image';

import { useMousePosition } from '@/hooks/use-mouse-position';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'Valid phone number required'),
  course: z.enum(['BSc Nursing', 'GNM', 'ANM', 'School Admission']),
});

export default function Hero() {
  const { x, y } = useMousePosition();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = (data: any) => {
    console.log(data);
    alert('Thank you for your enquiry! Our counselor will call you within 24 hours.');
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 editorial-skew bg-medical-primary overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/img/1.jpeg" 
          alt="Modern Hospital Background" 
          fill 
          className="object-cover opacity-[0.15] grayscale contrast-125"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-medical-dark via-transparent to-medical-dark/90" />
      </div>

      {/* Interactive Mouse Glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px at ${x}px ${y}px, rgba(7, 22, 88, 0.05), transparent 70%)`,
        }}
      />

      {/* Magical Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0], rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-medical-primary/10 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, 50, 0], rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-[100px]"
        />
        
        {/* Animated Particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0], 
              scale: [0, 1, 0],
              y: [0, -100],
              x: [0, (i % 2 === 0 ? 50 : -50)]
            }}
            transition={{ 
              duration: 5 + i, 
              repeat: Infinity, 
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            className="absolute w-1 h-1 bg-medical-primary rounded-full"
            style={{
              top: `${20 + (i * 5)}%`,
              left: `${10 + (i * 6)}%`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-20 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Content side - 60% */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 bg-white text-medical-dark rounded-full text-[10px] font-black uppercase tracking-widest border border-medical-primary/20 shadow-xl shadow-medical-primary/5"
            >
              <motion.span 
                animate={{ scale: [1, 1.5, 1] }} 
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2.5 h-2.5 bg-medical-primary rounded-full shadow-[0_0_10px_rgba(13,148,136,0.6)]"
              />
              INC & State Govt. Approved
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.02] tracking-tighter text-white mb-8 drop-shadow-xl">
              Building the <span className="text-accent relative inline-block group">
                <span className="relative z-10">Next Era</span>
                <motion.span 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  className="absolute -bottom-1 left-0 h-4 bg-accent/20 rounded-full -z-10 transition-all group-hover:h-full group-hover:bg-accent/30"
                />
              </span> <br /> of Professionals
            </h1>
            
            <p className="text-xl text-medical-light leading-relaxed mb-12 max-w-xl font-extrabold lg:text-2xl">
              Join the top-rated institute designed for excellence. Empowering students with clinical mastery, practical rigor, and <span className="text-accent font-black border-b-2 border-accent/40">100% placement assurance</span>.
            </p>

            <div className="flex flex-wrap gap-6 mb-16">
              <button className="flex items-center gap-4 bg-accent text-medical-primary px-10 py-5 rounded-2xl font-black shadow-2xl shadow-accent/20 hover:bg-white transition-all group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2 uppercase tracking-widest text-xs">
                  Explore Courses
                  <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-white/10 translate-y-full transition-transform group-hover:translate-y-0" />
              </button>
              <button className="flex items-center gap-3 bg-white/10 border-2 border-white/20 px-10 py-5 rounded-2xl font-black text-white hover:bg-white hover:text-medical-primary transition-all group shadow-sm uppercase tracking-widest text-xs">
                Book Campus Visit
              </button>
            </div>

            {/* Popular Courses Pills */}
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Quick Access:</span>
              <div className="pill-badge hover:bg-medical-primary/5">B.Sc Nursing</div>
              <div className="pill-badge hover:bg-medical-primary/5">GNM</div>
              <div className="pill-badge hover:bg-medical-primary/5">ANM</div>
            </div>
          </motion.div>

          {/* Form side - 40% */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -10, 0] 
            }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.2 },
              scale: { duration: 0.8, delay: 0.2 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl p-10 border border-slate-100 relative z-20">
               <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Admission Enquiry</h3>
                <p className="text-sm text-slate-500">Get a free counseling session today.</p>
               </div>

               <form id="hero-enquiry-form" onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <input 
                      {...register('name')}
                      type="text" 
                      placeholder="Full Name"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-medical-primary transition-all"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{(errors.name as any).message}</p>}
                  </div>

                  <div>
                    <input 
                      {...register('phone')}
                      type="tel" 
                      placeholder="Phone Number"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-medical-primary transition-all"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{(errors.phone as any).message}</p>}
                  </div>

                  <div>
                    <select 
                      {...register('course')}
                      defaultValue=""
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-medical-primary transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Interested Course</option>
                      <option value="BSc Nursing">B.Sc Nursing (4 Years)</option>
                      <option value="GNM">GNM Diploma (3 Years)</option>
                      <option value="ANM">ANM Diploma (2 Years)</option>
                      <option value="School Admission">Sunrise International School</option>
                    </select>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-medical-primary hover:bg-medical-dark text-white py-4 mt-2 rounded-lg font-bold text-sm shadow-lg shadow-medical-primary/10 transition-all uppercase tracking-widest"
                  >
                    Request Call Back
                  </button>
               </form>
               
               <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between text-[10px] text-slate-400 font-medium uppercase tracking-tighter">
                  <span>Available on Whatsapp</span>
                  <a href="https://wa.me/911234567890" className="text-accent flex items-center gap-1 font-bold hover:text-accent-dark transition-colors">
                    CHAT NOW
                  </a>
               </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-medical-primary/20 rounded-full blur-[100px] -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
