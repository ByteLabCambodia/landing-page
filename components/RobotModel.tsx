"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PresentationControls, Stage, useGLTF } from "@react-three/drei";
import type { MotionValue } from "framer-motion";

function Robot() {
  const { scene } = useGLTF("/Robot_Soccer_ASSY.glb");
  return <primitive object={scene} />;
}

useGLTF.preload("/Robot_Soccer_ASSY.glb");

export default function RobotModel({ still }: { progress?: MotionValue<number>; still: boolean }) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-130">
      <Canvas camera={{ position: [3, 1.5, 3.5], fov: 40 }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <PresentationControls
            global
            snap={!still}
            rotation={[0, -0.4, 0]}
            polar={[-0.2, 0.3]}
            azimuth={[-0.6, 0.6]}
            speed={still ? 0 : 1.2}
          >
            <Stage environment="city" intensity={0.6} adjustCamera={1.3}>
              <Robot />
            </Stage>
          </PresentationControls>
        </Suspense>
      </Canvas>
    </div>
  );
}
