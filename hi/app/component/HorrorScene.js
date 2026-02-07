"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Float, Environment } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

function FlickeringLight() {
  const lightRef = useRef()

  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.intensity =
        1 + Math.sin(Date.now() * 0.01) * 0.5
    }
  })

  return (
    <pointLight
      ref={lightRef}
      position={[0, 3, 0]}
      color="red"
      distance={10}
    />
  )
}

function Ghost() {
  const meshRef = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    meshRef.current.position.y = Math.sin(t) * 0.5 + 1
    meshRef.current.rotation.y += 0.01
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color="white"
        emissive="white"
        emissiveIntensity={0.5}
        transparent
        opacity={0.7}
      />
    </mesh>
  )
}

export default function HorrorScene() {
  return (
    <Canvas
      camera={{ position: [0, 2, 6] }}
      style={{ height: "100vh", background: "black" }}
    >
      <fog attach="fog" args={["black", 5, 15]} />
      
      <ambientLight intensity={0.2} />
      <FlickeringLight />

      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Ghost />
      </Float>

      <OrbitControls enableZoom={false} />
      <Environment preset="night" />
    </Canvas>
  )
}
