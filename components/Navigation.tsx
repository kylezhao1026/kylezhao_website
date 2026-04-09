'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { label: 'about', href: '/#about' },
  { label: 'projects', href: '/#projects' },
  { label: 'contact', href: '/#contact' },
  { label: 'resume', href: '/resume' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={
        scrolled
          ? {
              backdropFilter: 'blur(16px)',
              background: 'rgba(245, 240, 232, 0.85)',
              borderBottom: '1px solid var(--border)',
            }
          : {}
      }
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/#hero"
          className="text-sm font-mono tracking-wider text-[var(--foreground)] hover:text-[var(--accent)] transition-colors duration-200"
        >
          kyle zhao
        </Link>
        <div className="flex items-center gap-7">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-xs tracking-[0.2em] uppercase text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
