import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

const Sphere = () => {
  const meshRef = useRef();
  const [moveX_or_Y, setMouseX_or_Y] = useState({ x: 0, y: 0 });
//  const [mouseEnter, setMouseEnter] = useState(false);
 const [index, setIndex] = useState(0);

const color = ['red', 'blue', 'yellow', 'violet', 'orange', 'purple', 'green']

  useEffect(() => {
    function Movement(event: any) {
      setMouseX_or_Y((prev) => ({
        ...prev,
        x:  event.clientX ,
        y:  event.clientY  ,
      }));
    }
    window.addEventListener('mousemove', Movement);
    return () => {
    window.removeEventListener("mousemove", Movement);
    }
  });

  const changeColor = ()=>{
    setIndex(index+1);
    if (index == color.length){
      setIndex(0);
    }
  }
  // useEffect(() => {},[])
  setInterval(changeColor, 2000);
  
  useFrame((state, delta, frame) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = moveX_or_Y.y * 0.01;
      meshRef.current.rotation.y = moveX_or_Y.x * 0.01;
      // meshRef.current.position.y = Math.sin(state.clock.elapsedTime / moveX_or_Y.y ) 
      // meshRef.current.position.x = Math.sin(state.clock.elapsedTime / moveX_or_Y.x ) 
    }
  });

  return (
    <>
      {" "}
      <mesh ref={meshRef}>
        <sphereGeometry />
        <meshStandardMaterial color={color[index]} wireframe />
        <OrbitControls/>
      </mesh>
    </>
  );
}

function Mark1() {
  return (
    // <main className="w-full h-screen">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 5]} intensity={1} />
        <Sphere />
        {/* <Torus/> */}
        {/* <Tube/> */}
      </Canvas>
    // </main>
  );
}

export default Mark1;
