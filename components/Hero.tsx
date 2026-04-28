'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const words = ['konvertují.', 'prodávají.', 'zaujmou.', 'rostou.']

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIndex]
    let timeout: NodeJS.Timeout

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 100)
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 60)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setWordIndex((wordIndex + 1) % words.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, wordIndex])

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' as const },
})

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 md:px-16 pt-32 pb-16">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute top-1/2 left-1/2 opacity-[0.055] w-[900px] h-[900px] animate-[spin_120s_linear_infinite]"
          style={{ transform: 'translate(-50%, -50%)' }}
          viewBox="0 0 900 900" fill="none"
        >
          <line x1="450" y1="0" x2="450" y2="900" stroke="white" strokeWidth="1"/>
          <line x1="0" y1="450" x2="900" y2="450" stroke="white" strokeWidth="1"/>
          <line x1="0" y1="0" x2="900" y2="900" stroke="white" strokeWidth="0.6"/>
          <line x1="900" y1="0" x2="0" y2="900" stroke="white" strokeWidth="0.6"/>
          <circle cx="450" cy="450" r="180" stroke="white" strokeWidth="0.6"/>
          <circle cx="450" cy="450" r="320" stroke="white" strokeWidth="0.5"/>
          <circle cx="450" cy="450" r="430" stroke="white" strokeWidth="0.4"/>
        </svg>
        <div className="absolute top-[15%] right-[5%] w-[500px] h-[500px] bg-[radial-gradient(ellipse,rgba(124,106,245,0.22)_0%,transparent_70%)] blur-[70px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-[radial-gradient(ellipse,rgba(200,240,74,0.10)_0%,transparent_70%)] blur-[70px]" />
      </div>

      <div className="relative z-10 max-w-3xl text-center">
        <motion.div {...fadeUp(0.05)}>
          <span className="inline-block glass rounded-full px-5 py-1.5 text-xs text-accent uppercase tracking-[0.12em] mb-8">
            ✦ Web development · Design
          </span>
        </motion.div>

        <motion.h1 {...fadeUp(0.17)} className="font-syne font-extrabold text-[clamp(3rem,8vw,5.5rem)] leading-[1.05] mb-6">
          Weby, které<br />
          <span className="text-accent">{displayed}<span className="animate-pulse">|</span></span>
        </motion.h1>

        <motion.p {...fadeUp(0.28)} className="text-[var(--muted)] text-lg max-w-xl mx-auto mb-10 leading-relaxed font-light">
          Jan Křížek – tvořím moderní weby v Next.js, Reactu a Tailwindu. Čistý kód, rychlé načítání a design, který zaujme.
        </motion.p>

        <motion.div {...fadeUp(0.38)} className="flex gap-4 justify-center flex-wrap">
          <a href="#pricing" className="bg-accent text-bg px-9 py-3.5 rounded-full font-bold text-base hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(200,240,74,0.4)] transition-all duration-200">
            Zobrazit ceník
          </a>
          <a href="#contact" className="glass px-9 py-3.5 rounded-full text-base hover:border-white/25 hover:bg-white/[0.08] transition-all duration-200">
            Popsat projekt →
          </a>
        </motion.div>

        <motion.div {...fadeUp(0.48)} className="flex gap-12 justify-center mt-16 flex-wrap">
          {[
            { num: '100%', label: 'Péče o každý projekt' },
            { num: '4 týdny', label: 'Průměrné dodání' },
            { num: 'Akce', label: 'Nízké ceny na start' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div className="font-syne font-extrabold text-[2.2rem] text-accent">{s.num}</div>
              <div className="text-[0.78rem] text-[var(--muted)] uppercase tracking-widest mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
