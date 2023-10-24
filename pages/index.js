import Navigation_Bar from "@/components/layout/header/Navigation_Bar";
import Page from "@/components/layout/page/Page";
import { RevealWrapper } from "next-reveal";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Button from "@/components/common/buttons/Button";

import { Model } from "@/components/Iphone";

export default function Home() {
  return (
    <div className="overflow-x-hidden relative">
      <Navigation_Bar />
      <Page>
        <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-between lg:pl-16">
          <div className="w-full  absolute right-[-30%] top-0 lg:mt-20">
            <RevealWrapper>
              <div className="w-full h-screen text-white">
                <Canvas>
                  <Stage environment="studio">
                    <OrbitControls autoRotate enableZoom={false} />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[1, 1, 1]} intensity={0.1} />
                    <mesh scale={5}>
                      <Model />
                    </mesh>
                  </Stage>
                </Canvas>
              </div>
            </RevealWrapper>
          </div>
          <div className="text-left  lg:mt-20">
            <RevealWrapper>
              <h2 className="text-white font-light uppercase lg:text-7xl lg:leading-96">Salut !</h2>
            </RevealWrapper>
            <RevealWrapper>
              <h4 className="text-white font-light uppercase lg:text-7xl lg:leading-96">Eu sunt <span className="text-[#F4E869] font-bold">Alex</span></h4>
            </RevealWrapper>
            <div className="flex flex-col  gap-5 md:gap-20 lg:gap-[10px] mt-5 ">
              <p className="text-[#F4E869] font-bold uppercase  lg:text-2xl">Student</p>
              <p className="text-[#F4E869] font-bold uppercase  lg:text-2xl">Web Developer</p>
              <p className="text-[#F4E869] font-bold uppercase  lg:text-2xl">Designer</p>
            </div>
            <div className="flex mt-10  gap-10">
              <Button link="/projects" text="Proiecte" type="solid" color="#F4E869" />
              <Button link="/contact" text="Contact" type="outline" color="#F4E869" />
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
}
