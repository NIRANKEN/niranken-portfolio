import { useFrame } from '@react-three/fiber';
import { Physics, RapierRigidBody, RigidBody } from '@react-three/rapier';
import { useRef, useState } from 'react';
import {
  Euler,
  Mesh,
  MeshStandardMaterial,
  SphereGeometry,
  Vector3,
} from 'three';

type GrenadeProps = {
  // globalGeometry?: BufferGeometry<NormalBufferAttributes>;
  // globalMaterial?: Material;
  // position?: [x: number, y: number, z: number];
  onExploded: () => void;
};

const throwSpeed = 10;
type Hoge = {
  geometry: SphereGeometry;
  material: MeshStandardMaterial;
};

export const Grenade: React.FC<GrenadeProps> = ({ onExploded }) => {
  const [initial, setInitial] = useState<boolean>(true);
  const grenadeRef = useRef<RapierRigidBody | null>(null);
  const [rotation, setRotation] = useState<Euler>(new Euler());
  const [direction, setDirection] = useState<Vector3>(new Vector3());
  const [timer, setTimer] = useState<number>(0);
  const defaultGrenadeMeshRef = useRef<Mesh>(null);
  const explodedGrenadeMeshRef = useRef<Mesh>(null);
  // const [visible, setVisible] = useState<boolean>(false);
  // const [exploedVisible, setExplodedVisible] = useState<boolean>(false);

  useFrame((state) => {
    if (!grenadeRef.current) return;
    if (initial) {
      grenadeRef.current.setTranslation(state.camera.position, true);
      setInitial(false);
      setRotation(state.camera.rotation.clone());
      return;
    }

    const { x, y, z } = grenadeRef.current.translation();
    if (timer === 10) {
      if (defaultGrenadeMeshRef.current) {
        defaultGrenadeMeshRef.current.visible = true;
      }
    }

    if (timer < 150) {
      setDirection(
        new Vector3(0, 0, -1)
          .set(0, 0, -1)
          .normalize()
          .multiplyScalar(throwSpeed)
          .applyEuler(rotation)
      );
      grenadeRef.current.setLinvel(direction, true);
    }

    setTimer(timer + 1);

    if (timer === 150) {
      // 爆発アニメーション
      // const { x, y, z } = grenadeRef.current.translation();
      grenadeRef.current.setTranslation(new Vector3(x, y, z), false);
      grenadeRef.current.setLinvel(new Vector3(0, 0, 0), false);
      grenadeRef.current.setAngvel(new Vector3(0, 0, 0), false);
      if (defaultGrenadeMeshRef.current) {
        defaultGrenadeMeshRef.current.visible = false;
      }
      if (explodedGrenadeMeshRef.current) {
        explodedGrenadeMeshRef.current.visible = true;
        // explodedGrenadeMeshRef.current.position.set(x, y, z);
        console.log(
          `default grenade position: ${defaultGrenadeMeshRef?.current?.position.toArray()}`
        );
        console.log(
          `exploded grenade position: ${explodedGrenadeMeshRef.current.position.toArray()}`
        );
      }
      // setVisible(false);
      // setExplodedVisible(true);
    }
    if (timer > 300) {
      onExploded();
    }

    console.log(`x: ${x}, y: ${y}, z: ${z}`);
  });

  return (
    <RigidBody ref={grenadeRef} mass={1}>
      <group>
        <mesh visible={false} ref={defaultGrenadeMeshRef}>
          <sphereGeometry args={[0.25, 32, 32]} />
          <meshStandardMaterial color="white" metalness={0.8} roughness={0.1} />
        </mesh>
        <mesh visible={false} ref={explodedGrenadeMeshRef}>
          <sphereGeometry args={[2, 32, 32]} />
          <meshStandardMaterial
            color="hotpink"
            metalness={0.5}
            roughness={0.5}
            opacity={0.5}
          />
        </mesh>
      </group>
    </RigidBody>
  );
};

// const DefaultGrenadeMesh: React.FC<{ visible: boolean }> = ({ visible }) => {
//   return (
//     <mesh visible={visible}>
//       <sphereGeometry args={[1, 32, 32]} />
//       <meshStandardMaterial color="white" metalness={0.8} roughness={0.1} />
//     </mesh>
//   );
// };

// const ExplodedGrenadeMesh: React.FC<{ visible: boolean }> = ({ visible }) => {
//   return (
//     <mesh visible={visible}>
//       <sphereGeometry args={[5, 32, 32]} />
//       <meshStandardMaterial
//         color="hotpink"
//         metalness={0.5}
//         roughness={0.5}
//         transparent
//         opacity={0.5}
//       />
//     </mesh>
//   );
// };
