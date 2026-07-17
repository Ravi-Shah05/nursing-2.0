import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCTAs from '@/components/FloatingCTAs';
import { BookOpen, Users, ShieldCheck, Bus, Monitor, FlaskConical, Snowflake, Trophy, ArrowRight, Target, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { site, schoolLeadership } from '@/lib/site';

const streams = [
  { name: 'Science', desc: 'PCB / PCM foundation with expert coaching for medical & engineering aspirations.' },
  { name: 'Commerce', desc: 'Strong base for CA, CS & CPA with professional foundation preparation.' },
  { name: 'Arts', desc: 'Humanities stream nurturing language, social science & creative careers.' },
];

const collaborations = [
  { partner: 'Gyan Manjari Classes, Bhavnagar', for: 'Science (Classes 11 & 12)', desc: 'Expert guidance and result-oriented preparation for Science students — English & Gujarati medium.' },
  { partner: 'Navkar Institute, Ahmedabad', for: 'Commerce (Classes 11 & 12)', desc: 'Professional coaching and foundation preparation for CA, CS & CPA — English & Gujarati medium.' },
];

const facilities = [
  { title: 'AC Smart Classrooms', icon: Snowflake },
  { title: 'Digital Learning & Projectors', icon: Monitor },
  { title: 'Science Laboratories', icon: FlaskConical },
  { title: 'Computer Lab', icon: Monitor },
  { title: 'Library', icon: BookOpen },
  { title: 'Sports & Cultural Activities', icon: Trophy },
  { title: 'Career Guidance', icon: Users },
  { title: 'Safe Campus with CCTV', icon: ShieldCheck },
  { title: 'Transportation', icon: Bus },
];

export default function School() {
  return (
    <main className="relative">
      <Navbar />

      {/* School Hero */}
      <section className="bg-slate-50 pt-40 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-medical-primary font-bold uppercase tracking-widest text-sm mb-4 block">English &amp; Gujarati Medium · Grades 1 to 12</span>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-[1.1]">Learning Today. <span className="text-medical-primary italic">Leading Tomorrow.</span></h1>
              <p className="text-lg text-slate-700 mb-10 leading-relaxed max-w-xl">
                 At Sunrise Public School, every child deserves quality education, modern facilities, and opportunities to build a successful future — shaping young minds from Primary to Higher Secondary through academic excellence and holistic development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                 <Link href="/contact" className="bg-medical-primary hover:bg-medical-dark text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-medical-primary/20 transition-all text-center">
                   Register Today
                 </Link>
                 <a href={site.phoneHref} className="bg-white border border-slate-200 text-slate-700 px-10 py-5 rounded-2xl font-bold text-lg hover:border-medical-primary transition-all text-center">
                   Call {site.phoneDisplay}
                 </a>
              </div>
            </div>

            <div className="relative">
               <div className="rounded-[2.5rem] overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform">
                  <Image src="/img/campus-school.jpeg" alt="Sunrise Public School campus building" width={1400} height={933} className="object-cover w-full h-80 md:h-[30rem]" />
               </div>
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent rounded-full -mr-8 -mt-8 opacity-20 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Institutions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="text-medical-primary font-black uppercase tracking-[0.2em] text-[10px] mb-4">One Educational Family</div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Our Institutions</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
              <h3 className="text-2xl font-black text-medical-dark mb-2">Sunrise Public School</h3>
              <p className="text-medical-primary font-bold text-sm uppercase tracking-widest mb-4">Grades 1 to 8</p>
              <p className="text-slate-600 leading-relaxed">English &amp; Gujarati medium primary education in a safe, student-friendly environment with experienced faculty and smart classrooms.</p>
            </div>
            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
              <h3 className="text-2xl font-black text-medical-dark mb-2">New Sunrise Public School</h3>
              <p className="text-medical-primary font-bold text-sm uppercase tracking-widest mb-4">Grades 9 to 12</p>
              <p className="text-slate-600 leading-relaxed">Secondary &amp; Higher Secondary education (English &amp; Gujarati medium) with Science, Commerce and Arts streams and career-oriented coaching.</p>
            </div>
          </div>

          {/* Streams */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {streams.map((s) => (
              <div key={s.name} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:border-medical-primary/30 transition-all">
                <h4 className="text-xl font-black text-medical-primary mb-3">{s.name}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* School Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-medical-light/40 p-10 rounded-[2.5rem] border border-medical-primary/10">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm">
                <Target className="w-7 h-7 text-medical-primary" />
              </div>
              <h3 className="text-2xl font-black text-medical-dark mb-4 tracking-tight">Our Vision</h3>
              <p className="text-slate-700 leading-relaxed">To become one of the most trusted educational institutions by providing quality education, values, innovation, and career-oriented learning.</p>
            </div>
            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm">
                <Heart className="w-7 h-7 text-accent-dark" />
              </div>
              <h3 className="text-2xl font-black text-medical-dark mb-4 tracking-tight">Our Mission</h3>
              <ul className="space-y-2.5 text-slate-700 leading-relaxed text-sm">
                <li>• Deliver academic excellence.</li>
                <li>• Develop confident and responsible citizens.</li>
                <li>• Encourage creativity and innovation.</li>
                <li>• Prepare students for higher education and successful careers.</li>
                <li>• Promote discipline, ethics, and lifelong learning.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose School */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Sunrise?</h2>
             <p className="text-slate-500 max-w-2xl mx-auto font-medium italic">&quot;Education that inspires, environment that nurtures.&quot;</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {facilities.map((feature, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white border border-slate-100 hover:shadow-xl transition-all flex flex-col items-center text-center">
                 <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-medical-light text-medical-primary">
                    <feature.icon className="w-7 h-7" />
                 </div>
                 <h4 className="text-sm md:text-base font-bold text-slate-900">{feature.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { src: '/img/classroom.jpeg', label: 'Bright Classrooms' },
              { src: '/img/science-lab.jpeg', label: 'Science Laboratory' },
              { src: '/img/computer-lab.jpeg', label: 'Computer Lab' },
            ].map((g) => (
              <div key={g.src} className="relative aspect-4/3 rounded-[2rem] overflow-hidden shadow-lg group">
                <Image src={g.src} alt={g.label} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-medical-dark/70 to-transparent" />
                <span className="absolute bottom-6 left-6 text-white font-black tracking-tight text-lg">{g.label}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-10">
            <Link href="/gallery" className="inline-flex items-center gap-2 text-medical-primary font-black uppercase tracking-widest text-xs hover:text-medical-dark transition-colors">
              Explore the full campus gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </p>
        </div>
      </section>

      {/* Student Activities teaser */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="text-medical-primary font-black uppercase tracking-[0.2em] text-[10px] mb-4">Beyond Academics</div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Student Life at Sunrise</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { src: '/img/activities/activity-sports.jpg', label: 'Sports & Games' },
              { src: '/img/activities/activity-science.jpg', label: 'Science Fairs' },
              { src: '/img/activities/activity-music.jpg', label: 'Music & Arts' },
              { src: '/img/activities/activity-smartclass.jpg', label: 'Smart Classes' },
            ].map((g) => (
              <Link key={g.src} href="/activities" className="relative aspect-3/4 rounded-[2rem] overflow-hidden shadow-lg group block">
                <Image src={g.src} alt={g.label} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-medical-dark/75 to-transparent" />
                <span className="absolute bottom-5 left-5 right-5 text-white font-black tracking-tight">{g.label}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/activities" className="inline-flex items-center gap-3 bg-medical-primary text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-medical-dark transition-all shadow-xl shadow-medical-primary/20">
              Explore Student Activities <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Academic Collaborations */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="text-medical-primary font-black uppercase tracking-[0.2em] text-[10px] mb-4">Result-Oriented Preparation</div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Academic Collaborations</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {collaborations.map((c) => (
              <div key={c.partner} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <p className="text-[10px] uppercase font-black tracking-widest text-accent-dark mb-3">{c.for}</p>
                <h3 className="text-2xl font-black text-medical-dark mb-4">{c.partner}</h3>
                <p className="text-slate-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Leadership */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="text-medical-primary font-black uppercase tracking-[0.2em] text-[10px] mb-4">From the Desk of Our Leaders</div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter">School Leadership</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {schoolLeadership.map((leader) => (
              <div key={leader.name} className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 flex flex-col sm:flex-row gap-6 items-start">
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 border-2 border-white shadow-md bg-medical-light">
                  <Image src={leader.photo} alt={leader.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-medical-dark tracking-tight leading-none">{leader.name}</h4>
                  <p className="text-medical-primary font-bold text-xs uppercase tracking-widest mt-2 mb-4">{leader.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{leader.message}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Faculty group photos */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {[
              { src: '/img/english-staff.jpeg', label: 'English Medium Faculty' },
              { src: '/img/gujarati-staff.jpeg', label: 'Gujarati Medium Faculty' },
            ].map((f) => (
              <div key={f.src} className="relative aspect-video rounded-[2rem] overflow-hidden shadow-lg group">
                <Image src={f.src} alt={f.label} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-medical-dark/70 to-transparent" />
                <span className="absolute bottom-6 left-6 text-white font-black tracking-tight text-lg">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities CTA Section */}
      <section className="py-24 bg-medical-primary text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center relative z-10">
           <h2 className="text-4xl md:text-6xl font-bold mb-8">Giving Your Child the Best Start</h2>
           <p className="text-white/80 max-w-xl mx-auto mb-12 text-lg">Parents and students are welcome to visit our campus for counselling and admission guidance.</p>
           <Link href="/contact" className="inline-block bg-accent text-medical-primary px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl transition-all hover:scale-105 active:scale-95">
             Book a Visit Now
           </Link>
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
