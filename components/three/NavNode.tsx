'use client';

import { useRef, useState } from 'react';
import { useFrame, ThreeEvent } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';
import { Mesh } from 'three';
import type { NavNodeConfig } from './scene-config';

type NavNodeProps = {
  config: NavNodeConfig;
  onNavigate: (href: string, x: number, y: number) => void;
};

function NodeGeometry({ type }: { type: NavNodeConfig['geometry'] }) {
  switch (type) {
    case 'icosahedron':
      return <icosahedronGeometry args={[0.55, 0]} />;
    case 'torus':
      return <torusGeometry args={[0.45, 0.18, 12, 48]} />;
    case 'octahedron':
      return <octahedronGeometry args={[0.6]} />;
    case 'sphere':
      return <sphereGeometry args={[0.5, 32, 32]} />;
  }
}

export default function NavNode({ config, onNavigate }: NavNodeProps) {
  const solidRef = useRef<Mesh>(null);
  const wireRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    if (solidRef.current) {
      solidRef.current.rotation.y += delta * 0.3;
      solidRef.current.rotation.x += delta * 0.12;
    }
    if (wireRef.current) {
      wireRef.current.rotation.y -= delta * 0.15;
      wireRef.current.rotation.x += delta * 0.08;
    }
  });

  const handlePointerOver = () => {
    setHovered(true);
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = () => {
    setHovered(false);
    document.body.style.cursor = 'default';
  };

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    onNavigate(config.href, event.clientX, event.clientY);
  };

  return (
    <Float
      speed={config.floatSpeed}
      floatIntensity={config.floatIntensity}
      rotationIntensity={0.3}
    >
      {/* Solid core mesh */}
      <mesh
        ref={solidRef}
        position={config.position}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
        scale={hovered ? 1.18 : 1}
      >
        <NodeGeometry type={config.geometry} />
        <meshStandardMaterial
          color={config.color}
          emissive={config.emissive}
          emissiveIntensity={hovered ? 2.5 : 1.2}
          roughness={0.15}
          metalness={0.85}
        />
      </mesh>

      {/* Wireframe overlay — counter-rotates for holographic look */}
      <mesh
        ref={wireRef}
        position={config.position}
        scale={hovered ? 1.35 : 1.22}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
      >
        <NodeGeometry type={config.geometry} />
        <meshBasicMaterial
          color={config.color}
          wireframe
          transparent
          opacity={hovered ? 0.5 : 0.2}
        />
      </mesh>

      {/* Always-visible label */}
      <Html
        center
        position={[config.position[0], config.position[1] - 1.05, config.position[2]]}
        distanceFactor={9}
      >
        <div
          style={{
            color: hovered ? config.color : 'rgba(232,232,240,0.55)',
            fontFamily: 'monospace',
            fontSize: '11px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            textShadow: hovered ? `0 0 12px ${config.color}` : 'none',
            transition: 'color 200ms, text-shadow 200ms',
            pointerEvents: 'none',
          }}
        >
          {config.label}
        </div>
      </Html>
    </Float>
  );
}
