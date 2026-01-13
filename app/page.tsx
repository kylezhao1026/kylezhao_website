import Link from 'next/link';
import { profile } from '@/src/content/profile';

export default function Home() {
  // Get first 2 paragraphs of bio
  const bioLines = profile.bio.split('\n\n');
  const shortBio = bioLines.slice(0, 2).join('\n\n');

  // Get featured projects (max 3)
  const featuredProjects = profile.projects
    .filter((p) => p.featured)
    .slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      {/* Hero Section */}
      <section className="mb-24">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">
          {profile.name}
        </h1>
        <p className="text-xl md:text-2xl text-[var(--muted)] mb-8 max-w-2xl">
          {profile.tagline}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="px-6 py-3 bg-foreground text-background font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-[var(--border)] font-medium rounded-lg hover:bg-[var(--border)] transition-colors"
          >
            Contact
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-6">About</h2>
        <p className="text-lg text-[var(--muted)] leading-relaxed max-w-2xl whitespace-pre-line">
          {shortBio}
        </p>
      </section>

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
          <div className="grid md:grid-cols-1 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.slug}
                className="border border-[var(--border)] rounded-lg p-6 hover:bg-[var(--border)] transition-colors"
              >
                <h3 className="font-semibold text-xl mb-3">{project.title}</h3>
                <p className="text-[var(--muted)] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-foreground/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
