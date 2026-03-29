import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import { useEffect, useState } from "react"
import type { ISourceOptions } from "@tsparticles/engine"

const options: ISourceOptions = {
  fullScreen: { enable: false },
  background: { color: { value: "transparent" } },
  fpsLimit: 60,
  particles: {
    number: { value: 48, density: { enable: true, width: 1200, height: 800 } },
    color: { value: ["#22d3ee", "#a78bfa", "#34d399"] },
    opacity: { value: { min: 0.15, max: 0.45 } },
    size: { value: { min: 1, max: 3 } },
    move: {
      enable: true,
      speed: 0.45,
      direction: "none",
      random: true,
      straight: false,
      outModes: { default: "out" },
    },
    links: {
      enable: true,
      distance: 120,
      color: "#22d3ee",
      opacity: 0.12,
      width: 0.6,
    },
  },
  detectRetina: true,
}

export function ParticleBackground() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    void initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setReady(true))
  }, [])

  if (!ready) return null

  return (
    <Particles
      id="tsparticles"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-70"
      options={options}
    />
  )
}
