'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, ChevronRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { site } from '@/lib/site';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Nursing', href: '/nursing' },
    { name: 'School', href: '/school' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-20 ${
        isScrolled ? 'bg-white shadow-lg border-b border-slate-200' : 'bg-white/95 backdrop-blur-md border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full h-full flex items-center">
        <div className="flex justify-between items-center h-16 w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 mr-4 group" aria-label="Sunrise College of Nursing, Dahod — Home">
            {/* Emblem only on very small screens */}
            <Image
              src="/img/logo-mark.png"
              alt="Sunrise College of Nursing, Dahod"
              width={48}
              height={48}
              className="h-10 w-auto object-contain sm:hidden transition-transform group-hover:scale-105"
              priority
            />
            {/* Full horizontal wordmark from sm up — single image, never wraps */}
            <Image
              src="/img/logo-wordmark.png"
              alt="Sunrise College of Nursing, Dahod"
              width={587}
              height={147}
              className="hidden sm:block h-12 lg:h-14 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-x-5 xl:gap-x-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[11px] xl:text-[12px] font-black transition-colors hover:text-medical-primary text-slate-600 uppercase tracking-wider whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 ml-auto">
            {/* CTA Group - Hidden on small mobile, visible from md up */}
            <div className="hidden md:flex items-center gap-4 lg:gap-5">
              <a
                href={site.phoneHref}
                className="hidden 2xl:flex items-center gap-2.5 pl-2 pr-4 py-1.5 rounded-full border border-slate-200 hover:border-medical-primary transition-colors group whitespace-nowrap"
                aria-label={`Call admissions ${site.phoneDisplay}`}
              >
                <span className="w-8 h-8 rounded-full bg-medical-light flex items-center justify-center text-medical-primary group-hover:bg-medical-primary group-hover:text-white transition-colors shrink-0">
                  <Phone className="w-4 h-4" />
                </span>
                <span className="flex flex-col leading-none">
                  <span className="text-[8px] font-black uppercase tracking-[0.16em] text-slate-400">Admissions Helpline</span>
                  <span className="text-[13px] font-black text-medical-primary leading-tight mt-0.5">{site.phoneDisplay}</span>
                </span>
              </a>
                <Link
                  href="/contact"
                  className="bg-accent hover:bg-accent-dark text-medical-primary px-5 lg:px-7 py-2.5 lg:py-3 rounded-full text-[11px] lg:text-sm font-black shadow-xl shadow-accent/20 transition-all transform hover:scale-105 uppercase tracking-widest whitespace-nowrap border-b-4 border-accent-dark"
                >
                  <span className="hidden sm:inline lg:hidden xl:inline">Admissions </span>2026-27
                </Link>
            </div>

            {/* Mobile toggle */}
            <div className="lg:hidden flex items-center space-x-4">
               <a href={site.whatsapp} className="text-accent hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 fill-accent/10" />
               </a>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-xl transition-colors ${isScrolled ? 'text-medical-dark bg-slate-100' : 'text-medical-primary bg-white/50'}`}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -10 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl overflow-y-auto max-h-[85vh] z-40"
          >
            <div className="px-6 py-8 space-y-2 relative overflow-hidden">
              {/* Decorative Subtle Background Effect for Menu */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-medical-primary/5 rounded-full blur-3xl -z-10" />
              
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex justify-between items-center px-4 py-4 text-sm font-black text-slate-950 hover:bg-medical-primary/5 hover:text-medical-primary rounded-2xl transition-all group"
                  >
                    <span className="uppercase tracking-widest">{link.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                  </Link>
                </motion.div>
              ))}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-6 grid grid-cols-2 gap-4"
              >
                <a
                  href={site.phoneHref}
                  className="flex items-center justify-center p-4 rounded-2xl border-2 border-slate-100 text-slate-950 font-black text-[10px] uppercase tracking-widest hover:border-medical-primary transition-all"
                >
                  <Phone className="w-4 h-4 mr-2" /> Call
                </a>
                    <Link 
                      href="/contact"
                      className="flex items-center justify-center p-5 rounded-2xl bg-medical-primary text-white font-black text-[12px] uppercase tracking-widest shadow-2xl shadow-medical-primary/30"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="mr-1">Admissions</span> 2026-27
                    </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
