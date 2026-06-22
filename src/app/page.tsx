import Hero from "@/components/Hero";
import Specialist from "@/components/Specialist";
import ServicesSection from "@/components/ServicesSection";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Specialist />
      <ServicesSection />
      <ReviewsCarousel />
      <Gallery />
      <FAQ />
      <ContactSection />
      <FinalCTA />
    </>
  );
}
