import { Canvas } from '@react-three/fiber'
import React from 'react'
import Experience from './Experience'
import { Physics } from '@react-three/rapier'

const Scene = () => {
  return (
    <div id="canvas">
      <Canvas>
        <Physics debug>
          <Experience />
        </Physics>
      </Canvas>
    </div>
  )
}

export default Scene
