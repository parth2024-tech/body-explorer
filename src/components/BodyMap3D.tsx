import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Line, Sphere, Text } from '@react-three/drei';
import * as THREE from 'three';
import { useBodyStore } from '@/store/useBodyStore';
import { BODY_PARTS, ORGAN_CENTROIDS, ORGAN_CONNECTIONS, getSC } from '@/data/anatomy';

// Node component for each organ
function OrganNode({ id, position, name, system, isSelected, isHovered, onHover, onSelect }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  const sc = getSC(system);
  
  // Base color matches system, but in editorial style we prefer it muted until active
  const baseColor = new THREE.Color(sc.stroke);
  const activeColor = new THREE.Color(sc.glow);
  const inactiveColor = new THREE.Color('#8A8F98');
  
  const targetScale = isSelected ? 1.5 : isHovered ? 1.2 : 1;
  const targetColor = isSelected ? activeColor : isHovered ? baseColor : inactiveColor;

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 10);
      (meshRef.current.material as THREE.MeshPhysicalMaterial).color.lerp(targetColor, delta * 5);
      
      if (isSelected) {
        meshRef.current.rotation.y += delta;
      }
    }
  });

  return (
    <group position={position}>
      <Sphere
        ref={meshRef}
        args={[0.3, 32, 32]}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(id);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          onHover(id);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          onHover(null);
          document.body.style.cursor = 'auto';
        }}
      >
        <meshPhysicalMaterial 
          clearcoat={1}
          clearcoatRoughness={0.1}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.9}
        />
      </Sphere>
      
      {/* Label for hovered or selected nodes */}
      {(isHovered || isSelected) && (
        <Text
          position={[0, 0.6, 0]}
          fontSize={0.25}
          color={isSelected ? sc.glow : '#1A1A1A'}
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/spacemono/v12/i7dPIFZifjKcF5UAWdDRYEF8RQ.woff"
          outlineWidth={0.02}
          outlineColor="#FDFBF7"
        >
          {name.toUpperCase()}
        </Text>
      )}
    </group>
  );
}

// Connection lines between organs
function Connections() {
  const lines = useMemo(() => {
    return ORGAN_CONNECTIONS.map((conn) => {
      const fromPos = ORGAN_CENTROIDS[conn.from];
      const toPos = ORGAN_CENTROIDS[conn.to];
      if (!fromPos || !toPos) return null;
      return {
        key: `${conn.from}-${conn.to}`,
        points: [
          new THREE.Vector3(fromPos.x, fromPos.y, fromPos.z),
          new THREE.Vector3(toPos.x, toPos.y, toPos.z),
        ]
      };
    }).filter(Boolean);
  }, []);

  return (
    <group>
      {lines.map((line: any) => (
        <Line
          key={line.key}
          points={line.points}
          color="#E5E0D8" // border color from editorial palette
          lineWidth={1}
          transparent
          opacity={0.4}
        />
      ))}
    </group>
  );
}

// Group to hold all body parts and center them
function BodyAssembly() {
  const { selectedPart, setSelectedPart } = useBodyStore();
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);
  const groupRef = useRef<THREE.Group>(null);

  // Slowly rotate the entire assembly
  useFrame((state, delta) => {
    if (groupRef.current && !hoveredPart && !selectedPart) {
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      <Connections />
      {BODY_PARTS.map((part) => {
        const pos = ORGAN_CENTROIDS[part.id];
        if (!pos) return null;
        return (
          <OrganNode
            key={part.id}
            id={part.id}
            name={part.name}
            system={part.system}
            position={[pos.x, pos.y, pos.z]}
            isSelected={selectedPart === part.id}
            isHovered={hoveredPart === part.id}
            onHover={setHoveredPart}
            onSelect={setSelectedPart}
          />
        );
      })}
    </group>
  );
}

export function BodyMap3D() {
  return (
    <div className="w-full h-[600px] lg:h-[800px] relative rounded-lg overflow-hidden bg-transparent">
      <Canvas camera={{ position: [0, 2, 18], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        <pointLight position={[0, 5, 0]} intensity={2} color="#D44D4D" distance={20} />
        
        <BodyAssembly />
        
        <OrbitControls 
          enablePan={false}
          minDistance={8}
          maxDistance={25}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 4}
          autoRotate={false}
        />
      </Canvas>
      
      {/* 3D Overlay Help Text */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none">
        <div className="bg-background/80 backdrop-blur-md border border-border px-4 py-2 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-foreground font-bold">
            Interactive 3D Atlas — Drag to Rotate
          </span>
        </div>
      </div>
    </div>
  );
}
