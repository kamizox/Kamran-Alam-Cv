import { motion, type HTMLMotionProps } from "framer-motion"
import type { ReactNode } from "react"

type Variant = "primary" | "ghost" | "outline"

type Props = HTMLMotionProps<"button"> & {
  children: ReactNode
  variant?: Variant
  className?: string
  onHoverSound?: () => void
}

export function NeonButton({
  children,
  variant = "primary",
  className = "",
  onHoverSound,
  ...rest
}: Props) {
  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-medium tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"

  const styles: Record<Variant, string> = {
    primary:
      "bg-gradient-to-r from-cyan-500/90 to-violet-600/90 text-zinc-950 shadow-[0_0_24px_rgba(34,211,238,0.35)] hover:from-cyan-400 hover:to-violet-500",
    ghost:
      "bg-white/5 text-[var(--text-primary)] hover:bg-white/10 border border-white/10",
    outline:
      "border border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-300",
  }

  return (
    <motion.button
      type="button"
      className={`${base} ${styles[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={onHoverSound}
      {...rest}
    >
      {children}
    </motion.button>
  )
}
