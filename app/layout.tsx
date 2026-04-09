import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import { profile } from '@/src/content/profile';
import Navigation from '@/components/Navigation';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: {
    default: 'kyle zhao',
    template: '%s',
  },
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
    <html lang="en" className={playfair.variable}>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <Navigation />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
