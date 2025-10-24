"use client"

const items = [
  { name: 'Jane Doe', text: 'Aaladin AI delivered a production ML stack that transformed our product.' },
  { name: 'Acme Corp', text: 'They integrated AI seamlessly into our workflows.' },
  { name: 'Startup X', text: 'Fast delivery and excellent engineering.' }
]

export default function Testimonials(){
  return (
    <section id="testimonials" className="py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-2xl font-orbitron mb-8">What Clients Say</h3>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div key={i} className="p-6 rounded-2xl bg-black/20 text-left">
              <p className="text-lg">“{it.text}”</p>
              <div className="mt-4 font-orbitron text-sm text-slate-200">— {it.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
