'use client';

import { useEffect, useState } from 'react';

// ============ TIMING CONSTANTS (ADJUST THESE) ============
const FULL_TEXT = 'loading cool website';
const TYPING_SPEED = 60; // ms per character
const MIN_VISIBLE_TIME = 1000; // minimum time loader stays visible
const PAUSE_AFTER_TYPING = 500; // pause after typing before fade
const FADE_OUT_DURATION = 600; // fade out animation duration

// State machine: typing → paused → fading → done
type LoaderState = 'typing' | 'paused' | 'fading' | 'done';

export default function TerminalLoader() {
  const [displayedText, setDisplayedText] = useState('');
  const [loaderState, setLoaderState] = useState<LoaderState>('typing');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [startTime] = useState(() => Date.now());

  useEffect(() => {
    // Check if user has already visited in this session
    const hasVisited = sessionStorage.getItem('hasVisitedTerminal');
    if (hasVisited) {
      setLoaderState('done');
      return;
    }

    // Mark as visited
    sessionStorage.setItem('hasVisitedTerminal', 'true');

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // If reduced motion, show full text immediately but still enforce min visible time
    if (mediaQuery.matches) {
      setDisplayedText(FULL_TEXT);

      // Calculate time already elapsed
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, MIN_VISIBLE_TIME - elapsed);

      // Go to paused, then fading
      setTimeout(() => {
        setLoaderState('fading');

        setTimeout(() => {
          setLoaderState('done');
        }, FADE_OUT_DURATION);
      }, remainingTime + PAUSE_AFTER_TYPING);

      return;
    }

    // ============ TYPING ANIMATION ============
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < FULL_TEXT.length) {
        setDisplayedText(FULL_TEXT.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);

        // Calculate elapsed time and enforce minimum visible time
        const elapsed = Date.now() - startTime;
        const remainingMinTime = Math.max(0, MIN_VISIBLE_TIME - elapsed);
        const totalPauseTime = Math.max(PAUSE_AFTER_TYPING, remainingMinTime);

        setLoaderState('paused');

        // After pause, start fade
        setTimeout(() => {
          setLoaderState('fading');

          // After fade completes, unmount
          setTimeout(() => {
            setLoaderState('done');
          }, FADE_OUT_DURATION);
        }, totalPauseTime);
      }
    }, TYPING_SPEED);

    return () => clearInterval(typingInterval);
  }, [startTime]);

  // Don't render if done
  if (loaderState === 'done') {
    return null;
  }

  // At this point, loaderState is: 'typing' | 'paused' | 'fading'
  const isVisible = loaderState !== 'fading';

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-[600ms] ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-live="polite"
      aria-busy={loaderState === 'typing'}
    >
      <div className="terminal-window rounded-md bg-surface p-8 shadow-2xl border border-border">
        <div className="flex items-center font-mono text-sm md:text-base">
          <span className="text-prompt mr-2">$</span>
          <span className="text-foreground">{displayedText}</span>
          <span
            className={`inline-block w-2 h-4 bg-prompt ml-1 ${
              prefersReducedMotion ? '' : 'animate-cursor-blink'
            }`}
            aria-hidden="true"
          >
            &nbsp;
          </span>
        </div>
      </div>
    </div>
  );
}
