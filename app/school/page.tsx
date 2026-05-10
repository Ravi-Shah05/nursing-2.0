import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCTAs from '@/components/FloatingCTAs';
import { BookOpen, Users, ShieldCheck, Gamepad2, Bus, Palette } from 'lucide-react';
import Image from 'next/image';

export default function School() {
  return (
    <main className="relative">
      <Navbar />
      
      {/* School Hero */}
      <section className="bg-slate-50 pt-40 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-medical-primary font-bold uppercase tracking-widest text-sm mb-4 block">Playgroup to Xth Grade</span>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-[1.1]">The Foundation for a <span className="text-medical-primary italic">Brighter Future</span></h1>
              <p className="text-lg text-black mb-10 leading-relaxed max-w-xl">
                 At Sunrise International School, we combine traditional values with modern learning techniques to foster curiosity and character in every child.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                 <button className="bg-medical-primary hover:bg-medical-dark text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-medical-primary/20 transition-all">
                   Register Today
                 </button>
                 <button className="bg-white border border-slate-200 text-slate-700 px-10 py-5 rounded-2xl font-bold text-lg hover:border-medical-primary transition-all">
                   View Gallery
                 </button>
              </div>
            </div>
            
            <div className="relative">
               <div className="aspect-square bg-medical-light rounded-full flex items-center justify-center relative">
                  <div className="w-[85%] h-[85%] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 rotate-3 transition-transform hover:rotate-0">
                     <Image 
                       src="/img/2.jpeg" 
                       alt="Cheerful Students" 
                       fill
                       className="object-cover"
                     />
                  </div>
                  {/* Decorative blobs */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent rounded-full -mr-8 -mt-8 opacity-20" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-medical-light rounded-full -ml-4 -mb-4 opacity-30" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose School */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
             <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Parents Choose Us?</h2>
             <p className="text-slate-500 max-w-2xl mx-auto font-medium italic">&quot;Education that inspires, environment that nurtures.&quot;</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Safe & Secure Campus", icon: ShieldCheck, desc: "CCTV surveillance and professional staff to ensure your child's safety at all times.", color: "bg-medical-light text-medical-primary" },
              { title: "Holistic Development", icon: Users, desc: "Focus on sports, arts, and debate alongside rigorous academic excellence.", color: "bg-accent/10 text-medical-dark" },
              { title: "Smart Classrooms", icon: BookOpen, desc: "Digitally enabled classrooms for an engaging and modern learning experience.", color: "bg-medical-light text-medical-primary" },
              { title: "Transport Facility", icon: Bus, desc: "Safe and reliable bus transport covering all major parts of the city.", color: "bg-purple-50 text-purple-600" },
              { title: "Indoor/Outdoor Sports", icon: Gamepad2, desc: "Special emphasis on physical education with expert coaching staff.", color: "bg-rose-50 text-rose-600" },
              { title: "Art & Creativity", icon: Palette, desc: "Encouraging self-expression through dedicated art and music sessions.", color: "bg-indigo-50 text-indigo-600" }
            ].map((feature, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-white border border-slate-100 hover:shadow-xl transition-all h-full flex flex-col items-center text-center">
                 <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${feature.color}`}>
                    <feature.icon className="w-8 h-8" />
                 </div>
                 <h4 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h4>
                 <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities CTA Section */}
      <section className="py-24 bg-medical-primary text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
           <h2 className="text-4xl md:text-6xl font-bold mb-8">Giving Your Child the Best Start</h2>
           <p className="text-white/80 max-w-xl mx-auto mb-12 text-lg">Schedule a campus visit to experience our facilities and meet our expert teachers today.</p>
           <button className="bg-accent text-medical-primary px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl transition-all hover:scale-105 active:scale-95">
             Book a Visit Now
           </button>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="grid grid-cols-6 h-full w-full gap-4 p-4">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="border border-white/20 rounded-2xl rotate-45" />
              ))}
           </div>
        </div>
      </section>

      <Footer />
      <FloatingCTAs />
    </main>
  );
}
