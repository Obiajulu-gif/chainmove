import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CoreFeaturesSection from "./components/CoreFeaturesSection";
import HowItWorksSection from "./components/HowItWorksSection"
import TestimonialsSection from "./components/TestimonialsSection"
import FAQSection from "./components/FAQSection"
import JoinCommunitySection from "./components/JoinCommunitySection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection/>
      <CoreFeaturesSection/>
      <HowItWorksSection />
      <TestimonialsSection/>
      <FAQSection/>
      <JoinCommunitySection/>
    </>
  );
}
