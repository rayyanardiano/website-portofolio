import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Particles from "./Particles";

const MyPhoto = () => {
  return (
    <div className="w-full flex justify-center items-center relative overflow-visible">
      {/* Background particles */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
          <ambientLight intensity={0.2} color="#1a1a40" />
          <Suspense fallback={null}>
            <Particles count={300} />
          </Suspense>
        </Canvas>
      </div>

      {/* Profile + Circle */}
      <div className="relative w-[250px] h-[250px] sm:w-[250px] sm:h-[250px] md:w-[320px] md:h-[320px] lg:w-[360px] lg:h-[360px] z-10 mt-0 md:mt-[120px]">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-grey-600 shadow-2xl relative" />
        <img
          src="/images/rayyann.png"
          alt="My Profile"
          className="absolute w-[130%] sm:w-[110%] md:w-[120%] lg:w-[150%] bottom-0 left-1/2 transform -translate-x-1/2 rounded-b-full object-contain z-10"
        />
      </div>
    </div>
  );
};

export default MyPhoto;
