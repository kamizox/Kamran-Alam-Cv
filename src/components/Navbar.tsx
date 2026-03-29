import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { profile } from "../data/content"
import { useHoverSound } from "../hooks/useHoverSound"
import { ThemeToggle } from "./ThemeToggle"

const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Timeline", href: "#timeline" },
  { label: "Terminal", href: "#terminal" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const tick = useHoverSound(true)
  const location = useLocation()
  const isHome = location.pathname === "/"

  const go = (href: string) => {
    setOpen(false)
    if (href.startsWith("#") && isHome) {
      const id = href.slice(1)
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      }, 0)
    }
  }

  return (
    <header className="no-print fixed left-0 right-0 top-0 z-[8000] border-b border-white/5 bg-[var(--bg-base)]/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link
          to="/"
          className="group flex items-center gap-2 font-semibold tracking-tight"
          onMouseEnter={tick}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/30 to-violet-600/40 font-mono text-sm text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.35)]">
            &gt;_
          </span>
          <span className="hidden text-sm text-zinc-200 sm:inline">
            {profile.name.split(" ")[0]}
            <span className="text-cyan-400">.dev</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {nav.map((item) =>
            isHome ? (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith("#")) {
                    e.preventDefault()
                    go(item.href)
                  }
                  tick()
                }}
                onMouseEnter={tick}
                className="rounded-lg px-3 py-2 text-sm text-[var(--text-muted)] transition-colors hover:bg-white/5 hover:text-cyan-300"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                to={{ pathname: "/", hash: item.href.slice(1) }}
                onMouseEnter={tick}
                className="rounded-lg px-3 py-2 text-sm text-[var(--text-muted)] transition-colors hover:bg-white/5 hover:text-cyan-300"
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            to="/cv"
            onMouseEnter={tick}
            className="rounded-lg px-3 py-2 text-sm text-violet-300/90 transition-colors hover:bg-violet-500/10"
          >
            CV
          </Link>
          <div className="ml-2 pl-2 border-l border-white/10">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <motion.button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label="Menu"
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-mono text-lg">{open ? "×" : "≡"}</span>
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/5 bg-[var(--bg-base)]/95 md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {nav.map((item) =>
                isHome ? (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-3 py-3 text-[var(--text-muted)]"
                    onClick={(e) => {
                      if (item.href.startsWith("#")) {
                        e.preventDefault()
                        go(item.href)
                      }
                      setOpen(false)
                    }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    to={{ pathname: "/", hash: item.href.slice(1) }}
                    className="rounded-lg px-3 py-3 text-[var(--text-muted)]"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link
                to="/cv"
                className="rounded-lg px-3 py-3 text-violet-300"
                onClick={() => setOpen(false)}
              >
                CV page
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
