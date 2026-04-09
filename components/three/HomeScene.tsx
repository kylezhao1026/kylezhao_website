'use client';

import { Canvas } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import NavNode from './NavNode';
import { NAV_NODES, NODE_CONNECTIONS } from './scene-config';

type HomeSceneProps = {
  onNavigate: (href: string, x: number, y: number) => void;
};

export default function HomeScene({ onNavigate }: HomeSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 55 }}
      dpr={[1, 1.5]}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.1} />
      <pointLight position={[0, 0, 4]} intensity={0.8} color="#a855f7" />
      <pointLight position={[4, 3, 2]} intensity={0.6} color="#60a5fa" />
      <pointLight position={[-4, -3, 2]} intensity={0.5} color="#2dd4bf" />

      {NODE_CONNECTIONS.map(([i, j]) => (
        <Line
          key={`${i}-${j}`}
          points={[NAV_NODES[i].position, NAV_NODES[j].position]}
          color="#818cf8"
          lineWidth={0.8}
          opacity={0.35}
          transparent
        />
      ))}

      {NAV_NODES.map((node) => (
        <NavNode key={node.id} config={node} onNavigate={onNavigate} />
      ))}

      <EffectComposer>
        <Bloom
          intensity={1.8}
          luminanceThreshold={0.1}
          luminanceSmoothing={0.85}
          mipmapBlur
          radius={0.7}
        />
      </EffectComposer>
    </Canvas>
  );
}
