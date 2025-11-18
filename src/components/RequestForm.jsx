import { useState } from 'react'

function RequestForm() {
  const [form, setForm] = useState({
    full_name: '', email: '', phone: '', address: '', city: '', waste_type: '', quantity_kg: '', notes: ''
  })
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
      const res = await fetch(`${baseUrl}/service-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, quantity_kg: form.quantity_kg ? Number(form.quantity_kg) : null })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Gagal mengirim')
      setStatus('✅ Permohonan terkirim. Kami akan menghubungi Anda.')
      setForm({ full_name: '', email: '', phone: '', address: '', city: '', waste_type: '', quantity_kg: '', notes: '' })
    } catch (err) {
      setStatus('❌ ' + err.message)
    }
  }

  return (
    <section id="request" className="py-20 bg-slate-900/30 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-6">Ajukan Penjemputan Sampah</h2>
        <form onSubmit={submit} className="grid md:grid-cols-2 gap-4 text-sm">
          <input name="full_name" value={form.full_name} onChange={handleChange} required placeholder="Nama Lengkap" className="px-4 py-3 rounded-lg bg-slate-800/60 border border-white/10 text-white" />
          <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="Email" className="px-4 py-3 rounded-lg bg-slate-800/60 border border-white/10 text-white" />
          <input name="phone" value={form.phone} onChange={handleChange} required placeholder="No. Telepon" className="px-4 py-3 rounded-lg bg-slate-800/60 border border-white/10 text-white" />
          <input name="city" value={form.city} onChange={handleChange} required placeholder="Kota/Kabupaten" className="px-4 py-3 rounded-lg bg-slate-800/60 border border-white/10 text-white" />
          <input name="address" value={form.address} onChange={handleChange} required placeholder="Alamat Lengkap" className="md:col-span-2 px-4 py-3 rounded-lg bg-slate-800/60 border border-white/10 text-white" />
          <div className="grid grid-cols-2 gap-4 md:col-span-2">
            <select name="waste_type" value={form.waste_type} onChange={handleChange} required className="px-4 py-3 rounded-lg bg-slate-800/60 border border-white/10 text-white">
              <option value="">Jenis Sampah</option>
              <option>Organik</option>
              <option>Anorganik</option>
              <option>B3</option>
              <option>Campuran</option>
            </select>
            <input name="quantity_kg" value={form.quantity_kg} onChange={handleChange} placeholder="Perkiraan Berat (kg)" className="px-4 py-3 rounded-lg bg-slate-800/60 border border-white/10 text-white" />
          </div>
          <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Catatan Tambahan" className="md:col-span-2 px-4 py-3 rounded-lg bg-slate-800/60 border border-white/10 text-white h-28" />
          <div className="md:col-span-2 flex items-center gap-3">
            <button className="px-5 py-3 rounded-lg bg-emerald-400 text-slate-900 font-semibold hover:bg-emerald-300">Kirim Permohonan</button>
            {status && <span className="text-slate-200 text-sm">{status}</span>}
          </div>
        </form>
      </div>
    </section>
  )
}

export default RequestForm
