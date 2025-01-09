import Header from "./src/components/Header";
import AboutSection from "./src/components/AboutSection";
import FooterSection from "./src/components/Footer";
import CareerSection from "./src/components/CareerSection";

export default function Home() {
  return (
    <div className="snap-y">
      <Header />
      <AboutSection />
      <CareerSection />
      <FooterSection />

    </div>

  );
}
