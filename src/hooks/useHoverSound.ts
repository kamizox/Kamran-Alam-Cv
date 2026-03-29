import { useCallback, useRef } from "react"

/** Subtle UI tick using Web Audio API — no external assets. */
export function useHoverSound(enabled = true) {
  const ctxRef = useRef<AudioContext | null>(null)

  const playTick = useCallback(() => {
    if (!enabled) return
    try {
      const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      if (!ctxRef.current) ctxRef.current = new Ctx()
      const ctx = ctxRef.current
      if (ctx.state === "suspended") void ctx.resume()

      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = "sine"
      osc.frequency.value = 880
      gain.gain.setValueAtTime(0.04, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start(ctx.currentTime)
      osc.stop(ctx.currentTime + 0.06)
    } catch {
      /* ignore */
    }
  }, [enabled])

  return playTick
}
