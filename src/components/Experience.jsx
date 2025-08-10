import { Environment, OrbitControls } from '@react-three/drei'
import React from 'react'
import RotatingBox from './RotatingBox'
import { RigidBody } from '@react-three/rapier'
import Boundary from './Boundary'
import Character from './Character'

const Experience = () => {
  return (
    <>
      {/* <RotatingBox /> */}

      <Character />

      <Boundary />

      <Environment preset='city' />

      <OrbitControls />
    </>
  )
}

export default Experience
