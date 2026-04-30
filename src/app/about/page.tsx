import Link from 'next/link'
import Navbar from '../Navbar'

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

const missionCards = [
  {
    color: brandColors.coral,
    label: 'Outcomes',
    title: 'Patient Outcomes',
    body: 'Improved care quality and results for patients across every facility we serve.',
  },
  {
    color: brandColors.amber,
    label: 'Performance',
    title: 'Efficiency',
    body: 'Enhanced operational performance that keeps your teams focused on care, not paperwork.',
  },
  {
    color: brandColors.teal,
    label: 'Sustainability',
    title: 'Reduced Costs',
    body: 'Sustainable healthcare delivery with optimized resources and predictable pricing.',
  },
]

const whyCards = [
  {
    color: brandColors.coral,
    label: 'Experience',
    title: 'Real Experience',
    body: "We've worked the night shifts, signed the service contracts, and stood next to the technician at 3am when the scanner went down. Every product decision is shaped by the people who've done the work.",
  },
  {
    color: brandColors.amber,
    label: 'Technology',
    title: 'Vendor-Neutral Technology',
    body: 'Vendor-neutral, modality-agnostic technology that works with your existing infrastructure and equipment, regardless of manufacturer.',
  },
  {
    color: brandColors.violet,
    label: 'Support',
    title: 'Embedded Experts',
    body: 'Embedded clinical engineers, not call-center triage. Get direct access to experts who understand your equipment.',
  },
  {
    color: brandColors.sky,
    label: 'Pricing',
    title: 'Transparent Pricing',
    body: "Transparent pricing aligned with your capital plan. No hidden fees, no surprises—just clear, predictable costs that fit your budget.",
  },
]

const values = [
  {
    color: brandColors.coral,
    title: 'Insane Customer Focus',
    body: "Our customers are why we exist. We listen to them, design for their needs, and aim to make our user experience elegant and intuitive. We put what's best for customers at the center of decision-making, bringing them the best in technology coupled with real value. When there are customer pain points, we fix them quickly.",
  },
  {
    color: brandColors.amber,
    title: 'Excellence Everywhere',
    body: "We operate with extreme urgency. We push for progress without compromising quality—and when something is broken, we fix it. We're driven by impact and pride ourselves in our ability to be nimble and quickly adjust our strategy when presented with new information.",
  },
  {
    color: brandColors.violet,
    title: 'Lean and Disciplined',
    body: "We do more with less. Constraint drives us to innovate through scalable technology—not excess resources. We set ambitious goals, benchmark performance, and weigh trade-offs before changing course. By keeping costs low and efficiency high, we deliver exceptional value customers can't find anywhere else.",
  },
  {
    color: brandColors.sky,
    title: 'First Principles Thinking',
    body: "We only follow the crowd when they're right. We're innovators and problem solvers. We use data, empirical truth, and experiments to inform decisions. Our bold bets often make us a first mover, and we do what's right for customers—even if it hasn't been done before.",
  },
  {
    color: brandColors.teal,
    title: 'Have Fun and Enjoy the Journey',
    body: "We believe in celebrating progress and finding joy in the work we do. Building better healthcare is challenging, but that doesn't mean it can't be rewarding and enjoyable along the way.",
  },
  {
    color: brandColors.coral,
    title: 'Take Ownership',
    body: "A company is nothing but a collection of people. We believe in the power of every individual at HTM. We channel that power by giving individuals significant ownership of their work. In exchange, we require everyone here to care—a lot. Feathers will get ruffled, and that's the price we're willing to pay to keep pushing our standards ever higher.",
    highlighted: true,
  },
]

export default function About() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-brand-charcoal">
      <Navbar />

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-brand-violet/15 blur-3xl" />
          <div className="absolute top-20 -right-32 h-[420px] w-[420px] rounded-full bg-brand-teal/15 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-brand-sky/10 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr,0.9fr] lg:px-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-charcoal/10 bg-white/70 px-4 py-1.5 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-coral" />
              <span className="eyebrow">About HTM Healthcare</span>
            </div>

            <h1
              className="mt-6 font-extrabold leading-[1.02] tracking-tight text-brand-charcoal"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.75rem)', letterSpacing: '-0.035em' }}
            >
              <span className="bg-gradient-to-r from-brand-charcoal to-brand-charcoal/50 bg-clip-text text-transparent">
                We are HTM
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-charcoal/65">
              We provide technology and engineering solutions to hospitals, clinics, and radiology centers across Africa.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-brand-charcoal/60">
              We build AI-enabled software to digitize healthcare operations and offer engineering solutions—including maintenance of medical imaging equipment—to enable Africa&apos;s most ambitious healthcare organizations to grow.
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
                Our solutions
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

          {/* ─── HERO VISUAL ─────────────────────────── */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-square">
              <div className="absolute inset-6 rounded-[3rem] bg-gradient-to-br from-white via-brand-mist to-white shadow-2xl shadow-brand-charcoal/10 ring-1 ring-brand-charcoal/5" />

              <div className="absolute left-[10%] top-[12%] animate-float-slow">
                <div
                  className="rounded-3xl px-5 py-4 shadow-xl shadow-brand-coral/30"
                  style={{ background: brandColors.coral }}
                >
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">Founded</div>
                  <div className="mt-1 text-2xl font-extrabold leading-none text-white">2024</div>
                  <div className="mt-1 text-[11px] font-medium text-white/80">Nairobi, Kenya</div>
                </div>
              </div>

              <div className="absolute right-[6%] top-[18%] animate-float-med">
                <div
                  className="rounded-3xl px-5 py-4 shadow-xl shadow-brand-amber/30"
                  style={{ background: brandColors.amber }}
                >
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">Serving</div>
                  <div className="mt-1 text-2xl font-extrabold leading-none text-white">60+</div>
                  <div className="mt-1 text-[11px] font-medium text-white/80">healthcare orgs</div>
                </div>
              </div>

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
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">Mission</div>
                  <div className="mt-1 text-base font-extrabold leading-tight text-white">
                    Power Better<br />Healthcare
                  </div>
                </div>
              </div>

              <div className="absolute bottom-[10%] right-[8%] animate-float-slow">
                <div
                  className="rounded-3xl px-5 py-4 shadow-xl shadow-brand-sky/30"
                  style={{ background: brandColors.sky }}
                >
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">Focus</div>
                  <div className="mt-1 text-2xl font-extrabold leading-none text-white">Africa</div>
                  <div className="mt-1 text-[11px] font-medium text-white/80">first</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MISSION ──────────────────────────────────────────────── */}
      <section className="border-y border-brand-charcoal/10 bg-brand-mist/60 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="eyebrow">Our Mission</div>
              <h2
                className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-brand-charcoal sm:text-5xl"
                style={{ letterSpacing: '-0.03em' }}
              >
                Power Better<br />Healthcare
              </h2>
              <p className="mt-6 text-base leading-relaxed text-brand-charcoal/65">
                HTM was founded and exists to Power Better Healthcare. This means improvement in patient outcomes, reduced costs, and enhanced operational efficiency for the healthcare organizations we serve.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {missionCards.map((card) => (
                <div
                  key={card.title}
                  className="group relative overflow-hidden rounded-3xl border border-brand-charcoal/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-charcoal/20 hover:shadow-xl hover:shadow-brand-charcoal/5"
                >
                  <div
                    className="absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-15 blur-2xl transition-opacity group-hover:opacity-30"
                    style={{ background: card.color }}
                  />
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-2xl"
                    style={{ background: card.color }}
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-white/95" />
                  </div>
                  <div className="mt-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-charcoal/40">
                    {card.label}
                  </div>
                  <h3
                    className="mt-2 text-xl font-bold leading-snug tracking-tight text-brand-charcoal"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/60">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY HTM ──────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-14 max-w-2xl">
            <div className="eyebrow">Why Choose Us</div>
            <h2
              className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-brand-charcoal sm:text-5xl"
              style={{ letterSpacing: '-0.03em' }}
            >
              Built by medics, engineers,<br />
              <span className="text-brand-charcoal/55">and operators.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-charcoal/60">
              Every decision we make is shaped by people who have done the work—on the night shift, in the OR, and in the equipment room.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="group relative overflow-hidden rounded-3xl border border-brand-charcoal/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-charcoal/20 hover:shadow-xl hover:shadow-brand-charcoal/5"
              >
                <div
                  className="absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-15 blur-2xl transition-opacity group-hover:opacity-30"
                  style={{ background: card.color }}
                />
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-2xl"
                  style={{ background: card.color }}
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-white/95" />
                </div>
                <div className="mt-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-charcoal/40">
                  {card.label}
                </div>
                <h3
                  className="mt-2 text-xl font-bold leading-snug tracking-tight text-brand-charcoal"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/60">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CULTURE ──────────────────────────────────────────────── */}
      <section className="bg-brand-charcoal py-24 text-white sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr,1.1fr]">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
                Culture
              </div>
              <h2
                className="mt-3 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl"
                style={{ letterSpacing: '-0.03em' }}
              >
                Culture &amp; Core Values
              </h2>

              <div className="mt-8 overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-mist/10 via-white/5 to-brand-mist/5 p-8 ring-1 ring-white/10">
                <p className="text-xl italic leading-relaxed text-white/90">
                  &ldquo;A culture is not a set of beliefs, it&apos;s a set of actions.&rdquo;
                </p>
                <p className="mt-3 text-sm text-white/40">— BUSHIDO</p>
              </div>

              <p className="mt-8 max-w-md text-base leading-relaxed text-white/60">
                Our culture is our way of doing things, not just reading about them. We are clear about our beliefs and what we stand for, and we make explicit our expectations of what it means to be a part of the HTM Healthcare team.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2">
              {values.map((value, i) => (
                <div
                  key={value.title}
                  className={`p-7 transition-colors hover:bg-brand-navy ${value.highlighted ? 'bg-white/5' : 'bg-brand-charcoal'}`}
                >
                  <div
                    className="h-1 w-10 rounded-full"
                    style={{ background: value.color }}
                  />
                  <h3
                    className="mt-5 text-lg font-bold tracking-tight"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{value.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
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
                Ready to power better<br />
                healthcare?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/65">
                Join Africa&apos;s leading healthcare organizations in transforming patient care through technology and engineering.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-charcoal transition-all hover:bg-brand-mist hover:shadow-xl hover:shadow-white/10"
              >
                Get in touch
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:border-white/50 hover:bg-white/10"
              >
                Explore solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────────── */}
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
                Powering better healthcare through AI-enabled software and expert maintenance of medical imaging equipment.
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
                <li><Link href="/#why" className="hover:text-white">Why HTM</Link></li>
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
