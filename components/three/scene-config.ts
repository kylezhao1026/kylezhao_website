export type NodeGeometry = 'icosahedron' | 'torus' | 'octahedron' | 'sphere';

export type NavNodeConfig = {
  id: string;
  label: string;
  href: string;
  geometry: NodeGeometry;
  color: string;
  emissive: string;
  position: [number, number, number];
  floatSpeed: number;
  floatIntensity: number;
};

export const NAV_NODES: NavNodeConfig[] = [
  {
    id: 'about',
    label: 'about',
    href: '/about',
    geometry: 'icosahedron',
    color: '#a855f7',
    emissive: '#7c3aed',
    position: [-2.4, 1.3, 0],
    floatSpeed: 1.4,
    floatIntensity: 0.6,
  },
  {
    id: 'projects',
    label: 'projects',
    href: '/projects',
    geometry: 'torus',
    color: '#60a5fa',
    emissive: '#2563eb',
    position: [2.4, 1.3, 0],
    floatSpeed: 1.8,
    floatIntensity: 0.8,
  },
  {
    id: 'resume',
    label: 'resume',
    href: '/resume',
    geometry: 'octahedron',
    color: '#2dd4bf',
    emissive: '#0d9488',
    position: [-2.4, -1.3, 0],
    floatSpeed: 1.2,
    floatIntensity: 0.5,
  },
  {
    id: 'contact',
    label: 'contact',
    href: '/contact',
    geometry: 'sphere',
    color: '#f472b6',
    emissive: '#db2777',
    position: [2.4, -1.3, 0],
    floatSpeed: 1.6,
    floatIntensity: 0.7,
  },
];

// All C(4,2) = 6 pairs for connection lines
export const NODE_CONNECTIONS: [number, number][] = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 2],
  [1, 3],
  [2, 3],
];
