import { Environment, OrbitControls } from '@react-three/drei'
import React from 'react'
import RotatingBox from './RotatingBox'
import { RigidBody } from '@react-three/rapier'
import Boundary from './Boundary'

const Experience = () => {
  return (
    <>
      {/* <RotatingBox /> */}

      <Boundary />

      <Environment preset='city' />

      <OrbitControls />
    </>
  )
}

export default Experience
