'use client'
import FaleConoscoSection from "@/components/FaleConoscoSection";
import HeroSection from "@/components/HeroSection";
import ParceirosSection from "@/components/ParceirosSection";
import ReviewSection from "@/components/ReviewSection";
import SobreSection from "@/components/SobreSection";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const searchParams = useSearchParams()
  const section = searchParams.get('section');

  useEffect(() => {
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [section]);


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
