""use client"
import Link from "next/link";"

export default function ContactCTA(){
  return (
    <section id="contact" className="py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-orbitron mb-4">Ready to make a wish?</h3>
        <p className="text-slate-300 mb-6">Talk to our AI agents or request a proposal — we’ll make it happen.</p>
        <div className="flex justify-center gap-4">
          <Link href="#" className="btn-primary">Request Proposal</Link>
          <Link href="#" className="btn-ghost">Talk to AI</Link>
        </div>
      </div>
    </section>
  )
}
