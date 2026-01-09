'use client';

import { useEffect, useState } from 'react';
import { Loader } from '@/components/ui/loader';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = sessionStorage.getItem('hasVisited');

    if (hasVisited) {
      // If already visited in this session, don't show loader
      setIsLoading(false);
      setIsVisible(false);
      return;
    }

    // Mark as visited
    sessionStorage.setItem('hasVisited', 'true');

    // Simulate minimum loading time for smooth experience
    const minLoadTime = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Start fade out animation
    const fadeOutTimer = setTimeout(() => {
      setIsVisible(false);
    }, 1800);

    return () => {
      clearTimeout(minLoadTime);
      clearTimeout(fadeOutTimer);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 ${
        isLoading ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden={!isLoading}
    >
      <div className="flex flex-col items-center gap-4">
        <Loader variant="pulse" size="lg" className="scale-150" />
        <p className="text-sm text-muted animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
