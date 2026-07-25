import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCTAs from '@/components/FloatingCTAs';
import { Target, Landmark, Heart, Award, MapPin } from 'lucide-react';
import AboutVision from '@/components/AboutVision';
import Leadership from '@/components/Leadership';
import Image from 'next/image';
import { site } from '@/lib/site';

export default function About() {
  return (
    <main className="relative">
      <Navbar />

      {/* Page Header */}
      <section className="bg-medical-dark pt-40 pb-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent opacity-5 -skew-x-12 transform translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <span className="text-accent font-black uppercase tracking-[0.2em] text-xs mb-4 block">About the Institution</span>
          <h1 className="text-4xl text-white md:text-6xl font-bold mb-6 leading-tight">Excellence in Nursing Education, Defined by Purpose.</h1>
          <p className="text-lg text-white/70 max-w-3xl">Sunrise College of Nursing is dedicated to shaping a new generation of healthcare professionals who lead with knowledge, precision, and compassion. Built on a foundation of academic integrity and clinical excellence, the institution offers an environment where learning is both disciplined and transformative.</p>
        </div>
      </section>

      {/* Our College Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-medical-primary font-black uppercase tracking-[0.2em] text-[10px] mb-6">Our College</div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-8 leading-none">Quiet Excellence.<br />Powerful Impact.</h2>
              <div className="space-y-5 text-slate-600 leading-relaxed font-medium">
                <p>At Sunrise College of Nursing, we don&apos;t just educate — we transform aspiring students into confident, compassionate, and highly skilled healthcare professionals. Rooted in strong academic values and driven by a passion for excellence, our institution creates a nurturing environment where knowledge meets real-world practice.</p>
                <p>Recognized by the {site.recognition.government} and approved by the {site.recognition.council}, the college upholds uncompromising academic and professional standards. Its affiliation with {site.recognition.university} ensures a structured and respected academic foundation.</p>
                <p>Learning here extends beyond classrooms. Carefully curated clinical exposure at Zydus Medical College &amp; Hospital, Navadha Hospital, and community health centers shapes confident, capable, and composed nursing professionals.</p>
              </div>
              <p className="mt-8 text-lg font-black text-medical-dark italic">&ldquo;Defined by Standards. Distinguished by Outcomes.&rdquo;</p>
            </div>
            <div className="relative">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
                <Image src="/img/campus-nursing.jpeg" alt="Sunrise College of Nursing campus, Dahod" width={1200} height={800} className="object-cover w-full h-80 md:h-[28rem]" />
              </div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur text-sm text-medical-dark px-5 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-lg">
                <MapPin className="w-4 h-4 text-medical-primary" /> Delsar, Dahod — Gujarat
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision / Mission / Philosophy */}
      <AboutVision />

      {/* Accreditation */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-lg">
            <h2 className="text-2xl font-black text-medical-dark mb-4 tracking-tight">Recognized Excellence. Trusted Legacy. Future-Ready Education.</h2>
            <p className="text-slate-600 leading-relaxed mb-6 max-w-3xl">Among the leading centers of nursing education in Dahod District — duly approved by the {site.recognition.council}, the apex regulatory authority — with academic affiliation to {site.recognition.university} for recognized qualifications and advanced career pathways.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {[
                { icon: Award, title: 'Government Recognized', desc: 'Recognized by the Government of Gujarat for credibility and quality.' },
                { icon: Landmark, title: 'GNC Approved', desc: 'Approved by the Gujarat Nursing Council, Ahmedabad.' },
                { icon: Target, title: 'University Affiliated', desc: 'Affiliated to Shri Govind Guru University, Godhra.' },
                { icon: Heart, title: 'Clinical Exposure', desc: 'Training at reputed hospitals and community health centers.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-medical-primary/10 flex items-center justify-center text-medical-primary shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-medical-dark text-sm">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-black text-medical-dark tracking-tight mb-8 text-center">Clinical Training Partners</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {site.clinicalPartners.map((partner, i) => (
                <div key={i} className="group bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:border-medical-primary/20 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center text-medical-primary font-black mb-4 group-hover:scale-110 transition-transform duration-300">{i + 1}</div>
                  <h4 className="font-black text-medical-dark leading-snug mb-1.5">{partner.name}</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{partner.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Messages */}
      <Leadership />

      <Footer />
      <FloatingCTAs />
    </main>
  );
}
