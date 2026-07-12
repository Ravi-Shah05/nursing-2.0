import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCTAs from '@/components/FloatingCTAs';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Campus Gallery | Sunrise College of Nursing & Schools, Dahod',
  description: 'A visual tour of the Sunrise campus in Delsar, Dahod — buildings, classrooms, science & computer labs, nursing practical labs, and more.',
};

const gallery = [
  { src: '/img/gallery/building-1.jpg', label: 'Sunrise Public School', tag: 'Campus', span: 'lg:col-span-2 lg:row-span-2' },
  { src: '/img/gallery/classroom.jpg', label: 'Bright Classrooms', tag: 'Academics' },
  { src: '/img/gallery/science-lab.jpg', label: 'Science Laboratory', tag: 'Labs' },
  { src: '/img/gallery/computer-lab.jpg', label: 'Computer Lab', tag: 'Labs' },
  { src: '/img/gallery/entrance-arch.jpg', label: 'Main Entrance', tag: 'Campus', span: 'lg:row-span-2' },
  { src: '/img/gallery/corridor.jpg', label: 'Campus Corridors', tag: 'Campus' },
  { src: '/img/gallery/building-2.jpg', label: 'Campus Grounds', tag: 'Campus' },
  { src: '/img/gallery/vocational-lab.jpg', label: 'Vocational / Skill Lab', tag: 'Labs' },
  { src: '/img/gallery/students.jpg', label: 'Our Students', tag: 'Community', span: 'lg:col-span-2' },
  { src: '/img/gallery/playground.jpg', label: 'Playground & Sports', tag: 'Campus' },
  { src: '/img/gallery/classroom-2.jpg', label: 'Learning Spaces', tag: 'Academics' },
  { src: '/img/gallery/staff-room.jpg', label: 'Staff Room', tag: 'Campus' },
  { src: '/img/gallery/counselling.jpg', label: 'Admission & Counselling', tag: 'Campus' },
  { src: '/img/gallery/building-3.jpg', label: 'Campus View', tag: 'Campus' },
];

export default function Gallery() {
  return (
    <main className="relative">
      <Navbar />

      {/* Header */}
      <section className="bg-medical-dark pt-40 pb-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent opacity-5 -skew-x-12 transform translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <span className="text-accent font-black uppercase tracking-[0.2em] text-xs mb-4 block">Campus Gallery</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">A Look Inside Our Campus</h1>
          <p className="text-lg text-white/70 max-w-2xl">Explore the spaces where learning happens every day at our Delsar, Dahod campus — from classrooms and laboratories to open grounds and community life.</p>
        </div>
      </section>

      {/* Masonry-style grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[220px] gap-4 md:gap-6">
            {gallery.map((g, i) => (
              <div
                key={i}
                className={`group relative rounded-[1.75rem] overflow-hidden shadow-lg ${g.span ?? ''}`}
              >
                <Image src={g.src} alt={g.label} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-medical-dark/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="inline-block text-[9px] font-black uppercase tracking-widest text-medical-dark bg-accent px-3 py-1 rounded-full mb-2">{g.tag}</span>
                  <p className="text-white font-black tracking-tight text-lg leading-tight">{g.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-medical-dark tracking-tighter mb-6">See it for yourself</h2>
          <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">Parents and students are welcome to visit our campus for a personal tour and admission counselling.</p>
          <Link href="/contact" className="inline-block bg-medical-primary text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-medical-dark transition-all shadow-xl shadow-medical-primary/20">
            Book a Campus Visit
          </Link>
        </div>
      </section>

      <Footer />
      <FloatingCTAs />
    </main>
  );
}
