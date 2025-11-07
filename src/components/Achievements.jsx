import { Award, Star, Trophy } from 'lucide-react'

const items = [
  {
    icon: Trophy,
    title: 'Hackathon Winner',
    desc: '1st place in university 24h hackathon for building an AI-powered study planner.',
    year: '2024',
  },
  {
    icon: Award,
    title: 'Dean’s List',
    desc: 'Recognized for academic excellence with a GPA of 3.9+.',
    year: '2023',
  },
  {
    icon: Star,
    title: 'Open Source Contributor',
    desc: 'Contributed to UI libraries and documentation improvements.',
    year: '2022 – Present',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Achievements</h2>
        <p className="mt-2 text-slate-600">Highlights of recent awards and recognitions.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc, year }) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-semibold text-slate-900">{title}</h3>
                </div>
                <span className="text-xs text-slate-500">{year}</span>
              </div>
              <p className="mt-3 text-sm text-slate-700">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
