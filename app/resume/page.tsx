import { profile } from '@/src/content/profile';
import type { Metadata } from 'next';
import PromptText from '@/components/terminal/PromptText';
import CommentText from '@/components/terminal/CommentText';
import CommandLink from '@/components/terminal/CommandLink';
import TerminalHeading from '@/components/terminal/TerminalHeading';

export const metadata: Metadata = {
  title: `Resume — ${profile.name}`,
  description: 'View and download my resume',
};

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-10 md:py-16 space-y-10">
      {/* Header */}
      <section className="space-y-4">
        <TerminalHeading level={1}>Resume</TerminalHeading>
        <CommentText>experience, education, and skills</CommentText>
      </section>

      {/* Download Command */}
      <section className="space-y-4">
        <PromptText symbol="$">cat resume.pdf</PromptText>
        <div className="flex gap-3">
          <CommandLink href={profile.links.resumePdf} external>
            download resume.pdf
          </CommandLink>
        </div>
      </section>

      {/* PDF Viewer */}
      <section className="border border-border rounded-md overflow-hidden bg-surface">
        <iframe
          src={profile.links.resumePdf}
          className="w-full h-[600px] md:h-[800px]"
          title="Resume PDF"
        />
      </section>
    </div>
  );
}
