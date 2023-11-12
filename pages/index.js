import Navigation_Bar from "@/components/common/header/Navigation_Bar";
import Footer from "@/components/common/footer/Footer";
import LoadingScreen from "@/components/common/loader/Loader";
import LandingPage from "@/components/sections/LandingPage";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonailSection from "@/components/sections/TestimonailSection";
import SelectedWork from "@/components/sections/SelectedWork";

export default function Home() {
  return (
    <div className="overflow-x-hidden relative">
      <LoadingScreen />
      <Navigation_Bar />
      <LandingPage />
      <SelectedWork />
      <ServicesSection />
      <TestimonailSection />
      <Footer />
    </div>
  );
}
