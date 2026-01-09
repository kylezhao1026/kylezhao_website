import ProjectCard from '@/components/ProjectCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - Kyle Zhao',
  description: 'A collection of my software projects and work',
};

const projects = [
  {
    title: 'Data Visualization Dashboard',
    description:
      'Interactive dashboard for visualizing complex datasets with real-time updates and custom filtering capabilities.',
    techStack: ['React', 'D3.js', 'TypeScript', 'Python'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Machine Learning Pipeline',
    description:
      'End-to-end ML pipeline for predictive analytics, featuring automated data preprocessing and model deployment.',
    techStack: ['Python', 'TensorFlow', 'Docker', 'FastAPI'],
    githubUrl: 'https://github.com',
  },
  {
    title: 'Task Management App',
    description:
      'Minimalist task management application with real-time collaboration and intuitive user experience.',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'API Analytics Tool',
    description:
      'Analytics platform for monitoring API performance, tracking usage patterns, and generating insights.',
    techStack: ['Node.js', 'React', 'MongoDB', 'Redis'],
    githubUrl: 'https://github.com',
  },
  {
    title: 'Natural Language Processor',
    description:
      'NLP tool for sentiment analysis and text classification with support for multiple languages.',
    techStack: ['Python', 'PyTorch', 'Flask', 'spaCy'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Portfolio Website',
    description:
      'Modern, responsive personal website built with Next.js and Tailwind CSS, focusing on performance and accessibility.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
      <p className="text-lg text-[var(--muted)] mb-12 max-w-2xl">
        A collection of my work spanning data science, machine learning, and full-stack development.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
