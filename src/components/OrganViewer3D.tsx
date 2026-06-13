import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import type { Group, Mesh } from "three";

export type OrganModelType =
  | "brain"
  | "heart"
  | "lungs"
  | "spine"
  | "digestive"
  | "skeleton"
  | "generic";

const ORGAN_MODEL_MAP: Record<string, OrganModelType> = {
  brain: "brain",
  "frontal-lobe": "brain",
  "temporal-lobe": "brain",
  heart: "heart",
  "lung-left": "lungs",
  "lung-right": "lungs",
  "spine-cervical": "spine",
  "spine-thoracic": "spine",
  "spine-lumbar": "spine",
  bones: "skeleton",
  stomach: "digestive",
  "small-intestine": "digestive",
  "large-intestine": "digestive",
  liver: "digestive",
};

export function getOrganModelType(organId: string): OrganModelType {
  return ORGAN_MODEL_MAP[organId] ?? "generic";
}

const TEAL = "#FC3D21";
const BONE = "#EAEAEA";
const MUTED_BLUE = "#4A6FA5";

function BrainModel({ wireframe }: { wireframe: boolean }) {
  const group = useRef<Group>(null);
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.25;
  });

  const lobeColors = ["#FC3D21", "#0B3D91", "#4DC8E5", "#F5A623"];

  return (
    <group ref={group}>
      <mesh position={[0, 0.15, 0]}>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshStandardMaterial
          color={lobeColors[0]}
          emissive={lobeColors[0]}
          emissiveIntensity={0.15}
          wireframe={wireframe}
          transparent
          opacity={0.92}
        />
      </mesh>
      {[
        [0, 0.35, 0.2],
        [-0.35, 0, 0],
        [0.35, 0, 0],
        [0, -0.1, -0.25],
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} scale={0.55}>
          <sphereGeometry args={[0.4, 24, 24]} />
          <meshStandardMaterial
            color={lobeColors[i]}
            emissive={lobeColors[i]}
            emissiveIntensity={0.12}
            wireframe={wireframe}
            transparent
            opacity={0.75}
          />
        </mesh>
      ))}
    </group>
  );
}

function HeartModel({ wireframe }: { wireframe: boolean }) {
  const mesh = useRef<Mesh>(null);
  useFrame((state) => {
    if (!mesh.current) return;
    const beat = Math.sin(state.clock.elapsedTime * (Math.PI * 2) / 1) * 0.02 + 1;
    mesh.current.scale.setScalar(beat);
  });

  return (
    <group rotation={[0, Math.PI / 4, 0]}>
      <mesh ref={mesh}>
        <sphereGeometry args={[0.45, 32, 32]} />
        <meshStandardMaterial
          color="#FC3D21"
          emissive="#FC3D21"
          emissiveIntensity={0.2}
          wireframe={wireframe}
        />
      </mesh>
      <mesh position={[-0.2, 0.1, 0]} scale={0.5}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial color={TEAL} emissive={TEAL} emissiveIntensity={0.1} wireframe={wireframe} />
      </mesh>
      <mesh position={[0.2, 0.1, 0]} scale={0.5}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial color={MUTED_BLUE} emissive={MUTED_BLUE} emissiveIntensity={0.1} wireframe={wireframe} />
      </mesh>
    </group>
  );
}

function LungsModel({ wireframe }: { wireframe: boolean }) {
  const group = useRef<Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    const breath = Math.sin(state.clock.elapsedTime * (Math.PI * 2) / 4) * 0.08 + 1;
    group.current.scale.set(breath, breath, breath);
  });

  return (
    <group ref={group}>
      <mesh position={[-0.35, 0, 0]} scale={[0.5, 0.9, 0.6]}>
        <sphereGeometry args={[0.6, 24, 24]} />
        <meshStandardMaterial color={TEAL} emissive={TEAL} emissiveIntensity={0.12} wireframe={wireframe} transparent opacity={0.85} />
      </mesh>
      <mesh position={[0.35, 0, 0]} scale={[0.55, 1, 0.65]}>
        <sphereGeometry args={[0.6, 24, 24]} />
        <meshStandardMaterial color={TEAL} emissive={TEAL} emissiveIntensity={0.12} wireframe={wireframe} transparent opacity={0.85} />
      </mesh>
    </group>
  );
}

function SpineModel({ wireframe }: { wireframe: boolean }) {
  const group = useRef<Group>(null);
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.2;
  });

  const sections = [
    { y: 1.2, color: "#4DC8E5", scale: 0.35 },
    { y: 0.4, color: TEAL, scale: 0.4 },
    { y: -0.4, color: "#0B3D91", scale: 0.42 },
    { y: -1.1, color: BONE, scale: 0.38 },
  ];

  return (
    <group ref={group}>
      {sections.map((s, i) => (
        <group key={i} position={[0, s.y, 0]}>
          <mesh scale={[s.scale, s.scale * 0.6, s.scale * 0.5]}>
            <cylinderGeometry args={[0.5, 0.5, 0.35, 8]} />
            <meshStandardMaterial color={s.color} emissive={s.color} emissiveIntensity={0.1} wireframe={wireframe} />
          </mesh>
          {[...Array(3)].map((_, j) => (
            <mesh key={j} position={[0, -0.15 - j * 0.12, 0]} rotation={[0, 0, Math.PI / 2]}>
              <torusGeometry args={[0.35, 0.04, 8, 16]} />
              <meshStandardMaterial color={BONE} wireframe={wireframe} opacity={0.6} transparent />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
}

function DigestiveModel({ wireframe }: { wireframe: boolean }) {
  const tube = useRef<Mesh>(null);
  useFrame((state) => {
    if (!tube.current) return;
    const wave = Math.sin(state.clock.elapsedTime * 2) * 0.05;
    tube.current.scale.y = 1 + wave;
  });

  return (
    <group rotation={[0.3, 0.5, 0]}>
      <mesh position={[0, 0.8, 0]}>
        <cylinderGeometry args={[0.12, 0.15, 0.5, 12]} />
        <meshStandardMaterial color="#F5A623" emissive="#F5A623" emissiveIntensity={0.1} wireframe={wireframe} />
      </mesh>
      <mesh ref={tube} position={[0, 0.2, 0]}>
        <sphereGeometry args={[0.35, 24, 24]} />
        <meshStandardMaterial color="#FC3D21" emissive="#FC3D21" emissiveIntensity={0.08} wireframe={wireframe} />
      </mesh>
      <mesh position={[0, -0.5, 0]}>
        <torusGeometry args={[0.4, 0.12, 12, 24]} />
        <meshStandardMaterial color={TEAL} emissive={TEAL} emissiveIntensity={0.1} wireframe={wireframe} />
      </mesh>
      <mesh position={[0, -1, 0]} scale={[0.5, 1.2, 0.5]}>
        <cylinderGeometry args={[0.2, 0.18, 0.8, 12]} />
        <meshStandardMaterial color="#0B3D91" emissive="#0B3D91" emissiveIntensity={0.08} wireframe={wireframe} />
      </mesh>
    </group>
  );
}

function SkeletonModel({ wireframe }: { wireframe: boolean }) {
  const group = useRef<Group>(null);
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.3;
  });

  const boneProps = {
    color: BONE,
    emissive: BONE,
    emissiveIntensity: 0.08,
    wireframe,
  };

  return (
    <group ref={group} scale={0.9}>
      <mesh position={[0, 1.6, 0]}>
        <sphereGeometry args={[0.22, 16, 16]} />
        <meshStandardMaterial {...boneProps} />
      </mesh>
      <mesh position={[0, 1.2, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.35, 8]} />
        <meshStandardMaterial {...boneProps} />
      </mesh>
      <mesh position={[0, 0.5, 0]} scale={[1.2, 1.8, 0.4]}>
        <boxGeometry args={[0.5, 0.5, 0.3]} />
        <meshStandardMaterial {...boneProps} />
      </mesh>
      <mesh position={[-0.55, 0.6, 0]} rotation={[0, 0, 0.4]}>
        <cylinderGeometry args={[0.04, 0.04, 0.7, 8]} />
        <meshStandardMaterial {...boneProps} />
      </mesh>
      <mesh position={[0.55, 0.6, 0]} rotation={[0, 0, -0.4]}>
        <cylinderGeometry args={[0.04, 0.04, 0.7, 8]} />
        <meshStandardMaterial {...boneProps} />
      </mesh>
      <mesh position={[-0.2, -0.6, 0]}>
        <cylinderGeometry args={[0.05, 0.04, 0.9, 8]} />
        <meshStandardMaterial {...boneProps} />
      </mesh>
      <mesh position={[0.2, -0.6, 0]}>
        <cylinderGeometry args={[0.05, 0.04, 0.9, 8]} />
        <meshStandardMaterial {...boneProps} />
      </mesh>
      <mesh position={[0, 0.2, -0.1]}>
        <cylinderGeometry args={[0.03, 0.03, 1.4, 8]} />
        <meshStandardMaterial {...boneProps} />
      </mesh>
    </group>
  );
}

function GenericOrganModel({ wireframe }: { wireframe: boolean }) {
  const mesh = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (mesh.current) mesh.current.rotation.y += delta * 0.35;
  });

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[0.6, 2]} />
      <meshStandardMaterial
        color={TEAL}
        emissive={TEAL}
        emissiveIntensity={0.15}
        wireframe={wireframe}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}

function OrganScene({ modelType, wireframe }: { modelType: OrganModelType; wireframe: boolean }) {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 4, 4]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-3, 2, 2]} intensity={0.6} color={TEAL} />
      <pointLight position={[3, -2, -2]} intensity={0.3} color="#0B3D91" />

      {modelType === "brain" && <BrainModel wireframe={wireframe} />}
      {modelType === "heart" && <HeartModel wireframe={wireframe} />}
      {modelType === "lungs" && <LungsModel wireframe={wireframe} />}
      {modelType === "spine" && <SpineModel wireframe={wireframe} />}
      {modelType === "digestive" && <DigestiveModel wireframe={wireframe} />}
      {modelType === "skeleton" && <SkeletonModel wireframe={wireframe} />}
      {modelType === "generic" && <GenericOrganModel wireframe={wireframe} />}

      <OrbitControls
        enablePan={false}
        minDistance={1.5}
        maxDistance={5}
        autoRotate={modelType !== "heart" && modelType !== "lungs"}
        autoRotateSpeed={0.8}
      />
    </>
  );
}

interface OrganViewer3DProps {
  organId: string | null;
  className?: string;
}

export function OrganViewer3D({ organId, className = "" }: OrganViewer3DProps) {
  const [wireframe, setWireframe] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const modelType = organId ? getOrganModelType(organId) : "skeleton";

  if (!mounted) {
    return (
      <div className={`flex items-center justify-center rounded-xl border border-[#222222] bg-[#030303]/80 ${className}`}>
        <div className="text-xs text-[#8A8F98] animate-pulse">Loading 3D viewer...</div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-xl border border-[#222222] bg-[#030303]/80 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 2.8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <OrganScene modelType={organId ? modelType : "skeleton"} wireframe={wireframe} />
        </Suspense>
      </Canvas>

      <button
        onClick={() => setWireframe((w) => !w)}
        className="absolute bottom-3 right-3 rounded-full border border-[#222222] bg-[#0F0F0F]/90 px-3 py-1 text-[10px] font-medium text-[#8A8F98] backdrop-blur-sm transition-colors hover:border-[#FC3D21]/30 hover:text-[#FC3D21]"
      >
        {wireframe ? "Solid" : "Wireframe"}
      </button>

      {!organId && (
        <div className="pointer-events-none absolute inset-x-0 top-3 text-center text-[10px] uppercase tracking-wider text-[#8A8F98]">
          Tap an organ to explore in 3D
        </div>
      )}
    </div>
  );
}
