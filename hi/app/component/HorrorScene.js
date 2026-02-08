"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Float } from "@react-three/drei"
import { useRef, useState, useEffect } from "react"
import * as THREE from "three"

function Lightning() {
  const lightRef = useRef()

  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.intensity =
        Math.random() > 0.97 ? 8 : 0
    }
  })

  return (
    <pointLight
      ref={lightRef}
      position={[0, 5, 0]}
      color="white"
      distance={20}
    />
  )
}

function FlickeringRedLight() {
  const lightRef = useRef()

  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.intensity =
        0.8 + Math.sin(Date.now() * 0.02) * 0.6
    }
  })

  return (
    <pointLight
      ref={lightRef}
      position={[0, 2, 0]}
      color="darkred"
      distance={15}
    />
  )
}

function EvilGhost() {
  const meshRef = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(t * 1.5) * 0.6 + 1
      meshRef.current.rotation.y += 0.02
      meshRef.current.scale.x =
        1 + Math.sin(t * 3) * 0.05
    }
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.2, 64, 64]} />
      <meshStandardMaterial
        color="#111"
        emissive="red"
        emissiveIntensity={1.5}
        transparent
        opacity={0.8}
      />
    </mesh>
  )
}

function FloatingEyes() {
  return (
    <>
      <mesh position={[-2, 1.5, -3]}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial emissive="red" emissiveIntensity={3} />
      </mesh>
      <mesh position={[-1.6, 1.5, -3]}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial emissive="red" emissiveIntensity={3} />
      </mesh>
    </>
  )
}

function CinematicCamera() {
  useFrame(({ camera, clock }) => {
    const t = clock.getElapsedTime()
    camera.position.x = Math.sin(t * 0.2) * 2
    camera.position.z = 6 + Math.sin(t * 0.3)
    camera.lookAt(0, 1, 0)
  })
  return null
}

/* 👻 MOUSE GHOST + GLITCH EFFECT */

function MouseGhost() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })

      if (Math.random() > 0.95) {
        setVisible(true)
        document.body.classList.add("horror-active")

        setTimeout(() => {
          setVisible(false)
          document.body.classList.remove("horror-active")
        }, 200)
      }
    }

    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <img
      src="ghost.png"
      style={{
        position: "fixed",
        left: position.x - 120,
        top: position.y - 120,
        width: "250px",
        opacity: visible ? 1 : 0,
        pointerEvents: "none",
        transition: "opacity 0.1s ease",
        mixBlendMode: "screen",
        filter: "contrast(180%) brightness(70%)",
        zIndex: 9999,
      }}
      alt="ghost"
    />
  )
}

export default function HorrorScene() {
  return (
    <>
      <div className="fixed inset-0 -z-20">
        <Canvas
          camera={{ position: [0, 2, 6] }}
          style={{ height: "100vh", pointerEvents: "none" }}
        >
          <color attach="background" args={["#000000"]} />
          <fog attach="fog" args={["#050000", 2, 20]} />

          <ambientLight intensity={0.05} />
          <Lightning />
          <FlickeringRedLight />

          <Float speed={3} rotationIntensity={2} floatIntensity={3}>
            <EvilGhost />
          </Float>

          <FloatingEyes />
          <CinematicCamera />

          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      <MouseGhost />
    </>
  )
}
