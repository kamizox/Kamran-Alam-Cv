import { motion } from "framer-motion"

type Props = {
  eyebrow?: string
  title: string
  subtitle?: string
}

export function SectionHeading({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="mb-12 max-w-2xl">
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm tracking-[0.2em] text-cyan-400/90 uppercase"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="mt-2 text-4xl font-bold tracking-tight md:text-5xl bg-gradient-to-r from-zinc-100 via-cyan-100 to-violet-200 bg-clip-text text-transparent"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-lg text-[var(--text-muted)]"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
