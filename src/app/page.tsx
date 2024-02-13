import CursoSection from "@/components/CursoSection";
import FaleConoscoSection from "@/components/FaleConoscoSection";
import HeroSection from "@/components/HeroSection";
import ParceirosSection from "@/components/ParceirosSection";
import SobreSection from "@/components/SobreSection";
import Image from "next/image";

export default function Home() {
  return (
    <main >
      <HeroSection />
      <SobreSection />
      <CursoSection />
      <ParceirosSection />
      <FaleConoscoSection />
    </main>
  );
}
