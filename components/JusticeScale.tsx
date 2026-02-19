"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Float, AdaptiveDpr, AdaptiveEvents, Environment, ContactShadows } from "@react-three/drei";
import { useRef, useState, useEffect, Suspense } from "react";
import * as THREE from "three";

function BrandedScale() {
    const groupRef = useRef<THREE.Group>(null);
    const beamRef = useRef<THREE.Mesh>(null);
    const leftBowlRef = useRef<THREE.Group>(null);
    const rightBowlRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (beamRef.current) {
            const sway = Math.sin(t * 1.0) * 0.05;
            beamRef.current.rotation.z = sway;
            if (leftBowlRef.current) leftBowlRef.current.rotation.z = -sway;
            if (rightBowlRef.current) rightBowlRef.current.rotation.z = -sway;
        }
        if (groupRef.current) {
            groupRef.current.rotation.y = t * 0.1;
        }
    });

    const goldMat = (roughness = 0.15, metalness = 1.0, color = "#C5A059") => (
        <meshStandardMaterial
            color={color}
            metalness={metalness}
            roughness={roughness}
            envMapIntensity={2.5}
        />
    );

    const ChainLink = ({ position, rotation = [0, 0, 0] }: { position: [number, number, number], rotation?: [number, number, number] }) => (
        <mesh position={position} rotation={rotation}>
            <torusGeometry args={[0.03, 0.006, 8, 16]} />
            {goldMat(0.3, 0.8, "#A58039")}
        </mesh>
    );

    const Chain = ({ count = 6 }) => (
        <group>
            {Array.from({ length: count }).map((_, i) => (
                <ChainLink key={i} position={[0, -i * 0.12, 0]} rotation={[Math.PI / 2, i % 2 ? 0 : Math.PI / 4, 0]} />
            ))}
        </group>
    );

    return (
        <group ref={groupRef} scale={0.85}>
            {/* The Base: Ornate and multi-tiered */}
            <group position={[0, -2.2, 0]}>
                <mesh position={[0, 0, 0]}>
                    <cylinderGeometry args={[0.8, 0.9, 0.1, 48]} />
                    {goldMat(0.4, 0.6, "#1a1a1a")}
                </mesh>
                <mesh position={[0, 0.1, 0]}>
                    <cylinderGeometry args={[0.6, 0.75, 0.15, 48]} />
                    {goldMat(0.2, 1.0)}
                </mesh>
                <mesh position={[0, 0.3, 0]}>
                    <cylinderGeometry args={[0.4, 0.55, 0.25, 48]} />
                    {goldMat(0.1, 1.0)}
                </mesh>
            </group>

            {/* The Main Pillar: Fluted and elegant */}
            <mesh position={[0, -0.2, 0]}>
                <cylinderGeometry args={[0.08, 0.12, 3.2, 16]} />
                {goldMat(0.15, 1.0)}
            </mesh>
            <mesh position={[0, 1.4, 0]}>
                <sphereGeometry args={[0.18, 32, 32]} />
                {goldMat(0.1, 1.0, "#E5C069")}
            </mesh>
            <mesh position={[0, -1.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.15, 0.04, 16, 32]} />
                {goldMat(0.1, 1.0)}
            </mesh>

            {/* The Scale Beam (Crossbar) */}
            <group position={[0, 1.2, 0]}>
                <mesh ref={beamRef}>
                    <mesh rotation={[0, 0, Math.PI / 2]}>
                        <cylinderGeometry args={[0.04, 0.06, 4.0, 16]} />
                        {goldMat(0.1, 1.0)}
                    </mesh>

                    <mesh position={[-2.0, 0, 0]}>
                        <sphereGeometry args={[0.08, 16, 16]} />
                        {goldMat(0.2, 1.0)}
                    </mesh>
                    <mesh position={[2.0, 0, 0]}>
                        <sphereGeometry args={[0.08, 16, 16]} />
                        {goldMat(0.2, 1.0)}
                    </mesh>

                    {/* Left Scale System */}
                    <group position={[-1.9, 0, 0]}>
                        <Chain count={10} />
                        <group ref={leftBowlRef} position={[0, -1.2, 0]}>
                            <mesh rotation={[Math.PI, 0, 0]}>
                                <cylinderGeometry args={[0.55, 0.05, 0.2, 32, 1, true]} />
                                {goldMat(0.05, 1.0, "#D5B069")}
                            </mesh>
                            <mesh position={[0, -0.15, 0]}>
                                <sphereGeometry args={[0.06, 16, 16]} />
                                {goldMat(0.2, 1.0)}
                            </mesh>
                        </group>
                    </group>

                    {/* Right Scale System */}
                    <group position={[1.9, 0, 0]}>
                        <Chain count={10} />
                        <group ref={rightBowlRef} position={[0, -1.2, 0]}>
                            <mesh rotation={[Math.PI, 0, 0]}>
                                <cylinderGeometry args={[0.55, 0.05, 0.2, 32, 1, true]} />
                                {goldMat(0.05, 1.0, "#D5B069")}
                            </mesh>
                            <mesh position={[0, -0.15, 0]}>
                                <sphereGeometry args={[0.06, 16, 16]} />
                                {goldMat(0.2, 1.0)}
                            </mesh>
                        </group>
                    </group>
                </mesh>
            </group>
        </group>
    );
}

export default function JusticeScale({ className = "" }: { className?: string }) {
    const [mounted, setMounted] = useState(false);
    const [shouldHideMenu, setShouldHideMenu] = useState(false);

    useEffect(() => {
        setMounted(true);
        const checkMenu = () => {
            setShouldHideMenu(document.body.classList.contains('menu-open'));
        };
        const observer = new MutationObserver(checkMenu);
        observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
        checkMenu();
        return () => {
            observer.disconnect();
        };
    }, []);

    if (!mounted || shouldHideMenu) return null;

    return (
        <div className={`z-50 pointer-events-none lg:pointer-events-auto transition-opacity duration-700 ease-in-out ${className}`}>
            <Canvas
                shadows
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
            >
                <AdaptiveDpr pixelated />
                <AdaptiveEvents />
                <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={28} />

                <Suspense fallback={null}>
                    <Environment preset="city" />

                    <ambientLight intensity={0.6} />
                    <spotLight position={[15, 15, 10]} angle={0.2} penumbra={1} intensity={2.5} color="#fff" castShadow />
                    <spotLight position={[-15, 10, -15]} angle={0.3} penumbra={1} intensity={1} color="#C5A059" />
                    <pointLight position={[0, 5, 8]} intensity={1.5} color="#fff" />
                    <pointLight position={[5, -5, -5]} intensity={0.5} color="#A58039" />

                    <Float speed={1.0} rotationIntensity={0.25} floatIntensity={0.25}>
                        <BrandedScale />
                    </Float>

                    <ContactShadows
                        position={[0, -2.5, 0]}
                        opacity={0.4}
                        scale={10}
                        blur={1.5}
                        far={4.5}
                    />
                </Suspense>

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.6}
                    minPolarAngle={Math.PI / 2.1}
                    maxPolarAngle={Math.PI / 1.9}
                />
            </Canvas>
        </div>
    );
}
