interface PromptTextProps {
  symbol?: '$' | '#' | '>';
  children: React.ReactNode;
  className?: string;
}

export default function PromptText({
  symbol = '$',
  children,
  className = ''
}: PromptTextProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-prompt select-none shrink-0 leading-none">{symbol}</span>
      <span className="flex-1">{children}</span>
    </div>
  );
}
