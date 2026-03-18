// This code is from https://medium.com/@arslaniqbalmgt/3d-website-in-next-js-13-with-loader-848bf898caa 
import {
  Environment,
  PresentationControls,
  useGLTF,
  useAnimations
} from "@react-three/drei";

import { DRACOLoader } from "three-stdlib";
import { useEffect, useRef, useMemo } from "react";
import { Group } from "three";

interface ModelProps {
  model_filename: string;
  animation?: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}

const Model = ({ 
  model_filename, 
  animation = "Idle_loop",
  position = [0, -1.2, 0],
  rotation = [0, Math.PI, 0],
  scale = 0.75
}: ModelProps) => {
  const ref = useRef<Group>(null);
  
  useEffect(() => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco-gltf/");
  }, []);

  const model = useMemo(() => useGLTF("/3Dmodels/" + model_filename), [model_filename]);
  const { actions } = useAnimations(model.animations, ref);
  
  useEffect(() => {
    actions[animation]?.play();
  }, [actions, animation]);

  return (
    <>
      <PresentationControls global polar={[-1.0, 1.0]} azimuth={[-1.0, 1.0]}>
        <primitive 
          ref={ref} 
          object={model.scene} 
          position-x={position[0]}
          position-y={position[1]}
          position-z={position[2]}
          rotation-x={rotation[0]}
          rotation-y={rotation[1]}
          rotation-z={rotation[2]}
          scale={scale}
        />
      </PresentationControls>
    </>
  );
};

export default Model;