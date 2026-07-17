import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCTAs from '@/components/FloatingCTAs';
import GalleryExplorer from '@/components/GalleryExplorer';
import Link from 'next/link';
import type { Metadata } from 'next';
import { galleryImages } from '@/lib/gallery';

export const metadata: Metadata = {
  title: 'Campus Gallery | Sunrise College of Nursing & Schools, Dahod',
  description: 'Explore every corner of the Sunrise campus in Delsar, Dahod — school buildings, classrooms, science & computer labs, student activities, and the College of Nursing.',
};

export default function Gallery() {
  return (
    <main className="relative">
      <Navbar />

      {/* Header */}
      <section className="bg-medical-dark pt-40 pb-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent opacity-5 -skew-x-12 transform translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <span className="text-accent font-black uppercase tracking-[0.2em] text-xs mb-4 block">Campus Gallery · {galleryImages.length} Photos</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">A Look Inside Our Campus</h1>
          <p className="text-lg text-white/70 max-w-2xl">Browse the complete photo collection of our Delsar, Dahod campus — filter by institution or category, and click any photo to view it full-screen.</p>
        </div>
      </section>

      {/* Explorer */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <GalleryExplorer />
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
