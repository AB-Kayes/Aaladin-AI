"use client"

export default function WhyUs(){
  const cards = [
    {title: 'Genie-grade Speed', desc: 'Rapid prototyping and iteration cycles.'},
    {title: 'Deep Expertise', desc: 'ML engineers, infra, product and design.'},
    {title: 'Trusted Security', desc: 'Enterprise-grade compliance and privacy.'}
  ]
  return (
    <section id="why" className="py-16">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-orbitron mb-6">Why Aaladin AI</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {cards.map((c,i)=> (
            <div key={i} className="p-6 bg-white/3 rounded-2xl border border-white/6">
              <div className="font-orbitron text-lg text-primary mb-2">{c.title}</div>
              <div className="text-slate-300">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
