import { Mail, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // In a real app, send to backend/email service
    setSent(true)
  }

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Get in touch</h2>
          <p className="mt-2 text-slate-600">I’m open to collaborations, internships, and interesting projects.</p>
          <div className="mt-6 inline-flex items-center gap-3 text-slate-700">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">
              <Mail size={18} />
            </span>
            <a href="mailto:alex.student@example.com" className="hover:underline">alex.student@example.com</a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-700 mb-1">Name</label>
              <input value={name} onChange={(e)=>setName(e.target.value)} className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-slate-700 mb-1">Email</label>
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="you@example.com" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm text-slate-700 mb-1">Message</label>
            <textarea value={message} onChange={(e)=>setMessage(e.target.value)} rows={4} className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="Say hello..." />
          </div>
          <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800">
            <Send size={16} /> Send Message
          </button>
          {sent && <p className="mt-3 text-sm text-green-700">Thanks! Your message has been noted.</p>}
        </form>
      </div>
    </section>
  )
}
