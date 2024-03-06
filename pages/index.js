import React from 'react';
import Navigation_Bar from "@/components/common/header/Header";
import LandingPage from "@/components/sections/LandingPage";
import SelectedWork from "@/components/sections/SelectedWork";
import AboutMeSection from '@/components/sections/AboutMeSection';
import ContactSection from '@/components/sections/ContactSection';






export default function Home() {

  return (
    <div >
      <Navigation_Bar />
      <LandingPage />
      <SelectedWork />
      <AboutMeSection />
      <ContactSection/>
    </div>
  );
}
