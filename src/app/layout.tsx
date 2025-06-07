"use client";

import { useState } from 'react'; // Kita hanya butuh useState
import { Inter, Cinzel } from "next/font/google";
import Sidebar from "../components/layout/Sidebar";
import MobileMenuToggle from '../components/ui/MobileMenuToggle';
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-body' });
const cinzel = Cinzel({ weight: "700", subsets: ["latin"], variable: '--font-heading' });

// Karena ini sudah Client Component, metadata statis bisa dipindah ke page.tsx atau dibiarkan
// export const metadata = { ... };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable} dark`}>
      <body>
        <div className="main-layout">
          {/* Kita render komponennya secara langsung, tanpa pengecekan isMounted */}
          <MobileMenuToggle onClick={() => setSidebarOpen(true)} />
          <Sidebar 
            isOpen={isSidebarOpen} 
            onClose={() => setSidebarOpen(false)} 
          />
          
          <main className="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}