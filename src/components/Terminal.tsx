import { AnimatePresence, motion } from "framer-motion"
import { useCallback, useEffect, useRef, useState } from "react"
import { profile, projects } from "../data/content"
import { GlassCard } from "./ui/GlassCard"

type Line = { type: "in" | "out"; text: string }

const helpText = `Available commands:
  help      — show this message
  about     — short bio
  projects  — list featured work
  skills    — tech keywords
  contact   — reach out
  clear     — reset terminal
  theme     — hint about the toggle (top right)`

export function Terminal() {
  const [lines, setLines] = useState<Line[]>([
    { type: "out", text: "Welcome to alex-cli v1.0.0 — type `help` to begin." },
  ])
  const [input, setInput] = useState("")
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [lines])

  const pushOut = useCallback((text: string) => {
    setLines((prev) => [...prev, { type: "out", text }])
  }, [])

  const runCommand = useCallback(
    (raw: string) => {
      const cmd = raw.trim().toLowerCase()
      if (!cmd) return

      setLines((prev) => [...prev, { type: "in", text: raw }])

      switch (cmd) {
        case "help":
          pushOut(helpText)
          break
        case "about":
          pushOut(profile.intro.replace(/\n+/g, " "))
          break
        case "projects":
          pushOut(
            projects
              .map((p) => `• ${p.title} — ${p.stack.join(", ")}`)
              .join("\n")
          )
          break
        case "skills":
          pushOut(
            "React · TypeScript · Node · Tailwind · Framer Motion · Figma · PostgreSQL · Git"
          )
          break
        case "contact":
          pushOut(`Email: ${profile.email}\nGitHub: ${profile.social.github}`)
          break
        case "clear":
          setLines([])
          break
        case "theme":
          pushOut("Use the ◐ / ◑ control in the header to switch dark ↔ light.")
          break
        default:
          pushOut(
            `command not found: ${cmd}. Type 'help' for a list of commands.`
          )
      }
    },
    [pushOut]
  )

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    runCommand(input)
    setInput("")
  }

  return (
    <section id="terminal" className="relative scroll-mt-24">
      <GlassCard
        glow="violet"
        className="overflow-hidden p-0 font-mono text-sm shadow-2xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 border-b border-white/10 bg-black/40 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-500/90" />
          <span className="h-3 w-3 rounded-full bg-amber-400/90" />
          <span className="h-3 w-3 rounded-full bg-emerald-500/90" />
          <span className="ml-3 text-xs text-zinc-500">
            alex@workspace — zsh — 80×24
          </span>
        </div>
        <div className="max-h-[min(420px,55vh)] space-y-2 overflow-y-auto bg-zinc-950/80 p-4 text-zinc-200">
          <AnimatePresence initial={false}>
            {lines.map((line, i) => (
              <motion.div
                key={`${i}-${line.text.slice(0, 24)}`}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                className={
                  line.type === "in"
                    ? "text-emerald-400/95"
                    : "whitespace-pre-wrap text-zinc-300"
                }
              >
                {line.type === "in" && (
                  <span className="text-cyan-500/80">➜ </span>
                )}
                {line.text}
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={bottomRef} />
        </div>
        <form
          onSubmit={onSubmit}
          className="flex items-center gap-2 border-t border-white/10 bg-black/50 px-4 py-3"
        >
          <span className="shrink-0 text-cyan-400">$</span>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-w-0 flex-1 bg-transparent text-zinc-100 outline-none placeholder:text-zinc-600"
            placeholder="try: help"
            autoComplete="off"
            spellCheck={false}
            aria-label="Terminal input"
          />
        </form>
      </GlassCard>
    </section>
  )
}
