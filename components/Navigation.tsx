'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { profile } from '@/src/content/profile';
import StatusDot from './terminal/StatusDot';

const navLinks = [
  { href: '/', label: 'home', command: 'cd ~' },
  { href: '/projects', label: 'projects', command: 'cd ~/projects' },
  { href: '/resume', label: 'resume', command: 'cat resume.pdf' },
  { href: '/contact', label: 'contact', command: 'mail --to' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b border-border bg-surface/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Terminal Prompt */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity shrink-0"
          >
            <StatusDot />
            <span className="text-sm">
              <span className="text-prompt">user@{profile.name.toLowerCase().replace(' ', '')}:</span>
              <span className="text-accent">~</span>
              <span className="text-prompt">$</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 flex-wrap">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors hover:text-accent px-2 py-1 ${
                  pathname === link.href
                    ? 'text-foreground underline decoration-prompt underline-offset-4'
                    : 'text-muted'
                }`}
                title={link.command}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-surface-hover rounded transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
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
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-3 pb-2 space-y-1 border-t border-border mt-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 px-3 rounded text-sm transition-colors ${
                  pathname === link.href
                    ? 'bg-surface-hover text-foreground'
                    : 'text-muted hover:bg-surface-hover hover:text-foreground'
                }`}
              >
                <span className="text-prompt">$ </span>
                {link.command}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
