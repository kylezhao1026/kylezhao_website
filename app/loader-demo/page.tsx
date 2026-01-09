import { Loader } from '@/components/ui/loader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Loader Demo - Kyle Zhao',
  description: 'Showcase of all available loader variants',
};

export default function LoaderDemoPage() {
  const variants = [
    'circular',
    'classic',
    'pulse',
    'pulse-dot',
    'dots',
    'typing',
    'wave',
    'bars',
    'terminal',
    'text-blink',
    'text-shimmer',
    'loading-dots',
  ] as const;

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Loader Components</h1>
      <p className="text-lg text-[var(--muted)] mb-12">
        A showcase of all available loader variants in different sizes.
      </p>

      {/* All Variants Grid */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">All Variants (Medium Size)</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {variants.map((variant) => (
            <div
              key={variant}
              className="flex flex-col items-center justify-center gap-4 p-6 border border-[var(--border)] rounded-lg hover:border-[var(--muted)] transition-colors"
            >
              <Loader variant={variant} text="Loading" />
              <span className="text-sm text-[var(--muted)] text-center">
                {variant}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Size Variations */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Size Variations</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {['sm', 'md', 'lg'].map((size) => (
            <div
              key={size}
              className="border border-[var(--border)] rounded-lg p-8"
            >
              <h3 className="text-lg font-semibold mb-4 text-center capitalize">
                {size === 'sm' ? 'Small' : size === 'md' ? 'Medium' : 'Large'}
              </h3>
              <div className="flex flex-col items-center gap-6">
                <Loader variant="circular" size={size as 'sm' | 'md' | 'lg'} />
                <Loader variant="dots" size={size as 'sm' | 'md' | 'lg'} />
                <Loader variant="wave" size={size as 'sm' | 'md' | 'lg'} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Text Variants */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Text-Based Loaders</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-[var(--border)] rounded-lg p-8 flex items-center justify-center">
            <Loader variant="loading-dots" text="Loading" size="lg" />
          </div>
          <div className="border border-[var(--border)] rounded-lg p-8 flex items-center justify-center">
            <Loader variant="text-shimmer" text="Processing" size="lg" />
          </div>
          <div className="border border-[var(--border)] rounded-lg p-8 flex items-center justify-center">
            <Loader variant="text-blink" text="Thinking" size="lg" />
          </div>
          <div className="border border-[var(--border)] rounded-lg p-8 flex items-center justify-center">
            <Loader variant="terminal" size="lg" />
          </div>
        </div>
      </div>

      {/* Usage Note */}
      <div className="mt-16 p-6 border-l-4 border-[var(--accent)] bg-[var(--border)] rounded-r-lg">
        <h3 className="font-semibold mb-2">Current Page Loader</h3>
        <p className="text-sm text-[var(--muted)]">
          The website uses the <code className="px-2 py-1 bg-background rounded">pulse</code> variant
          with a fade-in animation on first visit. Clear your browser&apos;s session storage and
          refresh to see it again.
        </p>
      </div>
    </div>
  );
}
