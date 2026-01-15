import Link from 'next/link';
import { profile } from '@/src/content/profile';
import CommentText from './terminal/CommentText';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-auto bg-surface/30">
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="space-y-1">
            <div className="text-muted">
              <span className="text-prompt">$</span> status --version
            </div>
            <CommentText>online v1.0.0</CommentText>
          </div>

          <div className="flex items-center gap-4 text-muted">
            <Link
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              github
            </Link>
            <span className="text-border">|</span>
            <Link
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              linkedin
            </Link>
            <span className="text-border">|</span>
            <Link
              href={`mailto:${profile.links.email}`}
              className="hover:text-accent transition-colors"
              aria-label="Email"
            >
              email
            </Link>
          </div>
        </div>

        <div className="mt-4 text-center">
          <CommentText>© {currentYear} {profile.name}</CommentText>
        </div>
      </div>
    </footer>
  );
}
