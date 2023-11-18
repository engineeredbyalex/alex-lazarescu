import React, { useEffect, useState } from 'react';
import Navigation_Bar from "@/components/common/header/Navigation_Bar";
import Footer from "@/components/common/footer/Footer";
import LoadingScreen from "@/components/common/loader/Loader";
import LandingPage from "@/components/sections/LandingPage";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonailSection from "@/components/sections/TestimonailSection";
import SelectedWork from "@/components/sections/SelectedWork";

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const hasLoaderBeenShown = localStorage.getItem('loaderShown');

    if (hasLoaderBeenShown) {
      // If the loader has already been shown, disable it
      setShowLoader(false);
    } else {
      // If the loader hasn't been shown, show it and set the flag in local storage
      localStorage.setItem('loaderShown', 'true');
    }
  }, []);
  return (
    <div className="overflow-x-hidden relative scroll-smooth ">
      {showLoader && <LoadingScreen />}
      <Navigation_Bar />
      <LandingPage />
      <SelectedWork />
      <ServicesSection />
      <TestimonailSection />
      <Footer />
    </div>
  );
}
