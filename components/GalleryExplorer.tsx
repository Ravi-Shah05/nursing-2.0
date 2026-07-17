'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { galleryImages, categoryLabels, type GalleryCategory, type Institution } from '@/lib/gallery';

type InstitutionFilter = 'all' | Institution;
type CategoryFilter = 'all' | GalleryCategory;

const institutionTabs: { key: InstitutionFilter; label: string }[] = [
  { key: 'all', label: 'All Photos' },
  { key: 'school', label: 'Sunrise Public School' },
  { key: 'nursing', label: 'College of Nursing' },
];

export default function GalleryExplorer() {
  const [institution, setInstitution] = useState<InstitutionFilter>('all');
  const [category, setCategory] = useState<CategoryFilter>('all');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const scoped = useMemo(
    () => galleryImages.filter((img) => institution === 'all' || img.institution === institution),
    [institution]
  );

  const categories = useMemo(() => {
    const counts = new Map<GalleryCategory, number>();
    scoped.forEach((img) => counts.set(img.category, (counts.get(img.category) ?? 0) + 1));
    return Array.from(counts.entries());
  }, [scoped]);

  const visible = useMemo(
    () => scoped.filter((img) => category === 'all' || img.category === category),
    [scoped, category]
  );

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (dir: 1 | -1) => {
      setLightbox((cur) => (cur === null ? null : (cur + dir + visible.length) % visible.length));
    },
    [visible.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, close, step]);

  const selectInstitution = (key: InstitutionFilter) => {
    setInstitution(key);
    setCategory('all');
  };

  return (
    <div>
      {/* Institution tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {institutionTabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => selectInstitution(tab.key)}
            className={`px-7 py-3.5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${
              institution === tab.key
                ? 'bg-medical-primary text-white shadow-xl shadow-medical-primary/20 scale-105'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-medical-primary'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap justify-center gap-2.5 mb-14">
        <button
          onClick={() => setCategory('all')}
          className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
            category === 'all' ? 'bg-accent text-medical-primary shadow-lg shadow-accent/30' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
          }`}
        >
          All · {scoped.length}
        </button>
        {categories.map(([cat, count]) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
              category === cat ? 'bg-accent text-medical-primary shadow-lg shadow-accent/30' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
            }`}
          >
            {categoryLabels[cat]} · {count}
          </button>
        ))}
      </div>

      {/* Masonry photo wall */}
      <div className="columns-2 md:columns-3 xl:columns-4 gap-4 [column-fill:_balance]">
        {visible.map((img, i) => (
          <motion.button
            key={img.src}
            layout
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: Math.min(i * 0.02, 0.4) }}
            onClick={() => setLightbox(i)}
            className="group relative mb-4 w-full break-inside-avoid overflow-hidden rounded-3xl shadow-md focus:outline-none focus:ring-4 focus:ring-medical-primary/30 cursor-zoom-in"
          >
            <Image
              src={img.src}
              alt={img.title}
              width={800}
              height={560}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-medical-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-left">
              <span className="inline-block text-[8px] font-black uppercase tracking-widest text-medical-dark bg-accent px-2.5 py-1 rounded-full mb-2">
                {categoryLabels[img.category]}
              </span>
              <p className="text-white font-black tracking-tight leading-tight">{img.title}</p>
            </div>
          </motion.button>
        ))}
      </div>

      {visible.length === 0 && (
        <div className="text-center py-20 text-slate-400">
          <Camera className="w-12 h-12 mx-auto mb-4" />
          <p className="font-bold">No photos in this category yet.</p>
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && visible[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-medical-dark/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={close}
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-5 right-5 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); step(-1); }}
              aria-label="Previous photo"
              className="absolute left-3 md:left-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-accent hover:text-medical-primary text-white flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); step(1); }}
              aria-label="Next photo"
              className="absolute right-3 md:right-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-accent hover:text-medical-primary text-white flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.figure
              key={visible[lightbox].src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full max-h-[78vh] flex items-center justify-center">
                <Image
                  src={visible[lightbox].src}
                  alt={visible[lightbox].title}
                  width={1600}
                  height={1100}
                  className="w-auto h-auto max-w-full max-h-[78vh] rounded-2xl shadow-2xl object-contain"
                  priority
                />
              </div>
              <figcaption className="mt-5 flex items-center justify-between gap-4 text-white">
                <div>
                  <p className="font-black tracking-tight text-lg leading-none">{visible[lightbox].title}</p>
                  <p className="text-white/50 text-[10px] font-black uppercase tracking-widest mt-2">
                    {categoryLabels[visible[lightbox].category]} · {visible[lightbox].institution === 'school' ? 'Sunrise Public School' : 'College of Nursing'}
                  </p>
                </div>
                <span className="text-white/40 font-black text-sm shrink-0">{lightbox + 1} / {visible.length}</span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
