import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCTAs from '@/components/FloatingCTAs';
import { FlaskConical, Monitor, Library, Bus, Snowflake, ShieldCheck, Trophy, HeartPulse, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function Facilities() {
  const facilityList = [
    {
      title: "Nursing Practical Labs",
      icon: HeartPulse,
      desc: "Well-equipped nursing skill labs where students practise clinical procedures safely before their hospital postings.",
      image: "/img/nursing-staff.jpeg"
    },
    {
      title: "Science Laboratories",
      icon: FlaskConical,
      desc: "Modern, fully-equipped science laboratories supporting practical, hands-on learning for our Science students.",
      image: "/img/science-lab.jpeg"
    },
    {
      title: "Computer Lab",
      icon: Monitor,
      desc: "A dedicated computer lab enabling digital learning and building essential technology skills for every student.",
      image: "/img/computer-lab.jpeg"
    },
    {
      title: "Smart Classrooms",
      icon: Snowflake,
      desc: "AC smart classrooms with digital projectors for an engaging, comfortable and modern learning experience.",
      image: "/img/classroom.jpeg"
    }
  ];

  return (
    <main className="relative">
      <Navbar />

      <section className="bg-slate-50 pt-40 pb-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <span className="text-medical-primary font-bold uppercase tracking-widest text-sm mb-4 block">Campus Infrastructure</span>
            <h1 className="text-5xl font-bold text-medical-dark mb-6">A Campus Built for Learning</h1>
            <p className="text-xl text-slate-500 max-w-2xl">We believe a conducive environment is key to effective learning. Explore the facilities across our Delsar, Dahod campus — designed for both our schools and college of nursing.</p>
         </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
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
      <section className="py-24 bg-medical-light/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             {[
               { icon: Library, label: "Library" },
               { icon: Trophy, label: "Sports & Culture" },
               { icon: ShieldCheck, label: "CCTV Security" },
               { icon: Bus, label: "Transportation" },
               { icon: Sparkles, label: "Clean Campus" },
               { icon: Monitor, label: "Digital Projectors" },
               { icon: Snowflake, label: "AC Classrooms" },
               { icon: FlaskConical, label: "Vocational Labs" },
             ].map((item, i) => (
               <div key={i} className="bg-white p-8 rounded-[2rem] text-center border border-medical-primary/5 flex flex-col items-center group hover:border-medical-primary transition-colors">
                  <item.icon className="w-9 h-9 text-medical-primary mb-4" />
                  <span className="font-bold text-medical-dark uppercase tracking-widest text-[11px]">{item.label}</span>
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
