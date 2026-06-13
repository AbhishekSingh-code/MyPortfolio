import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaInstagram } from 'react-icons/fa6'
import {
  ArrowRight,
  Download, 
  Mail,
  Sparkles,
} from 'lucide-react'
import { GlassCard } from './components/GlassCard'
import { SectionHeading } from './components/SectionHeading'
import {
  achievements,
  experienceNotes,
  footerPillars,
  heroBadges,
  highlights,
  navItems,
  primaryAccent,
  projects,
  skillGroups,
  socials,
  stats,
  timeline,
} from './data/portfolio'
import { FaLinkedin } from 'react-icons/fa'

function App() {
  const phrases = ['Full Stack Developer', 'DSA Enthusiast', 'AI Tools Enthusiast', 'BCA Student']
  const [displayedText, setDisplayedText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = currentPhrase.slice(0, displayedText.length + 1)
        setDisplayedText(next)

        if (next === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 1100)
        }
      } else {
        const next = currentPhrase.slice(0, displayedText.length - 1)
        setDisplayedText(next)

        if (next === '') {
          setIsDeleting(false)
          setPhraseIndex((phraseIndex + 1) % phrases.length)
        }
      }
    }, isDeleting ? 45 : 80)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, phraseIndex, phrases])

  return (
    <div className="relative overflow-x-hidden text-slate-100">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="particle particle-a" />
        <div className="particle particle-b" />
        <div className="particle particle-c" />
        <div className="particle particle-d" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3 text-white">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-lg font-bold shadow-[0_0_25px_rgba(192,132,252,0.45)]">A</span>
            <span>
              <span className="block text-xs uppercase tracking-[0.35em] text-fuchsia-200/80">Portfolio</span>
              <span className="text-lg font-semibold tracking-wide">Abhishek Singh</span>
            </span>
          </a>
          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-slate-200/90 transition hover:text-fuchsia-200">{item}</a>
            ))}
          </div>
          <a href="#contact" className="rounded-full border border-fuchsia-400/50 bg-fuchsia-500/10 px-4 py-2 text-sm text-fuchsia-100 shadow-[0_0_18px_rgba(192,132,252,0.25)] transition hover:bg-fuchsia-500/20">Let’s Talk</a>
        </nav>
      </header>

      <main id="home" className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-16 pt-8 md:px-6 lg:px-8">
        <section className="grid items-center gap-8 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-4 py-2 text-sm text-fuchsia-100 shadow-[0_0_18px_rgba(192,132,252,0.18)]">
              <Sparkles className="h-4 w-4" />
               Software Engineer
            </div>
            <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">Hi, I&apos;m <span className="bg-gradient-to-r from-fuchsia-200 via-violet-200 to-cyan-200 bg-clip-text text-transparent">Abhishek Singh</span></h1>
            <p className="min-h-[2rem] text-xl font-medium text-cyan-100 md:text-2xl">{displayedText}<span className="animate-pulse text-fuchsia-200">|</span></p>
            <p className="max-w-xl text-slate-300/90 md:text-lg">I craft elegant digital experiences with React, Tailwind, Node.js, and a problem-solving mindset. This portfolio combines modern visuals, focused content, and recruiter-ready storytelling.</p>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(192,132,252,0.35)] transition hover:scale-[1.02]">View Projects <ArrowRight className="h-4 w-4" /></a>
              <a href="/resume.pdf" className="inline-flex items-center gap-2 rounded-full border border-cyan-400/50 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-50 shadow-[0_0_25px_rgba(56,189,248,0.15)] transition hover:scale-[1.02]"><Download className="h-4 w-4" /> Download Resume</a>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {heroBadges.map((badge) => (
                <span key={badge} className="rounded-full border border-white/10 bg-white/8 px-3 py-2 text-sm text-slate-100 shadow-[0_10px_30px_rgba(17,24,39,0.35)] backdrop-blur-xl">{badge}</span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="glass-card overflow-hidden rounded-[32px] border border-white/10 bg-white/8 p-5 shadow-[0_20px_60px_rgba(17,24,39,0.55)] backdrop-blur-2xl">
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(145deg,rgba(17,24,39,0.9),rgba(88,28,135,0.35),rgba(15,23,42,0.95))] p-5">
              <img src="/Abhishek1.png" alt="Abhishek Singh" className="h-72 w-full rounded-[24px] object-cover object-[center_8%] shadow-[0_0_30px_rgba(192,132,252,0.25)] md:h-80"/>
              <div className="mt-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-100/80">Status</p>
                  <h2 className="text-xl font-semibold text-white">Available for internships & freelance work</h2>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-2 text-sm text-emerald-100 border border-emerald-400/30"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Open</span>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {stats.map((item, index) => (
                  <GlassCard key={item.label} delay={index * 0.08} className="p-4 text-center">
                    <p className="text-2xl font-semibold text-white">{item.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.25em] text-slate-200/75">{item.label}</p>
                  </GlassCard>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="about" className="py-10 md:py-16">
          <SectionHeading eyebrow="About" title="A student developer with ambition, clarity, and curiosity" description="I am building my foundation in software development, problem-solving, and full-stack engineering while aiming to create solutions that are both beautiful and practical." />
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <GlassCard className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Brief introduction</h3>
              {highlights.map((item) => <p key={item} className="text-slate-200/90">{item}</p>)}
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-100/75">Education</p>
                  <p className="mt-2 text-base text-white">BCA in Information Technology</p>
                  <p className="text-sm text-slate-300/90">Focused on web development, data structures, and software engineering fundamentals.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-100/75">Career Goal</p>
                  <p className="mt-2 text-base text-white">Build scalable products & contribute to innovative teams</p>
                  <p className="text-sm text-slate-300/90">I want to grow into a strong full-stack engineer and create meaningful digital experiences.</p>
                </div>
              </div>
            </GlassCard>
            <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
              {achievements.map((item, index) => (
                <GlassCard key={item.label} delay={index * 0.08} className="rounded-[26px] border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/60 p-5">
                  <div className={`mb-4 h-2 w-full rounded-full bg-gradient-to-r ${item.accent}`} />
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-200/80">{item.label}</p>
                  <p className="mt-3 text-3xl font-semibold text-white">{item.value}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-10 md:py-16">
          <SectionHeading eyebrow="Skills" title="Technologies I use to build modern products" description="A focused stack for front-end polish, backend logic, and clean development workflows." />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group, idx) => {
              const Icon = group.icon
              return (
                <GlassCard key={group.title} delay={idx * 0.08} className="rounded-[28px] border border-white/10 bg-white/8 p-5 hover:-translate-y-1 hover:border-fuchsia-400/50 hover:shadow-[0_18px_45px_rgba(192,132,252,0.18)] transition duration-300">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-2xl border border-fuchsia-400/30 bg-fuchsia-500/10 p-3 text-fuchsia-100"><Icon className="h-5 w-5" /></div>
                    <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item.name} className="rounded-full border border-white/10 bg-white/8 px-3 py-2 text-sm text-slate-100 shadow-[0_10px_30px_rgba(17,24,39,0.35)] backdrop-blur-xl">{item.name}</span>
                    ))}
                  </div>
                  <div className="mt-5 space-y-3">
                    {group.items.slice(0, 4).map((item) => (
                      <div key={item.name} className="space-y-1">
                        <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-slate-200/80"><span>{item.name}</span><span>{item.level}</span></div>
                        <div className="h-2 rounded-full bg-white/10"><div className={`h-2 rounded-full bg-gradient-to-r ${primaryAccent}`} style={{ width: item.level }} /></div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              )
            })}
          </div>
        </section>

        <section id="projects" className="py-10 md:py-16">
          <SectionHeading eyebrow="Projects" title="Selected work and creative builds" description="A mix of personal experiments, learning projects, and practical web applications designed for speed, clarity, and visual impact." />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, idx) => (
              <GlassCard key={project.name} delay={idx * 0.08} className="group rounded-[28px] border border-white/10 bg-white/8 p-4 transition duration-300 hover:-translate-y-1 hover:border-fuchsia-400/45 hover:shadow-[0_18px_55px_rgba(192,132,252,0.18)]">
                <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(192,132,252,0.18),rgba(15,23,42,0.85),rgba(56,189,248,0.14))] p-4">
                  <div className="flex h-40 items-end rounded-[18px] border border-white/10 bg-gradient-to-br from-violet-500/25 via-slate-900 to-cyan-400/20 p-4 shadow-inner">
                    <div className="rounded-2xl border border-white/10 bg-slate-950/80 px-3 py-2 text-xs uppercase tracking-[0.35em] text-cyan-100/80">Project Preview</div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                    <p className="mt-2 text-sm text-slate-300/90">{project.description}</p>
                  </div>
                  <a href={"https://github.com/AbhishekSingh-code/Neon-Notes"} className="rounded-full border border-fuchsia-400/40 bg-fuchsia-500/10 p-3 text-fuchsia-100 hover:bg-fuchsia-500/20" aria-label="GitHub project link">
                    <FaGithub className="h-4 w-4" />
                  </a>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-100">{item}</span>)}
                </div>
                <div className="mt-4 flex gap-3">
                  <a href={project.link} className="inline-flex flex-1 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(192,132,252,0.35)]">Live App</a>
                  <a href="#contact" className="inline-flex flex-1 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-50">Query</a>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        <section id="experience" className="py-10 md:py-16">
          <SectionHeading eyebrow="Experience / Learning Journey" title="A timeline of growth and hands-on learning" description="Each stage reflects the skills I have been building through practice, projects, and continued curiosity." />
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <GlassCard className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Milestones</h3>
              {timeline.map((item, index) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-xs font-semibold text-white">0{index + 1}</div>
                  <div>
                    <p className="text-white">{item}</p>
                    <p className="text-sm text-slate-300/80">Consistent practice, feature building, and project-based learning.</p>
                  </div>
                </div>
              ))}
            </GlassCard>
            <GlassCard className="space-y-4">
              <h3 className="text-xl font-semibold text-white">What I&apos;m focused on now</h3>
              {experienceNotes.map((note) => <p key={note} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-slate-200/90">{note}</p>)}
              <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(167,139,250,0.16),rgba(15,23,42,0.92),rgba(34,211,238,0.1))] p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-fuchsia-100/75">Growth plan</p>
                <p className="mt-2 text-white">Deepening full-stack development, API design, deployment, and advanced DSA problem-solving to become a stronger engineer.</p>
              </div>
            </GlassCard>
          </div>
        </section>

        <section id="contact" className="py-10 md:py-16">
          <SectionHeading eyebrow="Contact" title="Let’s connect and build something ambitious" description="Open to internships, freelance work, and collaborations with teams that value clean design and thoughtful engineering." />
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <GlassCard className="space-y-4">
              <a href="mailto:abhishekbhadoria2425@gmail.com" className="flex items-center gap-3 text-white transition hover:text-fuchsia-100"><Mail className="h-5 w-5 text-fuchsia-200" /> abhishekbhadoria2425@gmail.com</a>
              <a href="https://github.com/AbhishekSingh-code" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white transition hover:text-fuchsia-100"><FaGithub className="h-5 w-5 text-fuchsia-200" /> github.com/AbhishekSingh-code</a>
              <a href="https://www.linkedin.com/in/abhisheksingh" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white transition hover:text-fuchsia-100"><FaLinkedin className="h-5 w-5 text-fuchsia-200" /> linkedin.com/in/abhisheksingh</a>
              <a href="https://www.instagram.com/the._.abhisheksingh" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white transition hover:text-fuchsia-100"><FaInstagram className="h-5 w-5 text-fuchsia-200" /> instagram.com/the._.abhisheksingh</a>
              <div className="rounded-[24px] border border-white/10 bg-black/20 p-5 text-slate-200/90">I am always excited to team up on innovative products, open-source contributions, and real-world development challenges.</div>
            </GlassCard>

            <GlassCard className="rounded-[28px] border border-white/10 bg-white/8 p-5">
              <form className="space-y-4">
                <label className="block text-sm text-slate-200/90">Name
                  <input className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none ring-0 transition placeholder:text-slate-400 focus:border-fuchsia-400/60 focus:ring-2 focus:ring-fuchsia-400/20" placeholder="Your Name" />
                </label>
                <label className="block text-sm text-slate-200/90">Email
                  <input className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-fuchsia-400/60 focus:ring-2 focus:ring-fuchsia-400/20" placeholder="you@example.com" />
                </label>
                <label className="block text-sm text-slate-200/90">Message
                  <textarea className="mt-2 min-h-[140px] w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-fuchsia-400/60 focus:ring-2 focus:ring-fuchsia-400/20" placeholder="Tell me about your idea, project, or opportunity." />
                </label>
                <button type="button" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(192,132,252,0.35)] hover:scale-[1.02]">Send Message <ArrowRight className="h-4 w-4" /></button>
              </form>
            </GlassCard>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 md:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-fuchsia-200/80">Abhishek Singh</p>
            <p className="mt-2 text-slate-200/90">Premium developer portfolio built with React, Tailwind, and Framer Motion.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {footerPillars.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/8 px-3 py-2 text-xs uppercase tracking-[0.25em] text-slate-100">{item}</span>)}
          </div>
          <div className="flex items-center gap-3">
            {socials.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="rounded-full border border-white/10 bg-white/8 p-3 text-slate-100 transition hover:border-fuchsia-400/50 hover:bg-fuchsia-500/10 hover:text-fuchsia-100"
                  aria-label={item.label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        </div>
        <div className="border-t border-white/10 px-4 py-3 text-center text-xs uppercase tracking-[0.25em] text-slate-300/80 md:px-6 lg:px-8">
          © 2026 Abhishek Singh. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
