'use client'
import Footer from "@/components/Footer"
import { NavigationMenuMain } from "@/components/Navbar"
import { Toaster } from "@/components/ui/sonner"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);
  const [isNavbarAtTop, setIsNavbarAtTop] = useState<boolean>(true);

  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
      setIsNavbarAtTop(currentScrollPos === 0);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [prevScrollPos, visible]);

  if (pathname.startsWith('/estudio')) return (
    <>
      {children}
    </>
  )

  return (
    <>
      <NavigationMenuMain visible={visible} isNavbarAtTop={isNavbarAtTop} />
      {children}
      <Footer />
      <Toaster />
    </>
  )
}