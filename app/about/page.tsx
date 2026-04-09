import type { Metadata } from 'next';
import FlashBackButton from '@/components/FlashBackButton';

export const metadata: Metadata = {
  title: 'about - kyle',
  description: 'A short bio and interests',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen px-6 py-16 md:py-20 max-w-3xl mx-auto space-y-10">
      <FlashBackButton />

      <div className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight glow-text">
          about
        </h1>
        <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, #a855f7, transparent)' }} />
      </div>

      <div className="space-y-6 text-[var(--foreground)] leading-relaxed">
        <p>Hello! I&apos;m Kyle!</p>
        <p>
          I&apos;m a second-year studying data science at the University of California, San Diego.
          My coursework revolves around data analysis and statistics, but I like learning about many
          things outside of data science including but not limited to: nutrition, human psychology,
          kinesiology, entrepreneurship, software engineering, and environmental sciences.
        </p>
        <p>
          I was born and raised in Princeton, New Jersey, but for now I am studying in San Diego,
          California. In the future, I envision myself operating out of a city like San Francisco or
          New York.
        </p>
        <p>
          In my free time, I like to work out at the gym, cook nutritious food, make social media
          content, play table tennis, and vibe-code! I&apos;m always willing to try out new things,
          so this list may grow in the future!
        </p>
        <p>
          I&apos;m currently looking for ways to expand my breadth of knowledge and experience
          through research and internships, so please feel free to reach out if you have any related
          opportunities!
        </p>

        {/* Contact link card */}
        <div
          className="rounded-xl border border-[var(--border-bright)] p-4 flex items-center justify-between"
          style={{ background: 'rgba(168,85,247,0.06)' }}
        >
          <span className="text-sm text-[var(--muted)]">want to get in touch?</span>
          <a
            href="/contact"
            className="text-sm text-[var(--accent)] hover:text-[var(--foreground)] transition-colors underline underline-offset-4"
          >
            contact ↗
          </a>
        </div>

        {/* Dog photo */}
        <div className="space-y-3 pt-2">
          <p>
            Back at home, I have a golden-doodle called Minnie! She&apos;s very playful — if I had
            one word to describe her, it would be &quot;hungry.&quot; Here&apos;s a picture of us!
          </p>
          <div className="rounded-2xl overflow-hidden border border-[var(--border-bright)]" style={{ maxWidth: 520 }}>
            <img
              src="/images/minnie.jpeg"
              alt="Kyle with Minnie"
              className="w-full object-cover"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
