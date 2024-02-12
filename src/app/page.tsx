import FaleConoscoSection from "@/components/FaleConoscoSection";
import HeroSection from "@/components/HeroSection";
import SobreSection from "@/components/SobreSection";
import Image from "next/image";

export default function Home() {
  return (
    <main >
      <HeroSection />
      <SobreSection />
      <FaleConoscoSection />
    </main>
  );
}
