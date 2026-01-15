import { profile } from '@/src/content/profile';
import type { Metadata } from 'next';
import PromptText from '@/components/terminal/PromptText';
import CommentText from '@/components/terminal/CommentText';
import TerminalPanel from '@/components/terminal/TerminalPanel';
import CommandLink from '@/components/terminal/CommandLink';
import TerminalHeading from '@/components/terminal/TerminalHeading';

export const metadata: Metadata = {
  title: `Contact — ${profile.name}`,
  description: 'Get in touch with me',
};

export default function ContactPage() {
  const githubUsername = profile.links.github.split('github.com/')[1] || 'kylezhao1026';
  const linkedinProfile = profile.links.linkedin.split('linkedin.com/in/')[1]?.replace('/', '') || 'profile';

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12 space-y-8">
      {/* Header */}
      <section className="space-y-3">
        <TerminalHeading level={1}>Contact</TerminalHeading>
        <CommentText>open to internships, collaborations, and conversations</CommentText>
      </section>

      {/* Contact Info */}
      <section className="space-y-4">
        <PromptText symbol="$">cat contact.info</PromptText>

        <TerminalPanel>
          <div className="space-y-4 text-sm">
            {/* Email */}
            <div>
              <CommentText>email</CommentText>
              <div className="mt-1.5">
                <a
                  href={`mailto:${profile.links.email}`}
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  {profile.links.email}
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div>
              <CommentText>github</CommentText>
              <div className="mt-1.5">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  github.com/{githubUsername}
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div>
              <CommentText>linkedin</CommentText>
              <div className="mt-1.5">
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  linkedin.com/in/{linkedinProfile}
                </a>
              </div>
            </div>
          </div>
        </TerminalPanel>
      </section>

      {/* Quick Actions */}
      <section className="space-y-3">
        <PromptText symbol="$">mail --quick-actions</PromptText>
        <div className="flex flex-wrap gap-3">
          <CommandLink href={`mailto:${profile.links.email}`} external>
            send email
          </CommandLink>
          <CommandLink href={profile.links.linkedin} external>
            connect on linkedin
          </CommandLink>
        </div>
      </section>

      {/* Response Info */}
      <section className="pt-4">
        <TerminalPanel>
          <div className="text-xs text-muted space-y-2">
            <div>
              <span className="text-prompt">›</span> typical response time: 24-48 hours
            </div>
            <div>
              <span className="text-prompt">›</span> for urgent matters: reach out via linkedin
            </div>
          </div>
        </TerminalPanel>
      </section>
    </div>
  );
}
