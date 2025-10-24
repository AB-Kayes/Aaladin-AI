""use client"
import Link from "next/link";";

export default function ProjectsPreview() {
  const projects = [
    {
      title: "SmartDocs AI",
      desc: "Document understanding platform",
      img: "/file.svg",
    },
    { title: "ChatterBot", desc: "Conversational AI agent", img: "/next.svg" },
    {
      title: "VisionOps",
      desc: "Computer vision pipeline",
      img: "/vercel.svg",
    },
  ];
  return (
    <section id="projects" className="py-16 border-t border-white/6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-orbitron mb-6">Selected Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Link
              key={i}
              href="#"
              className="block p-4 bg-white/3 rounded-2xl border border-white/6 hover:scale-[1.01] transition-transform"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-40 object-contain mb-4"
              />
              <div className="font-orbitron text-lg">{p.title}</div>
              <div className="text-slate-300 text-sm">{p.desc}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
