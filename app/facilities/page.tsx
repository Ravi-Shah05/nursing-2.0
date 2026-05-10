import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCTAs from '@/components/FloatingCTAs';
import { Microscope, Library, Home, Bus, Dumbbell, Coffee, ArrowRight, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export default function Facilities() {
  const facilityList = [
    { 
      title: "Nursing Simulation Lab", 
      icon: Microscope, 
      desc: "Fully equipped with high-fidelity mannequins and latest medical equipment for real-time skill practice.",
      image: "/img/5.jpeg"
    },
    { 
      title: "Digital Library", 
      icon: Library, 
      desc: "Access to thousands of journals, medical textbooks, and e-learning resources 24/7.",
      image: "/img/6.jpeg"
    },
    { 
      title: "In-Campus Hostel", 
      icon: Home, 
      desc: "Safe and comfortable residential facilities with nutritious mess food and high-speed Wi-Fi.",
      image: "/img/7.jpeg"
    },
    { 
      title: "Transport Service", 
      icon: Bus, 
      desc: "Dedicated fleet of buses for students and staff covering major routes across the district.",
      image: "/img/8.jpeg"
    }
  ];

  return (
    <main className="relative">
      <Navbar />
      
      <section className="bg-slate-50 pt-40 pb-20">
         <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl font-bold text-medical-dark mb-6">World-Class Infrastructure</h1>
            <p className="text-xl text-slate-500 max-w-2xl">We believe that a conducive environment is key to effective learning. Explore our campus facilities designed for excellence.</p>
         </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
           <div className="grid md:grid-cols-2 gap-x-12 gap-y-20">
              {facilityList.map((facility, i) => (
                <div key={i} className="group cursor-default">
                  <div className="relative aspect-video rounded-[2.5rem] overflow-hidden mb-8 shadow-xl">
                    <Image src={facility.image} alt={facility.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-medical-dark/60 to-transparent" />
                    <div className="absolute bottom-8 left-8 flex items-center space-x-4">
                       <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                          <facility.icon className="text-white w-6 h-6" />
                       </div>
                       <h3 className="text-2xl font-bold text-white tracking-tight">{facility.title}</h3>
                    </div>
                  </div>
                  <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                    {facility.desc}
                  </p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Extra Features Grid */}
      <section className="py-24 bg-medical-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {[
               { icon: Dumbbell, label: "Fitness Center" },
               { icon: Coffee, label: "Hygienic Canteen" },
               { icon: ShieldCheck, label: "24/7 Security" },
               { icon: Bus, label: "Student Bus" }
             ].map((item, i) => (
               <div key={i} className="bg-white p-8 rounded-[2rem] text-center border border-medical-primary/5 flex flex-col items-center group hover:border-medical-primary transition-colors">
                  <item.icon className="w-10 h-10 text-medical-primary mb-4" />
                  <span className="font-bold text-medical-dark uppercase tracking-widest text-xs">{item.label}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTAs />
    </main>
  );
}
