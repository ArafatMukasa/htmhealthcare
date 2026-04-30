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

const clinicalModules = [
  { name: 'Patient Administration', desc: 'Registration, MRN, demographics' },
  { name: 'EMR / EHR', desc: 'Vitals, diagnoses, prescriptions' },
  { name: 'Radiology', desc: 'Orders, exams, reports, images' },
  { name: 'Laboratory', desc: 'Orders, specimens, verification' },
  { name: 'Pharmacy', desc: 'Dispensing, inventory, POS' },
  { name: 'Inpatient & Outpatient', desc: 'Beds, transfers, daily care' },
  { name: 'Theatre & ICU', desc: 'Pre/intra/post-op, critical care' },
  { name: 'Specialties', desc: 'Dental, ENT, OB/GYN, Pediatrics, Ophthalmology, Dialysis' },
]

const businessModules = [
  { name: 'Billing & Insurance', desc: 'Bills, claims, reconciliation' },
  { name: 'Finance & Reporting', desc: 'GL, P&L, balance sheet' },
  { name: 'HR & Payroll', desc: 'Staff, shifts, attendance, payslips' },
  { name: 'Inventory & Procurement', desc: 'Stock, POs, GRN, suppliers' },
  { name: 'Asset Management', desc: 'Depreciation, maintenance, audits' },
  { name: 'CRM', desc: 'Leads, pipeline, campaigns' },
  { name: 'Supply Chain', desc: 'Shipments, transport, logistics' },
  { name: 'Document Management', desc: 'Secure storage, workflows, permissions' },
]

const hosCapabilities = [
  'Works offline — syncs when reconnected',
  'AI-enabled intelligence built in',
  'Multi-branch, multi-location ready',
  'Full audit trail on every action',
  'Runs on any device — no costly hardware',
  'Real-time reporting across the organisation',
]

const modalities = ['Ultrasound', 'X-ray (Fixed)', 'X-ray (Mobile)', 'CT Scan']
const oems = ['Philips', 'Siemens', 'Italray']

const whyItems = [
  {
    color: brandColors.teal,
    title: 'Built for healthcare, not adapted to it',
    body: 'Every feature, every workflow, every service is designed around how healthcare actually operates — not retrofitted from a generic platform.',
  },
  {
    color: brandColors.sky,
    title: 'Reliable in real-world conditions',
    body: 'Offline capability, same-day engineering response, and systems designed for the infrastructure realities across Africa.',
  },
  {
    color: brandColors.coral,
    title: 'One partner, end to end',
    body: 'Software, engineering, and integration — under one roof. No vendor coordination. No accountability gaps.',
  },
  {
    color: brandColors.amber,
    title: 'Built to scale with you',
    body: 'From a single facility to a multi-site network, hOS and our engineering services grow as your organisation grows.',
  },
  {
    color: brandColors.violet,
    title: 'Full operational visibility',
    body: 'Real-time dashboards, detailed reporting, and complete audit trails across clinical, financial, and engineering operations.',
  },
  {
    color: brandColors.teal,
    title: 'Independent and trusted',
    body: "Our lifecycle advisory is vendor-neutral. We tell you what your equipment needs — not what anyone is trying to sell you.",
  },
]

export default function SolutionsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-brand-charcoal">
      <Navbar />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-brand-teal/15 blur-3xl" />
          <div className="absolute top-20 -right-32 h-[420px] w-[420px] rounded-full bg-brand-amber/15 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-brand-sky/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-charcoal/10 bg-white/70 px-4 py-1.5 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
            <span className="eyebrow">Our Solutions</span>
          </div>

          <h1
            className="mt-6 max-w-3xl font-extrabold leading-[1.05] tracking-tight text-brand-charcoal"
            style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.75rem)', letterSpacing: '-0.035em' }}
          >
            Built for hospitals<br />
            that can&apos;t afford to slow down.<br />
            <span className="bg-gradient-to-r from-brand-teal to-brand-sky bg-clip-text text-transparent">
              Technology and engineering
            </span>{' '}
            working as one.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-charcoal/65">
            HTM Healthcare equips hospitals, clinics, and radiology centers across Africa with the software and
            engineering services they need to run smarter, scale faster, and deliver better patient care —
            every single day.
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
            <a
              href="#engineering"
              className="inline-flex items-center gap-2 rounded-full border border-brand-charcoal/15 bg-white/60 px-6 py-3 text-sm font-semibold text-brand-charcoal backdrop-blur transition-all hover:border-brand-charcoal/40 hover:bg-white"
            >
              Engineering services
            </a>
          </div>
        </div>
      </section>

      {/* ─── SOLUTION 01: hOS ────────────────────────────────── */}
      <section id="hos" className="border-t border-brand-charcoal/10 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full" style={{ background: brandColors.teal }} />
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-charcoal/50">
              Solution 01
            </span>
          </div>

          <div className="mb-12 max-w-2xl">
            <h2
              className="text-4xl font-extrabold leading-tight tracking-tight text-brand-charcoal sm:text-5xl"
              style={{ letterSpacing: '-0.03em' }}
            >
              hOS: AI-Enabled Healthcare<br />
              <span className="text-brand-charcoal/50">Operating System</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-charcoal/60">
              hOS is purpose-built software that brings your entire healthcare organisation — clinical operations
              and business functions — into one unified, intelligent system. No stitched-together tools. No data
              gaps. Just one place to run everything, in real time.
            </p>
          </div>

          {/* Clinical Operations card */}
          <div className="mb-5 rounded-3xl border border-brand-charcoal/10 bg-white p-8">
            <div className="mb-6 flex items-start gap-4">
              <div
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl"
                style={{ background: brandColors.teal }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight text-brand-charcoal" style={{ letterSpacing: '-0.02em' }}>
                  Clinical Operations
                </h3>
                <p className="mt-1 text-sm text-brand-charcoal/55">End-to-end patient care — from registration to discharge</p>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-brand-charcoal/60">
              hOS covers the full clinical journey across every department, giving care teams a single digital
              workspace for patient administration, diagnostics, treatment, and documentation.
            </p>
            <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-charcoal/40">
              Key modules
            </div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {clinicalModules.map((m) => (
                <div
                  key={m.name}
                  className="rounded-xl border-l-2 bg-brand-mist/60 px-3 py-2.5"
                  style={{ borderLeftColor: brandColors.teal }}
                >
                  <div className="text-xs font-semibold text-brand-charcoal">{m.name}</div>
                  <div className="text-xs text-brand-charcoal/50">{m.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Business Operations card */}
          <div className="mb-10 rounded-3xl border border-brand-charcoal/10 bg-white p-8">
            <div className="mb-6 flex items-start gap-4">
              <div
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl"
                style={{ background: brandColors.sky }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  <line x1="12" y1="12" x2="12" y2="16" />
                  <line x1="10" y1="14" x2="14" y2="14" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight text-brand-charcoal" style={{ letterSpacing: '-0.02em' }}>
                  Business Operations
                </h3>
                <p className="mt-1 text-sm text-brand-charcoal/55">The financial and operational backbone of your organisation</p>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-brand-charcoal/60">
              Run your entire back office inside hOS — from billing and payroll to procurement and supply chain —
              with full audit trails and real-time financial visibility across every location.
            </p>
            <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-charcoal/40">
              Key modules
            </div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {businessModules.map((m) => (
                <div
                  key={m.name}
                  className="rounded-xl border-l-2 bg-brand-mist/60 px-3 py-2.5"
                  style={{ borderLeftColor: brandColors.sky }}
                >
                  <div className="text-xs font-semibold text-brand-charcoal">{m.name}</div>
                  <div className="text-xs text-brand-charcoal/50">{m.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* hOS differentiators */}
          <div>
            <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-charcoal/40">
              Why hOS stands apart
            </div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {hosCapabilities.map((cap) => (
                <div
                  key={cap}
                  className="flex items-center gap-2.5 rounded-xl border border-brand-charcoal/10 bg-white px-4 py-3"
                >
                  <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: brandColors.teal }} />
                  <span className="text-sm text-brand-charcoal/70">{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOLUTION 02: ENGINEERING SERVICES ─────────────── */}
      <section id="engineering" className="border-t border-brand-charcoal/10 bg-brand-mist/40 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full" style={{ background: brandColors.amber }} />
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-charcoal/50">
              Solution 02
            </span>
          </div>

          <div className="mb-12 max-w-2xl">
            <h2
              className="text-4xl font-extrabold leading-tight tracking-tight text-brand-charcoal sm:text-5xl"
              style={{ letterSpacing: '-0.03em' }}
            >
              Medical Imaging Equipment<br />
              <span className="text-brand-charcoal/50">Engineering Services</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-charcoal/60">
              Your imaging equipment is mission-critical. Our biomedical engineering teams keep it calibrated,
              compliant, and operational — so your clinicians can focus on patients, not downtime.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Preventive Maintenance */}
            <div className="group relative overflow-hidden rounded-3xl border border-brand-charcoal/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-charcoal/20 hover:shadow-xl hover:shadow-brand-charcoal/5">
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-10 blur-2xl transition-opacity group-hover:opacity-25" style={{ background: brandColors.amber }} />
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl" style={{ background: brandColors.amber }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold tracking-tight text-brand-charcoal" style={{ letterSpacing: '-0.02em' }}>
                Preventive Maintenance
              </h3>
              <p className="mt-1 text-xs font-medium" style={{ color: brandColors.amber }}>
                Stay compliant, stay calibrated — before problems arise
              </p>
              <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/60">
                Scheduled inspections and calibrations carried out by biomedical engineers trained on every major
                OEM platform. We keep your equipment performing at spec and your accreditations intact —
                systematically, on a defined schedule aligned to your operations.
              </p>
            </div>

            {/* Breakdown & Corrective Maintenance */}
            <div className="group relative overflow-hidden rounded-3xl border border-brand-charcoal/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-charcoal/20 hover:shadow-xl hover:shadow-brand-charcoal/5">
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-10 blur-2xl transition-opacity group-hover:opacity-25" style={{ background: brandColors.coral }} />
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl" style={{ background: brandColors.coral }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold tracking-tight text-brand-charcoal" style={{ letterSpacing: '-0.02em' }}>
                Breakdown &amp; Corrective Maintenance
              </h3>
              <p className="mt-1 text-xs font-medium" style={{ color: brandColors.coral }}>
                Same-day response. Stocked parts. Back online fast.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/60">
                When equipment fails, every hour counts. Our teams dispatch same-day with a stocked parts
                inventory for the modalities you depend on most — minimising disruption to patient services and
                your revenue stream.
              </p>
            </div>

            {/* Equipment Lifecycle Advisory */}
            <div className="group relative overflow-hidden rounded-3xl border border-brand-charcoal/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-charcoal/20 hover:shadow-xl hover:shadow-brand-charcoal/5">
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-10 blur-2xl transition-opacity group-hover:opacity-25" style={{ background: brandColors.violet }} />
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl" style={{ background: brandColors.violet }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold tracking-tight text-brand-charcoal" style={{ letterSpacing: '-0.02em' }}>
                Equipment Lifecycle Advisory
              </h3>
              <p className="mt-1 text-xs font-medium" style={{ color: brandColors.violet }}>
                Independent guidance — no vendor bias
              </p>
              <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/60">
                From procurement to decommissioning, we provide independent recommendations aligned to your
                capital plan. Whether you&apos;re acquiring new equipment, refurbishing existing assets, or planning
                a phased upgrade — we advise in your interest, not a manufacturer&apos;s.
              </p>
            </div>

            {/* Software Integration */}
            <div className="group relative overflow-hidden rounded-3xl border border-brand-charcoal/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-charcoal/20 hover:shadow-xl hover:shadow-brand-charcoal/5">
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-10 blur-2xl transition-opacity group-hover:opacity-25" style={{ background: brandColors.teal }} />
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl" style={{ background: brandColors.teal }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold tracking-tight text-brand-charcoal" style={{ letterSpacing: '-0.02em' }}>
                Software Integration
              </h3>
              <p className="mt-1 text-xs font-medium" style={{ color: brandColors.teal }}>
                Imaging data, exactly where clinicians need it
              </p>
              <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/60">
                PACS, RIS, and EHR connectors that ensure imaging data flows seamlessly into your clinical
                systems. We bridge your physical equipment and your digital infrastructure so nothing is isolated
                and no data is lost between systems.
              </p>
            </div>
          </div>

          {/* Modalities + OEM */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="rounded-3xl border border-brand-charcoal/10 bg-white p-6">
              <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-charcoal/40">
                Supported modalities
              </div>
              <div className="flex flex-wrap gap-2">
                {modalities.map((m) => (
                  <span
                    key={m}
                    className="rounded-full border px-4 py-1.5 text-xs font-medium"
                    style={{ borderColor: brandColors.amber, color: brandColors.amber, background: '#FAEEDA' }}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-brand-charcoal/10 bg-white p-6">
              <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-charcoal/40">
                OEM expertise
              </div>
              <div className="flex flex-wrap gap-2">
                {oems.map((o) => (
                  <span
                    key={o}
                    className="rounded-full border border-brand-charcoal/15 bg-brand-mist px-4 py-1.5 text-xs font-medium text-brand-charcoal/60"
                  >
                    {o}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY HTM ─────────────────────────────────────────── */}
      <section className="border-t border-brand-charcoal/10 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-14 max-w-2xl">
            <div className="eyebrow">Why Choose HTM</div>
            <h2
              className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-brand-charcoal sm:text-5xl"
              style={{ letterSpacing: '-0.03em' }}
            >
              Why healthcare organisations<br />
              <span className="text-brand-charcoal/55">choose HTM</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyItems.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-brand-charcoal/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-charcoal/20 hover:shadow-xl hover:shadow-brand-charcoal/5"
              >
                <div
                  className="absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-10 blur-2xl transition-opacity group-hover:opacity-20"
                  style={{ background: item.color }}
                />
                <div className="h-1 w-10 rounded-full" style={{ background: item.color }} />
                <h3
                  className="mt-5 text-base font-bold tracking-tight text-brand-charcoal"
                  style={{ letterSpacing: '-0.01em' }}
                >
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/60">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-brand-navy px-8 py-16 text-white sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-teal/30 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-brand-amber/25 blur-3xl" />
          </div>
          <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.3fr,0.7fr]">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
                Ready to get started?
              </div>
              <h2
                className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl"
                style={{ letterSpacing: '-0.03em' }}
              >
                Ready to modernise<br />
                your operations?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/65">
                Talk to us about hOS, equipment engineering services, or both. We&apos;ll review your current setup
                and show you what&apos;s possible.
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
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:border-white/50 hover:bg-white/10"
              >
                Learn about HTM
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────── */}
      <footer className="bg-brand-charcoal text-white/60">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            <div className="col-span-2 sm:col-span-1">
              <div className="flex items-center gap-3">
                <HtmMark size={32} />
                <div className="flex items-baseline">
                  <span className="text-lg font-extrabold leading-none text-white" style={{ letterSpacing: '-0.04em' }}>
                    HTM
                  </span>
                  <span className="ml-1.5 text-lg font-light leading-none text-white/70">Healthcare</span>
                </div>
              </div>
              <p className="mt-5 max-w-xs text-sm leading-relaxed">
                Powering better healthcare through AI-enabled software and expert maintenance of medical imaging
                equipment.
              </p>
            </div>

            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">Solutions</div>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="/solutions#hos" className="hover:text-white">hOS Platform</Link></li>
                <li><Link href="/solutions#engineering" className="hover:text-white">Engineering Services</Link></li>
              </ul>
            </div>

            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">Company</div>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/about#why" className="hover:text-white">Why HTM</Link></li>
              </ul>
            </div>

            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">Compliance</div>
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
