'use client'
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Toaster } from "@/components/ui/sonner"
import { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [prevScrollPos, setPrevScrollPos] = useState<number>(window.pageYOffset);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);
  return (
    <div className="">
      <Navbar visible={visible} />
      {children}
      <Footer />
      <Toaster />
    </div>)
}