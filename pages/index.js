// importing Loader
import Hero_Component from "@/components/landing_page/Hero_Component";
import Loader from "../components/common/loader/Loader";
// importing Navbar
import Navbar from "../components/common/navbar/Navbar";
import Background_Component from "@/components/common/background/Background_Component";
import Service_Component from "@/components/landing_page/Service_Component.js";
import Projects_Component from "@/components/landing_page/Projects_Component";
import Testimonial_Component from "@/components/landing_page/Testimonial_Component";
import Footer from "@/components/common/Footer";
import Under_Construction from "@/components/common/Under_Construction";
// importing Hero_Component






export default function Home() {
  return (
    <div className="overflow-x-hidden w-screen ">
      <Loader />
      <Under_Construction />
    </div >
  )
}