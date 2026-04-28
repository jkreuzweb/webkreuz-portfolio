'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

function Reveal({ children, delay = 0, direction = 'up' }: { children: React.ReactNode, delay?: number, direction?: 'up' | 'left' | 'right' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const initial = direction === 'left' ? { opacity: 0, x: -40 } : direction === 'right' ? { opacity: 0, x: 40 } : { opacity: 0, y: 36 }
  return (
    <motion.div ref={ref} initial={initial} animate={inView ? { opacity: 1, x: 0, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  )
}

const skills = ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'HTML & CSS', 'Figma', 'Framer Motion']

const highlights = [
  { icon: '⚡', title: 'Nízké ceny záměrně', desc: 'Teprve stavím portfolio. Vy dostanete web za zlomek ceny agentury, já referenci a zkušenost.' },
  { icon: '🎯', title: 'Komunikace na prvním místě', desc: 'Průběžně informuji, nepropádu a na zprávy odpovídám rychle.' },
  { icon: '🔒', title: 'Bez skrytých poplatků', desc: 'Domluvíme se dopředu, cena se nemění. Jednoduše.' },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6 md:px-16 bg-[var(--bg2)]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        <Reveal direction="left">
          <div className="glass rounded-2xl p-10">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--accent2)] to-[var(--accent)] flex items-center justify-center font-syne font-extrabold text-3xl text-bg mb-6">
              JK
            </div>
            <div className="font-syne font-extrabold text-xl mb-1">Jan Křížek</div>
            <div className="text-accent text-xs uppercase tracking-widest mb-4">Next.js · React · Tailwind · HTML/CSS</div>
            <p className="text-[var(--muted)] text-sm leading-relaxed font-light">
              Začínám a chci to ukázat prací, ne slovy. Proto nabízím nízké ceny – výměnou za reference a možnost růst společně s vámi.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {skills.map(s => (
                <span key={s} className="bg-accent/[0.07] border border-accent/[0.18] text-accent px-3 py-1 rounded-full text-xs tracking-wide hover:bg-accent/[0.18] hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <div className="text-xs text-accent uppercase tracking-[0.15em] mb-4">O mně</div>
          <h2 className="font-syne font-extrabold text-[clamp(2rem,4vw,3rem)] leading-[1.1] mb-6">
            Preciznost<br />je základ.
          </h2>
          <p className="text-[var(--muted)] leading-relaxed font-light mb-6">
            Nejsem agentura ani ostřílený profík s desítkami projektů. Jsem Jan – začínající webař, který to myslí vážně. Učím se naplno, pracuji pečlivě a ceny mám nízké právě proto, aby spolupráce dávala smysl i vám.
          </p>
          <div className="flex flex-col gap-3">
            {highlights.map(h => (
              <div key={h.title} className="flex gap-4 items-start p-4 glass rounded-xl">
                <span className="text-xl mt-0.5">{h.icon}</span>
                <div className="text-sm text-[var(--muted)] leading-relaxed">
                  <strong className="text-white font-medium">{h.title}</strong> – {h.desc}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  )
}
