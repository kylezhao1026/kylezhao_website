import { profile } from '@/src/content/profile';
import type { Metadata } from 'next';
import CommentText from '@/components/terminal/CommentText';
import TerminalPanel from '@/components/terminal/TerminalPanel';
import TechPill from '@/components/terminal/TechPill';
import CommandLink from '@/components/terminal/CommandLink';
import TerminalHeading from '@/components/terminal/TerminalHeading';

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
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12 space-y-8">
      {/* Header */}
      <section className="space-y-3">
        <TerminalHeading level={1}>Projects</TerminalHeading>
        <CommentText>selected work in data science & machine learning</CommentText>
      </section>

      {/* Projects List */}
      <section className="space-y-6">
        {sortedProjects.map((project) => (
          <TerminalPanel key={project.slug} hover>
            <div className="space-y-4">
              {/* Title */}
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-base md:text-lg font-semibold leading-tight">
                  {project.title}
                </h2>
                {project.featured && (
                  <span className="text-xs px-2 py-0.5 bg-success/10 text-success border border-success/30 rounded shrink-0">
                    featured
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-muted leading-relaxed">{project.description}</p>

              {/* Impact Bullets */}
              {project.impactBullets && project.impactBullets.length > 0 && (
                <div className="space-y-1.5">
                  <CommentText>key outcomes</CommentText>
                  <ul className="text-xs text-muted space-y-1 pl-4">
                    {project.impactBullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-prompt shrink-0">›</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <TechPill key={tech} tech={tech} />
                ))}
              </div>

              {/* Links */}
              {(project.links.github || project.links.demo) && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.links.github && (
                    <CommandLink href={project.links.github} external>
                      open github
                    </CommandLink>
                  )}
                  {project.links.demo && (
                    <CommandLink href={project.links.demo} external>
                      open demo
                    </CommandLink>
                  )}
                </div>
              )}
            </div>
          </TerminalPanel>
        ))}
      </section>
    </div>
  );
}
