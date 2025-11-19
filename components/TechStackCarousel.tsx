
import React, { useRef, useState, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';
import { TECH_STACK_LOGOS } from '../constants';

// Augment React's JSX namespace for R3F elements
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      planeGeometry: any;
      meshPhysicalMaterial: any;
      meshBasicMaterial: any;
      fog: any;
      ambientLight: any;
      pointLight: any;
    }
  }
}

// Augment global JSX namespace as fallback
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      planeGeometry: any;
      meshPhysicalMaterial: any;
      meshBasicMaterial: any;
      fog: any;
      ambientLight: any;
      pointLight: any;
    }
  }
}

interface LogoCardProps {
  name: string;
  position: [number, number, number];
  index: number;
}

const LogoCard: React.FC<LogoCardProps> = ({ name, position, index }) => {
  const ref = useRef<THREE.Group>(null);
  const [hovered, setHover] = useState(false);

  useFrame((state, delta) => {
    if (ref.current) {
      if (hovered) {
        ref.current.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2), 0.1);
        // Smoothly tilt a bit on hover instead of jittering
        ref.current.rotation.z = THREE.MathUtils.lerp(ref.current.rotation.z, 0.05, 0.1);
      } else {
        ref.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
        ref.current.rotation.z = THREE.MathUtils.lerp(ref.current.rotation.z, 0, 0.1);
      }
    }
  });

  return (
    <group 
      ref={ref} 
      position={position}
      onPointerOver={() => { document.body.style.cursor = 'pointer'; setHover(true); }}
      onPointerOut={() => { document.body.style.cursor = 'auto'; setHover(false); }}
    >
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Glass Background */}
        <mesh position={[0, 0, 0]}>
          <planeGeometry args={[2.8, 1.6]} />
          <meshPhysicalMaterial
            color={hovered ? "#2a2a2a" : "#050505"}
            transparent
            opacity={hovered ? 0.8 : 0.4}
            roughness={0.2}
            metalness={0.8}
            side={THREE.DoubleSide}
            emissive={hovered ? "#00f3ff" : "#000000"}
            emissiveIntensity={hovered ? 0.2 : 0}
          />
        </mesh>
        
        {/* Border Glow */}
        <mesh position={[0, 0, -0.01]}>
           <planeGeometry args={[2.85, 1.65]} />
           <meshBasicMaterial color={hovered ? "#00f3ff" : "#333"} transparent opacity={0.5} side={THREE.DoubleSide} />
        </mesh>

        {/* Text Display (No Image to avoid link errors) */}
        <Text
          position={[0, 0, 0.1]}
          fontSize={0.35}
          color={hovered ? "#00f3ff" : "white"}
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/rajdhani/v15/L15-2T2Vr_iN0R3dYz4.woff"
        >
          {name}
        </Text>
      </Float>
    </group>
  );
};

const CarouselRow: React.FC<{ direction: 'left' | 'right'; speed: number; logos: any[]; yPos: number }> = ({ direction, speed, logos, yPos }) => {
  const groupRef = useRef<THREE.Group>(null);
  const CARD_WIDTH = 3.2; // Card width + gap
  const TOTAL_WIDTH = logos.length * CARD_WIDTH;
  
  // Create 3 sets of logos for seamless infinite scrolling
  const displayLogos = useMemo(() => [...logos, ...logos, ...logos], [logos]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      const moveSpeed = speed * (1 + Math.abs(state.pointer.x) * 0.5); // Speed up slightly on edges
      
      if (direction === 'left') {
        groupRef.current.position.x -= moveSpeed * delta;
        if (groupRef.current.position.x <= -TOTAL_WIDTH) {
          groupRef.current.position.x = 0;
        }
      } else {
        groupRef.current.position.x += moveSpeed * delta;
        if (groupRef.current.position.x >= 0) {
          groupRef.current.position.x = -TOTAL_WIDTH;
        }
      }
    }
  });

  return (
    <group ref={groupRef} position={[direction === 'left' ? 0 : -TOTAL_WIDTH, yPos, 0]}>
      {displayLogos.map((logo, i) => (
        <LogoCard
          key={`${logo.slug}-${i}`}
          name={logo.name}
          position={[i * CARD_WIDTH, 0, 0]}
          index={i}
        />
      ))}
    </group>
  );
};

export const TechStackCarousel: React.FC = () => {
  // Split logos into two rows
  const mid = Math.ceil(TECH_STACK_LOGOS.length / 2);
  const row1 = TECH_STACK_LOGOS.slice(0, mid);
  const row2 = TECH_STACK_LOGOS.slice(mid);

  return (
    <div className="w-full h-[500px] relative overflow-hidden">
      {/* Floating Title */}
      <div className="absolute top-10 left-0 right-0 text-center z-10 pointer-events-none">
        <h3 className="text-4xl md:text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-neonCyan to-neonPurple opacity-90 drop-shadow-[0_0_15px_rgba(0,243,255,0.3)]">
           MY GENERATIVE AI & <br/> FULL-STACK ARSENAL
        </h3>
      </div>

      <Canvas camera={{ position: [0, 0, 10], fov: 40 }} dpr={[1, 2]}>
        <fog attach="fog" args={['#050505', 5, 20]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00f3ff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#bc13fe" />
        
        <Environment preset="city" />

        <Suspense fallback={null}>
          <group position={[0, 1, 0]} rotation={[0.1, 0, 0]}>
             <CarouselRow direction="left" speed={2} logos={row1} yPos={1.2} />
          </group>
          
          <group position={[0, -1.5, 0]} rotation={[-0.1, 0, 0]}>
             <CarouselRow direction="right" speed={2} logos={row2} yPos={-1.2} />
          </group>
        </Suspense>

        {/* Particles/Sparkles for atmosphere */}
        <mesh position={[0,0,-5]}>
           <planeGeometry args={[50, 50]} />
           <meshBasicMaterial color="#000" transparent opacity={0.8} side={THREE.DoubleSide} />
        </mesh>
      </Canvas>
      
      {/* Overlay gradients for smooth fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />
    </div>
  );
};
