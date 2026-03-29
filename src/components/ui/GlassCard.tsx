import { motion, type HTMLMotionProps } from "framer-motion"
import type { ReactNode } from "react"

type Props = HTMLMotionProps<"div"> & {
  children: ReactNode
  className?: string
  glow?: "cyan" | "violet" | "mint" | "none"
}

const glowMap = {
  cyan: "shadow-[0_0_40px_-8px_rgba(34,211,238,0.45)] border-cyan-400/30",
  violet: "shadow-[0_0_40px_-8px_rgba(167,139,250,0.45)] border-violet-400/30",
  mint: "shadow-[0_0_40px_-8px_rgba(52,211,153,0.4)] border-emerald-400/30",
  none: "border-white/10",
}

export function GlassCard({
  children,
  className = "",
  glow = "cyan",
  ...rest
}: Props) {
  return (
    <motion.div
      className={[
        "rounded-2xl border bg-[var(--bg-glass)] backdrop-blur-xl",
        glow !== "none" ? glowMap[glow] : glowMap.none,
        className,
      ].join(" ")}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
