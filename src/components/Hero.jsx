import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[86vh] w-full">
      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient and vignette overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-950/90 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0)_0%,rgba(2,6,23,0.6)_60%,rgba(2,6,23,0.9)_100%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-16 md:pt-36">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
            nordstern
          </h1>
          <p className="mt-4 text-slate-300/90 text-lg md:text-xl leading-relaxed max-w-xl">
            Precision maintenance and repair for modern Volvos. Premium, independent care with factory-level expertise.
          </p>
        </div>

        {/* Partner chooser */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl" id="partners">
          <a href="#" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white text-2xl font-medium tracking-tight">Volvo</div>
                  <p className="text-slate-300/80 mt-1 text-sm">Official partner portal</p>
                </div>
                <svg className="h-9 w-9 text-white/80 group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 21 3m0 0h-5.25M21 3v5.25M3 21l8.25-8.25m0 0a3 3 0 1 0 4.243-4.243 3 3 0 0 0-4.243 4.243Z" /></svg>
              </div>
            </div>
          </a>
          <a href="#" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white text-2xl font-medium tracking-tight">Lynk &amp; Co</div>
                  <p className="text-slate-300/80 mt-1 text-sm">Partner website</p>
                </div>
                <svg className="h-9 w-9 text-white/80 group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 21 3m0 0h-5.25M21 3v5.25M3 21l8.25-8.25m0 0a3 3 0 1 0 4.243-4.243 3 3 0 0 0-4.243 4.243Z" /></svg>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
