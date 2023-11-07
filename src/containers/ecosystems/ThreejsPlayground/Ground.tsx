import { CuboidCollider, RigidBody } from '@react-three/rapier';

export const Ground: React.FC = () => {
  return (
    <RigidBody type="fixed" colliders={false}>
      <mesh receiveShadow position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[200, 200]} />
        <meshStandardMaterial color={'grey'} />
      </mesh>
      <CuboidCollider args={[200, 2, 200]} position={[0, -5, 0]} />
    </RigidBody>
  );
};
