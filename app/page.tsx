import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      {/* Hero Section */}
      <section className="mb-24">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">
          Kyle Zhao
        </h1>
        <p className="text-xl md:text-2xl text-[var(--muted)] mb-8 max-w-2xl">
          Data Science & Software Engineering Student
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
            Contact Me
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-6">About</h2>
        <p className="text-lg text-[var(--muted)] leading-relaxed mb-4 max-w-2xl">
          I&apos;m a passionate student exploring the intersection of data science and software engineering.
          I build thoughtful, user-centered applications and love working with modern technologies to
          solve real-world problems.
        </p>
      </section>

      {/* Highlights Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Focus Areas</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-2">Data Science</h3>
            <p className="text-[var(--muted)]">
              Machine learning, statistical analysis, and data visualization
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Web Development</h3>
            <p className="text-[var(--muted)]">
              Modern full-stack applications with React, Next.js, and TypeScript
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Problem Solving</h3>
            <p className="text-[var(--muted)]">
              Algorithms, system design, and building scalable solutions
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
