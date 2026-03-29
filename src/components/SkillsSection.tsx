import { motion } from "framer-motion"
import { skillCategories } from "../data/content"
import { GlassCard } from "./ui/GlassCard"
import { SectionHeading } from "./ui/SectionHeading"

export function SkillsSection() {
  return (
    <section id="skills" className="relative scroll-mt-28 py-24">
      <SectionHeading
        eyebrow="// 02"
        title="Skills matrix"
        subtitle="Categorized proficiency — animated as you scroll into view."
      />
      <div className="grid gap-8 md:grid-cols-3">
        {skillCategories.map((cat, ci) => (
          <GlassCard
            key={cat.id}
            glow={ci === 0 ? "cyan" : ci === 1 ? "violet" : "mint"}
            className="p-6 md:p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: ci * 0.08 }}
          >
            <p className="font-mono text-xs tracking-widest text-zinc-500 uppercase">
              {cat.label}
            </p>
            <div className="mt-6 space-y-5">
              {cat.skills.map((s, si) => (
                <div key={s.name}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="font-medium text-zinc-200">{s.name}</span>
                    <span className="font-mono text-xs text-zinc-500">{s.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-zinc-800/80">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-emerald-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.1,
                        delay: 0.15 + si * 0.06,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
