import { profile, experience, education, skillCategories, projects } from "../data/content"

export function buildResumeText(): string {
  const lines: string[] = [
    `${profile.name}`,
    `${profile.role}`,
    `${profile.location} · ${profile.email}`,
    "",
    "— SUMMARY —",
    profile.intro.replace(/\n/g, " "),
    "",
    "— SKILLS —",
    ...skillCategories.flatMap((cat) => [
      `[${cat.label}]`,
      ...cat.skills.map((s) => `  ${s.name}`),
      "",
    ]),
    "— EXPERIENCE —",
    ...experience.flatMap((e) => [
      `${e.period} · ${e.title} @ ${e.company}`,
      `  ${e.detail}`,
      "",
    ]),
    "— EDUCATION —",
    ...education.flatMap((e) => [
      `${e.period} · ${e.title} — ${e.place}`,
      `  ${e.detail}`,
      "",
    ]),
    "— SELECTED PROJECTS —",
    ...projects.map(
      (p) => `${p.title}\n  ${p.description}\n  Stack: ${p.stack.join(", ")}\n`
    ),
    "",
    "— LINKS —",
    `GitHub: ${profile.social.github}`,
    `LinkedIn: ${profile.social.linkedin}`,
  ]
  return lines.join("\n")
}

export function downloadResumeTxt(filename = `${profile.name.replace(/\s+/g, "_")}_resume.txt`) {
  const blob = new Blob([buildResumeText()], { type: "text/plain;charset=utf-8" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}
