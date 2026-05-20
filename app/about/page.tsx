import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCTAs from '@/components/FloatingCTAs';
import { Target, Eye, Heart, Award } from 'lucide-react';
import AboutVision from '@/components/AboutVision';
import Image from 'next/image';

export default function About() {
  return (
    <main className="relative">
      <Navbar />
      
      {/* Page Header */}
      <section className="bg-medical-dark pt-40 pb-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent opacity-5 -skew-x-12 transform translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl text-white md:text-6xl font-bold mb-6">Excellence in Nursing Education, Defined by Purpose.</h1>
          <p className="text-lg text-white/70 max-w-2xl">Sunrise College of Nursing is dedicated to shaping a new generation of healthcare professionals who lead with knowledge, precision, and compassion. Built on a foundation of academic integrity and clinical excellence, the institution offers an environment where learning is both disciplined and transformative.</p>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 shadow-lg">
                <h2 className="text-2xl font-bold text-medical-dark mb-4">Recognized Excellence. Trusted Legacy. Future-Ready Education.</h2>
                <p className="text-slate-600 leading-relaxed mb-6">We are duly approved by the Gujarat Nursing Council, Ahmedabad the apex regulatory authority ensuring quality nursing education. Our academic affiliation with Shri Govind Guru University, Godhara provides students with a strong educational foundation, recognized qualifications, and a pathway to advanced career opportunities.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-medical-primary/10 flex items-center justify-center text-medical-primary">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-medical-dark">Accredited Body</h4>
                      <p className="text-sm text-slate-600">Gujarat Nursing Council approval ensures compliance and quality.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-medical-primary/10 flex items-center justify-center text-medical-primary">
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-medical-dark">Academic Affiliation</h4>
                      <p className="text-sm text-slate-600">Affiliated to Shri Govind Guru University, Godhara for recognized degrees.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-medical-primary/10 flex items-center justify-center text-medical-primary">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-medical-dark">Student Outcomes</h4>
                      <p className="text-sm text-slate-600">Strong placement support and clinical exposure for career readiness.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-medical-primary/10 flex items-center justify-center text-medical-primary">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-medical-dark">Quality Assurance</h4>
                      <p className="text-sm text-slate-600">Curriculum and clinical partnerships maintained to high standards.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/img/2.jpeg" alt="Campus and clinical training" width={1200} height={800} className="object-cover w-full h-80 md:h-105" />
                <div className="absolute bottom-4 left-4 bg-white/80 text-sm text-medical-dark px-4 py-2 rounded-lg font-semibold">Zydus Medical College & Navdha Hospital Partnerships</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Messages */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-medical-primary font-bold uppercase tracking-widest text-sm">A Message from the Leadership</span>
            <h2 className="text-4xl font-bold text-medical-dark mt-4">Nurturing Capability & Compassion</h2>
          </div>
          
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Prof Shelin Damor */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 flex flex-col">
              <div className="flex-grow space-y-4 text-slate-600 italic text-lg leading-relaxed mb-8">
                <p>&quot;Step in with a dream, walk out with a purpose.&quot;</p>
                <p>We envision our students as leaders in healthcare- individuals who combine knowledge with kindness and skill with sensitivity.</p>
              </div>
              <div className="mt-auto flex items-center gap-5">
                <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-slate-100">
                  <Image src="/img/1.jpeg" alt="Prof. Shelin Damor" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-medical-dark uppercase tracking-tight">Prof. Shelin Damor</h4>
                  <p className="text-medical-primary font-medium">Principal</p>
                </div>
              </div>
            </div>

            {/* Mr. Narendra Soni */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 flex flex-col">
              <div className="flex-grow space-y-4 text-slate-600 italic text-lg leading-relaxed mb-8">
                <p>&quot;Empowering minds today to care for lives tomorrow.&quot;</p>
                <p>This institution stands as a center of excellence, committed to nurturing not only skilled professionals but also responsible citizens with a deep sense of service and humanity.</p>
              </div>
              <div className="mt-auto flex items-center gap-5">
                <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-slate-100">
                  <Image src="/img/3.jpeg" alt="Mr. Narendra Soni" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-medical-dark uppercase tracking-tight">Mr. Narendra Soni</h4>
                  <p className="text-medical-primary font-medium">Management</p>
                </div>
              </div>
            </div>

            {/* Ravi Pancholi Sir */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 flex flex-col">
              <div className="flex-grow space-y-4 text-slate-600 italic text-lg leading-relaxed mb-8">
                <p>&quot;We don&apos;t just build careers, we shape responsible caregivers for society.&quot;</p>
              </div>
              <div className="mt-auto flex items-center gap-5">
                <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-slate-100">
                  <Image src="/img/4.jpeg" alt="Ravi Pancholi Sir" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-medical-dark uppercase tracking-tight">Ravi Pancholi Sir</h4>
                  <p className="text-medical-primary font-medium">Managing Trustee</p>
                </div>
              </div>
            </div>

            {/* Mr. Mithalal B. Gandhi */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 flex flex-col">
              <div className="flex-grow space-y-4 text-slate-600 italic text-lg leading-relaxed mb-8">
                <p>&quot;Service with Compassion and Excellence&quot;</p>
              </div>
              <div className="mt-auto flex items-center gap-5">
                <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-slate-100">
                  <Image src="/img/5.jpeg" alt="Mr. Mithalal B. Gandhi" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-medical-dark uppercase tracking-tight">Mr. Mithalal B. Gandhi</h4>
                  <p className="text-medical-primary font-medium">Managing Trustee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTAs />
    </main>
  );
}
