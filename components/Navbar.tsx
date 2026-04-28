'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#about', label: 'O mně' },
    { href: '#services', label: 'Služby' },
    { href: '#pricing', label: 'Ceník' },
    { href: '#contact', label: 'Kontakt' },
  ]

  const closeMenu = () => setOpen(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-16 py-5 bg-[rgba(10,10,15,0.7)] backdrop-blur-xl border-b border-white/[0.08]">
        <a href="#home" className="font-syne font-extrabold text-xl tracking-tight">
          Web<span className="text-accent">kreuz</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10 list-none">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-white/45 text-sm font-light uppercase tracking-widest hover:text-white transition-colors duration-200 relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block bg-accent text-bg px-5 py-2 rounded-full text-sm font-bold tracking-wide hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(200,240,74,0.35)] transition-all duration-200"
        >
          Nezávazná konzultace
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1 z-50"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* Mobile nav overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[rgba(10,10,15,0.97)] backdrop-blur-xl flex flex-col items-center justify-center gap-10"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="font-syne font-extrabold text-4xl hover:text-accent transition-colors duration-200"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={closeMenu}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36 }}
              className="bg-accent text-bg px-8 py-3 rounded-full font-bold text-lg mt-2"
            >
              Nezávazná konzultace
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
