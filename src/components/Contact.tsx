import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { profile } from "../data/content"
import { useHoverSound } from "../hooks/useHoverSound"
import { GlassCard } from "./ui/GlassCard"
import { NeonButton } from "./ui/NeonButton"
import { SectionHeading } from "./ui/SectionHeading"

export function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [sent, setSent] = useState(false)
  const tick = useHoverSound(true)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    window.setTimeout(() => setSent(false), 4200)
  }

  const social = [
    { label: "GitHub", href: profile.social.github },
    { label: "LinkedIn", href: profile.social.linkedin },
    { label: "Twitter / X", href: profile.social.twitter },
  ]

  return (
    <section id="contact" className="relative scroll-mt-28 py-24 pb-32">
      <SectionHeading
        eyebrow="// 05"
        title="Contact"
        subtitle="Say hello — collaborations, contracts, or weird ideas welcome."
      />

      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <GlassCard glow="violet" className="p-8">
          <p className="font-mono text-sm text-violet-300/90">direct channels</p>
          <p className="mt-4 text-lg text-[var(--text-muted)]">
            Prefer email?{" "}
            <a
              href={`mailto:${profile.email}`}
              className="text-cyan-400 underline-offset-4 hover:underline"
            >
              {profile.email}
            </a>
          </p>
          <ul className="mt-8 space-y-3">
            {social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={tick}
                  className="group flex items-center gap-2 font-mono text-sm text-zinc-300 hover:text-cyan-300"
                >
                  <span className="text-cyan-500/80">→</span>
                  {s.label}
                  <span className="opacity-0 transition group-hover:opacity-100">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </GlassCard>

        <GlassCard glow="cyan" className="p-8">
          <form onSubmit={submit} className="space-y-5">
            <div>
              <label htmlFor="name" className="font-mono text-xs text-zinc-500">
                Name
              </label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 font-sans text-zinc-100 outline-none ring-cyan-500/30 transition focus:border-cyan-500/50 focus:ring-2"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="font-mono text-xs text-zinc-500">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-zinc-100 outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/30"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="font-mono text-xs text-zinc-500">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-zinc-100 outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/30"
                required
              />
            </div>
            <NeonButton type="submit" className="w-full sm:w-auto" onHoverSound={tick}>
              Send message
            </NeonButton>
          </form>

          <AnimatePresence>
            {sent && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 font-mono text-sm text-emerald-200"
              >
                Message queued locally — wire this form to your API or Formspree.
              </motion.div>
            )}
          </AnimatePresence>
        </GlassCard>
      </div>
    </section>
  )
}
