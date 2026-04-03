import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Earth Live Invest | Wealth Through Clean Energy",
  description: "Líderes en inversión de infraestructura de energía solar premium en El Salvador. Ahorra y genera riqueza sostenible hoy mismo.",
  keywords: ["energía solar El Salvador", "inversión energía limpia", "wealth through clean energy", "Earth Live Invest", "baterías solares", "paneles solares El Salvador"],
  other: {
    "geo.region": "SV",
    "geo.placename": "El Salvador"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-SV"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground selection:bg-gold/20 selection:text-gold">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
