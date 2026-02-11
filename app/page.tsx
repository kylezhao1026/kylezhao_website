'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

type Bubble = {
  label: string;
  href: string;
  icon: string;
  size: number;
  angle: number;
};

export default function Home() {
  const router = useRouter();
  const [flash, setFlash] = useState<{ x: number; y: number } | null>(null);

  const bubbles = useMemo<Bubble[]>(
    () => [
      { label: 'about', href: '/about', icon: '/icons/about.png', size: 172, angle: 45 },
      { label: 'projects', href: '/projects', icon: '/icons/project.png', size: 172, angle: 135 },
      { label: 'resume', href: '/resume', icon: '/icons/resume.png', size: 172, angle: 225 },
      { label: 'contact', href: '/contact', icon: '/icons/contact.png', size: 172, angle: 315 },
    ],
    [],
  );

  const handleBubbleClick = (event: React.MouseEvent<HTMLButtonElement>, href: string) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setFlash({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    window.setTimeout(() => router.push(href), 420);
  };

  return (
    <div className="min-h-screen center-stack px-6">
      <div className="relative bubble-ring">
        <div className="absolute inset-0 z-10">
          {bubbles.map((bubble, index) => (
            <div
              key={bubble.href}
              className="absolute left-1/2 top-1/2 bubble-orbit bubble-enter"
              style={{
                ['--angle' as string]: `${bubble.angle}deg`,
                animationDelay: `${index * 90}ms`,
              }}
            >
              <button
                type="button"
                aria-label={bubble.label}
                title={bubble.label}
                onClick={(event) => handleBubbleClick(event, bubble.href)}
                className="bubble"
                style={{
                  width: bubble.size,
                  height: bubble.size,
                }}
              >
                <img
                  src={bubble.icon}
                  alt=""
                  className="w-full h-full object-contain"
                  style={{ transform: `rotate(${-bubble.angle}deg)` }}
                  draggable={false}
                />
              </button>
            </div>
          ))}
        </div>
        <div className="absolute top-6 left-1/2 -translate-x-1/2 pointer-events-none">
          <span className="text-3xl md:text-4xl tracking-wide text-[var(--muted)]">hi im</span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="text-6xl md:text-7xl tracking-tight text-[#1b1b1b]">kyle zhao</h1>
        </div>
      </div>

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
    </div>
  );
}
