import Navigation_Bar from "@/components/layout/header/Navigation_Bar";
import Page from "@/components/layout/page/Page";
import { RevealWrapper } from "next-reveal";

export default function Home() {
  return (
    <div className="overflow-x-hidden relative">
      <Navigation_Bar />
      <Page>
        <div>
          <RevealWrapper>
            <h2 className="text-[#fff] font-light uppercase">Salut !</h2>
          </RevealWrapper>
          <RevealWrapper>
            <h4 className="text-[#fff] font-light uppercase">Eu sunt <span className="text-[#F4E869] font-bold">Alex</span></h4>
          </RevealWrapper>
          <div className="grid grid-cols-2 lg:flex lg:gap-[30px]">
            <p className="text-[#F4E869] font-bold uppercase">Student</p>
            <p className="text-[#F4E869] font-bold uppercase">Web Developer</p>
            <p className="text-[#F4E869] font-bold uppercase">Designer</p>
          </div>
        </div>
      </Page >
    </div >
  )
}