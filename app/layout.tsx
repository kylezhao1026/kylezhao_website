import type { Metadata } from 'next';
import { profile } from '@/src/content/profile';
import './globals.css';

export const metadata: Metadata = {
  title: `${profile.name} — Data Science & AI Student`,
  description: profile.tagline,
  icons: {
    icon: [{ url: '/fav_icon.png', type: 'image/png' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <main>{children}</main>
      </body>
    </html>
  );
}
