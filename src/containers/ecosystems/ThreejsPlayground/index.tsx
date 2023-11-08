import { Box } from '@mui/material';
import { Canvas, MeshProps, Object3DNode, useFrame } from '@react-three/fiber';
import React, { Suspense, useRef, useState } from 'react';
import {
  Mesh,
  BufferGeometry,
  Material,
  Vector3,
  Camera,
  PerspectiveCamera,
  OrthographicCamera,
} from 'three';
import { Model } from './Dog002';
import { PointerLockControls, Sky } from '@react-three/drei';
import { Physics, PhysicsProps, RigidBody } from '@react-three/rapier';
import { Player } from './Player';
import { Ground } from './Ground';
import { Grenade } from './Grenade';

type GrenadeType = {
  id: string;
  idx: number;
  onExploded: () => void;
  // position: [x: number, y: number, z: number];
};

export const ThreejsPlayground: React.FC = () => {
  const shadowOffset = 50;
  // const cameraRef = useRef<CameraRefType>();
  // const [globalGeometry, setGlobalGeometry] =
  //   useState<BufferGeometry<NormalBufferAttributes>>();
  // const [globalMaterial, setGlobalMaterial] = useState<Material>();
  // const globalGeometry = new SphereGeometry(1, 32, 32);
  // const globalMaterial = new MeshStandardMaterial({ color: 'hotpink', metalness: 0.8, roughness: 0.1 });
  // const [displayGrenade, setDisplayGrenade] = useState<boolean>(false);
  const [grenades, setGrenades] = useState<GrenadeType[]>([]);
  // const grenades: React.FC[] = [];
  // const grenades: GrenadeType[] = [];
  const [grenadeIndex, setGrenadeIndex] = useState<number>(0);

  return (
    <Box component="div" width={'auto'} height={'80vh'}>
      <Suspense fallback={null}>
        <Box
          component="div"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            // transform: 'translate3d(-50%, 50%, 0)',
            border: '2px solid white',
            zIndex: 2,
          }}
        />
        <Canvas
          camera={{ fov: 45, position: [0, 0, 0] }}
          shadows
          onClick={() => {
            const idx = grenadeIndex + 1;
            setGrenadeIndex(idx);
            setGrenades([
              ...grenades,
              {
                id: `grenade-${idx}`,
                idx: idx,
                onExploded: () => {
                  console.log('onExploded');
                  setGrenades(
                    grenades.filter((grenade) => grenade.idx !== idx)
                  );
                },
              },
            ]);
          }}
        >
          <PointerLockControls />
          <Sky sunPosition={[100, 10, 100]} />
          <directionalLight
            castShadow
            position={[0, 20, 0]}
            intensity={5}
            shadow-mapSze={4096}
            shadow-camera-top={shadowOffset}
            shadow-camera-bottom={-shadowOffset}
            shadow-camera-left={shadowOffset}
            shadow-camera-right={-shadowOffset}
          />
          <Physics gravity={[0, -9.8, 0]}>
            <Ground />
            <Player />
            {/* <Grenade
            globalGeometry={globalGeometry}
            globalMaterial={globalMaterial}
          /> */}
            {grenades.map((grenade) => (
              // <Grenade key={grenade.id} position={grenade.position} />
              <Grenade onExploded={grenade.onExploded} />
            ))}
            {/* <Grenade position={grenadePosition} /> */}
            <ThreeBox boxMeshProps={{ position: [0, 0.5, 0] }} />
            <ModelWrapper position={[10, 0, -20]} />
            <ModelWrapper position={[5, 0, -20]} />
            <ModelWrapper position={[0, 0, -20]} />
            <ModelWrapper position={[-5, 0, -20]} />
            <ModelWrapper position={[-10, 0, -20]} />
          </Physics>
        </Canvas>
      </Suspense>
    </Box>
  );
};

type ThreeBoxProps = {
  boxMeshProps: MeshProps;
};

type ModelWrapperProps = {
  position: [x: number, y: number, z: number] | undefined;
};

const ModelWrapper: React.FC<ModelWrapperProps> = ({ position }) => {
  const scale = new Vector3(0.25, 0.25, 0.25);
  return (
    <RigidBody>
      <Model scale={scale} position={position} rotation={[0, Math.PI, 0]} />
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
