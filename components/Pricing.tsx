'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const plans = [
  {
    tier: 'Start',
    price: '2 990',
    note: 'jednorázová platba · ideální pro živnostníky',
    featured: false,
    features: [
      { ok: true, text: 'Až 3 podstránky' },
      { ok: true, text: 'Next.js + Tailwind CSS' },
      { ok: true, text: 'Responzivní design (mobil + PC)' },
      { ok: true, text: 'Kontaktní formulář' },
      { ok: true, text: 'Nasazení na Vercel (zdarma hosting)' },
      { ok: true, text: 'Dodání do 2–3 týdnů' },
      { ok: false, text: 'Animace & interaktivita' },
    ],
    cta: 'Chci Start web',
  },
  {
    tier: 'Profi',
    price: '5 990',
    note: 'jednorázová platba · pro firmy & startupy',
    featured: true,
    badge: 'Doporučuji',
    features: [
      { ok: true, text: 'Až 8 podstránek' },
      { ok: true, text: 'Next.js 14 + TypeScript + Tailwind' },
      { ok: true, text: 'Framer Motion animace' },
      { ok: true, text: 'Dark mode' },
      { ok: true, text: 'Open Graph & sdílení na sítích' },
      { ok: true, text: 'Google Analytics' },
      { ok: true, text: 'Dodání do 3–4 týdnů' },
    ],
    cta: 'Mám zájem',
  },
  {
    tier: 'Na míru',
    price: 'od 9 990',
    note: 'dle rozsahu · napište co potřebujete',
    featured: false,
    features: [
      { ok: true, text: 'Neomezený počet stránek' },
      { ok: true, text: 'Napojení na CMS (Sanity / Contentful)' },
      { ok: true, text: 'REST / GraphQL API integrace' },
      { ok: true, text: 'Autentizace (NextAuth)' },
      { ok: true, text: 'Komplexní animace & UI systém' },
      { ok: true, text: 'Prioritní komunikace' },
      { ok: true, text: 'Termín dle dohody' },
    ],
    cta: 'Popsat projekt',
  },
]

export default function Pricing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="pricing" className="py-28 px-6 md:px-16 bg-[var(--bg2)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="text-xs text-accent uppercase tracking-[0.15em] mb-4">Ceník</div>
          <h2 className="font-syne font-extrabold text-[clamp(2rem,4vw,3rem)] leading-[1.1] mb-4">
            Transparentní ceny.<br />Žádná překvapení.
          </h2>
          <p className="text-[var(--muted)] font-light max-w-md mx-auto leading-relaxed">
            Vyberte balíček, který sedí vašemu projektu. Potřebujete něco jiného? Napište mi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((p, i) => (
            <motion.div
              key={p.tier}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-2xl p-9 border ${
                p.featured
                  ? 'border-accent/40 shadow-[0_0_0_1px_rgba(200,240,74,0.12),0_30px_80px_rgba(200,240,74,0.09)] animate-[borderPulse_3s_ease-in-out_infinite]'
                  : 'border-white/[0.08]'
              } bg-[var(--glass)] backdrop-blur-xl`}
            >
              {p.badge && (
                <span className="absolute top-5 right-5 bg-accent text-bg text-[0.68rem] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {p.badge}
                </span>
              )}
              <div className="text-xs text-accent uppercase tracking-[0.12em] mb-3">{p.tier}</div>
              <div className="font-syne font-extrabold text-[2.7rem] leading-none mb-1">
                {p.price} <span className="text-base font-normal text-[var(--muted)]">Kč</span>
              </div>
              <div className="text-sm text-[var(--muted)] mb-6">{p.note}</div>
              <hr className="border-white/[0.08] mb-6" />
              <div className="flex flex-col gap-3 mb-8">
                {p.features.map(f => (
                  <div key={f.text} className="flex gap-3 items-baseline text-sm text-[var(--muted)] font-light">
                    <span className={f.ok ? 'text-accent font-bold flex-shrink-0' : 'text-white/20 flex-shrink-0'}>
                      {f.ok ? '✓' : '✗'}
                    </span>
                    <span className={!f.ok ? 'opacity-35' : ''}>{f.text}</span>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className={`block text-center py-3.5 rounded-full font-bold text-sm transition-all duration-200 ${
                  p.featured
                    ? 'bg-accent text-bg hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(200,240,74,0.35)]'
                    : 'bg-[var(--glass)] border border-white/[0.08] text-white hover:border-white/20 hover:-translate-y-0.5'
                }`}
              >
                {p.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
