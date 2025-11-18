import { useEffect, useState } from 'react'

function Facilities() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/facilities`)
        const data = await res.json()
        setItems(data.items || [])
      } catch (e) {
        setItems([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="facilities" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Fasilitas Mitra</h2>
          <span className="text-sm text-slate-300">{items.length} lokasi</span>
        </div>
        {loading ? (
          <p className="text-slate-300">Memuat data fasilitas...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((f) => (
              <div key={f._id} className="rounded-2xl p-6 bg-slate-800/60 border border-white/10 text-white">
                <h3 className="font-semibold mb-1">{f.name}</h3>
                <p className="text-sm text-slate-300 mb-2">{f.type}</p>
                <p className="text-sm text-slate-200">{f.address}, {f.city}</p>
                {typeof f.opening_hours === 'string' && (
                  <p className="text-xs text-slate-400 mt-2">{f.opening_hours}</p>
                )}
              </div>
            ))}
            {items.length === 0 && (
              <div className="col-span-full text-slate-300">Belum ada data fasilitas. Silakan hubungi kami untuk kemitraan.</div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default Facilities
