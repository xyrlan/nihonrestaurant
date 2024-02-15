import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/providers";

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
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
