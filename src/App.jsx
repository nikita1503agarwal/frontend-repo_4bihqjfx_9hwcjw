import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* background texture */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(148,163,184,0.08),transparent_40%)]" />
      <Header />
      <main>
        <Hero />
        <Services />
        <CTA />
      </main>
      <footer className="relative border-t border-white/10 mt-10">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} nordstern. Independent service. Not affiliated with Volvo Car Corporation.</p>
          <div className="text-slate-400 text-sm">Volvo & Lynk & Co partner support</div>
        </div>
      </footer>
    </div>
  )
}

export default App
