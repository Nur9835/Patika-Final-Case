import React, { useRef } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import * as THREE from 'three'

const Space = () => {
  const sceneRef = useRef()
  const shipRef = useRef()

  useFrame(() => {
    if (shipRef.current) {
      shipRef.current.rotation.x += 0.01
      shipRef.current.rotation.y += 0.01
    }
  })

  return (
    <Canvas style={{ height: '100vh', width: '100vw' }}>
      <ambientLight />
      <directionalLight position={[0, 1, 1]} />
      <scene ref={sceneRef} />
      <Ship ref={shipRef} />
    </Canvas>
  )
}

const Ship = () => {
  const meshRef = useRef()

  return (
    <mesh ref={meshRef}>
      <sphereBufferGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="white" />
    </mesh>
  )
}

export default Space
