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
        bg-surface/80 border border-border rounded-md p-5 md:p-6
        ${hover ? 'transition-all duration-200 hover:border-border-bright hover:bg-surface-hover' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
