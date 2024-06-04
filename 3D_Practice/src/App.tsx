import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

const Sphere = () => {
  const meshRef = useRef();
  const [moveX_or_Y, setMouseX_or_Y] = useState({ x: 0, y: 0 });

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

  useFrame((state, delta, frame) => {
    if (meshRef.current) {
      // meshRef.current.rotation.x = moveX_or_Y.y * 0.01;
      // meshRef.current.rotation.y = moveX_or_Y.x * 0.01;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) 
      meshRef.current.position.x = Math.sin(state.clock.elapsedTime) 
    }
  });
console.log(moveX_or_Y)
  return (
    <>
      {" "}
      <mesh ref={meshRef}>
        <sphereGeometry />
        <meshStandardMaterial color={"violet"} wireframe />
      </mesh>
    </>
  );
};

function App() {
  return (
    <main className="w-full h-screen">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 5]} intensity={1} />
        <Sphere />
        {/* <Torus/> */}
        {/* <Tube/> */}
      </Canvas>
    </main>
  );
}

export default App;
