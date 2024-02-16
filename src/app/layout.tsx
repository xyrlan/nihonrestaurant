import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/providers";
import { Suspense } from "react";
import Image from "next/image";


const josepin = Josefin_Sans({ subsets: ["latin"] })


export const metadata: Metadata = {
  title: "Nihon Restaurante Japonês",
  description: " Restaurante e Sushi Bar localizado em Aquidauana MS, Há 12 anos, começamos com um sonho: fornecer comida e atendimento de qualidade em Aquiadauana MS.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${josepin.className} bg-[#292824]`}>
        <Suspense fallback={<div className='h-screen w-full flex items-center justify-center bg-[#292824]'>
          <Image src={'/nihonspan.png'} width={400} height={400} alt='logonihon' className='h-12 md:h-20 w-auto duration-300 motion-safe:animate-pulse' />
        </div>} >
          <Providers>
            {children}
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
