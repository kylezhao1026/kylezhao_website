import Link from 'next/link';

interface CommandLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}

export default function CommandLink({
  href,
  children,
  external = false,
  className = ''
}: CommandLinkProps) {
  const baseStyles = `
    inline-flex items-center gap-1 px-3 py-1.5
    border border-border rounded
    text-sm text-accent
    transition-all
    hover:border-border-bright hover:bg-surface-hover hover:text-accent-hover
    focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background
  `;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${className}`}
      >
        <span className="text-prompt">$</span>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${baseStyles} ${className}`}>
      <span className="text-prompt">$</span>
      {children}
    </Link>
  );
}
