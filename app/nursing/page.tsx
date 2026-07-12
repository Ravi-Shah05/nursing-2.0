import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCTAs from '@/components/FloatingCTAs';
import Courses from '@/components/Courses';
import { Hospital, BrainCircuit, UserCheck, BookOpen, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';

export default function Nursing() {
  return (
    <main className="relative">
      <Navbar />

      {/* Hero Subpage */}
      <section className="bg-medical-primary pt-40 pb-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-accent font-black uppercase tracking-[0.2em] text-xs mb-6 block">Sunrise College of Nursing · Dahod</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">Professional Nursing Careers</h1>
            <p className="text-xl text-medical-light mb-10 leading-relaxed font-bold">
              Approved by the Gujarat Nursing Council and affiliated to Shri Govind Guru University. Modern skill labs, clinical training at Zydus &amp; Navadha hospitals, and dedicated admission support.
            </p>
            <div className="flex flex-wrap gap-4">
               <Link href="/contact" className="bg-accent text-medical-primary px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform">
                 Check Eligibility
               </Link>
               <a href={site.phoneHref} className="bg-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">
                 Call {site.phoneDisplay}
               </a>
            </div>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 hidden lg:block">
            <Image
              src="/img/nursing-staff.jpeg"
              alt="Sunrise nursing students and faculty"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <Courses />

      {/* Training Section */}
      <section className="py-24 bg-medical-light/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-20">
             <h2 className="text-4xl font-bold text-medical-dark mb-4 font-heading">Clinical Training &amp; Exposure</h2>
             <p className="text-slate-600 max-w-2xl mx-auto">We bridge the gap between classroom theory and hospital reality through established healthcare partnerships.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Zydus Hospital Training", icon: Hospital, desc: "Comprehensive clinical training across multiple specialties at Zydus Medical College & Hospital, Dahod." },
              { title: "Psychiatric Nursing", icon: BrainCircuit, desc: "Specialized psychiatric nursing training in association with Navadha Hospital." },
              { title: "Community Health", icon: UserCheck, desc: "Rural and community exposure through CHCs and PHCs for real-world experience." },
              { title: "Modern Skill Labs", icon: BookOpen, desc: "Well-equipped nursing skill labs to practise procedures safely before clinical postings." }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-medical-primary transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-medical-light flex items-center justify-center mb-6 group-hover:bg-medical-primary transition-colors">
                  <feature.icon className="w-7 h-7 text-medical-primary group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-medical-dark mb-3">{feature.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Flow */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-bold text-medical-dark mb-4">How to Join</h2>
             <p className="text-slate-500">A simple 4-step admission process.</p>
           </div>

           <div className="space-y-12 relative">
             <div className="absolute top-0 left-8 h-full w-0.5 bg-slate-100 -z-10" />

             {[
               { step: "01", title: "Apply Online / Visit Campus", desc: "Fill the enquiry form or visit our Delsar, Dahod campus for a personalized counseling session." },
               { step: "02", title: "Document Verification", desc: "Our team verifies your 10th and 12th certificates for course eligibility." },
               { step: "03", title: "Counseling & Interaction", desc: "A short interaction with our principal to understand your career goals." },
               { step: "04", title: "Secure Your Seat", desc: "Complete the registration to confirm your admission for the current session." }
             ].map((item, i) => (
               <div key={i} className="flex gap-8 items-start">
                 <div className="w-16 h-16 rounded-2xl bg-medical-primary text-white flex items-center justify-center shrink-0 font-bold text-2xl shadow-lg shadow-medical-primary/20">
                   {item.step}
                 </div>
                 <div className="pt-2">
                   <h4 className="text-2xl font-bold text-medical-dark mb-2">{item.title}</h4>
                   <p className="text-slate-500">{item.desc}</p>
                 </div>
               </div>
             ))}
           </div>

           <div className="mt-20 text-center">
             <Link href="/contact" className="bg-medical-dark text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-medical-primary transition-all inline-flex items-center mx-auto">
               Begin Your Application <ArrowRight className="ml-3" />
             </Link>
           </div>
        </div>
      </section>

      <Footer />
      <FloatingCTAs />
    </main>
  );
}
