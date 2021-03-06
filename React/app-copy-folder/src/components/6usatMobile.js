/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import {useStore} from '../App'
import * as THREE from 'three'

function damp(target, to, step, delta, v = new THREE.Vector3()) {
  if (target instanceof THREE.Vector3) {
    target.x =  THREE.MathUtils.damp(target.x, to[0], step, delta)
    target.y =  THREE.MathUtils.damp(target.y, to[1], step, delta)
    target.z =  THREE.MathUtils.damp(target.z, to[2], step, delta)
  }
}
function lerp(target, to, step, delta, v = new THREE.Vector3()) {
  if (target instanceof THREE.Vector3) {
    target.x =  THREE.MathUtils.lerp(target.x, to[0], step, delta)
    target.y =  THREE.MathUtils.lerp(target.y, to[1], step, delta)
    target.z =  THREE.MathUtils.lerp(target.z, to[2], step, delta)
  }
}



export default function Model({ ...props }) {
  const group = useRef()
  
  const { nodes, materials,  } = useGLTF('/6Uedit.gltf')
 // const { materials: solar } = useGLTF('/solar.gltf')
  
  const {focus, animating, mainVisible} = useStore(state => state);
  const step = 4
  const animPrecision = 0.01
  
  const mainCamPos = [ 0.6306514463594766,  -0.4210648696664135,  0.712496367900918]
  const thrusterCamPos = [0.15798008711065167, 0.3600188037031083, 0.14511212262143952]
  const lensCamPos = [0.12753831577671065, -0.10407153882968664, -0.16412881074068325]
  const antCamPos = [0.07344901323458229,  0.39355321519639064,  -0.12187571040583152]
  
  //const mainCamRot = [0.8517,  0, 0.56009]
  const thrusterCamRot = [ 0.10307643035331633,  0.8681327726105077, -0.07877646275676702]
  const lensCamRot = [2.5764873027205804, 0.5807592536680115,  -2.8067933644197485]
  const antCamRot = [-1.9535678507085672,  0.4007292400075513,  2.3720121819878806]
  

  const thrusterQuat = [0.9062088093489014, 0.030162790074321634, 0.42151981664988497, -0.014030114925622953]

  const satMat = nodes.CubePanel_8037_Mesh004.material


  useFrame( (state, delta) => {
    if(focus === 'init'){
      if(animating){
      state.camera.fov = THREE.MathUtils.damp(state.camera.fov,  50, step, delta)
      damp(state.camera.position, mainCamPos, step, delta)
      state.camera.lookAt(0, 0.2, 0)
      //state.camera.updateProjectionMatrix()

      if(Math.abs(state.camera.position.x - mainCamPos[0]) < animPrecision){
        useStore.setState(
          { 
            animating: false, 
            rotate: true,
            mainVisible: true,
          });
        }
      }

      state.camera.lookAt(0, 0.2, 0)

    }  else if(focus === 'lens'){ 
    if(animating){
  state.camera.fov = THREE.MathUtils.damp(state.camera.fov,  50, step, 0.001)
  damp(state.camera.position, lensCamPos, step, delta)
  //damp(state.camera.rotation, lensCamRot, step, delta)
  state.camera.lookAt(0, 0, 0)
  
  //state.camera.updateProjectionMatrix()
  if(Math.abs(state.camera.position.x - lensCamPos[0]) < animPrecision){
    useStore.setState({ animating: false, rotate: true,
    });
  }

  state.camera.lookAt(0, 0, 0)
  }

  //state.camera.lookAt(0,-0.5, 0)
 //state.camera.lookAt(0, 0, 0)
  
}else if(focus === 'thruster'){ 
  if(animating){
state.camera.fov = THREE.MathUtils.damp(state.camera.fov,  50, 8, 0.05)
damp(state.camera.position, thrusterCamPos, step, delta)
damp(state.camera.rotation, thrusterCamRot, step, delta)
state.camera.lookAt(0, 0.2, 0)

state.camera.updateProjectionMatrix()
if(Math.abs(state.camera.position.x - thrusterCamPos[0]) < animPrecision){
  useStore.setState({ animating: false, rotate: true,
  });
}
}

//state.camera.lookAt(0, 0, 0)
state.camera.lookAt(0, 0.17, 0)

}/* else if(focus === 'antenna'){ 
  if(animating){
state.camera.fov = THREE.MathUtils.damp(state.camera.fov,  50, step, delta)
damp(state.camera.position, antCamPos, step, delta)
damp(state.camera.rotation, antCamRot, step, delta)
state.camera.lookAt(0, 0, 0)

state.camera.updateProjectionMatrix()
if(Math.abs(state.camera.position.x - lensCamPos[0]) < animPrecision){
  useStore.setState({ animating: false, rotate: true,
  });
}
}

//state.camera.lookAt(0,-0.5, 0)
//state.camera.lookAt(0, 0, 0)

} */

  }
  
  
  )
  return (
    <group ref={group} scale={[0.7,0.7,0.7]} {...props} dispose={null}>
      
     {/* <Html transform occlude rotation={[0, Math.PI/2, 0]}>
          <div  className="relativePos"><text className='button'>Electronics and Power Modules</text></div>
        </Html> */}
      <group >
        <group /* scale={focus === 'thruster'? [2,2,2]: [1,1,1]} */>
      <mesh 
      
        geometry={nodes.Box005001_Mesh004.geometry}
        material={satMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
    
      <mesh
        geometry={nodes.Electronics_Box001_Mesh004.geometry}
        material={nodes.Electronics_Box001_Mesh004.material}
        rotation={[Math.PI / 2, 0, 0]}

      >
       

        </mesh> 
      <mesh
        geometry={nodes.Power_Module_Box001_Mesh004.geometry}
        material={nodes.Electronics_Box001_Mesh004.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Rotation_Arm001_Mesh004.geometry}
        material={nodes.Rotation_Arm001_Mesh004.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
    ]
      <mesh
        geometry={nodes.Thruster001_Mesh004.geometry}
        material={nodes.Thruster001_Mesh004.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      
      </group>
      
      
      {/* focus !== 'thruster' ?  ): null */}
      (
      
      <group visible={mainVisible}>
        <group /* visible={focus !== 'thruster'} */>
      <mesh
        geometry={nodes.Anetanna_1002_Mesh004.geometry}
        material={satMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Anetanna_1003_Mesh004.geometry}
        material={satMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Box019001_Mesh014.geometry}
        material={materials['steel_backplate.004']}
        material-roughness={0.9}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Box019001_Mesh015.geometry}
        material={materials['steel_backplate.004']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Box019001_Mesh016.geometry}
        material={materials['steel_backplate.004']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Box019001_Mesh017.geometry}
        material={materials['steel_backplate.004']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh geometry={nodes.Cube002.geometry} 
        material={satMat}
        rotation={[Math.PI / 2, 0, 0]} />

      <mesh geometry={nodes.Cube003.geometry} 
        material={satMat}
        rotation={[Math.PI / 2, 0, 0]} /> 
        
        <mesh 
        geometry={nodes.Cube002.geometry} 
        position={[0, -0.172, 0]}
        material={satMat}
        rotation={[Math.PI / 2, 0, 0]} />

      <mesh 
               position={[0, -0.172, -0.009]}
      geometry={nodes.Cube003.geometry} 
      
      material-color={"#2c2f33"}
        rotation={[Math.PI / 2, 0, 0]} 
        />

      <mesh
        geometry={nodes.CubePanel_8015_Mesh010.geometry}
        material={satMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubePanel_8015_Mesh011.geometry}
        material={satMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubePanel_8015_Mesh012.geometry}
        material={satMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubePanel_8025_Mesh004.geometry}
        material={satMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubePanel_8026_Mesh004.geometry}
        material={satMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubePanel_8037_Mesh004.geometry}
        material={satMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubePanel_8040_Mesh004.geometry}
        material={satMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubePanel_8041_Mesh004.geometry}
        material={satMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubePanel_8042_Mesh004.geometry}
        material={satMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubePanel_8044_Mesh004.geometry}
        material={satMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubePanel_8045_Mesh004.geometry}
        material={satMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubePanel_8046_Mesh004.geometry}
        material={satMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubePanel_014001_Mesh005.geometry}
        material={satMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubePanel_014002_Mesh005.geometry}
        material={satMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubePanel_014003_Mesh005.geometry}
        material={satMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubePanel_014004_Mesh005.geometry}
        material={satMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubePanel_014005_Mesh004.geometry}
        material={satMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubePanel_014007_Mesh004.geometry}
        material={satMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubePanel_014008_Mesh004.geometry}
        material={satMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom002.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom003.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom005.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom008.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom009.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom010.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom011.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom012.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom013.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom014.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom015.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom016.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom017.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom018.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom019.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom020.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom021.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom022.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom023.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom024.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom025.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom026.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom027.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom028.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom029.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom030.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom031.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom032.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom033.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom034.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom035.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom036.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom037.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom038.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom039.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom040.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom041.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom042.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom043.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom044.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom045.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom046.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom047.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom048.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom049.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom050.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom051.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom052.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom053.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom054.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom069_CubeSat_bottom003.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
       <mesh
        geometry={nodes.TrueLens008.geometry}
        material={nodes.TrueLens008.material}
        material-color={"#16334d"}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.TrueLens009.geometry}
        material={nodes.TrueLens009.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
     
      <mesh
        geometry={nodes.CubeSat_bottom001.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom055.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom004_CubeSat_bottom056.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom006_CubeSat_bottom057.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom007_CubeSat_bottom058.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.CubeSat_bottom056_CubeSat_bottom059.geometry}
        /*material={nodes.CubeSat_bottom002.material}*/
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.IridiumAntenna_1001_Mesh004.geometry}
        material={materials['steel_backplate.003']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.IridiumAntenna_2001_Mesh004.geometry}
        material={materials['steel_backplate.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Main_Lens_Cylinder008.geometry}
        material={nodes.Main_Lens_Cylinder008.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Main_Lens_Cylinder009.geometry}
        material={nodes.Main_Lens_Cylinder009.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Motor_Rod_1001_Mesh004.geometry}
        material={materials['None.004']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Phased_Array_Antenna_2001_Mesh002_Phased_Array_Antenna_2001_.geometry}
        material={materials['logoST.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Phased_Array_Antenna_2001_Mesh005.geometry}
        material={materials['steel_backplate.004']}
        rotation={[Math.PI / 2, 0, 0]}
      />
       
       </group>
       <group>
       <mesh
        geometry={nodes.SolarPanel_043001_Mesh001.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
        material-roughness = {0.1}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh129_SolarPanel_043001_Mesh192.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
  
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh193.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh194.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh195.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh196.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh197.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh198.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh199.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh200.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh201.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh202.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh203.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh204.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh205.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh206.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh207.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh208.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh209.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh210.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh211.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh212.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh213.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh214.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh215.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh216.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh217.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh218.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh219.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh220.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh221.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh222.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh223.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh224.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh225.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh226.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh227.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh228.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh229.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh230.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh231.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh232.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh233.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh234.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh235.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh236.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh237.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh238.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh239.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh240.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh241.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh242.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh243.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh244.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_043001_Mesh245.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh066_SolarPanel_044001_Mesh001.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh129_SolarPanel_044001_Mesh192.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh193.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh194.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh195.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh196.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh197.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh198.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh199.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh200.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh201.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh202.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh203.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh204.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh205.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh206.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh207.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh208.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh209.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh210.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh211.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh212.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh213.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh214.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh215.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh216.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh217.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh218.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh219.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh221.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh222.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh223.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh224.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh225.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh226.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh227.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh228.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh229.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh230.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh231.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh232.geometry}
        material={materials['solar_cells.001']}

        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh233.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh234.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh235.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh236.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh237.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh238.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh239.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh240.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh241.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh242.geometry}
        material={materials['solar_cells.001']}

        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh243.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.SolarPanel_044001_Mesh244.geometry}
        material={materials['solar_cells.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
     </group>
        </group>
     
      
    </group>
    </group>
  )
}

useGLTF.preload('/6Uedit.gltf')
