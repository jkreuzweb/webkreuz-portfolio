'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = (form: HTMLFormElement) => {
    const e: Record<string, string> = {}
    if (!form.fname.value.trim()) e.fname = 'Vyplňte jméno'
    if (!form.femail.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.femail.value)) e.femail = 'Zadejte platný e-mail'
    if (!form.fmessage.value.trim()) e.fmessage = 'Napište zprávu'
    return e
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const errs = validate(form)
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setSending(true)
    setError('')
    try {
      const data = new FormData(form)
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
      const json = await res.json()
      if (json.success) { setSent(true) } else { throw new Error() }
    } catch {
      setError('Nepodařilo se odeslat. Zkuste to znovu nebo napište na jankrizek42@gmail.com')
    } finally { setSending(false) }
  }

  return (
    <section id="contact" className="py-28 px-6 md:px-16" ref={ref}>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-xs text-accent uppercase tracking-[0.15em] mb-4">Kontakt</div>
          <h2 className="font-syne font-extrabold text-[clamp(2rem,4vw,3rem)] leading-[1.1] mb-6">
            Pojďme spustit<br />váš projekt.
          </h2>
          <p className="text-[var(--muted)] font-light leading-relaxed mb-10">
            Napište mi o vašem projektu. Odpovím do 24 hodin a domluvíme bezplatnou konzultaci.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex gap-4 items-start">
              <div className="w-11 h-11 glass rounded-xl flex items-center justify-center text-lg flex-shrink-0">✉️</div>
              <div>
                <div className="text-xs text-[var(--muted)] uppercase tracking-widest mb-1">E-mail</div>
                <a href="mailto:jankrizek42@gmail.com" className="text-sm hover:text-accent transition-colors">jankrizek42@gmail.com</a>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-11 h-11 glass rounded-xl flex items-center justify-center text-lg flex-shrink-0">📍</div>
              <div>
                <div className="text-xs text-[var(--muted)] uppercase tracking-widest mb-1">Lokalita</div>
                <div className="text-sm">Česká republika · práce na dálku</div>
              </div>
            </div>
            <div>
              <div className="text-xs text-[var(--muted)] uppercase tracking-widest mb-3">Sociální sítě</div>
              <div className="flex gap-3">
                {[
                  { label: 'in', href: 'https://www.linkedin.com/in/jan-křížek-290725291' },
                  { label: 'IG', href: 'https://www.instagram.com/jankrizek27/' },
                ].map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 glass rounded-xl flex items-center justify-center text-xs font-bold text-[var(--muted)] hover:border-accent/40 hover:text-accent hover:-translate-y-1 transition-all duration-200 border border-white/[0.08]"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {sent ? (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">✅</div>
              <div className="font-syne font-extrabold text-2xl mb-3">Zpráva odeslána!</div>
              <div className="text-[var(--muted)] leading-relaxed">Ozvu se do 24 hodin.<br />Díky za zájem!</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
              <input type="hidden" name="access_key" value="2f2bea87-9be2-4b41-9df2-d95d676afe92" />
              <input type="hidden" name="subject" value="Nová poptávka z webu Webkreuz" />
              <input type="hidden" name="from_name" value="Webkreuz Portfolio" />

              {[
                { id: 'fname', name: 'name', label: 'Vaše jméno', type: 'text', placeholder: 'Jan Novák' },
                { id: 'femail', name: 'email', label: 'E-mail', type: 'email', placeholder: 'jan@firma.cz' },
              ].map(f => (
                <div key={f.id} className="flex flex-col gap-1.5">
                  <label htmlFor={f.id} className="text-xs text-[var(--muted)] uppercase tracking-widest">{f.label}</label>
                  <input
                    id={f.id}
                    name={f.name}
                    type={f.type}
                    placeholder={f.placeholder}
                    className="glass rounded-xl px-4 py-3 text-sm outline-none focus:border-accent/45 transition-colors placeholder:text-[var(--muted)] border border-white/[0.08]"
                  />
                  {errors[f.id] && <span className="text-red-400 text-xs">{errors[f.id]}</span>}
                </div>
              ))}

              <div className="flex flex-col gap-1.5">
                <label htmlFor="fproject" className="text-xs text-[var(--muted)] uppercase tracking-widest">Typ projektu</label>
                <select id="fproject" name="project" className="glass rounded-xl px-4 py-3 text-sm outline-none focus:border-accent/45 transition-colors border border-white/[0.08] bg-transparent">
                  <option value="" disabled>Vyberte typ projektu...</option>
                  {['Firemní / prezentační web (Next.js)', 'Landing page', 'Osobní portfolio', 'Web napojený na CMS', 'React komponenty / UI', 'Redesign stávajícího webu', 'Jiné'].map(o => (
                    <option key={o} value={o} className="bg-[#111118]">{o}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="fmessage" className="text-xs text-[var(--muted)] uppercase tracking-widest">Zpráva</label>
                <textarea
                  id="fmessage"
                  name="message"
                  placeholder="Popište váš projekt, ideální termín spuštění a případný rozpočet..."
                  rows={4}
                  className="glass rounded-xl px-4 py-3 text-sm outline-none focus:border-accent/45 transition-colors placeholder:text-[var(--muted)] resize-y border border-white/[0.08]"
                />
                {errors.fmessage && <span className="text-red-400 text-xs">{errors.fmessage}</span>}
              </div>

              {error && <p className="text-red-400 text-xs text-center">{error}</p>}

              <button
                type="submit"
                disabled={sending}
                className="bg-accent text-bg py-3.5 rounded-full font-bold text-sm hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(200,240,74,0.35)] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none mt-1"
              >
                {sending ? 'Odesílám...' : 'Odeslat zprávu →'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
