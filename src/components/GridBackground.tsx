export function GridBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 20%, black 20%, transparent 70%)",
        }}
      />
      <div
        className="absolute -top-1/2 left-1/2 h-[120vh] w-[120vw] -translate-x-1/2 animate-[spin_120s_linear_infinite] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 50%, transparent, rgba(34,211,238,0.15), transparent, rgba(167,139,250,0.12), transparent)",
        }}
      />
    </div>
  )
}
