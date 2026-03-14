// This code is from https://medium.com/@arslaniqbalmgt/3d-website-in-next-js-13-with-loader-848bf898caa 
import {
  Environment,
  PresentationControls,
  useGLTF,
  useAnimations
} from "@react-three/drei";

import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { useEffect, useRef } from "react";


const Model = ({model_filename}) => {
  const ref = useRef();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco-gltf/");
  const model = useGLTF("/3Dmodels/" + model_filename, dracoLoader);
  const { actions } = useAnimations(model.animations, ref);
  
  useEffect(() => {
    actions["Idle_loop"]?.play();
  }, [actions]);

  return (
    <>
      <PresentationControls global polar={[-1.0, 1.0]} azimuth={[-1.0, 1.0]}>
        <primitive ref={ref} object={model.scene} position-y={-1.2} rotation-y={Math.PI} scale={0.75}></primitive>
      </PresentationControls>
    </>
  );
};

export default Model;