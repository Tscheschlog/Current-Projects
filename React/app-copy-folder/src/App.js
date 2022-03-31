import './scss/App.scss';
import React, { Component }  from 'react';
import { Suspense, useState, useRef } from 'react';
import Sat from './components/6usat';
// import Thruster from './components/thruster'
import { OrbitControls, useHelper, Stars,  Environment } from '@react-three/drei';
import  Canvas  from './components/FiberCanvas';
import create from 'zustand';
import { BsArrowLeftSquare, BsArrowRight } from "react-icons/bs";
import { SpotLightHelper, PointLightHelper, DirectionalLightHelper } from 'three'

export const useStore = create(set => ({
  rotate: false,
  focus: 'init',
  animating: true,
  rotateSpeed: -0.2,
  mainVisible: true,
}))

function Lights(props) {
/* 
  const lights =useRef()
  useHelper(lights, DirectionalLightHelper, '#'+randomColor)
 */
  return(
    
    <directionalLight /* ref={lights} */ {...props} />
    
  )
}

function App() {
  
  const ref = useRef()
  
  const {rotate, focus, rotateSpeed} = useStore(state => state);

  return (
    <div className="satcontainer">
     <div ref={ref} className="fwdRef">
      { focus === 'init' ?
        (
          <div>
            <div className="relativePosSelect" /* style={{marginTop: '5%', marginLeft: '40%'}}  */>
          <text className='button' style={{width: '100%'}}>
         SPACE-TECH 6U
         </text>
        </div>
        <div className="relativePos" /* style={{marginTop: '2vh', marginLeft: '20%'}} */ onClick={()=>{
          //console.log(document.getElementsByName("thruster"))
          useStore.setState({focus: 'thruster', rotate: false, animating: true, mainVisible: false,});
        }}>
          <text className='button'>
         SFE Thruster {/* <BsArrowRight  /> */}
         </text>
        </div>
        <div className="relativePos" /* style={{marginLeft: '20%', transform: 'translateY(100px)' }} */ onClick={()=>{
          useStore.setState({focus: 'lens', rotate: false, animating: true});
        }}>
         High Resolution Camera Module{/* <BsArrowRight /> */}
        </div> 
       {/*  <div className="relativePos" style={{marginTop: '-4vh', marginLeft: '70%'}} onClick={()=>{
          useStore.setState({focus: 'antenna', rotate: false, animating: true});
        }}>
         Iridium Antenna
        </div> */}
        </div>
        ) : focus === 'thruster' ? 
        <div>
        <div className="relativePosInfo"  style={{ marginTop: '2%', width: '70px', background: 'rgba(48, 48, 90, 0)'}} onClick={()=>{
          useStore.setState({focus: 'init', rotate: false, animating: true, mainVisible: true});
        }}>
        <BsArrowLeftSquare style={{marginLeft: '20%'}}/>  
        </div> 

         <div className="relativePosInfo"  style={{  marginLeft: '2.5vw', background: 'rgba(48, 48, 90, 0.5)'}} onClick={()=>{
           useStore.setState({focus: 'init', rotate: false, animating: true});
         }}>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
         </div> 
         
         </div> : focus === 'lens' ? 
                 <div >
                 <div className="relativePosInfo"  style={{ marginTop: '50vh', width:'70px', background: 'rgba(48, 48, 90, 0)'}} onClick={()=>{
                   useStore.setState({focus: 'init', rotate: false, animating: true});
                 }}>
                 <BsArrowLeftSquare />  
                 </div> 
         
         <div className="relativePosInfo" style={{marginLeft: '2.5vw', background: 'rgba(48, 48, 90, 0.5)'}}  onClick={()=>{
           useStore.setState({focus: 'init', rotate: false, animating: true});
         }}>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
         </div> 
         
         </div>
          : null
        }
      </div>

    <Canvas linear  id="background" /* onCreated={(state) => state.events.connect(ref.current)} */ dpr={[1, 2]} camera={{ fov: 50 }}>

    
      <Lights position={[0.45149325185892847, 0.484448575248035, -0.8022111298156451]}/>
{/*       <Lights position={[0.3049131732331111,  0.15466496867451154, 1.0240552328643313]}/>
 */}     {/*  <Lights position={[0.7190673643033425,  0.8049763995425471,  -0.02603586101834796]}/>
          <Lights position={[0.3283292682821293, 1.024776311265762, -0.07234541533978905]}/>

          <Lights position={[0.6053621928545841, -0.4339800886378355,  0.7046952605799266]}/>
         <ambientLight /> */}

      {/* <ambientLight /> */}
{/*       <Sky rayleigh={0} mieDirectionalG={0.98} mieCoefficient={0.002} sunPosition={[10, -3, 100]} distance={4500}  />
 */}      {/* <pointLight position={[10, 10, 10]} />
       */}
   {/*  <spotLight scale={[3,3,3]} lookAt={[0,0,0]} position={[5, -5, -5]} distance={10} intensity={6} /> */}

    <spotLight position={[8.184484317448906e-7,  -1.022093149213608,  -6.122984910072467e-7]} />
   {/*  <spotLight intensity={10}/> */}

{/*     <spotLight lookAt={[0,0,0]} color={'#f0f0eb'} position={[-0.7750709224664952,  0.6204044960258659,  0.308490112701815]} rotation={[ -0.9377482756970726, -0.9785787334937626, -0.8466654180077128]} distance={10} intensity={6} />
 */}      
      
      <Stars  saturation={0.5} count={300}  fade/> 
      <Suspense fallback={null}>
      {/* <Stage intensity={0.5} shadows={false} contactShadow={false} environment={'night'} > */}
    <Environment preset={'sunset'} />

      
        <Sat />
        
        
      </Suspense>
      <OrbitControls    
     autoRotate = {rotate}
     autoRotateSpeed={rotateSpeed}
         enableZoom = {false}
         maxPolarAngle={Math.PI}
         minPolarAngle={Math.PI/2-0.5}
        />   
      {/* <Stats /> */}
    </Canvas>
    </div>
  );
}

export default App;
