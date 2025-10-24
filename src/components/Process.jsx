"use client"

import { motion } from 'framer-motion'

const steps = [
  { title: 'Discover', desc: 'We understand your vision and constraints.' },
  { title: 'Design', desc: 'Prototypes and UX designed for AI experiences.' },
  { title: 'Build', desc: 'Production-grade models and infrastructure.' },
  { title: 'Scale', desc: 'Monitoring, MLOps and continuous improvement.' }
]

export default function Process(){
  return (
    <section id="process" className="py-16">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-orbitron mb-8">Our Process</h3>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
          {steps.map((s, i)=> (
            <motion.div key={s.title} whileHover={{ y: -6 }} className="p-6 bg-white/3 rounded-2xl border border-white/6">
              <div className="text-primary font-orbitron text-lg mb-2">{s.title}</div>
              <div className="text-sm text-slate-300">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
