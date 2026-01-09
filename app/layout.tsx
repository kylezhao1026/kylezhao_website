import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TerminalLoader from '@/components/TerminalLoader';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kyle Zhao - Data Science & Software Engineering',
  description: 'Personal website of Kyle Zhao - Data Science & Software Engineering Student',
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
