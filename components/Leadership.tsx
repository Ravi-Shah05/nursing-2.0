'use client';

import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import Image from 'next/image';
import { leadership } from '@/lib/site';

export default function Leadership() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-medical-primary font-black uppercase tracking-widest text-xs">Messages from the Leadership</span>
          <h2 className="text-4xl font-black text-medical-dark mt-4 tracking-tighter">Nurturing Capability &amp; Compassion</h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {leadership.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-shadow duration-500 overflow-hidden"
            >
              {/* Full-bleed photo with overlaid name/role */}
              <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-medical-dark">
                <Image
                  src={leader.photo}
                  alt={leader.name}
                  fill
                  className="object-cover grayscale-[0.25] contrast-[1.05] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                {/* Brand tint — unifies mismatched source photos into one tone */}
                <div className="absolute inset-0 bg-linear-to-br from-medical-primary/50 via-medical-primary/10 to-accent/20 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-700" />
                {/* Legibility scrim for overlaid text */}
                <div className="absolute inset-0 bg-linear-to-t from-medical-dark via-medical-dark/5 to-transparent" />

                <Quote className="absolute top-6 right-6 w-10 h-10 text-white/20" />

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <span className="inline-block text-accent text-[10px] font-black uppercase tracking-[0.2em] mb-2">{leader.role}</span>
                  <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">{leader.name}</h4>
                </div>
              </div>

              {/* Quote + message below the photo */}
              <div className="p-8 md:p-10">
                <p className="font-serif italic text-medical-primary text-xl sm:text-2xl leading-snug mb-5">&ldquo;{leader.quote}&rdquo;</p>
                <p className="text-slate-600 leading-relaxed">{leader.message}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
