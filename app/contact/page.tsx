import { profile } from '@/src/content/profile';
import type { Metadata } from 'next';
import FlashBackButton from '@/components/FlashBackButton';

export const metadata: Metadata = {
  title: `Contact — ${profile.name}`,
  description: 'Get in touch with me',
};

export default function ContactPage() {
  const githubUsername = profile.links.github.split('github.com/')[1] || 'kylezhao1026';
  const linkedinProfile = profile.links.linkedin.split('linkedin.com/in/')[1]?.replace('/', '') || 'profile';

  return (
    <div className="min-h-screen px-6 py-16 md:py-20 max-w-3xl mx-auto space-y-10">
      <FlashBackButton />
      <div className="space-y-4">
        <h1 className="text-2xl md:text-3xl font-medium tracking-tight">contact</h1>
        <p className="text-[var(--muted)]">
          open to internships, collaborations, and conversations.
        </p>
      </div>
      <div className="space-y-6">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">email</div>
          <a
            href={`mailto:${profile.links.email}`}
            className="text-base hover:underline underline-offset-4"
          >
            {profile.links.email}
          </a>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">github</div>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base hover:underline underline-offset-4"
          >
            github.com/{githubUsername}
          </a>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">linkedin</div>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base hover:underline underline-offset-4"
          >
            linkedin.com/in/{linkedinProfile}
          </a>
        </div>
      </div>
      <div className="pt-6 space-y-2 text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
        <div>typical response time: 24-48 hours</div>
        <div>for urgent matters: reach out via linkedin</div>
      </div>
    </div>
  );
}
