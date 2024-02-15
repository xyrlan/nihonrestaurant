import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/providers";

const josepin = Josefin_Sans({ subsets: ["latin"] })


export const metadata: Metadata = {
  title: "Nihon",
  description: "Sushi Bar e Restaurante",
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
