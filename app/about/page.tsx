import type { Metadata } from 'next';
import { profile } from '@/src/content/profile';
import FlashBackButton from '@/components/FlashBackButton';

export const metadata: Metadata = {
  title: `About — ${profile.name}`,
  description: 'A short bio and interests',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen px-6 py-16 md:py-20 max-w-3xl mx-auto space-y-10">
      <FlashBackButton />
      <div className="space-y-4">
        <h1 className="text-2xl md:text-3xl font-medium tracking-tight">about</h1>
      </div>

      <div className="space-y-5 text-[var(--foreground)]">
        <p className="leading-relaxed">Hello! I’m Kyle!</p>
        <p className="leading-relaxed">
          I’m a second-year studying data science at the University of California, San Diego. My
          coursework revolves around data analysis and statistics, but I like learning about many
          things outside of data science including but not limited to: nutrition, human psychology,
          kinesiology, entrepreneurship, software engineering, and environmental sciences.
        </p>
        <p className="leading-relaxed">
          I was born and raised in Princeton, New Jersey, but for now I am studying in San Diego,
          California. In the future, I envision myself operating out of a city like San Francisco or
          New York.
        </p>
        <p className="leading-relaxed">
          In my free time, I like to work out at the gym, cook nutritious food, make social media
          content, play table tennis, and vibe-code! I’m always willing to try out new things, so
          this list may grow in the future!
        </p>
        <p className="leading-relaxed">
          I’m currently looking for ways to expand my breadth of knowledge and experience through
          research and internships, so please feel free to reach out if you have any related
          opportunities!
        </p>
        <p className="leading-relaxed">
          Here is a link to my contact:{' '}
          <a href="/contact" className="underline underline-offset-4">
            Contact link
          </a>
        </p>
        <p className="leading-relaxed">
          Back at home, I have a golden-doodle called Minnie! She’s very playful, and if I had one
          word to describe her, I would say she is always “hungry.” Here is a picture of me with
          Minnie!
        </p>
        <div className="pt-2">
          <img
            src="/images/minnie.jpeg"
            alt="Kyle with Minnie"
            className="w-full max-w-[560px] rounded-2xl border border-[var(--border)]"
          />
        </div>
      </div>
    </div>
  );
}
