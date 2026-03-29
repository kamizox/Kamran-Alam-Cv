import { motion } from "framer-motion"
import { profile, skillCategories } from "../data/content"
import { GlassCard } from "./ui/GlassCard"
import { SectionHeading } from "./ui/SectionHeading"

const chips = skillCategories
  .flatMap((c) => c.skills.map((s) => s.name))
  .slice(0, 10)

export function About() {
  return (
    <section id="about" className="relative scroll-mt-28 py-24">
      <SectionHeading
        eyebrow="// 01"
        title="About"
        subtitle="The human behind the commits — story, stack, and obsessions."
      />
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <GlassCard
          glow="cyan"
          className="p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs text-cyan-400/80">README.md</p>
          <h3 className="mt-3 text-2xl font-bold text-zinc-100">
            Building at the edge of design & engineering
          </h3>
          <div className="mt-6 space-y-4 text-[var(--text-muted)] leading-relaxed">
            {profile.intro.split("\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </GlassCard>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="flex flex-col gap-6"
        >
          <GlassCard glow="mint" className="p-6">
            <p className="font-mono text-xs text-emerald-400/90">signal.strength</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {chips.map((chip, i) => (
                <motion.span
                  key={chip}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-200/90"
                >
                  {chip}
                </motion.span>
              ))}
            </div>
          </GlassCard>
          <GlassCard glow="violet" className="p-6">
            <p className="font-mono text-xs text-violet-300/90">location.json</p>
            <p className="mt-3 text-lg font-semibold text-zinc-100">
              {profile.location}
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-2 inline-block font-mono text-sm text-cyan-400/90 underline-offset-4 hover:underline"
            >
              {profile.email}
            </a>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
