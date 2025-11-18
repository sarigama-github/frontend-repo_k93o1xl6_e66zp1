function Hero() {
  return (
    <section id="hero" className="relative pt-28 pb-24 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] bg-emerald-400/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[40rem] h-[40rem] bg-cyan-400/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-emerald-200 text-xs mb-4">Platform Daur Ulang • Siap Produksi</span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">Sampurna — Pengolahan & Pemilahan Sampah Terpadu</h1>
            <p className="text-lg text-slate-200/90 mb-8">Solusi digital untuk pemerintah daerah dan BUMD dalam pengelolaan sampah yang transparan, efisien, dan berkelanjutan.</p>
            <div className="flex flex-wrap gap-3">
              <a href="#request" className="px-5 py-3 rounded-lg bg-emerald-400 text-slate-900 font-semibold hover:bg-emerald-300">Ajukan Pickup</a>
              <a href="#services" className="px-5 py-3 rounded-lg bg-white/10 text-white border border-white/20 hover:bg-white/15">Lihat Fitur</a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-white/10 bg-slate-900/40 p-4">
              <img src="/recycle-illustration.svg" className="w-full rounded-xl" alt="Sampah" />
              <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur rounded-xl px-4 py-3 border border-white/20 text-white text-sm">Pelacakan armada • Bank sampah • Laporan real-time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
