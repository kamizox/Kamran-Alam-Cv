import { motion } from "framer-motion"
import { Helmet } from "react-helmet-async"
import { useNavigate } from "react-router-dom"
import {
  cvSummary,
  education,
  experience,
  profile,
  projects,
  skillCategories,
} from "../data/content"
import { useHoverSound } from "../hooks/useHoverSound"
import { downloadResumeTxt } from "../utils/downloadResume"
import { NeonButton } from "../components/ui/NeonButton"

export function CV() {
  const navigate = useNavigate()
  const tick = useHoverSound(true)

  return (
    <>
      <Helmet>
        <title>Résumé — {profile.name}</title>
        <meta name="description" content={cvSummary} />
      </Helmet>

      <div className="no-print mx-auto max-w-3xl px-4 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 flex flex-wrap gap-3"
        >
          <NeonButton onHoverSound={tick} onClick={() => navigate("/")}>
            ← Back
          </NeonButton>
          <NeonButton
            variant="outline"
            onHoverSound={tick}
            onClick={() => downloadResumeTxt()}
          >
            Download .txt
          </NeonButton>
          <NeonButton variant="ghost" onHoverSound={tick} onClick={() => window.print()}>
            Print / Save PDF
          </NeonButton>
        </motion.div>

        <article className="rounded-3xl border border-white/10 bg-[var(--bg-glass)] p-8 shadow-2xl backdrop-blur-xl md:p-12 print:border print:bg-white print:text-black">
          <header className="border-b border-white/10 pb-8 print:border-zinc-300">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-50 print:text-black md:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-2 text-xl text-violet-300/90 print:text-violet-800">
              {profile.role}
            </p>
            <p className="mt-4 font-mono text-sm text-cyan-400/90 print:text-cyan-800">
              {profile.email} · {profile.location}
            </p>
          </header>

          <section className="mt-10">
            <h2 className="font-mono text-xs tracking-[0.2em] text-zinc-500 uppercase print:text-zinc-600">
              Summary
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--text-muted)] print:text-zinc-800">
              {cvSummary}
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-mono text-xs tracking-[0.2em] text-zinc-500 uppercase print:text-zinc-600">
              Skills
            </h2>
            <div className="mt-6 grid gap-8 md:grid-cols-3">
              {skillCategories.map((cat) => (
                <div key={cat.id}>
                  <p className="font-semibold text-zinc-200 print:text-black">{cat.label}</p>
                  <ul className="mt-2 space-y-1 text-sm text-[var(--text-muted)] print:text-zinc-700">
                    {cat.skills.map((s) => (
                      <li key={s.name}>{s.name}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="font-mono text-xs tracking-[0.2em] text-zinc-500 uppercase print:text-zinc-600">
              Experience
            </h2>
            <ul className="mt-6 space-y-8">
              {experience.map((e) => (
                <li key={e.period + e.title}>
                  <p className="font-mono text-xs text-cyan-500/90 print:text-cyan-800">
                    {e.period}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-zinc-100 print:text-black">
                    {e.title} — {e.company}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)] print:text-zinc-700">
                    {e.detail}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="font-mono text-xs tracking-[0.2em] text-zinc-500 uppercase print:text-zinc-600">
              Education
            </h2>
            {education.map((ed) => (
              <div key={ed.title} className="mt-4">
                <p className="font-mono text-xs text-emerald-500/90 print:text-emerald-800">
                  {ed.period}
                </p>
                <p className="font-semibold text-zinc-100 print:text-black">{ed.title}</p>
                <p className="text-sm text-violet-300/80 print:text-violet-900">{ed.place}</p>
                <p className="mt-1 text-sm text-[var(--text-muted)] print:text-zinc-700">
                  {ed.detail}
                </p>
              </div>
            ))}
          </section>

          <section className="mt-10">
            <h2 className="font-mono text-xs tracking-[0.2em] text-zinc-500 uppercase print:text-zinc-600">
              Projects
            </h2>
            <ul className="mt-6 space-y-6">
              {projects.map((p) => (
                <li key={p.id} className="border-t border-white/5 pt-6 first:border-0 first:pt-0 print:border-zinc-200">
                  <p className="font-semibold text-zinc-100 print:text-black">{p.title}</p>
                  <p className="mt-1 text-sm text-[var(--text-muted)] print:text-zinc-700">
                    {p.description}
                  </p>
                  <p className="mt-2 font-mono text-xs text-zinc-500 print:text-zinc-600">
                    {p.stack.join(" · ")}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </div>
    </>
  )
}
