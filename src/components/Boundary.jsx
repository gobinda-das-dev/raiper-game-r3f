import React from 'react'
import { RigidBody } from '@react-three/rapier'
import { Box, Center, useTexture } from '@react-three/drei'
import { useMemo } from 'react'
import { MeshStandardMaterial, RepeatWrapping } from 'three'

const Boundary = () => {
  const height = 3
  const width = 15
  const depth = 15
  const wallThickness = 1

  const texture = useTexture('/tex.png');

  const material = useMemo(() => {
    const floorTexture = texture.clone()
    const wallTexture = texture.clone()

    floorTexture.wrapS = floorTexture.wrapT = wallTexture.wrapS = wallTexture.wrapT = RepeatWrapping
    
    
    const floorMat = new MeshStandardMaterial({
      color: '#888',
      map: floorTexture,
    })

    const wallMat = new MeshStandardMaterial({
      color: '#888',
      map: wallTexture,
    })
    const aspect = width / height

    floorMat.map.repeat.set(aspect, aspect)

    wallMat.map.repeat.set(aspect, 1)


    return ({
      floor: floorMat,
      wall: wallMat,
    })
  }, [texture])

  return (
    <RigidBody type="fixed">
      <Center>
        <Box material={material.floor} args={[width, wallThickness, depth]} position={[width / 2, -0.5, depth / 2]} />
        <Box material={material.wall} args={[width, height, wallThickness]} position={[width / 2, height / 2, 0 - wallThickness/2]} />
        <Box material={material.wall} args={[width, height, wallThickness]} position={[width / 2, height / 2, depth + wallThickness/2]} />
        <Box material={material.wall} args={[wallThickness, height, depth]} position={[0 - wallThickness/2, height / 2, depth / 2]} />
        <Box material={material.wall} args={[wallThickness, height, depth]} position={[width + wallThickness/2, height / 2, depth / 2]} />
      </Center>
    </RigidBody>
  )
}

export default Boundary
