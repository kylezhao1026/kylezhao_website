import { profile } from '@/src/content/profile';
import type { Metadata } from 'next';
import FlashBackButton from '@/components/FlashBackButton';

export const metadata: Metadata = {
  title: 'contact - kyle',
  description: 'Get in touch with me',
};

const CONTACT_ITEMS = (profile: typeof import('@/src/content/profile').profile) => [
  {
    label: 'email',
    display: profile.links.email,
    href: `mailto:${profile.links.email}`,
    color: '#a855f7',
  },
  {
    label: 'github',
    display: `github.com/${profile.links.github.split('github.com/')[1] || 'kylezhao1026'}`,
    href: profile.links.github,
    color: '#60a5fa',
    external: true,
  },
  {
    label: 'linkedin',
    display: `linkedin.com/in/${profile.links.linkedin.split('linkedin.com/in/')[1]?.replace('/', '') || 'profile'}`,
    href: profile.links.linkedin,
    color: '#2dd4bf',
    external: true,
  },
];

export default function ContactPage() {
  const items = CONTACT_ITEMS(profile);

  return (
    <div className="min-h-screen px-6 py-16 md:py-20 max-w-3xl mx-auto space-y-12">
      <FlashBackButton />

      <div className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight glow-text">
          contact
        </h1>
        <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, #a855f7, transparent)' }} />
        <p className="text-[var(--muted)]">
          open to internships, collaborations, and conversations.
        </p>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noopener noreferrer' : undefined}
            className="group flex items-center justify-between rounded-2xl border border-[var(--border-bright)] bg-[var(--surface)] p-5 hover:border-[var(--accent)] transition-all duration-300"
            style={{ backdropFilter: 'blur(12px)' }}
          >
            <div className="space-y-1">
              <div
                className="text-xs uppercase tracking-[0.3em]"
                style={{ color: item.color }}
              >
                {item.label}
              </div>
              <div className="text-[var(--foreground)] text-sm md:text-base group-hover:text-[var(--accent)] transition-colors">
                {item.display}
              </div>
            </div>
            <span className="text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors text-lg">
              ↗
            </span>
          </a>
        ))}
      </div>

      <div className="pt-2 border-t border-[var(--border)] space-y-1 text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
        <div>typical response time: 24–48 hours</div>
        <div>for urgent matters: reach out via linkedin</div>
      </div>
    </div>
  );
}
