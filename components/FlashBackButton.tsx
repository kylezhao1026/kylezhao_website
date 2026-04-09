'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type FlashBackButtonProps = {
  href?: string;
  label?: string;
};

export default function FlashBackButton({ href = '/', label = 'back' }: FlashBackButtonProps) {
  const router = useRouter();
  const [flash, setFlash] = useState<{ x: number; y: number } | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setFlash({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    window.setTimeout(() => router.push(href), 380);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className="text-sm uppercase tracking-[0.3em] text-[var(--muted)] hover:text-[var(--accent)] transition-colors flex items-center gap-2 group"
      >
        <span className="group-hover:text-[var(--accent)] transition-colors">←</span>
        {label}
      </button>
      {flash && (
        <div
          className="flash-overlay flash-anim"
          style={
            {
              '--flash-x': `${flash.x}px`,
              '--flash-y': `${flash.y}px`,
            } as React.CSSProperties
          }
        />
      )}
    </>
  );
}
