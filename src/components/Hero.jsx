import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm uppercase tracking-widest text-slate-600">Personal Website</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900">
            Hi, I'm Alex — a student passionate about tech and design
          </h1>
          <p className="mt-4 text-slate-700 text-lg">
            I love building interactive projects and exploring modern tools. Here's a snapshot of my achievements and work.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-md bg-slate-900 text-white px-5 py-3 text-sm hover:bg-slate-800">View Projects</a>
            <a href="#achievements" className="rounded-md border border-slate-300 text-slate-800 px-5 py-3 text-sm hover:bg-slate-50">See Achievements</a>
          </div>
        </div>
        <div className="md:justify-self-end">
          <div className="bg-white/80 backdrop-blur rounded-xl shadow-lg p-6 w-full max-w-sm">
            <h3 className="font-semibold text-slate-900 text-lg">Quick Facts</h3>
            <ul className="mt-3 space-y-2 text-slate-700 text-sm">
              <li>• Major: Computer Science</li>
              <li>• Interests: Web, 3D, UI/UX</li>
              <li>• Location: Remote/Global</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
