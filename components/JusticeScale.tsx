"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Float, AdaptiveDpr, AdaptiveEvents } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

function BrandedScale() {
    const groupRef = useRef<THREE.Group>(null);
    const beamRef = useRef<THREE.Mesh>(null);
    const leftBowlRef = useRef<THREE.Mesh>(null);
    const rightBowlRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        // Subtle beam sway
        if (beamRef.current) {
            const sway = Math.sin(t * 1.5) * 0.1;
            beamRef.current.rotation.z = sway;
            // Keep bowls vertical
            if (leftBowlRef.current) leftBowlRef.current.rotation.z = -sway;
            if (rightBowlRef.current) rightBowlRef.current.rotation.z = -sway;
        }
        // Overall rotation - slow and prestigious
        if (groupRef.current) {
            groupRef.current.rotation.y = t * 0.15;
        }
    });

    // EXACT Tone requested (Muted, Sophisticated Gold #C5A059)
    const brandGoldMat = <meshStandardMaterial
        color="#C5A059"
        metalness={0.7}
        roughness={0.3}
        emissive="#C5A059"
        emissiveIntensity={0.05}
    />;

    return (
        <group ref={groupRef} scale={1.5}>
            {/* Branded Outer Circle - Elegant and Thin */}
            <mesh>
                <torusGeometry args={[1.5, 0.03, 12, 64]} />
                {brandGoldMat}
            </mesh>

            {/* Inner Scale Elements - Refined proportions */}
            <group position={[0, -0.2, 0]} scale={0.75}>
                {/* Vertical Pillar */}
                <mesh position={[0, 0, 0]}>
                    <cylinderGeometry args={[0.02, 0.03, 2.2, 12]} />
                    {brandGoldMat}
                </mesh>
                <mesh position={[0, -1.1, 0]}>
                    <cylinderGeometry args={[0.18, 0.25, 0.06, 24]} />
                    {brandGoldMat}
                </mesh>

                {/* Horizontal Beam */}
                <group position={[0, 0.7, 0]}>
                    <mesh ref={beamRef}>
                        <boxGeometry args={[2.2, 0.02, 0.02]} />
                        {brandGoldMat}

                        {/* Left Bowl */}
                        <group position={[-1.1, 0, 0]}>
                            <mesh position={[0, -0.45, 0]}>
                                <cylinderGeometry args={[0.003, 0.003, 0.9, 6]} />
                                <meshStandardMaterial color="#888" metalness={0.5} roughness={0.5} />
                            </mesh>
                            <mesh ref={leftBowlRef} position={[0, -0.9, 0]} rotation={[Math.PI, 0, 0]}>
                                <cylinderGeometry args={[0.22, 0.04, 0.1, 24, 1, true]} />
                                {brandGoldMat}
                            </mesh>
                        </group>

                        {/* Right Bowl */}
                        <group position={[1.1, 0, 0]}>
                            <mesh position={[0, -0.45, 0]}>
                                <cylinderGeometry args={[0.003, 0.003, 0.9, 6]} />
                                <meshStandardMaterial color="#888" metalness={0.5} roughness={0.5} />
                            </mesh>
                            <mesh ref={rightBowlRef} position={[0, -0.9, 0]} rotation={[Math.PI, 0, 0]}>
                                <cylinderGeometry args={[0.22, 0.04, 0.1, 24, 1, true]} />
                                {brandGoldMat}
                            </mesh>
                        </group>
                    </mesh>
                </group>
            </group>
        </group>
    );
}

export default function JusticeScale() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="w-full h-full bg-primary/10 animate-pulse rounded-3xl" />;

    return (
        <div className="fixed bottom-4 right-4 w-32 h-32 z-50 pointer-events-none lg:pointer-events-auto">
            <Canvas
                shadows
                dpr={[1, 2]}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: "high-performance",
                    stencil: false,
                    depth: true
                }}
            >
                <AdaptiveDpr pixelated />
                <AdaptiveEvents />
                <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={30} />
                <ambientLight intensity={1.5} />
                <spotLight position={[5, 10, 5]} angle={0.2} penumbra={1} intensity={2} color="#C5A059" />
                <pointLight position={[-8, -8, -8]} intensity={1} color="#C5A059" />
                <pointLight position={[8, 8, 8]} intensity={1} color="#FFFFFF" />

                <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
                    <BrandedScale />
                </Float>

                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
}
