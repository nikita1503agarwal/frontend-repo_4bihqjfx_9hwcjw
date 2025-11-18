import React from 'react'

function Header() {
  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 ring-1 ring-white/10 flex items-center justify-center">
            <span className="text-white font-semibold tracking-widest">N</span>
          </div>
          <div>
            <div className="text-white text-lg font-semibold tracking-wide">nordstern</div>
            <div className="text-xs text-slate-300/70 tracking-wider uppercase">Independent Volvo Partner</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#services" className="text-slate-300 hover:text-white transition-colors">Services</a>
          <a href="#partners" className="text-slate-300 hover:text-white transition-colors">Partners</a>
          <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
