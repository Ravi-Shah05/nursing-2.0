'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCTAs from '@/components/FloatingCTAs';
import FAQ from '@/components/FAQ';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { site } from '@/lib/site';

export default function Contact() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert('Message sent! We will contact you shortly.');
  };

  return (
    <main className="relative">
      <Navbar />
      
      {/* Contact Header */}
      <section className="bg-slate-50 pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-medical-dark mb-6">Contact Us</h1>
            <p className="text-xl text-slate-500">Have questions about admissions, fees, or courses? We&apos;re here to help you make the right choice.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative -mt-10 mb-20 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-medical-light p-10 rounded-3xl space-y-10 border border-medical-primary/10">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="text-medical-primary w-6 h-6" />
                  </div>
                  <div className="ml-6">
                    <h4 className="text-lg font-bold text-medical-dark mb-1">Campus Address</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {site.address.line1}<br />{site.address.line2}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="text-medical-primary w-6 h-6" />
                  </div>
                  <div className="ml-6">
                    <h4 className="text-lg font-bold text-medical-dark mb-1">Call for Admissions</h4>
                    <a href={site.phoneHref} className="text-slate-600 text-sm block hover:text-medical-primary">{site.phoneDisplay}</a>
                    <a href={site.whatsapp} className="text-slate-600 text-sm hover:text-medical-primary">WhatsApp Available</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="text-medical-primary w-6 h-6" />
                  </div>
                  <div className="ml-6">
                    <h4 className="text-lg font-bold text-medical-dark mb-1">Email Support</h4>
                    <a href={`mailto:${site.email}`} className="text-slate-600 text-sm underline break-all hover:text-medical-primary">{site.email}</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                    <Clock className="text-medical-primary w-6 h-6" />
                  </div>
                  <div className="ml-6">
                    <h4 className="text-lg font-bold text-medical-dark mb-1">Office Hours</h4>
                    <p className="text-slate-600 text-sm">Mon - Sat: 9:00 AM - 5:00 PM</p>
                    <p className="text-slate-600 text-sm text-medical-primary font-bold">Sunday: Open for Admissions Only</p>
                  </div>
                </div>
              </div>

               <div className="bg-slate-900 rounded-3xl p-8 text-white flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4 text-medical-primary">
                       <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold">Instant Support</p>
                      <p className="text-xs text-white/60">Chat with a counselor now</p>
                    </div>
                  </div>
                  <a href={site.whatsapp} className="bg-accent text-medical-primary px-6 py-2 rounded-xl font-bold text-sm">WhatsApp</a>
               </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
               <div className="p-1 lg:p-10 border border-slate-200 rounded-[2.5rem] bg-white">
                  <h3 className="text-3xl font-bold text-medical-dark mb-2">Send an Enquiry</h3>
                  <p className="text-slate-500 mb-10">Fill the form below and we&apos;ll get back to you within 24 hours.</p>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Name</label>
                        <input {...register('name')} placeholder="Your Full Name" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-medical-primary outline-none transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Phone</label>
                        <input {...register('phone')} placeholder="+91 XXXXX XXXXX" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-medical-primary outline-none transition-all" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Email</label>
                        <input {...register('email')} placeholder="email@example.com" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-medical-primary outline-none transition-all" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">How can we help?</label>
                        <textarea {...register('message')} placeholder="Tell us what you're looking for..." rows={5} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-medical-primary outline-none transition-all" />
                    </div>

                    <button type="submit" className="w-full bg-medical-primary hover:bg-medical-dark text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-medical-primary/20 transition-all">
                       Submit Message
                    </button>
                  </form>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section className="h-[420px] w-full relative overflow-hidden">
        <iframe
          title="Sunrise Group of Education, Dahod location"
          src="https://maps.google.com/maps?q=Chakaliya%20Road%2C%20Delsar%2C%20Dahod%2C%20Gujarat%20389151&t=&z=14&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <FAQ />

      <Footer />
      <FloatingCTAs />
    </main>
  );
}
