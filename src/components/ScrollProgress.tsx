import { motion } from "framer-motion"
import { useScrollProgress } from "../hooks/useScrollProgress"

export function ScrollProgress() {
  const progress = useScrollProgress()
  return (
    <div className="fixed left-0 right-0 top-0 z-[9000] h-1 bg-zinc-900/50">
      <motion.div
        className="h-full bg-gradient-to-r from-cyan-400 via-violet-500 to-emerald-400"
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.05 }}
      />
    </div>
  )
}
