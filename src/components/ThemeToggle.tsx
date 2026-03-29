import { motion } from "framer-motion"
import { useTheme } from "../context/ThemeContext"
import { useHoverSound } from "../hooks/useHoverSound"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const tick = useHoverSound(true)

  return (
    <motion.button
      type="button"
      onClick={() => {
        tick()
        toggleTheme()
      }}
      onMouseEnter={tick}
      className="no-print relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg backdrop-blur-md transition-colors hover:border-cyan-400/40 hover:bg-cyan-500/10"
      whileTap={{ scale: 0.94 }}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    >
      <span className="sr-only">Toggle theme</span>
      {theme === "dark" ? "◐" : "◑"}
    </motion.button>
  )
}
