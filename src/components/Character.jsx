import { useFrame } from '@react-three/fiber';
import { ConeCollider, RigidBody } from '@react-three/rapier'
import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'
import useCharacterControls from './CharacterControls';


const Character = () => {
   const actions = useCharacterControls();
   const body = useRef(null);

   
   useFrame(({clock}) => {
      const delta = clock.getDelta() * 1000;
      
      body.current.applyImpulse({
         x: actions.right ? 1 : actions.left ? -1 : 0,
         y: actions.jump ? 1 : 0,
         z: actions.forward ? -1 : actions.backward ? 1 : 0,
      });
   })


   return (
      <RigidBody ref={body} colliders='trimesh'>
         <mesh position={[0, 2, 0]}>
            <capsuleGeometry args={[0.5, 1, 10, 20]} />
            <meshStandardMaterial color='white' />
         </mesh>
      </RigidBody>
   )
}

export default Character
