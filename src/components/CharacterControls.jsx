import { useEffect } from "react";
import { useRef } from "react";

const useCharacterControls = () => {
   const actions = {
      ArrowRight: 'right',
      ArrowLeft: 'left',
      ArrowUp: 'forward',
      ArrowDown: 'backward',
      Space: 'jump',
      KeyW: 'forward',
      KeyS: 'backward',
      KeyA: 'left',
      KeyD: 'right',
   }

   const actionsRef = useRef({
      left: false,
      right: false,
      forward: false,
      backward: false,
      jump: false,
   });


   useEffect(() => {
      const handleKeyDown = (e) => {
         const currentAction = actions[e.code];


         actionsRef.current[currentAction] = true;
      }

      const handleKeyUp = (e) => {
         const currentAction = actions[e.code];

         actionsRef.current[currentAction] = false;
      }

      window.addEventListener('keydown', handleKeyDown)
      window.addEventListener('keyup', handleKeyUp)

      return () => {
         window.removeEventListener('keydown', handleKeyDown)
         window.removeEventListener('keyup', handleKeyUp)
      }
   }, [])

   return actionsRef.current;
}

export default useCharacterControls;