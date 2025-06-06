// src/app/layout.tsx
import type { Metadata } from "next";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer"; // <-- Ini akan mengimpor dari lokasi yang benar
import ParticlesBackground from "../components/layout/ParticlesBackground";
import "./globals.css";

export const metadata: Metadata = {
  title: "SkyJiya - My Trail of Light",
  description: "A personal website about my journey in Sky: Children of the Light.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ParticlesBackground />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}