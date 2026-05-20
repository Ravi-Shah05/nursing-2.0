import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-medical-dark text-slate-400 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <Image
                src="/img/logo.png"
                alt="Sunrise College Logo"
                width={140}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed mb-8 text-slate-500">
              Empowering the next generation of healthcare professionals and scholars. Excellence in Nursing Education, Defined by Purpose.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-medical-primary hover:text-white transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-10">Quick Links</h4>
            <ul className="space-y-5 text-sm font-semibold">
              <li><Link href="/contact" className="hover:text-medical-primary transition-colors">Admissions 2026-27</Link></li>
              <li><Link href="/nursing" className="hover:text-medical-primary transition-colors">Nursing College</Link></li>
              <li><Link href="/school" className="hover:text-medical-primary transition-colors">Sunrise School</Link></li>
              <li><Link href="/facilities" className="hover:text-medical-primary transition-colors">Campus Facilities</Link></li>
              <li><Link href="/faq" className="hover:text-medical-primary transition-colors">Help & FAQ</Link></li>
              <li><Link href="/#" className="hover:text-medical-primary transition-colors">Prospectus</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-10">Nursing Programs</h4>
            <ul className="space-y-5 text-sm font-semibold">
              <li><Link href="/nursing" className="hover:text-medical-primary transition-colors">B.Sc. Nursing</Link></li>
              <li><Link href="/nursing" className="hover:text-medical-primary transition-colors">GNM Program</Link></li>
              <li><Link href="/nursing" className="hover:text-medical-primary transition-colors">ANM Diploma</Link></li>
              <li><Link href="/school" className="hover:text-medical-primary transition-colors">Primary Schooling</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-10">Contact Us</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-white mr-4 shrink-0" />
                <span className="text-slate-300 leading-normal">123 Sunrise Campus, Medical Road,<br />District City, State - 456789</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-white mr-4 shrink-0" />
                <a href="tel:+911234567890" className="text-slate-300 font-bold hover:text-white">+91 12345 67890</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-white mr-4 shrink-0" />
                <a href="mailto:info@sunrisecollege.com" className="text-slate-300 font-bold hover:text-white">info@sunrisecollege.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-600 font-bold uppercase tracking-widest gap-6">
          <p>© 2026 Sunrise Group of Institutions. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <Link href="/#" className="hover:text-white">Privacy</Link>
            <Link href="/#" className="hover:text-white">Terms</Link>
            <Link href="/#" className="hover:text-white">Full Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
