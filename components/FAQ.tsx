'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, GraduationCap, BookOpen, Building2, Wallet } from 'lucide-react';

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
      }
    ]
  },
  {
    category: 'Fees',
    icon: <Wallet className="w-6 h-6" />,
    questions: [
      {
        id: 'fee-1',
        question: 'Are scholarship options available?',
        answer: 'Yes, we offer merit-based scholarships for toppers and assist students in applying for various State and Central Government scholarships.'
      }
    ]
  }
];

export default function FAQ() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">Frequently Asked Questions</h2>
          <p className="text-slate-500 font-medium">Find answers to common questions about admissions, courses, and life at Sunrise.</p>
        </div>

        <div className="space-y-6">
          {faqData.map((cat) => (
            <div key={cat.category} className="space-y-4">
              <div className="flex items-center gap-3 mb-4 mt-8 opacity-70">
                <div className="text-medical-primary">{cat.icon}</div>
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">{cat.category}</h3>
              </div>
              
              <div className="space-y-3">
                {cat.questions.map((q) => (
                  <div 
                    key={q.id} 
                    className={`border rounded-2xl transition-all duration-300 ${
                      activeId === q.id ? 'border-medical-primary bg-medical-light/30 shadow-lg shadow-medical-primary/5' : 'border-slate-100 bg-white hover:border-slate-200'
                    }`}
                  >
                    <button
                      onClick={() => setActiveId(activeId === q.id ? null : q.id)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4"
                    >
                      <span className={`font-bold tracking-tight ${activeId === q.id ? 'text-medical-primary' : 'text-slate-800'}`}>
                        {q.question}
                      </span>
                      <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                        activeId === q.id ? 'bg-medical-primary text-white rotate-180' : 'bg-slate-50 text-slate-400'
                      }`}>
                         {activeId === q.id ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {activeId === q.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: 'easeInOut' }}
                        >
                          <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-3">
                            {q.answer}
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
      </div>
    </section>
  );
}
