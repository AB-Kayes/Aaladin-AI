"use client"

export default function Partners(){
  const logos = ['/vercel.svg','/next.svg','/file.svg','/globe.svg']
  return (
    <section id="partners" className="py-12 border-t border-white/6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-orbitron mb-6">Partners & Clients</h3>
        <div className="flex items-center gap-6 flex-wrap">
          {logos.map((l, i)=> (
            <div key={i} className="w-36 h-14 flex items-center justify-center bg-white/3 rounded-md p-2">
              <img src={l} alt={`logo-${i}`} className="max-h-10 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
