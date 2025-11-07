import { Download, Mail } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold text-slate-800 tracking-tight text-lg">
          Student Portfolio
        </a>
        <nav className="flex items-center gap-2">
          <a href="#achievements" className="px-3 py-2 text-sm text-slate-700 hover:text-slate-900">Achievements</a>
          <a href="#projects" className="px-3 py-2 text-sm text-slate-700 hover:text-slate-900">Projects</a>
          <a href="#contact" className="px-3 py-2 text-sm text-slate-700 hover:text-slate-900">Contact</a>
          <a
            href="/Student_Portfolio.txt"
            download
            className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3 py-2 text-sm hover:bg-slate-800 transition-colors"
          >
            <Download size={16} />
            Download Portfolio
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-slate-300 text-slate-800 px-3 py-2 text-sm hover:bg-slate-50"
          >
            <Mail size={16} />
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  )
}
