import { motion } from "framer-motion"
import { education, experience } from "../data/content"
import { SectionHeading } from "./ui/SectionHeading"

export function Timeline() {
  return (
    <section id="timeline" className="relative scroll-mt-28 py-24">
      <SectionHeading
        eyebrow="// 04"
        title="Experience"
        subtitle="Roles, impact, and the path that shaped how I build."
      />

      <div className="relative mx-auto max-w-3xl pl-8 md:pl-12">
        <div className="absolute left-[7px] top-2 bottom-8 w-px bg-gradient-to-b from-cyan-500/60 via-violet-500/40 to-emerald-500/30 md:left-[11px]" />

        <ul className="space-y-10">
          {experience.map((item, i) => (
            <motion.li
              key={item.title + item.period}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="relative"
            >
              <span className="absolute -left-8 top-2 flex h-3 w-3 md:-left-10">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-35" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 ring-4 ring-[var(--bg-base)]" />
              </span>
              <div className="rounded-2xl border border-white/10 bg-[var(--bg-glass)] p-6 backdrop-blur-xl">
                <p className="font-mono text-xs text-cyan-400/90">{item.period}</p>
                <h3 className="mt-2 text-lg font-bold text-zinc-50">{item.title}</h3>
                <p className="text-sm font-medium text-violet-300/90">{item.company}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  {item.detail}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>

        <div className="mt-16">
          <h3 className="mb-6 font-mono text-sm tracking-[0.2em] text-zinc-500 uppercase">
            Education
          </h3>
          {education.map((e) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md"
            >
              <p className="font-mono text-xs text-emerald-400/90">{e.period}</p>
              <p className="mt-2 text-lg font-semibold text-zinc-100">{e.title}</p>
              <p className="text-sm text-violet-300/80">{e.place}</p>
              <p className="mt-2 text-sm text-[var(--text-muted)]">{e.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
