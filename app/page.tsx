import FooterSection from "./sections/FooterSection";
import BenefitsSection from "./sections/BenefitsSection";
import HeroSection from "./sections/HeroSection";
import PartnersSection from "./sections/PartnerSection"; 

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PartnersSection/>
      <BenefitsSection />
      <FooterSection />
    </main>
  );
}
