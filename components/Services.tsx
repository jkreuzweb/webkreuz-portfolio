'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    icon: '⚡',
    name: 'Next.js weby & landing pages',
    desc: 'Rychlé, moderní weby postavené na Next.js App Routeru. Statické i dynamické stránky s perfektním Lighthouse skóre.',
    features: ['Next.js 14 App Router', 'Server & Client Components', 'Tailwind CSS – pixel-perfect design', 'Optimalizace obrázků & fontů', 'Nasazení na Vercel'],
  },
  {
    icon: '🎨',
    name: 'React UI komponenty & animace',
    desc: 'Interaktivní rozhraní s plynulými animacemi. Komponenty postavené v Reactu s Tailwindem, animované přes Framer Motion.',
    features: ['React + TypeScript', 'Framer Motion animace', 'Responzivní Tailwind layout', 'Dark mode podpora', 'Přístupnost (a11y)'],
  },
  {
    icon: '🔗',
    name: 'Napojení na CMS & API',
    desc: 'Váš Next.js web napojený na headless CMS (Sanity, Contentful) nebo vlastní API – správa obsahu bez dotyku kódu.',
    features: ['Sanity / Contentful CMS', 'REST & GraphQL API integrace', 'Dynamické stránky z dat', 'ISR / SSG / SSR dle potřeby', 'Formuláře & notifikace'],
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="py-28 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
          ref={ref}
        >
          <div className="text-xs text-accent uppercase tracking-[0.15em] mb-4">Co dělám</div>
          <h2 className="font-syne font-extrabold text-[clamp(2rem,4vw,3rem)] leading-[1.1] mb-4">
            Komplexní péče<br />o váš web.
          </h2>
          <p className="text-[var(--muted)] font-light max-w-md mx-auto leading-relaxed">
            Od tvorby přes animace až po napojení na CMS – vše pod jednou střechou.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-2xl p-8 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-[0_20px_60px_rgba(200,240,74,0.07)] transition-all duration-300 border border-white/[0.08]"
            >
              <div className="text-3xl mb-5">{s.icon}</div>
              <h3 className="font-syne font-bold text-lg mb-3">{s.name}</h3>
              <p className="text-[var(--muted)] text-sm leading-relaxed font-light mb-5">{s.desc}</p>
              <div className="flex flex-col gap-2">
                {s.features.map(f => (
                  <div key={f} className="flex gap-2 items-baseline text-sm text-[var(--muted)]">
                    <span className="text-accent flex-shrink-0">→</span>
                    {f}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
