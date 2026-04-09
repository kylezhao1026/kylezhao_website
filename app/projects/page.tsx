import { profile } from '@/src/content/profile';
import type { Metadata } from 'next';
import FlashBackButton from '@/components/FlashBackButton';

export const metadata: Metadata = {
  title: 'projects - kyle',
  description: 'A collection of my software projects and work',
};

export default function ProjectsPage() {
  const sortedProjects = [...profile.projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  return (
    <div className="min-h-screen px-6 py-16 md:py-20 max-w-4xl mx-auto space-y-12">
      <FlashBackButton />

      <div className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight glow-text">
          projects
        </h1>
        <p className="text-[var(--muted)] tracking-wide">
          selected work in data science &amp; machine learning.
        </p>
      </div>

      <div className="space-y-6">
        {sortedProjects.map((project) => (
          <div
            key={project.slug}
            className="rounded-2xl border border-[var(--border-bright)] bg-[var(--surface)] p-6 md:p-8 space-y-4 hover:border-[var(--accent)] transition-colors duration-300"
            style={{ backdropFilter: 'blur(12px)' }}
          >
            {/* Header */}
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-lg md:text-xl font-medium text-[var(--foreground)]">
                {project.title}
              </h2>
              {project.featured && (
                <span
                  className="text-[10px] uppercase tracking-[0.3em] px-2 py-0.5 rounded-full border"
                  style={{
                    color: '#a855f7',
                    borderColor: '#a855f740',
                    background: '#a855f710',
                  }}
                >
                  featured
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-[var(--muted)] leading-relaxed text-sm md:text-base">
              {project.description}
            </p>

            {/* Impact bullets */}
            {project.impactBullets && project.impactBullets.length > 0 && (
              <ul className="space-y-2 text-sm text-[var(--foreground)]">
                {project.impactBullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span style={{ color: '#a855f7' }}>▸</span>
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Tech tags */}
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

            {/* Links */}
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
    </div>
  );
}
