"use client";

import { useState } from "react";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import ParticlesBackground from "@/components/layout/ParticlesBackground";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const cinzel = Cinzel({ weight: "700", subsets: ["latin"], variable: "--font-heading" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable} dark`}>
      <head>
        <title>SkyJiya Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <ParticlesBackground />
        {/* Tombol burger sidebar mobile */}
        <button
          className="sidebar-burger"
          aria-label="Open sidebar"
          onClick={() => setSidebarOpen(true)}
        >
          <span style={{
            display: "block", width: 22, height: 3, background: "var(--color-text)", margin: "4px 0", borderRadius: 3
          }}></span>
          <span style={{
            display: "block", width: 22, height: 3, background: "var(--color-text)", margin: "4px 0", borderRadius: 3
          }}></span>
          <span style={{
            display: "block", width: 22, height: 3, background: "var(--color-text)", margin: "4px 0", borderRadius: 3
          }}></span>
        </button>
        <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="main-layout">
          <main className="main-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
