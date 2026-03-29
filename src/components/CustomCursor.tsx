import { motion, useMotionValue, useSpring } from "framer-motion"
import { startTransition, useEffect, useState } from "react"

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [visible, setVisible] = useState(false)
  const [down, setDown] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 500, damping: 35, mass: 0.2 })
  const sy = useSpring(y, { stiffness: 500, damping: 35, mass: 0.2 })

  useEffect(() => {
    const coarse = window.matchMedia("(hover: none), (pointer: coarse)").matches
    if (coarse) return
    startTransition(() => setEnabled(true))

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
    }
    const leave = () => setVisible(false)

    window.addEventListener("mousemove", move)
    window.addEventListener("mouseleave", leave)
    window.addEventListener("mousedown", () => setDown(true))
    window.addEventListener("mouseup", () => setDown(false))

    return () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mouseleave", leave)
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      animate={{ scale: down ? 0.85 : 1, opacity: visible ? 1 : 0 }}
    >
      <div className="h-4 w-4 rounded-full border border-white/90 bg-white/30 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
    </motion.div>
  )
}
