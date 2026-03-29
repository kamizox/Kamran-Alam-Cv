import { useEffect } from "react"
import { Helmet } from "react-helmet-async"
import { useLocation } from "react-router-dom"
import { About } from "../components/About"
import { Contact } from "../components/Contact"
import { Hero } from "../components/Hero"
import { Projects } from "../components/Projects"
import { SkillsSection } from "../components/SkillsSection"
import { Terminal } from "../components/Terminal"
import { Timeline } from "../components/Timeline"
import { profile } from "../data/content"

function ScrollToHash() {
  const { hash } = useLocation()
  useEffect(() => {
    if (!hash) return
    const id = decodeURIComponent(hash.slice(1))
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }, 120)
    return () => window.clearTimeout(t)
  }, [hash])
  return null
}

export function Home() {
  return (
    <>
      <ScrollToHash />
      <Helmet>
        <title>{profile.name} | Developer Workspace</title>
        <meta
          name="description"
          content={`${profile.role} — ${profile.tagline}`}
        />
      </Helmet>
      <Hero />
      <div className="mx-auto max-w-6xl px-4">
        <About />
        <SkillsSection />
        <Projects />
        <Timeline />
        <div className="py-12">
          <p className="mb-6 font-mono text-sm tracking-[0.25em] text-cyan-400/80 uppercase">
            // interactive shell
          </p>
          <Terminal />
        </div>
        <Contact />
      </div>
    </>
  )
}
