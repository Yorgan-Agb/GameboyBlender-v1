import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/GameBoy.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Gameboy.geometry}
        material={materials.Facade}
        position={[1.09, 5.77, 0.64]}
        rotation={[1.58, 0, 0]}
        scale={[0.82, 1.39, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BoutonV.geometry}
        material={nodes.BoutonV.material}
        position={[-0.68, 4.43, -1.48]}
        rotation={[1.59, 0, 0]}
        scale={[1, 0.87, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BoutonV001.geometry}
        material={nodes.BoutonV001.material}
        position={[0.19, 3.15, -1.53]}
        rotation={[0.47, -1.55, -1.12]}
        scale={[1, 0.87, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BouttonPlay.geometry}
        material={nodes.BouttonPlay.material}
        position={[0.7, 3.17, 0.94]}
        rotation={[1.59, 0, 0]}
        scale={[0.27, 1.17, 0.24]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.FirstEcran}
        position={[0.17, 5.44, -0.15]}
        rotation={[1.59, 0, 0]}
        scale={[1.46, 0.19, 1.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.SecondScreen}
        position={[0.13, 5.45, -0.18]}
        rotation={[1.59, 0, 0]}
        scale={[0.8, 0.25, 0.75]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BouttonPlay001.geometry}
        material={nodes.BouttonPlay001.material}
        position={[1.25, 3.55, 0.97]}
        rotation={[1.59, 0, 0]}
        scale={[0.27, 1.17, 0.24]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        position={[-0.16, 1.95, -0.09]}
        rotation={[1.59, 0.44, 0.01]}
        scale={[0.25, 0.12, -0.08]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={nodes.Cylinder001.material}
        position={[0.48, 2, -0.09]}
        rotation={[1.59, 0.44, 0.01]}
        scale={[0.25, 0.12, -0.08]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={nodes.Text.material}
        position={[-1.46, 4.07, 0.02]}
        rotation={[1.59, 0, 0]}
        scale={[0.2, 0.87, 0.3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text001.geometry}
        material={nodes.Text001.material}
        position={[0.26, 4.07, 0.03]}
        rotation={[1.59, 0, 0]}
        scale={[0.11, 0.87, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text002.geometry}
        material={nodes.Text002.material}
        position={[0.82, 2.78, 0.02]}
        rotation={[1.59, 0, 0]}
        scale={[0.23, 1.39, 0.17]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text003.geometry}
        material={nodes.Text003.material}
        position={[1.34, 3.13, 0.02]}
        rotation={[1.59, 0, 0]}
        scale={[0.23, 1.39, 0.17]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text004.geometry}
        material={nodes.Text004.material}
        position={[-0.22, 1.66, 0.03]}
        rotation={[1.59, 0.49, 0]}
        scale={[0.18, 0.87, 0.16]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text005.geometry}
        material={nodes.Text005.material}
        position={[0.49, 1.75, 0.01]}
        rotation={[1.59, 0.49, 0]}
        scale={[0.18, 1.39, 0.16]}
      />
    </group>
  )
}

useGLTF.preload('/GameBoy.gltf')
