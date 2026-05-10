import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCTAs from '@/components/FloatingCTAs';
import { Target, Eye, Heart, Award } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <main className="relative">
      <Navbar />
      
      {/* Page Header */}
      <section className="bg-medical-dark pt-40 pb-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent opacity-5 -skew-x-12 transform translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl text-white md:text-6xl font-bold mb-6">Our Legacy of Excellence</h1>
          <p className="text-lg text-white/70 max-w-2xl">Building a sustainable future for healthcare through high-quality nursing education and empathetic schooling.</p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-medical-light p-10 rounded-3xl border border-medical-primary/10">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <Target className="text-medical-primary w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-medical-dark mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To transform lives by providing accessible, high-quality professional education in nursing and basic schooling. We aim to produce competent professionals who are not just technically sound but also carry the spirit of service.
              </p>
            </div>
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <Eye className="text-medical-primary w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-medical-dark mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the most trusted name in healthcare education and primary schooling in the region, recognized for academic excellence, ethical practices, and successful career outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chairman Message */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <div className="aspect-[3/4] relative rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/img/1.jpeg" 
                  alt="Chairman" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-2/3">
              <span className="text-medical-primary font-bold uppercase tracking-widest text-sm">A Message from the Leadership</span>
              <h2 className="text-4xl font-bold text-medical-dark mt-4 mb-8">Nurturing Capability & Compassion</h2>
              <div className="space-y-6 text-slate-600 italic text-lg leading-relaxed">
                <p>&quot;Welcome to Sunrise College of Nursing. Since our inception, we have been driven by a singular goal: to create a platform where students from all backgrounds can access world-class healthcare training.&quot;</p>
                <p>&quot;We believe that nursing is not just a profession, but a calling. Our curriculum is designed to challenge the mind while softening the heart, ensuring our graduates are ready for the complex demands of modern healthcare.&quot;</p>
              </div>
              <div className="mt-10">
                <h4 className="text-xl font-bold text-medical-dark uppercase tracking-tight">Dr. Amit Shah</h4>
                <p className="text-medical-primary font-medium">Chairman, Sunrise Group of Institutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTAs />
    </main>
  );
}
