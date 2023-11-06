import { useEffect, useState } from 'react';

export const usePersonControls = () => {
  const keys = {
    KeyW: 'forward',
    KeyS: 'backward',
    KeyA: 'left',
    KeyD: 'right',
    Space: 'jump',
  };
  type Key = keyof typeof keys;

  const moveFieldByKey = (key: Key) => keys[key];
  const [movement, setMovement] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
  });

  const setMovementStatus = (key: Key, status: boolean) => {
    setMovement((prevMovement) => ({
      ...prevMovement,
      [moveFieldByKey(key)]: status,
    }));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // e.codeがKey型のプロパティであるかどうかを確認する
      if (
        e.code === 'KeyW' ||
        e.code === 'KeyS' ||
        e.code === 'KeyA' ||
        e.code === 'KeyD' ||
        e.code === 'Space'
      ) {
        setMovementStatus(e.code, true);
      }
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      if (
        e.code === 'KeyW' ||
        e.code === 'KeyS' ||
        e.code === 'KeyA' ||
        e.code === 'KeyD' ||
        e.code === 'Space'
      ) {
        setMovementStatus(e.code, false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return movement;
};
