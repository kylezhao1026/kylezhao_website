import ProjectCard from '@/components/ProjectCard';
import { profile } from '@/src/content/profile';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Projects — ${profile.name}`,
  description: 'A collection of my software projects and work',
};

export default function ProjectsPage() {
  // Sort projects: featured first, then others
  const sortedProjects = [...profile.projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
      <p className="text-lg text-[var(--muted)] mb-12 max-w-2xl">
        A collection of my work spanning data science, machine learning, and statistical analysis.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {sortedProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            description={project.description}
            tech={project.tech}
            github={project.links.github}
            demo={project.links.demo}
          />
        ))}
      </div>
    </div>
  );
}
