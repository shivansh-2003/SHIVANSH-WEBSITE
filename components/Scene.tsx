
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float, Stars, Sparkles, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Augment React's JSX namespace for R3F elements
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      points: any;
      bufferGeometry: any;
      bufferAttribute: any;
      pointsMaterial: any;
      color: any;
      ambientLight: any;
      spotLight: any;
      pointLight: any;
      fog: any;
    }
  }
}

// Augment global JSX namespace as fallback
declare global {
  namespace JSX {
    interface IntrinsicElements {
      points: any;
      bufferGeometry: any;
      bufferAttribute: any;
      pointsMaterial: any;
      color: any;
      ambientLight: any;
      spotLight: any;
      pointLight: any;
      fog: any;
    }
  }
}

// --- 3D Components ---

const LiquidBlob = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);

  useFrame(({ clock, pointer }) => {
    if (meshRef.current) {
      // Gentle rotation
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.15;
      
      // Move slightly with mouse (parallax)
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, pointer.x * 2, 0.1);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, pointer.y * 2, 0.1);
    }
    
    if (materialRef.current) {
      // Distort pulses with time
      materialRef.current.distort = 0.4 + Math.sin(clock.getElapsedTime()) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={[2, 0, -2]}>
        <MeshDistortMaterial
          ref={materialRef}
          color="#1a1a1a"
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.9}
          roughness={0.2}
          distort={0.4}
          speed={2}
        />
      </Sphere>
    </Float>
  );
};

const BackgroundParticles = () => {
  const count = 500;
  const mesh = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5; // z
    }
    return positions;
  }, [count]);

  useFrame(({ clock, pointer }) => {
    if (mesh.current) {
      mesh.current.rotation.y = clock.getElapsedTime() * 0.05;
      mesh.current.rotation.x = pointer.y * 0.1;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00f3ff"
        transparent
        opacity={0.6}
        sizeAttenuation={true}
      />
    </points>
  );
};

interface SceneProps {
  scrollProgress: number;
}

export const Scene: React.FC<SceneProps> = ({ scrollProgress }) => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach="background" args={['#050505']} />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#bc13fe" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#00f3ff" />
        
        {/* Environment Reflection */}
        <Environment preset="city" />

        {/* Floating Elements */}
        <LiquidBlob />
        
        {/* Background Elements */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Sparkles count={100} scale={10} size={4} speed={0.4} opacity={0.5} color="#bc13fe" />
        <BackgroundParticles />

        {/* Fog for depth */}
        <fog attach="fog" args={['#050505', 5, 20]} />
      </Canvas>
    </div>
  );
};
