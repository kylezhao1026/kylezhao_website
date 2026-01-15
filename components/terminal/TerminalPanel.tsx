interface TerminalPanelProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function TerminalPanel({
  children,
  className = '',
  hover = false
}: TerminalPanelProps) {
  return (
    <div
      className={`
        bg-surface border border-border rounded-md p-4 md:p-6
        ${hover ? 'transition-colors hover:border-border-bright hover:bg-surface-hover' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
