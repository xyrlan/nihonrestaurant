import CursoSection from "@/components/CursoSection";
import FaleConoscoSection from "@/components/FaleConoscoSection";
import HeroSection from "@/components/HeroSection";
import ParceirosSection from "@/components/ParceirosSection";
import ReviewSection from "@/components/ReviewSection";
import SobreSection from "@/components/SobreSection";
import Image from "next/image";

export default function Home() {
  return (
    <main >
      <HeroSection />
      <SobreSection />
      <ReviewSection />
      <ParceirosSection />
      <FaleConoscoSection />
    </main>
  );
}
