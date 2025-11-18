import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-emerald-400 to-cyan-400 flex items-center justify-center text-slate-900 font-extrabold">S</div>
          <span className="text-white font-semibold text-lg tracking-tight">Sampurna</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200">
          <button onClick={() => scrollTo('hero')} className="hover:text-white">Beranda</button>
          <button onClick={() => scrollTo('services')} className="hover:text-white">Layanan</button>
          <button onClick={() => scrollTo('facilities')} className="hover:text-white">Fasilitas</button>
          <button onClick={() => scrollTo('request')} className="hover:text-white">Ajukan Pickup</button>
          <button onClick={() => scrollTo('articles')} className="hover:text-white">Edukasi</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-white">Kontak</button>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white inline-flex items-center justify-center w-10 h-10 rounded hover:bg-white/10" aria-label="Menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-slate-900/90 border-t border-white/10">
          <div className="px-4 py-3 flex flex-col gap-3 text-slate-200">
            <button onClick={() => scrollTo('hero')} className="text-left">Beranda</button>
            <button onClick={() => scrollTo('services')} className="text-left">Layanan</button>
            <button onClick={() => scrollTo('facilities')} className="text-left">Fasilitas</button>
            <button onClick={() => scrollTo('request')} className="text-left">Ajukan Pickup</button>
            <button onClick={() => scrollTo('articles')} className="text-left">Edukasi</button>
            <button onClick={() => scrollTo('contact')} className="text-left">Kontak</button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
