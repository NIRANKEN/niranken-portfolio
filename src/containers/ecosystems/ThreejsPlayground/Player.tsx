import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { usePersonControls } from './hook';
import * as RAPIER from '@dimforge/rapier3d-compat';
import { RapierRigidBody, RigidBody, useRapier } from '@react-three/rapier';
import { Vector3 } from 'three';

const MOVE_SPEED = 10;
const direction = new Vector3();
const frontVector = new Vector3();
const sideVector = new Vector3();

export const Player = () => {
  const playerRef = useRef<RapierRigidBody | null>(null);
  const { forward, backward, left, right, jump } = usePersonControls();
  const rapier = useRapier();

  useFrame((state) => {
    if (!playerRef.current) return;

    const velocity = playerRef.current.linvel();

    frontVector.set(0, 0, Number(backward) - Number(forward));
    sideVector.set(Number(left) - Number(right), 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(MOVE_SPEED)
      .applyEuler(state.camera.rotation);

    // playerRef.current.wakeUp();
    playerRef.current.setLinvel(
      new Vector3(direction.x, velocity.y, direction.z),
      true
    );

    // jumping
    const world = rapier.world;
    const ray = world.castRay(
      new RAPIER.Ray(
        playerRef.current.translation(),
        new RAPIER.Vector3(0, -1, 0)
      ),
      0.1,
      true
    );
    const grounded = ray?.collider && Math.abs(ray.toi) <= 1.5;
    if (jump && grounded) {
      playerRef.current.setLinvel(new Vector3(velocity.x, 5, velocity.z), true);
    }

    // moving camera
    const { x, y, z } = playerRef.current.translation();
    state.camera.position.set(x, y, z);
  });

  return (
    <>
      <RigidBody position={[0, 1, -2]} ref={playerRef} mass={1} lockRotations>
        <mesh>
          <capsuleGeometry args={[0.75, 0.5]} />
        </mesh>
      </RigidBody>
    </>
  );
};
