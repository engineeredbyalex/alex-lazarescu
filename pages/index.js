// importing Loader
import Loader from "../components/common/loader/Loader";
// importing Navbar
import Navbar from "../components/common/navbar/Navbar";
// importing Hero_Component
import Hero_Component from "@/components/landing_page/Hero_Component";
// importing Hero_Component
import About_Me_Component from "@/components/landing_page/About_Me_Component";
// importing Hero_Component
import Skills_Component from "@/components/landing_page/Skills_Component";
import Projects_Component from "@/components/landing_page/Projects_Components";
import Footer from "@/components/common/Footer";
import Shop_Component from "@/components/landing_page/Shop_Component";






export default function Home() {
  return (
    <div className="overflow-hidden">
      <Loader />
      <Navbar />
      <Hero_Component />
      <About_Me_Component />
      <Skills_Component />
      <Projects_Component />
      {/* <Shop_Component /> */}
      <Footer />
    </div >
  )
}