import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/providers";
import { Suspense } from "react";


const josepin = Josefin_Sans({ subsets: ["latin"] })


export const metadata: Metadata = {
  title: "Nihon Restaurante Japonês",
  description: " Restaurante e Sushi Bar localizado em Aquidauana MS, Há 30 anos, começamos com um sonho: fornecer comida e atendimento de qualidade em Aquiadauana MS.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${josepin.className} bg-[#292824]`}>
        <Suspense fallback={<div className='h-screen w-full  flex items-center justify-center bg-[#292824]'>
          <h1 className='fontnihon text-2xl lg:text-5xl text-white duration-300 motion-safe:animate-pulse'>NIHON</h1>
        </div>} >
          <Providers>
            {children}
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
