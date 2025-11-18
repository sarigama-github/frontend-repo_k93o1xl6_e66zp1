function Features() {
  const items = [
    {
      title: 'Jadwal & Rute Armada',
      desc: 'Optimasi rute pengangkutan dengan notifikasi otomatis ke warga dan admin kelurahan.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6a2 2 0 012-2h7m0 0l-3-3m3 3l-3 3" /></svg>
      )
    },
    {
      title: 'Bank Sampah Terintegrasi',
      desc: 'Transaksi penimbangan, penjualan material, dan insentif warga secara transparan.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-10v10m8-5a8 8 0 11-16 0 8 8 0 0116 0z" /></svg>
      )
    },
    {
      title: 'Pelaporan Kinerja',
      desc: 'Dashboard KPI: volume terangkut, komposisi sampah, tingkat daur ulang, dan emisi dihindari.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 11V3a1 1 0 112 0v8h6a1 1 0 110 2h-6v8a1 1 0 11-2 0v-8H5a1 1 0 110-2h6z" /></svg>
      )
    },
    {
      title: 'Pengaduan & Tanggap Darurat',
      desc: 'Saluran cepat untuk laporan tumpukan liar, kebocoran B3, dan gangguan layanan.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-12.728 12.728M5.636 5.636l12.728 12.728" /></svg>
      )
    }
  ]

  return (
    <section id="services" className="py-20 bg-slate-900/30 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">Fitur Unggulan</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <div key={i} className="rounded-2xl p-6 bg-slate-800/60 border border-white/10 text-white">
              <div className="w-10 h-10 rounded-lg bg-emerald-400/20 text-emerald-300 flex items-center justify-center mb-4">{it.icon}</div>
              <h3 className="font-semibold mb-2">{it.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
