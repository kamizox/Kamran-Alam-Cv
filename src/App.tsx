import { lazy, Suspense, useState } from "react"
import { Route, Routes } from "react-router-dom"

const Home = lazy(() =>
  import("./pages/Home").then((m) => ({ default: m.Home }))
)
const CV = lazy(() => import("./pages/CV").then((m) => ({ default: m.CV })))
import { CustomCursor } from "./components/CustomCursor"
import { GridBackground } from "./components/GridBackground"
import { LoadingScreen } from "./components/LoadingScreen"
import { Navbar } from "./components/Navbar"
import { ParticleBackground } from "./components/ParticleBackground"
import { ScrollProgress } from "./components/ScrollProgress"
import { ThemeProvider } from "./context/ThemeContext"

function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <ThemeProvider>
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} minMs={2400} />}
      <div className="relative min-h-[100dvh] bg-[var(--bg-base)] text-[var(--text-primary)]">
        <GridBackground />
        <ParticleBackground />
        {loaded && (
          <>
            <ScrollProgress />
            <CustomCursor />
            <Navbar />
            <main>
              <Suspense
                fallback={
                  <div className="flex min-h-[50vh] items-center justify-center font-mono text-sm text-cyan-400/80">
                    loading module…
                  </div>
                }
              >
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/cv" element={<CV />} />
                </Routes>
              </Suspense>
            </main>
            <footer className="no-print relative z-[1] border-t border-white/5 py-10 text-center text-sm text-zinc-600">
              <p className="font-mono text-xs">
                built with React · Vite · Tailwind · Framer Motion
              </p>
            </footer>
          </>
        )}
      </div>
    </ThemeProvider>
  )
}

export default App
