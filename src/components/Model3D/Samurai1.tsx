import { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  PerspectiveCamera,
} from "@react-three/drei";
import CanvasLoader from "../LoaderModel3D";

const gltfPath = "/Samurai3D/scene.gltf";

interface Model3DProps {
  rotate: {
    setRotation: React.Dispatch<React.SetStateAction<number>>;
    rotation: number;
  };
}

const Model3D = ({ rotate: { setRotation, rotation } }: Model3DProps) => {
  const computer = useGLTF(gltfPath);
  const rotations = [rotation, rotation, rotation];

  return (
    <mesh rotation={[0, -.5, 0]}>
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
      <primitive object={computer.scene} scale={0.15} position={[0, -10, 0]} />
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
        camera={{ position: [100, 100, 100], fov: 10 }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full h-full max-w-[99vw]"
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
