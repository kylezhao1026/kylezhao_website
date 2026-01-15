interface TerminalHeadingProps {
  level?: 1 | 2 | 3;
  children: React.ReactNode;
  className?: string;
}

export default function TerminalHeading({
  level = 1,
  children,
  className = ''
}: TerminalHeadingProps) {
  // Size configurations for different heading levels
  const sizes = {
    1: 'text-2xl md:text-4xl',
    2: 'text-xl md:text-3xl',
    3: 'text-lg md:text-2xl'
  };

  // Symbol sizes that scale with heading size
  const symbolSizes = {
    1: 'text-xl md:text-3xl',
    2: 'text-lg md:text-2xl',
    3: 'text-base md:text-xl'
  };

  return (
    <div className={`flex items-center gap-2 md:gap-3 ${className}`}>
      {/* Terminal prompt symbols */}
      <span className={`${symbolSizes[level]} text-prompt select-none shrink-0 font-bold leading-none`}>
        #
      </span>
      <span className={`${symbolSizes[level]} text-accent select-none shrink-0 font-bold leading-none`}>
        &gt;
      </span>

      {/* Heading text */}
      <h1 className={`${sizes[level]} font-bold leading-none`}>
        {children}
      </h1>
    </div>
  );
}
