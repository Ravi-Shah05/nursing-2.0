'use client';

import { motion } from 'motion/react';
import { MessageCircle, Phone, Calendar } from 'lucide-react';
import { site } from '@/lib/site';

export default function FloatingCTAs() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
      {/* WhatsApp Button */}
      <motion.a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-14 h-14 bg-accent text-medical-primary rounded-full shadow-2xl hover:bg-accent-dark transition-colors"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>

      {/* Call Button (Mobile Only) */}
      <motion.a
        href={site.phoneHref}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex lg:hidden items-center justify-center w-14 h-14 bg-medical-primary text-white rounded-full shadow-2xl hover:bg-medical-dark transition-colors"
        aria-label="Call Us"
      >
        <Phone className="w-6 h-6" />
      </motion.a>

      {/* Book Visit (Desktop/Tablet) */}
      <motion.a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="hidden lg:flex items-center bg-white border border-slate-200 rounded-full pl-6 pr-1 pt-1 pb-1 shadow-2xl group cursor-pointer hover:border-medical-primary transition-all"
      >
        <span className="text-sm font-bold text-slate-700 mr-4">Book Campus Visit</span>
        <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
           <Calendar className="w-5 h-5 text-medical-dark" />
        </div>
      </motion.a>
    </div>
  );
}
