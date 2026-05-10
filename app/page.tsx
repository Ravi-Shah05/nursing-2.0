'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Courses from '@/components/Courses';
import DualPath from '@/components/DualPath';
import Footer from '@/components/Footer';
import FloatingCTAs from '@/components/FloatingCTAs';
import PopupBanner from '@/components/PopupBanner';
import { ShieldCheck, Award, Briefcase, Building2, CheckCircle, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useSpring } from 'motion/react';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-medical-primary z-[60] origin-left shadow-[0_0_15px_rgba(7,22,88,0.5)]"
        style={{ scaleX }}
      />
      <Navbar />
      <Hero />
      
      {/* Quick Highlights Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        id="highlights-bar" 
        className="bg-medical-dark h-24 text-white overflow-hidden flex items-center relative z-20 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]"
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-12 w-full flex justify-between items-center">
          <div className="flex items-center gap-12 overflow-x-auto pb-2 scrollbar-hide">
            {[
              { label: 'Placement\nGuarantee', value: '100%', icon: ShieldCheck },
              { label: 'Hospital\nTie-ups', value: '500+', icon: Building2 },
              { label: 'Years of\nExcellence', value: '15+', icon: Award }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 shrink-0 transition-all hover:translate-y-[-2px] group">
                <div className="text-3xl font-black text-white group-hover:text-accent transition-colors drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">{item.value}</div>
                <div className="text-[10px] leading-tight uppercase font-bold text-slate-300 tracking-widest">
                  {item.label.split('\n').map((line, idx) => (
                    <span key={idx} className="block">{line}</span>
                  ))}
                </div>
                {i < 2 && <div className="hidden md:block w-px h-10 bg-white/10 ml-8" />}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-10">
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-widest text-white/60 mb-1">Student Portal</p>
              <Link href="/login" className="font-bold text-sm hover:text-accent transition-colors">Campus Login →</Link>
            </div>
            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5 group hover:border-white/20 transition-all cursor-pointer">
              <motion.div 
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="p-2 bg-accent rounded-lg text-medical-primary"
              >
                <MessageCircle className="w-5 h-5" />
              </motion.div>
              <div>
                <p className="text-xs font-semibold">WhatsApp Now</p>
                <p className="text-[10px] text-white/60">Get Quick Assistance</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <DualPath />
      
      {/* Why Choose Us Section */}
      <section id="why-us" className="py-24 bg-white overflow-hidden relative">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-medical-primary/5 rounded-full blur-[100px] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-medical-light rounded-[3rem] p-4 lg:p-8 relative overflow-visible">
                 <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl skew-x-1 transition-transform group hover:skew-x-0 cursor-pointer shimmer">
                    <Image 
                      src="/img/3.jpeg" 
                      alt="Practical Laboratory Training" 
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-105"
                    />
                 </div>
                 {/* Floating Stat Top left */}
                 <motion.div 
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 4, repeat: Infinity }}
                   className="absolute top-12 -left-8 bg-medical-primary p-7 rounded-[2rem] shadow-2xl text-white transform -rotate-6 z-20 border-4 border-white"
                 >
                    <div className="text-4xl font-black mb-1">100%</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/80">Placement Assured</div>
                 </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="text-medical-primary font-black uppercase tracking-[0.3em] text-[10px] mb-8 relative inline-block">
                Unmatched Standards
                <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-medical-primary rounded-full" />
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-10 tracking-tighter leading-none text-balance">Why Choose <br />Sunrise College?</h2>
              <p className="text-black mb-12 text-xl leading-relaxed font-bold text-balance">We don&apos;t just provide degrees; <span className="text-slate-900">we build careers</span>. Our integration of clinical training with academic rigor makes our students industry-ready from Day 1.</p>
              
              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-12">
                {[
                  { title: "Hands-on Practical Training", desc: "Access to advanced simulation labs and mandatory rotations." },
                  { title: "Global Opportunities", desc: "Curriculum aligned with international career standards." },
                  { title: "Personalized Mentoring", desc: "Dedicated faculty for career guidance and skill growth." },
                  { title: "Scholarship Support", desc: "Merit-based scholarships and govt. scheme guidance." }
                ].map((feature, i) => (
                  <div key={i} className="group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-medical-light flex items-center justify-center shrink-0 transition-all group-hover:rotate-12 group-hover:bg-medical-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-medical-primary/20">
                         <CheckCircle className="w-5 h-5 text-medical-primary group-hover:text-white" />
                      </div>
                      <h4 className="text-sm font-black text-slate-800 uppercase tracking-tight group-hover:text-medical-primary transition-colors">{feature.title}</h4>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed font-bold pl-14">{feature.desc}</p>
                  </div>
                ))}
              </div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="mt-16 bg-slate-950 p-10 rounded-[3rem] flex flex-col sm:flex-row items-center justify-between gap-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-medical-primary/20 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2" />
                <div className="relative z-10">
                  <p className="text-white text-2xl font-black mb-2 tracking-tight">Ready to Start?</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-black">Admissions window closing soon</p>
                </div>
                <button className="relative z-10 w-full sm:w-auto bg-medical-primary text-white px-10 py-5 rounded-2xl font-black hover:bg-white hover:text-slate-950 transition-all uppercase tracking-widest text-[10px] shadow-2xl shadow-medical-primary/20 group-hover:translate-x-1">
                  Request Call Back
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Courses />

      {/* Testimonial Section */}
      <section id="testimonials" className="py-32 bg-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full bg-medical-light/20 -skew-y-3 transform origin-right -z-0"></div>
        <motion.div 
          animate={{ x: [0, 50, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-medical-primary/10 rounded-full blur-[150px] -z-10"
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="flex flex-col items-center text-center mb-20">
            <div className="text-medical-primary font-black uppercase tracking-[0.3em] text-[10px] mb-8">Wall of Trust</div>
            <h2 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter leading-none text-medical-dark">Voices of Success</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { name: "Anjali Verma", role: "B.Sc Nursing Student", text: "The practical exposure at Sunrise is unmatched. We regularly visit top hospitals which builds huge confidence before our final placements." },
              { name: "Mr. Khanna", role: "Parent (GNM Student)", text: "Ensuring a safe and professional environment was my priority. Sunrise College provides exactly that with excellent faculty support." },
              { name: "Rahul Singh", role: "Alumnus (GNM)", text: "I got placed in a leading private hospital right after my course completion. The mock interviews conducted here helped a lot." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-100 p-12 rounded-[3.5rem] flex flex-col shadow-xl shadow-slate-200/50 hover:bg-slate-50 transition-all group hover:border-medical-primary/20 hover:shadow-2xl hover:shadow-medical-primary/5"
              >
                 <div className="flex text-accent mb-10 gap-1.5">
                    {[1,2,3,4,5].map(star => <CheckCircle key={star} className="w-5 h-5 fill-current shadow-[0_0_10px_rgba(245,158,11,0.2)]" />)}
                 </div>
                 <p className="text-slate-900 text-xl leading-relaxed mb-12 font-bold italic group-hover:text-black transition-colors">&quot;{item.text}&quot;</p>
                 <div className="flex items-center gap-5 mt-auto">
                   <div className="w-14 h-14 rounded-2xl bg-medical-primary flex items-center justify-center font-black text-white text-lg shrink-0 shadow-lg shadow-medical-primary/20 group-hover:scale-110 transition-transform">
                     {item.name.split(' ').map(n => n[0]).join('')}
                   </div>
                   <div>
                     <h5 className="font-extrabold text-medical-dark text-xl tracking-tight leading-none mb-2">{item.name}</h5>
                     <p className="text-[10px] text-accent font-black tracking-[0.2em] uppercase">{item.role}</p>
                   </div>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTAs />
      <PopupBanner />
    </main>
  );
}
