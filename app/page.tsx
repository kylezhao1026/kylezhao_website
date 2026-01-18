import { profile } from '@/src/content/profile';
import PromptText from '@/components/terminal/PromptText';
import CommentText from '@/components/terminal/CommentText';
import TerminalPanel from '@/components/terminal/TerminalPanel';
import CommandLink from '@/components/terminal/CommandLink';
import TechPill from '@/components/terminal/TechPill';
import TerminalHeading from '@/components/terminal/TerminalHeading';

export default function Home() {
  const bioLines = profile.bio.split('\n');
  const shortBio = bioLines.slice(0, 2).join(' ');

  const featuredProjects = profile.projects
    .filter((p) => p.featured)
    .slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-10 md:py-16 space-y-16">
      {/* Hero Section */}
      <section className="space-y-5">
        <TerminalHeading level={1}>{profile.name}</TerminalHeading>
        <PromptText symbol=">">
          <span className="text-base md:text-lg text-muted leading-relaxed">{profile.tagline}</span>
        </PromptText>
      </section>

      {/* Bio Section */}
      <section className="space-y-4">
        <PromptText symbol="$">whoami</PromptText>
        <div className="pl-5 border-l-2 border-border leading-relaxed text-muted">
          {shortBio}
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-4">
        <PromptText symbol="$">skills --list</PromptText>
        <TerminalPanel>
          <div className="space-y-4">
            <div>
              <CommentText>languages</CommentText>
              <div className="flex flex-wrap gap-2 mt-2">
                {profile.skills.languages.map((lang) => (
                  <TechPill key={lang} tech={lang} />
                ))}
              </div>
            </div>
            <div>
              <CommentText>frameworks</CommentText>
              <div className="flex flex-wrap gap-2 mt-2">
                {profile.skills.frameworks.map((fw) => (
                  <TechPill key={fw} tech={fw} />
                ))}
              </div>
            </div>
            <div>
              <CommentText>tools</CommentText>
              <div className="flex flex-wrap gap-2 mt-2">
                {profile.skills.tools.map((tool) => (
                  <TechPill key={tool} tech={tool} />
                ))}
              </div>
            </div>
          </div>
        </TerminalPanel>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="space-y-4">
          <PromptText symbol="$">ls ~/projects --featured</PromptText>
          <div className="space-y-5">
            {featuredProjects.map((project) => (
              <TerminalPanel key={project.slug} hover>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold leading-tight">{project.title}</h3>
                  <p className="text-muted leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <TechPill key={tech} tech={tech} />
                    ))}
                  </div>
                </div>
              </TerminalPanel>
            ))}
          </div>
        </section>
      )}

      {/* CTA Commands */}
      <section className="flex flex-wrap gap-3 pt-4">
        <CommandLink href="/projects">cd ~/projects</CommandLink>
        <CommandLink href="/contact">mail --to kyle</CommandLink>
      </section>
    </div>
  );
}
