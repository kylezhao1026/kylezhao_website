'use client';

import dynamic from 'next/dynamic';

const BackgroundStars = dynamic(() => import('./BackgroundStars'), {
  ssr: false,
  loading: () => null,
});

export default function CosmicBackground() {
  return <BackgroundStars />;
}
