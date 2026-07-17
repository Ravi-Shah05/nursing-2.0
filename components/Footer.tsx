import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="bg-medical-dark text-slate-400 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-lg">
                <Image
                  src="/img/logo-mark.png"
                  alt="Sunrise College of Nursing, Dahod"
                  width={44}
                  height={44}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="leading-none">
                <p className="text-white font-black text-base tracking-tight">Sunrise College</p>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.16em] mt-1">of Nursing · Dahod</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-8 text-slate-500">
              Sunrise College of Nursing, part of the Sunrise Group of Education, Dahod — shaping compassionate nurses and building healthcare leaders through quality education and real clinical exposure.
            </p>
            <div className="flex space-x-4">
              <a href={site.whatsapp} aria-label="WhatsApp" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-medical-primary hover:text-white transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-medical-primary hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-medical-primary hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-10">Quick Links</h4>
            <ul className="space-y-5 text-sm font-semibold">
              <li><Link href="/contact" className="hover:text-medical-primary transition-colors">Admissions 2026-27</Link></li>
              <li><Link href="/nursing" className="hover:text-medical-primary transition-colors">Nursing College</Link></li>
              <li><Link href="/school" className="hover:text-medical-primary transition-colors">Sunrise Public School</Link></li>
              <li><Link href="/activities" className="hover:text-medical-primary transition-colors">Student Activities</Link></li>
              <li><Link href="/facilities" className="hover:text-medical-primary transition-colors">Campus Facilities</Link></li>
              <li><Link href="/gallery" className="hover:text-medical-primary transition-colors">Campus Gallery</Link></li>
              <li><Link href="/about" className="hover:text-medical-primary transition-colors">About Us</Link></li>
              <li><Link href="/faq" className="hover:text-medical-primary transition-colors">Help &amp; FAQ</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-10">Nursing Programs</h4>
            <ul className="space-y-5 text-sm font-semibold">
              <li><Link href="/nursing" className="hover:text-medical-primary transition-colors">M.Sc. Nursing</Link></li>
              <li><Link href="/nursing" className="hover:text-medical-primary transition-colors">P.B.B.Sc. Nursing</Link></li>
              <li><Link href="/nursing" className="hover:text-medical-primary transition-colors">B.Sc. Nursing</Link></li>
              <li><Link href="/nursing" className="hover:text-medical-primary transition-colors">GNM Diploma</Link></li>
              <li><Link href="/nursing" className="hover:text-medical-primary transition-colors">ANM Certificate</Link></li>
              <li><Link href="/nursing" className="hover:text-medical-primary transition-colors">D.M.L.T</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-10">Contact Us</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-white mr-4 shrink-0" />
                <span className="text-slate-300 leading-normal">{site.address.line1}<br />{site.address.line2}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-white mr-4 shrink-0" />
                <a href={site.phoneHref} className="text-slate-300 font-bold hover:text-white">{site.phoneDisplay}</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-white mr-4 shrink-0" />
                <a href={`mailto:${site.email}`} className="text-slate-300 font-bold hover:text-white break-all">{site.email}</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-600 font-bold uppercase tracking-widest gap-6">
          <p>© 2026 Sunrise Group of Education, Dahod. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <span>Govt. of Gujarat Recognized</span>
            <span>GNC Approved</span>
            <span>SGGU Affiliated</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
