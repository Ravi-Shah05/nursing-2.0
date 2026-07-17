import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCTAs from '@/components/FloatingCTAs';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Trophy, Music, FlaskConical, Monitor, Users, HeartPulse, Sparkles, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Student Life & Activities | Sunrise Group of Education, Dahod',
  description: 'Sports, science fairs, music & arts, smart classes and cultural programs at Sunrise Public School — plus community health outreach at Sunrise College of Nursing.',
};

const activityPhotos = [
  { src: '/img/activities/activity-sports.jpg', label: 'Football on the School Ground', tall: true },
  { src: '/img/activities/activity-science.jpg', label: 'Science Fair — Volcano Project' },
  { src: '/img/activities/activity-smartclass.jpg', label: 'Smart Classroom Session' },
  { src: '/img/activities/activity-chemistry.jpg', label: 'Chemistry Practicals', tall: true },
  { src: '/img/activities/activity-music.jpg', label: 'Music & Arts on the Lawn', tall: true },
  { src: '/img/activities/activity-computer.jpg', label: 'Digital Learning in Action' },
  { src: '/img/activities/activity-mentoring.jpg', label: 'Teacher-Student Mentoring' },
  { src: '/img/activities/activity-community.jpg', label: 'Proud Sunrisers' },
  { src: '/img/activities/activity-evening.jpg', label: 'Study Circle at Dusk' },
];

const programs = [
  { icon: Trophy, title: 'Sports & Games', desc: 'Football, athletics and outdoor games on our open grounds, with dedicated playground equipment for younger students.' },
  { icon: FlaskConical, title: 'Science Fairs & Practicals', desc: 'Hands-on experiments and exhibitions in our science laboratories that turn curiosity into understanding.' },
  { icon: Monitor, title: 'Digital & Smart Classes', desc: 'Projector-equipped AC smart classrooms and a computer lab that bring lessons to life.' },
  { icon: Music, title: 'Music, Arts & Culture', desc: 'Cultural programs, music sessions and creative activities that encourage self-expression.' },
  { icon: Users, title: 'Career Guidance', desc: 'Counselling and personality development that prepare students for competitive and professional careers.' },
  { icon: Sparkles, title: 'Celebrations & Events', desc: 'Annual functions, festivals and community events that make campus life memorable.' },
];

export default function Activities() {
  return (
    <main className="relative">
      <Navbar />

      {/* Header */}
      <section className="bg-medical-primary pt-40 pb-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent opacity-5 -skew-x-12 transform translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <span className="text-accent font-black uppercase tracking-[0.2em] text-xs mb-4 block">Student Life · Sunrise Public School</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">Learning Beyond the Classroom</h1>
          <p className="text-lg text-white/70 max-w-2xl">Academic excellence is only half the story. Sports, science fairs, music, cultural programs and career guidance shape confident, well-rounded Sunrisers.</p>
        </div>
      </section>

      {/* Activity programs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p) => (
              <div key={p.title} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-medical-primary/30 hover:shadow-xl transition-all">
                <div className="w-14 h-14 rounded-2xl bg-medical-light flex items-center justify-center mb-6 text-medical-primary">
                  <p.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-black text-medical-dark mb-3 tracking-tight">{p.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo wall */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="text-medical-primary font-black uppercase tracking-[0.2em] text-[10px] mb-4">Moments on Campus</div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Activities in Pictures</h2>
          </div>
          <div className="columns-2 lg:columns-3 gap-4">
            {activityPhotos.map((g) => (
              <div key={g.src} className="group relative mb-4 break-inside-avoid overflow-hidden rounded-3xl shadow-lg">
                <Image src={g.src} alt={g.label} width={800} height={g.tall ? 1000 : 600} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-medical-dark/75 via-transparent to-transparent opacity-80" />
                <p className="absolute bottom-5 left-5 right-5 text-white font-black tracking-tight leading-tight">{g.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-10">
            <Link href="/gallery" className="inline-flex items-center gap-2 text-medical-primary font-black uppercase tracking-widest text-xs hover:text-medical-dark transition-colors">
              View the full campus gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </p>
        </div>
      </section>

      {/* Nursing college outreach — kept distinct */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="bg-medical-dark rounded-[3rem] p-10 md:p-16 grid lg:grid-cols-2 gap-12 items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-medical-primary/30 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
            <div className="relative z-10">
              <span className="text-accent font-black uppercase tracking-[0.2em] text-xs mb-4 block">College of Nursing</span>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-6 leading-none">Service is Our Student Life</h2>
              <p className="text-white/70 leading-relaxed mb-8">
                For our nursing students, activity means action in the community — participation in community health services and national health programs, rural exposure through CHCs and PHCs, and clinical postings at Zydus Medical College &amp; Hospital and Navadha Hospital. Serving the rural and tribal communities of Dahod builds social responsibility alongside professional competence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/nursing" className="bg-accent text-medical-primary px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform inline-flex items-center gap-2">
                  <HeartPulse className="w-4 h-4" /> Explore Nursing Programs
                </Link>
              </div>
            </div>
            <div className="relative aspect-4/3 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10">
              <Image src="/img/nursing-staff.jpeg" alt="Sunrise College of Nursing students and faculty" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTAs />
    </main>
  );
}
