import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Achievements from './components/Achievements'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Achievements />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-slate-200 py-6">
        <div className="max-w-6xl mx-auto px-4 text-sm text-slate-600">
          © {new Date().getFullYear()} Alex Doe — Built with React & Spline
        </div>
      </footer>
    </div>
  )
}

export default App
