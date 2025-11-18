import React from 'react'

const services = [
  {
    title: 'Scheduled Maintenance',
    desc: 'Factory-spec servicing, software updates, and inspections to keep your Volvo performing flawlessly.',
  },
  {
    title: 'Diagnostics & Repair',
    desc: 'Advanced diagnostics, drivetrain and electrical repairs with OEM-grade parts and tooling.',
  },
  {
    title: 'Performance & Safety',
    desc: 'Brake systems, suspension tuning, ADAS calibration, and winter readiness packages.',
  },
]

function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-white text-3xl md:text-4xl font-semibold tracking-tight">Crafted service, Scandinavian calm</h2>
          <p className="text-slate-300/90 mt-3">From daily maintenance to complex repairs, we deliver premium care with understated precision.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="text-white text-lg font-medium">{s.title}</div>
              <p className="text-slate-300/80 mt-2 text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
              <div className="mt-4 text-slate-300/70 text-xs">By appointment • Genuine parts • Warranty compliant</div>
            </div>
          ))}
        </div>
      </div>

      {/* soft gradient */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-10 h-40 bg-gradient-to-b from-transparent to-slate-950" />
    </section>
  )
}

export default Services
