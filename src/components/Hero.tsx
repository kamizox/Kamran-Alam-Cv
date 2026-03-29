import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { heroTypingLines, profile } from "../data/content"
import { useHoverSound } from "../hooks/useHoverSound"
import { downloadResumeTxt } from "../utils/downloadResume"
import { NeonButton } from "./ui/NeonButton"

function useTerminalTyping(lines: string[], speed = 32) {
  const [display, setDisplay] = useState<string[]>([])
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    if (lineIdx >= lines.length) return
    const line = lines[lineIdx]
    if (charIdx < line.length) {
      const t = window.setTimeout(() => {
        setDisplay((prev) => {
          const next = [...prev]
          next[lineIdx] = line.slice(0, charIdx + 1)
          return next
        })
        setCharIdx((c) => c + 1)
      }, speed)
      return () => window.clearTimeout(t)
    }
    const pause = window.setTimeout(() => {
      setLineIdx((i) => i + 1)
      setCharIdx(0)
    }, 420)
    return () => window.clearTimeout(pause)
  }, [lines, lineIdx, charIdx, speed])

  return display
}

export function Hero() {
  const navigate = useNavigate()
  const typed = useTerminalTyping(heroTypingLines, 28)
  const tick = useHoverSound(true)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col justify-center pt-24 pb-16 md:pt-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-[1] mx-auto w-full max-w-5xl px-4"
      >
        <p className="font-mono text-sm tracking-[0.35em] text-cyan-400/80 uppercase">
          dev workspace // v2
        </p>
        <h1 className="mt-6 text-5xl font-extrabold tracking-tight md:text-7xl md:leading-[1.05]">
          <span className="bg-gradient-to-br from-white via-cyan-100 to-violet-300 bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>
        <p className="mt-4 max-w-xl text-xl font-medium text-violet-300/90 md:text-2xl">
          {profile.role}
        </p>

        <div className="mt-10 max-w-2xl rounded-2xl border border-cyan-500/20 bg-black/50 p-5 font-mono text-sm leading-relaxed text-emerald-300/90 shadow-[inset_0_0_40px_rgba(34,211,238,0.06)] backdrop-blur-md md:text-base">
          <div className="mb-3 flex items-center gap-2 text-xs text-zinc-500">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            live terminal output
          </div>
          {typed.map((line, i) => (
            <div key={i} className="min-h-[1.5em]">
              <span className="text-cyan-500/80">$</span> {line}
              {i === typed.length - 1 && (
                <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-emerald-400/80 align-middle" />
              )}
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-lg text-[var(--text-muted)]">
          {profile.tagline}
        </p>

        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <NeonButton onHoverSound={tick} onClick={() => scrollTo("projects")}>
            View Projects
          </NeonButton>
          <NeonButton
            variant="outline"
            onHoverSound={tick}
            onClick={() => downloadResumeTxt()}
          >
            Download CV
          </NeonButton>
          <NeonButton
            variant="ghost"
            onHoverSound={tick}
            onClick={() => navigate("/cv")}
          >
            Résumé page
          </NeonButton>
        </motion.div>
      </motion.div>
    </section>
  )
}
