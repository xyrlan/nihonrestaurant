import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/providers";
import { Suspense } from "react";
import Image from "next/image";
import Head from "next/head";


const josepin = Josefin_Sans({ subsets: ["latin"] })


export const metadata: Metadata = {
  title: "Nihon Restaurante Japonês - Aquidauana MS",
  description: " Restaurante e Sushi Bar localizado em Aquidauana MS, Há 12 anos, começamos com um sonho: fornecer comida e atendimento de qualidade em Aquiadauana MS.",
  abstract: "Restaurante e Sushi Bar localizado em Aquidauana MS, Há 12 anos, começamos com um sonho: fornecer comida e atendimento de qualidade em Aquiadauana MS.",
  keywords: "Restaurante, Aquidauana, Comida Japonesa, Sushi, Sashimi, Temaki, Yakisoba, Teppan, Aquidauana, MS, Mato Grosso do Sul, Brasil, Japão, Nihon, Nihon Restaurante, Nihon Aquidauana, Nihon Aquidauana MS, Nihon Aquidauana Mato Grosso do Sul, Nihon Aquidauana Brasil, Nihon Aquidauana Japão, Nihon Aquidauana Restaurante, Nihon Aquidauana Restaurante Japonês, Nihon Aquidauana Restaurante Japonês Aquidauana, Nihon Aquidauana Restaurante Japonês Aquidauana MS, Nihon Aquidauana Restaurante Japonês Aquidauana Mato Grosso do Sul, Nihon Aquidauana Restaurante Japonês Aquidauana Brasil, Nihon Aquidauana Restaurante",
  category: "Restaurante",
  creator: "Nihon Restaurante",
  alternates: {
    canonical: "https://nihonrestaurante.com.br",
  },
  openGraph: {
    url: "https://nihonrestaurante.com.br",
    title: "Nihon Restaurante Japonês - Aquidauana MS",
    description: "Restaurante e Sushi Bar localizado em Aquidauana MS, Há 12 anos, começamos com um sonho: fornecer comida e atendimento de qualidade em Aquiadauana MS.",
    images: [
      "https://www.nihonrestaurante.com.br/_next/image?url=%2Fnihonlogo.png&w=128&q=75",

    ],
  }
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
