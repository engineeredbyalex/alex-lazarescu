// importing Loader
import Hero_Component from "@/components/landing_page/Hero_Component";
import Loader from "../components/common/loader/Loader";
// importing Navbar
import Navbar from "../components/common/navbar/Navbar";
import Background_Component from "@/components/common/background/Background_Component";
import Skills_Component from "@/components/landing_page/Skills_Component";
// importing Hero_Component






export default function Home() {
  return (
    <div className="overflow-x-hidden ">
      <Loader />
      <Navbar />
      <Hero_Component />
      <Skills_Component />
    </div >
  )
}