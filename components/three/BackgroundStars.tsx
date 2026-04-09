'use client';

import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

export default function BackgroundStars() {
  return (
    <Canvas
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
      camera={{ position: [0, 0, 1] }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: false }}
    >
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0.4}
        fade
        speed={0.5}
      />
      <ambientLight intensity={0.1} />
    </Canvas>
  );
}
