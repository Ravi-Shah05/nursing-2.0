"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Target, Heart } from 'lucide-react';
import Link from 'next/link';

const objectives = [
  "Prepare students to provide comprehensive nursing care using the nursing process.",
  "Develop the ability to apply scientific knowledge and clinical skills in patient care.",
  "Train students to function effectively as members of the healthcare team.",
  "Foster critical thinking, problem-solving, and decision-making abilities.",
  "Promote engagement in nursing research and evidence-based practice.",
  "Enable graduates to take up leadership and managerial roles in healthcare settings.",
  "Encourage students to participate in community health and outreach programs.",
  "Uphold ethical, legal, and professional standards in nursing practice.",
  "Prepare nurses for continuing education and advanced studies."
];

const missionPoints = [
  "Providing quality nursing education in accordance with the standards of the Indian Nursing Council and Gujarat Nursing Council.",
  "Preparing graduates to deliver holistic, evidence-based nursing care in diverse healthcare settings.",
  "Promoting research activities and critical thinking to improve nursing practice and outcomes.",
  "Developing professional competence, leadership skills, and accountability among students.",
  "Instilling ethical values, compassion, and social responsibility in the nursing profession.",
  "Encouraging participation in community health services and national health programs.",
  "Supporting lifelong learning and continuing nursing education."
];

export default function AboutVision() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-linear-to-r from-medical-primary/5 to-accent/5 p-8 rounded-3xl border border-medical-primary/10 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-lg bg-white flex items-center justify-center shadow-sm">
                  <Target className="text-medical-primary w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-medical-dark mb-3">Vision</h3>
                  <p className="text-slate-600 leading-relaxed">To be a center of excellence in nursing education, fostering competent, compassionate, and ethically grounded nursing professionals who contribute effectively to the healthcare system and improve the quality of life of individuals, families, and communities.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg group hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center shadow-sm">
                  <Heart className="text-accent w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-medical-dark mb-3">Philosophy</h3>
                  <p className="text-slate-600 leading-relaxed">Health is a dynamic state of physical, mental, social, and spiritual well-being. Nursing is a noble profession and service-oriented discipline dedicated to the care of individuals, families, and communities.</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-medical-light p-8 rounded-3xl border border-medical-primary/10 shadow-xl"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-extrabold text-medical-dark">Mission</h3>
                <p className="text-sm text-slate-500">Our committed aims for student formation and healthcare impact.</p>
              </div>
              <div className="text-medical-primary font-black text-3xl">{missionPoints.length}</div>
            </div>

            <ol className="list-decimal pl-5 text-slate-700 leading-relaxed space-y-4">
              {missionPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -8, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.05 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {point}
                </motion.li>
              ))}
            </ol>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link href="/nursing" className="px-5 py-3 bg-medical-primary text-white rounded-2xl font-bold shadow hover:-translate-y-0.5 transition-transform">Explore Programs</Link>
              <Link href="/contact" className="px-5 py-3 border border-slate-200 rounded-2xl text-slate-700 font-semibold hover:bg-white/50 transition">Contact Admissions</Link>
            </div>
          </motion.div>
        </div>

        {/* Objectives */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <div className="text-medical-primary font-black uppercase tracking-[0.2em] text-[10px] mb-4">What We Commit To</div>
            <h3 className="text-3xl md:text-4xl font-black text-medical-dark tracking-tighter">Our Objectives</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {objectives.map((obj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (i % 3) * 0.08 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:border-medical-primary/30 transition-colors"
              >
                <span className="w-9 h-9 rounded-xl bg-medical-primary text-white flex items-center justify-center font-black text-sm shrink-0">{i + 1}</span>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">{obj}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
