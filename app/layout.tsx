import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TerminalLoader from '@/components/TerminalLoader';
import { profile } from '@/src/content/profile';
import './globals.css';

export const metadata: Metadata = {
  title: `${profile.name} — Data Science & AI Student`,
  description: profile.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <TerminalLoader />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
