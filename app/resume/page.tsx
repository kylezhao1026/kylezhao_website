import { profile } from '@/src/content/profile';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Resume — ${profile.name}`,
  description: 'View and download my resume',
};

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Resume</h1>
      <p className="text-lg text-[var(--muted)] mb-8">
        View my experience, education, and skills.
      </p>

      {/* Summary Highlights */}
      <div className="mb-8 p-6 border border-[var(--border)] rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Key Highlights</h2>
        <ul className="space-y-2 text-[var(--muted)]">
          <li>• {profile.bio.split('\n')[0]}</li>
          <li>• {profile.bio.split('\n')[1]}</li>
          {profile.interests.slice(0, 3).map((interest) => (
            <li key={interest}>• {interest}</li>
          ))}
        </ul>
      </div>

      {/* Download Button */}
      <div className="mb-8">
        <a
          href={profile.links.resumePdf}
          download
          className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-lg hover:opacity-90 transition-opacity"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Resume
        </a>
      </div>

      {/* PDF Viewer */}
      <div className="border border-[var(--border)] rounded-lg overflow-hidden bg-[var(--border)]">
        <iframe
          src={profile.links.resumePdf}
          className="w-full h-[800px]"
          title="Resume PDF"
        />
      </div>
    </div>
  );
}
