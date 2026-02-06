import type { Metadata } from 'next';
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
        <p className="text-[var(--muted)]">placeholder text for now.</p>
      </div>

      <div className="space-y-4 text-[var(--foreground)]">
        <p className="leading-relaxed">
          This page will be updated with a full bio, interests, and current work focus.
        </p>
        <p className="leading-relaxed">More details coming soon.</p>
      </div>
    </div>
  );
}
