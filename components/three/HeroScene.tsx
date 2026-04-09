'use client';

import { useRef } from 'react';
import { useFrame, Canvas } from '@react-three/fiber';
import { Group } from 'three';

const RINGS = [
  { radius: 2.2, tube: 0.008, rotation: [Math.PI / 2, 0, 0],           speed: 0.08  },
  { radius: 1.8, tube: 0.010, rotation: [Math.PI / 3, Math.PI / 5, 0], speed: -0.12 },
  { radius: 2.6, tube: 0.006, rotation: [Math.PI / 6, Math.PI / 4, 0], speed: 0.06  },
  { radius: 1.4, tube: 0.012, rotation: [0, Math.PI / 3, Math.PI / 6], speed: -0.09 },
  { radius: 3.0, tube: 0.005, rotation: [Math.PI / 4, 0, Math.PI / 5], speed: 0.04  },
];

function OrbitalRings() {
  const refs = useRef<(Group | null)[]>([]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    refs.current.forEach((ref, i) => {
      if (ref) ref.rotation.y = t * RINGS[i].speed;
    });
  });

  return (
    <>
      {RINGS.map((ring, i) => (
        <group
          key={i}
          ref={(el) => { refs.current[i] = el; }}
          rotation={ring.rotation as [number, number, number]}
        >
          <mesh>
            <torusGeometry args={[ring.radius, ring.tube, 8, 180]} />
            <meshBasicMaterial
              color="#92400e"
              transparent
              opacity={0.28 - i * 0.03}
            />
          </mesh>
        </group>
      ))}

      {/* Small node dots on the rings */}
      {[0, 1, 2, 3].map((i) => (
        <mesh key={`dot-${i}`} position={[
          Math.cos(i * Math.PI / 2) * 2.2,
          Math.sin(i * Math.PI / 2) * 0.3,
          Math.sin(i * Math.PI / 2) * 2.2,
        ]}>
          <sphereGeometry args={[0.045, 10, 10]} />
          <meshBasicMaterial color="#7c3009" />
        </mesh>
      ))}
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 50 }}
      dpr={[1, 1.5]}
      style={{ width: '100%', height: '100%' }}
      gl={{ alpha: true, antialias: true }}
    >
      <OrbitalRings />
    </Canvas>
  );
}
