import { profile } from '@/src/content/profile';
import type { Metadata } from 'next';
import FlashBackButton from '@/components/FlashBackButton';

export const metadata: Metadata = {
  title: 'resume - kyle',
  description: 'View and download my resume',
};

export default function ResumePage() {
  return (
    <div className="min-h-screen px-6 py-16 md:py-20 max-w-4xl mx-auto space-y-10">
      <FlashBackButton />
      <div className="space-y-4">
        <h1 className="text-2xl md:text-3xl font-medium tracking-tight">here is my current resume / cv</h1>
      </div>

      <div className="border border-[var(--border)] rounded-2xl overflow-hidden bg-[var(--surface)]">
        <iframe
          src={profile.links.resumePdf}
          className="w-full h-[560px] md:h-[720px]"
          title="Resume PDF"
        />
      </div>
    </div>
  );
}
