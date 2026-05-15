import Categories from "./components/Categories";
import ClientsCarousel from "./components/ClientsCarousel";
import FeaturedProducts from "./components/FeaturedProducts";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LocationSection from "./components/LocationSection";
import Navbar from "./components/Navbar";
import TeamSection from "./components/TeamSection";
import TrustSection from "./components/TrustSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <TrustSection />
      <ClientsCarousel />
      <TeamSection />
      <LocationSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}