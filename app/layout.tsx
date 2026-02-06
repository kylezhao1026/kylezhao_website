import type { Metadata } from 'next';
import { profile } from '@/src/content/profile';
import './globals.css';

export const metadata: Metadata = {
  title: `${profile.name} — Data Science & AI Student`,
  description: profile.tagline,
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
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
