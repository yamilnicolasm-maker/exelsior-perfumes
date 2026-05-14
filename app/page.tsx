import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Recommender from "@/components/Recommender";
import Benefits from "@/components/Benefits";
import Reviews from "@/components/Reviews";
import PaymentMethods from "@/components/PaymentMethods";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <Header />
      <Hero />
      <ProductGrid />
      <Recommender />
      <Benefits />
      <Reviews />
      <PaymentMethods />
      <FinalCTA />
      <Footer />
    </main>
  );
}
