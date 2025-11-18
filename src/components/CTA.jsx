import React from 'react'

function CTA() {
  return (
    <section id="contact" className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-white text-2xl font-semibold tracking-tight">Book a visit</h3>
              <p className="text-slate-300/90 mt-2 max-w-xl">Tell us about your Volvo and we’ll suggest the right schedule. We respond within one business day.</p>
            </div>
            <a href="mailto:service@nordstern.auto" className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-6 py-3 text-sm font-medium tracking-wide hover:bg-slate-100 transition-colors">
              Email service@nordstern.auto
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7Z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
