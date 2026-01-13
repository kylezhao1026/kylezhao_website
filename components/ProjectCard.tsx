import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <article className="border border-[var(--border)] rounded-lg p-6 hover:border-[var(--muted)] transition-colors">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-[var(--muted)] mb-4 leading-relaxed">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((techItem) => (
          <span
            key={techItem}
            className="text-xs px-3 py-1 bg-[var(--border)] rounded-full text-[var(--muted)]"
          >
            {techItem}
          </span>
        ))}
      </div>

      {(github || demo) && (
        <div className="flex gap-4 text-sm">
          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors font-medium"
            >
              GitHub →
            </Link>
          )}
          {demo && (
            <Link
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors font-medium"
            >
              Live Demo →
            </Link>
          )}
        </div>
      )}
    </article>
  );
}
