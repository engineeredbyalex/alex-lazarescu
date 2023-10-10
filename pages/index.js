// importing Loader

import Loader from "../components/common/loader/Loader";
// importing Navbar
import Navbar from "../components/common/navbar/Navbar";
// importing Hero_Component
import Hero_Component from "@/components/landing_page/Hero_Component";





export default function Home() {
  return (
    <div className="overflow-x-hidden w-screen ">
      <Loader />
      <Navbar />
      <Hero_Component />
    </div >
  )
}