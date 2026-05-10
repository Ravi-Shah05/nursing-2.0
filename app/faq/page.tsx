'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Plus, Minus, Search, HelpCircle, BookOpen, GraduationCap, Building2, Wallet } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const faqData = [
  {
    category: 'Admissions',
    icon: <GraduationCap className="w-6 h-6" />,
    questions: [
      {
        id: 'adm-1',
        question: 'What are the eligibility criteria for B.Sc. Nursing?',
        answer: 'Candidates must have passed 10+2 with Physics, Chemistry, Biology, and English (PCBE) with 45% aggregate marks (40% for SC/ST). The minimum age should be 17 years as of 31st December of the admission year.'
      },
      {
        id: 'adm-2',
        question: 'How can I apply for admission?',
        answer: 'You can apply online through our website or visit our campus for direct registration. Admission is based on academic merit and, in some cases, an entrance examination followed by counseling.'
      },
      {
        id: 'adm-3',
        question: 'What documents are required for admission?',
        answer: 'Required documents include 10th & 12th Marks-sheets, Transfer Certificate (TC), Migration Certificate, Character Certificate, Aadhaar Card, Passport size photographs, and Caste Certificate (if applicable).'
      },
    ]
  },
  {
    category: 'Courses',
    icon: <BookOpen className="w-6 h-6" />,
    questions: [
      {
        id: 'crs-1',
        question: 'What nursing courses do you offer?',
        answer: 'We offer B.Sc. Nursing (4 years), GNM (3 years), and ANM (2 years). All courses are recognized by the Indian Nursing Council (INC) and State Nursing Council.'
      },
      {
        id: 'crs-2',
        question: 'Is clinical training included in the curriculum?',
        answer: 'Yes, clinical practical training is a vital part of our curriculum. Students undergo intensive clinical rotations at our affiliated super-specialty hospitals and community health centers.'
      },
      {
        id: 'crs-3',
        question: 'Are there any internship opportunities?',
        answer: 'Integrated internships are part of the GNM and B.Sc. Nursing programs, allowing students to gain real-world experience under the supervision of expert healthcare professionals.'
      }
    ]
  },
  {
    category: 'Campus Life',
    icon: <Building2 className="w-6 h-6" />,
    questions: [
      {
        id: 'cmp-1',
        question: 'Do you provide hostel facilities?',
        answer: 'Yes, we provide safe and comfortable on-campus hostel facilities for both male and female students, with 24/7 security and clean dining areas.'
      },
      {
        id: 'cmp-2',
        question: 'What extra-curricular activities are available?',
        answer: 'We organize annual sports meets, cultural festivals, health camps, and community outreach programs to ensure the holistic development of our students.'
      },
      {
        id: 'cmp-3',
        question: 'Is there a library and lab facility?',
        answer: 'Absolutely. We have a well-equipped central library with a vast collection of medical journals and books, along with state-of-the-art anatomy, microbiology, and nursing foundation labs.'
      }
    ]
  },
  {
    category: 'Fees',
    icon: <Wallet className="w-6 h-6" />,
    questions: [
      {
        id: 'fee-1',
        question: 'What is the fee structure for different courses?',
        answer: 'The fee structure varies by course. Please contact our admission office or download our latest prospectus for a detailed breakdown of tuition fees, lab fees, and other charges.'
      },
      {
        id: 'fee-2',
        question: 'Are scholarship options available?',
        answer: 'Yes, we offer merit-based scholarships for toppers and assist students in applying for various State and Central Government scholarships.'
      },
      {
        id: 'fee-3',
        question: 'Can I pay the fees in installments?',
        answer: 'Yes, we provide flexible semester-wise or quarterly installment options to help ease the financial burden for students and parents.'
      }
    ]
  }
];

export default function FAQPage() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredFaqs = faqData.map(cat => ({
    ...cat,
    questions: cat.questions.filter(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(cat => 
    (activeCategory === 'All' || cat.category === activeCategory) && 
    cat.questions.length > 0
  );

  const categories = ['All', ...faqData.map(cat => cat.category)];

  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-medical-dark py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-medical-primary/20 backdrop-blur-md rounded-full border border-medical-primary/30 text-accent font-black text-[10px] uppercase tracking-[0.2em] mb-6"
          >
            Support Center
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8"
          >
            Frequently Asked <span className="text-medical-primary">Questions</span>
          </motion.h1>
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="max-w-2xl mx-auto relative group"
          >
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-medical-primary transition-colors h-5 w-5" />
            <input 
              type="text"
              placeholder="Search for questions related to admissions, courses, fees..."
              className="w-full bg-white/10 border border-white/20 rounded-2xl py-6 pl-16 pr-8 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-medical-primary/50 focus:bg-white/15 transition-all text-lg font-medium backdrop-blur-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="py-12 bg-white border-b border-slate-100 sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                    ? 'bg-medical-primary text-white shadow-xl shadow-medical-primary/20 scale-105' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          {filteredFaqs.length > 0 ? (
            <div className="space-y-16">
              {filteredFaqs.map((cat, catIdx) => (
                <div key={cat.category} className="space-y-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-medical-primary/10 rounded-2xl flex items-center justify-center text-medical-primary">
                      {cat.icon}
                    </div>
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">{cat.category}</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {cat.questions.map((q) => (
                      <div 
                        key={q.id} 
                        className={`group border rounded-3xl transition-all duration-300 overflow-hidden ${
                          activeId === q.id 
                            ? 'border-medical-primary bg-white shadow-2xl shadow-medical-primary/5' 
                            : 'border-slate-200 bg-white hover:border-slate-300'
                        }`}
                      >
                        <button
                          onClick={() => setActiveId(activeId === q.id ? null : q.id)}
                          className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-6"
                        >
                          <span className={`text-lg md:text-xl font-bold tracking-tight transition-colors ${
                            activeId === q.id ? 'text-medical-primary' : 'text-slate-800'
                          }`}>
                            {q.question}
                          </span>
                          <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                            activeId === q.id ? 'bg-medical-primary text-white rotate-180' : 'bg-slate-100 text-slate-500'
                          }`}>
                             {activeId === q.id ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                          </div>
                        </button>
                        
                        <AnimatePresence>
                          {activeId === q.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                              <div className="px-8 pb-8 text-slate-600 text-lg leading-relaxed font-medium">
                                <div className="pt-2 border-t border-slate-100">
                                  {q.answer}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <HelpCircle className="w-16 h-16 text-slate-300 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">No matching questions found</h3>
              <p className="text-slate-500">Try adjusting your search or category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions? */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="bg-medical-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-700"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">Still have questions?</h2>
              <p className="text-white/80 text-xl max-w-2xl mx-auto mb-10 font-bold leading-relaxed">
                Our support team is always here to help you. Reach out to us via call or visit our campus for personal counseling.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a 
                  href="tel:+911234567890"
                  className="bg-medical-dark text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl shadow-medical-dark/20 flex items-center"
                >
                  Call Admissions: +91 12345 67890
                </a>
                <a 
                  href="/contact"
                  className="bg-white text-medical-primary px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-slate-50 transition-all shadow-xl shadow-medical-primary/20"
                >
                  Visit Contact Page
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
