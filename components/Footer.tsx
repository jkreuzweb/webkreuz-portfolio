export default function Footer() {
  return (
    <footer className="bg-[var(--bg2)] border-t border-white/[0.08] py-8 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="font-syne font-extrabold text-lg">
        Web<span className="text-accent">kreuz</span>
      </div>
      <div className="text-[var(--muted)] text-sm">
        © 2025 Jan Křížek · Všechna práva vyhrazena
      </div>
    </footer>
  )
}
