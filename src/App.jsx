import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Facilities from './components/Facilities'
import RequestForm from './components/RequestForm'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar />
      <Hero />
      <Features />
      <Facilities />
      <RequestForm />
      <Contact />
      <footer className="py-10 border-t border-white/10 text-center text-slate-400 text-sm">
        © {new Date().getFullYear()} Sampurna • Platform Pengolahan & Pemilahan Sampah
      </footer>
    </div>
  )
}

export default App
