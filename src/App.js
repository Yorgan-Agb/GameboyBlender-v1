import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import Model from './components/Model'
import './App.css'

function App() {
  const ref = useRef()
  return (
    <div className='App'>
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }} height='200px'>
        <Suspense fallback={null}>
          <Stage
            controls={ref}
            preset='rembrandt'
            intensity={1}
            environment='city'
          >
            <Model />
          </Stage>
        </Suspense>
        <OrbitControls ref={ref} autoRotate />
      </Canvas>
    </div>
  )
}

export default App
