import { AnimatePresence, motion } from "framer-motion"
import { useMemo, useState } from "react"
import {
  projects,
  type ProjectFilter,
} from "../data/content"
import { useHoverSound } from "../hooks/useHoverSound"
import { GlassCard } from "./ui/GlassCard"
import { SectionHeading } from "./ui/SectionHeading"

const filters: { id: ProjectFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "design", label: "Design" },
  { id: "experiment", label: "Lab" },
]

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("all")
  const tick = useHoverSound(true)

  const filtered = useMemo(() => {
    if (filter === "all") return projects
    return projects.filter((p) => p.category === filter)
  }, [filter])

  return (
    <section id="projects" className="relative scroll-mt-28 py-24">
      <SectionHeading
        eyebrow="// 03"
        title="Selected work"
        subtitle="Shipped interfaces, systems, and experiments — filter by focus."
      />

      <div className="mb-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <motion.button
            key={f.id}
            type="button"
            onClick={() => {
              tick()
              setFilter(f.id)
            }}
            onMouseEnter={tick}
            className={[
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              filter === f.id
                ? "border-cyan-400/60 bg-cyan-500/15 text-cyan-200"
                : "border-white/10 bg-white/5 text-[var(--text-muted)] hover:border-white/20",
            ].join(" ")}
            whileTap={{ scale: 0.97 }}
          >
            {f.label}
          </motion.button>
        ))}
      </div>

      <motion.div layout className="grid gap-8 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
            >
              <GlassCard
                glow="cyan"
                className="group overflow-hidden p-0"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 font-mono text-xs text-cyan-300/90 backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="space-y-3 p-6">
                  <h3 className="text-xl font-bold text-zinc-50">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-xs text-violet-200/90"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      onMouseEnter={tick}
                      className="text-sm font-medium text-cyan-400 hover:underline"
                    >
                      Live →
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      onMouseEnter={tick}
                      className="text-sm font-medium text-zinc-400 hover:text-zinc-200"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
