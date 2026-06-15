import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExploreSection from "@/components/ExploreSection";
import FoodSection from "@/components/FoodSection";
import TransitSection from "@/components/TransitSection";
import SurvivalSection from "@/components/SurvivalSection";
import Footer from "@/components/Footer";
import AssistantButton from "@/components/AssistantButton";

export default function Home() {
  return (
    <>
      <div id="top">
        <Navbar />
      </div>

      <main>
        <Hero />

        <ExploreSection />
        <FoodSection />
        <SurvivalSection />
        <TransitSection />
      </main>

      <Footer />
      <AssistantButton />
    </>
  );
}