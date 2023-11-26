import React, { useEffect, useState } from 'react';
import Navigation_Bar from "@/components/common/header/Navigation_Bar";
import Footer from "@/components/common/footer/Footer";
import LoadingScreen from "@/components/common/loader/Loader";
import LandingPage from "@/components/sections/LandingPage";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonailSection from "@/components/sections/TestimonailSection";
import SelectedWork from "@/components/sections/SelectedWork";
import AboutMeSection from '@/components/sections/AboutMeSection';



export default function Home() {

  return (
    <div className="overflow-x-hidden relative scroll-smooth ">
      <LoadingScreen />
      <Navigation_Bar />
      <LandingPage />
      <SelectedWork />
      {/* <AboutMeSection /> */}
      <ServicesSection />
      <TestimonailSection />
      <Footer />
    </div>
  );
}
