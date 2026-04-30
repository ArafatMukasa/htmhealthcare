import Link from 'next/link'
import Navbar from './Navbar'

const brandColors = {
  coral: '#F24E4E',
  amber: '#FF9F1C',
  violet: '#7B5CF0',
  teal: '#00BFA5',
  sky: '#1FB6FF',
}

function HtmMark({ size = 72 }: { size?: number }) {
  return (
    <svg width={size} height={(size * 82) / 72} viewBox="0 0 72 82" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="26" height="26" rx="13" fill={brandColors.coral} />
      <rect x="42" y="4" width="26" height="26" rx="13" fill={brandColors.amber} />
      <rect x="4" y="32" width="64" height="18" rx="8" fill={brandColors.violet} />
      <rect x="4" y="52" width="26" height="26" rx="13" fill={brandColors.teal} />
      <rect x="42" y="52" width="26" height="26" rx="13" fill={brandColors.sky} />
    </svg>
  )
}

const solutionPreviews = [
  {
    number: '01',
    color: brandColors.teal,
    label: 'Software Platform',
    name: 'hOS',
    tagline: 'AI-Enabled Healthcare Operating System',
    body: 'Purpose-built software that brings your entire healthcare organisation — clinical operations and business functions — into one unified, intelligent system. No stitched-together tools. No data gaps.',
    highlights: [
      'Full EMR / EHR & Patient Administration',
      'Billing, HR, Finance & Supply Chain',
      'Offline-first with AI built in',
      'Multi-branch, real-time reporting',
    ],
  },
  {
    number: '02',
    color: brandColors.amber,
    label: 'Engineering Services',
    name: 'Medical Imaging Equipment Engineering',
    tagline: 'Keeping your imaging fleet operational',
    body: 'Expert biomedical engineering teams that keep your CT, X-ray, and ultrasound equipment calibrated, compliant, and operational — minimising downtime and maximising patient throughput.',
    highlights: [
      'Preventive & scheduled maintenance',
      'Same-day breakdown response',
      'Equipment lifecycle advisory',
      'PACS / RIS / EHR integration',
    ],
  },
]


export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-brand-charcoal">
      <Navbar />

      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
        {/* Soft brand glow background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-brand-violet/20 blur-3xl" />
          <div className="absolute top-20 -right-32 h-[420px] w-[420px] rounded-full bg-brand-sky/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-brand-teal/15 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr,0.9fr] lg:px-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-charcoal/10 bg-white/70 px-4 py-1.5 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
              <span className="eyebrow">Africa's fastest growing health technology company 2024-2025</span>
            </div>

            <h1
              className="mt-6 font-extrabold leading-[1.02] tracking-tight text-brand-charcoal"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.75rem)', letterSpacing: '-0.035em' }}
            >
              <span className="bg-gradient-to-r from-brand-charcoal to-brand-charcoal/50 bg-clip-text text-transparent">
                Powering Better Healthcare
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-charcoal/65">
              HTM Healthcare provides purpose-built AI-enabled software and expert maintenance of medical
              imaging equipment for hospitals, clinics, and radiology centers. 
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-charcoal px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-navy hover:shadow-xl hover:shadow-brand-charcoal/20"
              >
                Talk to our team
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 rounded-full border border-brand-charcoal/15 bg-white/60 px-6 py-3 text-sm font-semibold text-brand-charcoal backdrop-blur transition-all hover:border-brand-charcoal/40 hover:bg-white"
              >
                Explore solutions
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-medium uppercase tracking-[0.2em] text-brand-charcoal/40">
              <span>HIPAA Compliant</span>
              <span className="h-1 w-1 rounded-full bg-brand-charcoal/20" />
              <span>SOC 2 Aligned</span>
              <span className="h-1 w-1 rounded-full bg-brand-charcoal/20" />
              <span>ISO 13485 Partners</span>
            </div>
          </div>

          {/* ─── HERO VISUAL ────────────────────────────── */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-square">
              {/* Soft halo */}
              <div className="absolute inset-6 rounded-[3rem] bg-gradient-to-br from-white via-brand-mist to-white shadow-2xl shadow-brand-charcoal/10 ring-1 ring-brand-charcoal/5" />

              {/* Floating brand-color cards composed from the mark */}
              <div className="absolute left-[12%] top-[14%] animate-float-slow">
                <div
                  className="rounded-3xl px-5 py-4 shadow-xl shadow-brand-coral/30"
                  style={{ background: brandColors.coral }}
                >
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                    Mean Time
                  </div>
                  <div className="mt-1 text-2xl font-extrabold leading-none text-white">2.4h</div>
                  <div className="mt-1 text-[11px] font-medium text-white/80">to repair</div>
                </div>
              </div>

              <div className="absolute right-[8%] top-[20%] animate-float-med">
                <div
                  className="rounded-3xl px-5 py-4 shadow-xl shadow-brand-amber/30"
                  style={{ background: brandColors.amber }}
                >
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">
                    Uptime
                  </div>
                  <div className="mt-1 text-2xl font-extrabold leading-none text-white">99.4%</div>
                  <div className="mt-1 text-[11px] font-medium text-white/80">last 90 days</div>
                </div>
              </div>

              {/* Center mark */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-[2rem] bg-white p-7 shadow-2xl shadow-brand-charcoal/15 ring-1 ring-brand-charcoal/5">
                  <HtmMark size={104} />
                </div>
              </div>

              <div className="absolute bottom-[16%] left-[6%] animate-float-fast">
                <div
                  className="rounded-3xl px-5 py-4 shadow-xl shadow-brand-teal/30"
                  style={{ background: brandColors.teal }}
                >
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">
                    Studies
                  </div>
                  <div className="mt-1 text-2xl font-extrabold leading-none text-white">+38%</div>
                  <div className="mt-1 text-[11px] font-medium text-white/80">throughput</div>
                </div>
              </div>

              <div className="absolute bottom-[12%] right-[10%] animate-float-slow">
                <div
                  className="rounded-3xl px-5 py-4 shadow-xl shadow-brand-sky/30"
                  style={{ background: brandColors.sky }}
                >
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">
                    Support
                  </div>
                  <div className="mt-1 text-2xl font-extrabold leading-none text-white">24/7</div>
                  <div className="mt-1 text-[11px] font-medium text-white/80">on-call</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ─── SOLUTIONS ────────────────────────────────────────── */}
      <section id="solutions" className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-14 max-w-2xl">
            <div className="eyebrow">Solutions</div>
            <h2
              className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-brand-charcoal sm:text-5xl"
              style={{ letterSpacing: '-0.03em' }}
            >
              Two solutions.
              <br />
              <span className="text-brand-charcoal/55">One partner.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-charcoal/60">
              HTM Healthcare equips hospitals, clinics, and radiology centers across Africa with purpose-built
              software and expert engineering services — so you can run smarter and deliver better care.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {solutionPreviews.map((sol) => (
              <div
                key={sol.name}
                className="group relative overflow-hidden rounded-3xl border border-brand-charcoal/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-charcoal/20 hover:shadow-xl hover:shadow-brand-charcoal/5"
              >
                <div
                  className="absolute -right-8 -top-8 h-40 w-40 rounded-full opacity-10 blur-3xl transition-opacity group-hover:opacity-20"
                  style={{ background: sol.color }}
                />
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{ background: sol.color }}
                  >
                    <span className="h-3 w-3 rounded-full bg-white/90" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-charcoal/40">
                      Solution {sol.number}
                    </div>
                    <div className="text-xs font-medium text-brand-charcoal/55">{sol.label}</div>
                  </div>
                </div>

                <h3
                  className="text-2xl font-bold tracking-tight text-brand-charcoal"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {sol.name}
                </h3>
                <p className="mt-1 text-sm font-medium" style={{ color: sol.color }}>
                  {sol.tagline}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-brand-charcoal/60">{sol.body}</p>

                <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {sol.highlights.map((h) => (
                    <div
                      key={h}
                      className="flex items-center gap-2.5 rounded-xl bg-brand-mist/60 px-3 py-2"
                    >
                      <div
                        className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                        style={{ background: sol.color }}
                      />
                      <span className="text-xs font-medium text-brand-charcoal/70">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 rounded-full border border-brand-charcoal/15 bg-white px-7 py-3.5 text-sm font-semibold text-brand-charcoal transition-all hover:border-brand-charcoal/30 hover:bg-brand-mist hover:shadow-lg"
            >
              Explore all solutions
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>


      {/* ─── CTA ─────────────────────────────────────────────── */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-brand-navy px-8 py-16 text-white sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-violet/30 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-brand-sky/25 blur-3xl" />
          </div>
          <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.3fr,0.7fr]">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
                Powering Better Healthcare
              </div>
              <h2
                className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl"
                style={{ letterSpacing: '-0.03em' }}
              >
                Ready to power<br />
                better healthcare?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/65">
                Book a 30-minute walkthrough with our biomedical engineering team. We&apos;ll review your current
                setup and show you what&apos;s possible.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-charcoal transition-all hover:bg-brand-mist hover:shadow-xl hover:shadow-white/10"
              >
                Book a walkthrough
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:border-white/50 hover:bg-white/10"
              >
                Learn about HTM
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────────── */}
      <footer className="bg-brand-charcoal text-white/60">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            <div className="col-span-2 sm:col-span-1">
              <div className="flex items-center gap-3">
                <HtmMark size={32} />
                <div className="flex items-baseline">
                  <span
                    className="text-lg font-extrabold leading-none text-white"
                    style={{ letterSpacing: '-0.04em' }}
                  >
                    HTM
                  </span>
                  <span className="ml-1.5 text-lg font-light leading-none text-white/70">Healthcare</span>
                </div>
              </div>
              <p className="mt-5 max-w-xs text-sm leading-relaxed">
                Powering better healthcare through AI-enabled software and expert maintenance of medical
                imaging equipment.
              </p>
            </div>

            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
                Solutions
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="/solutions#hos" className="hover:text-white">hOS Platform</Link></li>
                <li><Link href="/solutions#engineering" className="hover:text-white">Engineering Services</Link></li>
              </ul>
            </div>

            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
                Company
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/about#why" className="hover:text-white">Why HTM</Link></li>
              </ul>
            </div>

            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
                Compliance
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                <li>HIPAA</li>
                <li>SOC 2</li>
                <li>ISO 13485</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center">
            <p>&copy; {new Date().getFullYear()} HTM Healthcare. All rights reserved.</p>
            <p className="tracking-[0.25em] uppercase text-white/30">Powering Better Healthcare</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
