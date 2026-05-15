import Categories from "./components/Categories";
import ClientsCarousel from "./components/ClientsCarousel";
import FeaturedProducts from "./components/FeaturedProducts";
import FinalCTA from "./components/FinalCTA";
import Hero from "./components/Hero";
import LocationSection from "./components/LocationSection";
import TeamSection from "./components/TeamSection";
import TrustSection from "./components/TrustSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <TrustSection />
      <ClientsCarousel />
      <TeamSection />
      <LocationSection />
      <FinalCTA />
    </main>
  );
}