import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    name: 'Interactive Portfolio',
    description: 'A modern, animated portfolio with 3D hero and smooth navigation.',
    tech: ['React', 'Spline', 'Tailwind'],
    links: {
      demo: '#',
      code: '#',
    },
  },
  {
    name: 'Study Planner',
    description: 'Smart planner that suggests optimal study sessions based on schedule.',
    tech: ['FastAPI', 'MongoDB', 'React'],
    links: {
      demo: '#',
      code: '#',
    },
  },
  {
    name: 'UI Components',
    description: 'A set of reusable, accessible components inspired by shadcn/ui.',
    tech: ['TypeScript', 'React'],
    links: {
      demo: '#',
      code: '#',
    },
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Projects</h2>
        <p className="mt-2 text-slate-600">A selection of recent work.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.name} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-slate-900">{p.name}</h3>
              <p className="mt-2 text-slate-700 text-sm">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a href={p.links.code} className="inline-flex items-center gap-2 text-slate-800 hover:text-slate-900 text-sm">
                  <Github size={16} /> Code
                </a>
                <a href={p.links.demo} className="inline-flex items-center gap-2 text-slate-800 hover:text-slate-900 text-sm">
                  <ExternalLink size={16} /> Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
