import React from 'react';
import Navigation_Bar from "@/components/common/header/Header";
import LoadingScreen from "@/components/common/loader/Loader";
import LandingPage from "@/components/sections/LandingPage";
import SelectedWork from "@/components/sections/SelectedWork";
import ServicesSection from '@/components/sections/ServicesSection';
import AboutMeSection from '@/components/sections/AboutMeSection';




export default function Home() {

  return (
    <div >
      {/* <LoadingScreen /> */}
      <Navigation_Bar />
      <LandingPage />
      <SelectedWork />
      <ServicesSection />
      <AboutMeSection />
    </div>
  );
}
