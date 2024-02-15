'use client'
import FaleConoscoSection from "@/components/FaleConoscoSection";
import HeroSection from "@/components/HeroSection";
import ParceirosSection from "@/components/ParceirosSection";
import ReviewSection from "@/components/ReviewSection";
import SobreSection from "@/components/SobreSection";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

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
    <Suspense fallback={<div className='h-screen w-full  flex items-center justify-center bg-[#292824]'>
      <h1 className='fontnihon text-2xl lg:text-5xl text-white duration-300 motion-safe:animate-pulse'>NIHON</h1>
    </div>}>
      <main>
        <HeroSection />
        <SobreSection />
        <ReviewSection />
        <ParceirosSection />
        <FaleConoscoSection />
      </main>
    </Suspense>
  );
}
