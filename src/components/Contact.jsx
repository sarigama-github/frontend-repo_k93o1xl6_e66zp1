import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Mengirim...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Gagal mengirim')
      setStatus('✅ Pesan terkirim. Kami akan merespon segera.')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus('❌ ' + err.message)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Hubungi Kami</h2>
            <p className="text-slate-300 mb-6">Tim Sampurna siap membantu implementasi di wilayah Anda. Isi formulir atau hubungi kami via email.</p>
            <div className="text-slate-300 text-sm space-y-2">
              <p>Email: support@sampurna.id</p>
              <p>Telp: (021) 1234-5678</p>
              <p>Alamat: Jakarta, Indonesia</p>
            </div>
          </div>
          <form onSubmit={submit} className="space-y-3">
            <input name="name" value={form.name} onChange={handleChange} required placeholder="Nama" className="w-full px-4 py-3 rounded-lg bg-slate-800/60 border border-white/10 text-white" />
            <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="Email" className="w-full px-4 py-3 rounded-lg bg-slate-800/60 border border-white/10 text-white" />
            <input name="subject" value={form.subject} onChange={handleChange} required placeholder="Subjek" className="w-full px-4 py-3 rounded-lg bg-slate-800/60 border border-white/10 text-white" />
            <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Pesan" className="w-full px-4 py-3 rounded-lg bg-slate-800/60 border border-white/10 text-white h-32" />
            <div className="flex items-center gap-3">
              <button className="px-5 py-3 rounded-lg bg-emerald-400 text-slate-900 font-semibold hover:bg-emerald-300">Kirim</button>
              {status && <span className="text-slate-200 text-sm">{status}</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
