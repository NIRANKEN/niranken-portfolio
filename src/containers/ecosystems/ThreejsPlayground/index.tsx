import { Box, Button } from '@mui/material';
import { Canvas, MeshProps, useFrame } from '@react-three/fiber';
import { useRef, useState, useTransition } from 'react';
import { Mesh, BufferGeometry, Material, Object3DEventMap, Group } from 'three';
import { Model } from './Dog002';
export const ThreejsPlayground: React.FC = () => {
  // const [isPending, startTransition] = useTransition();
  // const [model, setModel] = useState<JSX.Element | null>(null);

  // const renderModel = () => {
  //   startTransition(() => {
  //     setModel(<Model position={[0, 0, 0]} />);
  //   });
  // };

  return (
    <Box component="div" width={'100%'} height={1024}>
      <Canvas>
        <ambientLight position={[0, 5, -5]} />
        <directionalLight position={[0, 5, 5]} />
        <perspectiveCamera
          fov={60}
          aspect={window.innerWidth / window.innerHeight}
          near={0.1}
          far={100}
        />
        <ThreeBox boxMeshProps={{ position: [0, 0, 0] }} />
        <ModelWrapper />
      </Canvas>
      {/* <Button onClick={renderModel}>Render Model</Button> */}
    </Box>
  );
};

type ThreeBoxProps = {
  boxMeshProps: MeshProps;
};

const ModelWrapper: React.FC = () => {
  // const groupRef = useRef<Group<Object3DEventMap>>(null);
  // useFrame((__dirname, delta) => {
  //   if (!groupRef.current) return;
  //   return (groupRef.current!.rotation.y += delta);
  // });
  return <Model position={[0, 0, -30]} rotation={[0, 3.14, 0]} />;
};

const ThreeBox: React.FC<ThreeBoxProps> = ({
  boxMeshProps,
  // handleRotateMeshProps,
}) => {
  // This reference gives us direct access to the THREE.Mesh object
  // Hold state for hovered and clicked events
  const meshRef = useRef<Mesh<BufferGeometry, Material | Material[]>>(null);
  const [hovered, hover] = useState<boolean>(false);
  const [clicked, click] = useState<boolean>(false);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  // ここでsetStateするなって言われてるな？ でもReactのプラクティス的にuseRefするなって言ってる
  // => 「状態に応じてコンポーネントの描画を管理する場合は」useRefするなってことだけど、three.jsの場合は例外やね。
  useFrame((_state, delta) => (meshRef.current!.rotation.y += delta));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...boxMeshProps}
      ref={meshRef}
      scale={clicked ? 1.5 : 1}
      onClick={(_event) => click(!clicked)}
      onPointerOver={(_event) => hover(true)}
      onPointerOut={(_event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};
