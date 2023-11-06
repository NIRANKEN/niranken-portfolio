import { Box, Button } from '@mui/material';
import { Canvas, MeshProps, useFrame } from '@react-three/fiber';
import { useRef, useState, useTransition } from 'react';
import {
  Mesh,
  BufferGeometry,
  Material,
  Object3DEventMap,
  Group,
  Vector3,
} from 'three';
import { Model } from './Dog002';
import { OrbitControls, PointerLockControls, Sky } from '@react-three/drei';
import { Physics, RigidBody } from '@react-three/rapier';
import { Player } from './Player';
import { Ground } from './Ground';
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
      <Canvas camera={{ fov: 45, position: [0, 0, 0] }}>
        <directionalLight position={[0, 20, 0]} intensity={10} />
        {/* <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        /> */}
        {/* <perspectiveCamera
          fov={60}
          aspect={window.innerWidth / window.innerHeight}
          near={0.1}
          far={100}
        /> */}
        <Physics gravity={[0, -9.8, 0]}>
          <Ground />
          <Player />
          <Sky sunPosition={[100, 10, 100]} />
          <ThreeBox boxMeshProps={{ position: [0, 0.5, 0] }} />
          <ModelWrapper />
        </Physics>
        {/* <PointerLockControls /> */}
      </Canvas>
      {/* <Button onClick={renderModel}>Render Model</Button> */}
    </Box>
  );
};

type ThreeBoxProps = {
  boxMeshProps: MeshProps;
};

const ModelWrapper: React.FC = () => {
  // const [clicked, click] = useState<boolean>(false);
  // const [hovered, hover] = useState<boolean>(false);
  const scale = new Vector3(0.25, 0.25, 0.25);
  const position = new Vector3(0, 0, -5);
  return (
    <RigidBody>
      <Model
        // scale={scale.multiplyScalar(clicked ? 1.5 : 1.0)}
        scale={scale}
        // position{position.add(
        //   hovered ? new Vector3(0, 0, 2) : new Vector3(0, 0, 0)
        // )}
        position={position}
        rotation={[0, Math.PI, 0]}
        // onClick={(_event) => click(!clicked)}
        // onPointerOver={(_event) =>
        //   // 1秒待つ
        //   setTimeout(() => {
        //     hover(true);
        //   }, 200)
        // }
        // onPointerOut={(_event) =>
        //   setTimeout(() => {
        //     hover(false);
        //   }, 200)
        // }
      />
    </RigidBody>
  );
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
    <RigidBody>
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
    </RigidBody>
  );
};
