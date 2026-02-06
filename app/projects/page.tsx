import { profile } from '@/src/content/profile';
import type { Metadata } from 'next';
import FlashBackButton from '@/components/FlashBackButton';

export const metadata: Metadata = {
  title: `Projects — ${profile.name}`,
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
      <div className="space-y-4">
        <h1 className="text-2xl md:text-3xl font-medium tracking-tight">projects</h1>
        <p className="text-[var(--muted)]">selected work in data science &amp; machine learning.</p>
      </div>

      <div className="space-y-10">
        {sortedProjects.map((project) => (
          <div key={project.slug} className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-lg md:text-xl font-medium">{project.title}</h2>
              {project.featured && (
                <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--muted)]">
                  featured
                </span>
              )}
            </div>
            <p className="text-[var(--muted)]">{project.description}</p>
            {project.impactBullets && project.impactBullets.length > 0 && (
              <ul className="space-y-2 text-sm text-[var(--foreground)]">
                {project.impactBullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[var(--muted)]">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            {(project.links.github || project.links.demo) && (
              <div className="flex flex-wrap gap-4 text-sm">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline underline-offset-4"
                  >
                    github
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline underline-offset-4"
                  >
                    demo
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
