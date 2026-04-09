import { profile } from '@/src/content/profile';
import TerminalLoader from '@/components/TerminalLoader';
import HeroSceneWrapper from '@/components/three/HeroSceneWrapper';

export default function Home() {
  const githubUsername = profile.links.github.split('github.com/')[1] || 'kylezhao1026';
  const linkedinProfile =
    profile.links.linkedin.split('linkedin.com/in/')[1]?.replace('/', '') || 'profile';

  return (
    <>
      <TerminalLoader />

      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Subtle 3D wireframe behind text */}
        <div className="absolute inset-0 z-0" aria-hidden>
          <HeroSceneWrapper />
        </div>

        {/* Text content */}
        <div className="relative z-10 text-center px-6 space-y-5 select-none">
          <p className="text-xs tracking-[0.5em] uppercase text-[var(--muted)]">hi, i&apos;m</p>
          <h1 className="font-serif text-7xl md:text-8xl lg:text-[9rem] tracking-tight text-[var(--foreground)] glow-text leading-none">
            kyle zhao
          </h1>
          <p className="text-sm md:text-base text-[var(--muted)] tracking-[0.25em] uppercase">
            data science · uc san diego
          </p>
          <p className="text-sm text-[var(--muted)] max-w-sm mx-auto leading-relaxed pt-2">
            {profile.tagline}
          </p>
          <div className="flex items-center justify-center gap-3 pt-6">
            <div className="h-px w-8" style={{ background: 'var(--border-bright)' }} />
            <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--muted)]">
              scroll
            </span>
            <div className="h-px w-8" style={{ background: 'var(--border-bright)' }} />
          </div>
        </div>
      </section>

      {/* ─── ABOUT ────────────────────────────────────────────────────── */}
      <section id="about" className="py-28 px-6 max-w-3xl mx-auto">
        <SectionHeading>about</SectionHeading>

        <div className="space-y-5 text-[var(--foreground)] leading-relaxed text-[15px]">
          <p>Hello! I&apos;m Kyle!</p>
          <p>
            I&apos;m a second-year studying data science at the University of California, San Diego.
            My coursework revolves around data analysis and statistics, but I like learning about
            many things outside of data science including but not limited to: nutrition, human
            psychology, kinesiology, entrepreneurship, software engineering, and environmental
            sciences.
          </p>
          <p>
            I was born and raised in Princeton, New Jersey, but for now I am studying in San Diego,
            California. In the future, I envision myself operating out of a city like San Francisco
            or New York.
          </p>
          <p>
            In my free time, I like to work out at the gym, cook nutritious food, make social media
            content, play table tennis, and vibe-code! I&apos;m always willing to try out new
            things, so this list may grow in the future!
          </p>
          <p>
            I&apos;m currently looking for ways to expand my breadth of knowledge and experience
            through research and internships, so please feel free to reach out if you have any
            related opportunities!
          </p>
        </div>

        {/* Skills */}
        <div className="mt-10 pt-8 border-t border-[var(--border)] space-y-4">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)]">skills</p>
          <div className="flex flex-wrap gap-2">
            {[
              ...profile.skills.languages,
              ...profile.skills.frameworks,
              ...profile.skills.tools,
            ].map((skill) => (
              <span
                key={skill}
                className="text-xs tracking-wide px-3 py-1 rounded-full border border-[var(--border-bright)] text-[var(--muted)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Minnie photo */}
        <div className="mt-10 space-y-3">
          <p className="text-[15px] text-[var(--foreground)] leading-relaxed">
            Back at home, I have a golden-doodle called Minnie — always &quot;hungry.&quot;
          </p>
          <div
            className="rounded-2xl overflow-hidden border border-[var(--border-bright)]"
            style={{ maxWidth: 480 }}
          >
            <img
              src="/images/minnie.jpeg"
              alt="Kyle with Minnie"
              className="w-full object-cover"
              draggable={false}
            />
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ─────────────────────────────────────────────────── */}
      <section id="projects" className="py-28 px-6 max-w-4xl mx-auto">
        <SectionHeading>projects</SectionHeading>

        <div className="space-y-6">
          {[...profile.projects]
            .sort((a, b) => (a.featured === b.featured ? 0 : a.featured ? -1 : 1))
            .map((project) => (
              <div
                key={project.slug}
                className="rounded-2xl border border-[var(--border-bright)] bg-[var(--surface)] p-6 md:p-8 space-y-4 hover:border-[var(--accent)] transition-colors duration-300"
                style={{ backdropFilter: 'blur(12px)' }}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-base md:text-lg font-medium text-[var(--foreground)]">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span
                      className="text-[10px] uppercase tracking-[0.3em] px-2 py-0.5 rounded-full border"
                      style={{
                        color: '#b45309',
                        borderColor: '#b4530930',
                        background: '#b4530908',
                      }}
                    >
                      featured
                    </span>
                  )}
                </div>

                <p className="text-[var(--muted)] leading-relaxed text-sm">{project.description}</p>

                {project.impactBullets && project.impactBullets.length > 0 && (
                  <ul className="space-y-1.5 text-sm text-[var(--foreground)]">
                    {project.impactBullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span style={{ color: '#b45309' }} className="mt-0.5 shrink-0">
                          ▸
                        </span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border border-[var(--border-bright)] text-[var(--muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {(project.links.github || project.links.demo) && (
                  <div className="flex flex-wrap gap-4 text-sm pt-1">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--accent)] hover:text-[var(--foreground)] transition-colors underline underline-offset-4"
                      >
                        github ↗
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--accent)] hover:text-[var(--foreground)] transition-colors underline underline-offset-4"
                      >
                        demo ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
        </div>
      </section>

      {/* ─── CONTACT ──────────────────────────────────────────────────── */}
      <section id="contact" className="py-28 px-6 max-w-3xl mx-auto">
        <SectionHeading>contact</SectionHeading>
        <p className="text-[var(--muted)] mb-10 -mt-2">
          open to internships, collaborations, and conversations.
        </p>

        <div className="space-y-4">
          {[
            { label: 'email', display: profile.links.email, href: `mailto:${profile.links.email}`, color: '#b45309' },
            { label: 'github', display: `github.com/${githubUsername}`, href: profile.links.github, color: '#92400e', external: true },
            { label: 'linkedin', display: `linkedin.com/in/${linkedinProfile}`, href: profile.links.linkedin, color: '#a16207', external: true },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="group flex items-center justify-between rounded-2xl border border-[var(--border-bright)] bg-[var(--surface)] p-5 hover:border-[var(--accent)] transition-all duration-300"
              style={{ backdropFilter: 'blur(12px)' }}
            >
              <div className="space-y-1">
                <div className="text-xs uppercase tracking-[0.3em]" style={{ color: item.color }}>
                  {item.label}
                </div>
                <div className="text-[var(--foreground)] text-sm group-hover:text-[var(--accent)] transition-colors">
                  {item.display}
                </div>
              </div>
              <span className="text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors text-lg">
                ↗
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--border)] text-xs uppercase tracking-[0.25em] text-[var(--muted)] space-y-1">
          <div>typical response time: 24–48 hours</div>
          <div>for urgent matters: reach out via linkedin</div>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────────────── */}
      <footer className="py-10 px-6 text-center border-t border-[var(--border)]">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)]">
          kyle zhao · {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-3 mb-12">
      <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-[var(--foreground)] glow-text">
        {children}
      </h2>
      <div
        className="h-px w-16"
        style={{ background: 'linear-gradient(90deg, #b45309, transparent)' }}
      />
    </div>
  );
}
