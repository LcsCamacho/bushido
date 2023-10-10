import { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../LoaderModel3D";

const gltfPath = "/Samurai3D/scene.gltf";

interface Model3DProps {
    rotate: {
      setRotation: React.Dispatch<React.SetStateAction<number>>;
      rotation: number;
    };
  }

const Model3D = ({
  rotate: { setRotation, rotation },
}: Model3DProps) => {
  const computer = useGLTF(gltfPath);
    const rotations = [rotation, rotation, rotation]
    const position2 ={
        "x": 122.32888528582033,
        "y": 8.433824471110972,
        "z": 122.32953212335615
    }
  return (
    <mesh matrix={
        [
            0.9399999402525818,
            -2.7755575615628914e-17,
            -0.3411746068000118,
            0,
            -0.10336125511132313,
            0.9530042083116382,
            -0.28477961633888,
            0,
            0.3251408360494797,
            0.3029570579146617,
            0.8958238988733989,
            0,
            72.78034652451228,
            67.81467355801584,
            200.52348569044025,
            1
        ]
    } onClick={console.log} position={position2}>
      <hemisphereLight intensity={0.55} groundColor="black" />
      <spotLight
        position={[rotation, rotation, rotation]}
        angle={0}
        penumbra={0.2}
        intensity={0.5}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={0.35} />
      <primitive
        object={computer.scene}
        scale={.1}
        position={[0, -7, 0]}
      />
    </mesh>
  );
};

const ModelCanvas3D = () => {

  const [rotation, setRotation] = useState(0);

  return (
    <>

      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [100,100,100], fov: 10 }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full h-full"
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls />
          <Model3D rotate={{ setRotation, rotation }} />
        </Suspense>

        <Preload all />
      </Canvas>
    </>
  );
};

export default ModelCanvas3D;
