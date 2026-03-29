import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

type Props = {
  onDone: () => void
  minMs?: number
}

export function LoadingScreen({ onDone, minMs = 2200 }: Props) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(false), minMs)
    return () => window.clearTimeout(t)
  }, [minMs])

  return (
    <AnimatePresence onExitComplete={onDone}>
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[var(--bg-base)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(34, 211, 238, 0.08) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(34, 211, 238, 0.08) 1px, transparent 1px)
                `,
                backgroundSize: "48px 48px",
              }}
            />
          </div>

          <motion.div
            className="relative font-mono text-sm text-cyan-400/90 md:text-base"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-violet-400">$</span> boot workspace…
          </motion.div>

          <motion.div
            className="relative mt-8 h-1 w-48 overflow-hidden rounded-full bg-zinc-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-emerald-400"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: (minMs - 400) / 1000, ease: "easeInOut" }}
            />
          </motion.div>

          <motion.p
            className="relative mt-6 max-w-xs text-center text-xs text-[var(--text-muted)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Compiling shaders, tuning glow, aligning pixels…
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
