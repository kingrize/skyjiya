// src/app/layout.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";

// --- Font Configuration ---
const inter = Inter({ subsets: ["latin"], variable: '--font-body' });
const cinzel = Cinzel({ weight: "700", subsets: ["latin"], variable: '--font-heading' });


// --- Komponen #1: MobileMenuToggle ---
const MobileMenuToggle = ({ onClick }: { onClick: () => void; }) => (
  <button onClick={onClick} className="mobile-toggle-button" aria-label="Open menu">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  </button>
);


// --- Komponen #2: Sidebar ---
const navLinks = [
  { name: 'Profile', href: '/' },
  { name: 'Gallery', href: '/gallery' },
];

const Sidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; }) => {
  const pathname = usePathname();
  const sidebarClasses = `sidebar ${isOpen ? "isOpen" : ''}`;

  return (
    <aside className={sidebarClasses}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <Link href="/">SkyJiya</Link>
        </div>
        <button onClick={onClose} className="sidebar-close-button" aria-label="Close menu">&times;</button>
      </div>
      <nav className="sidebar-nav">
        <ul className="sidebar-navList">
          {navLinks.map((link) => (
            <li key={link.name} onClick={onClose}>
              <Link href={link.href} className={pathname === link.href ? "sidebar-activeLink" : "sidebar-link"}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};


// --- Komponen Utama: RootLayout ---
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
          <MobileMenuToggle onClick={() => setSidebarOpen(true)} />
          <Sidebar 
            isOpen={isSidebarOpen} 
            onClose={() => setSidebarOpen(false)} 
          />
          <main className="main-content">
            {children}
          </main>
        </div>
        
        {/* SEMUA CSS DARI FILE LAIN KITA GABUNGKAN DI SINI */}
        <style jsx global>{`
          /* === CSS untuk Sidebar === */
          .sidebar {
            width: 250px;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
            display: flex;
            flex-direction: column;
            padding: 1.5rem;
            background: var(--color-panel-bg);
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            border-right: 1px solid var(--color-panel-border);
            z-index: 1000;
            transition: transform 0.3s ease-in-out;
          }
          .sidebar-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 3rem;
            padding: 0 0.5rem;
          }
          .sidebar-logo {
            font-family: var(--font-heading);
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--color-text);
          }
          .sidebar-logo a { color: inherit; text-decoration: none; }
          .sidebar-close-button {
            display: none;
            background: none;
            border: none;
            color: var(--color-text-muted);
            font-size: 2.5rem;
            cursor: pointer;
            padding: 0;
            line-height: 1;
          }
          .sidebar-nav { flex-grow: 1; }
          .sidebar-navList { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.5rem; }
          .sidebar-link, .sidebar-activeLink { display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-weight: 600; transition: all 0.2s ease; font-size: 1rem; position: relative; }
          .sidebar-link { color: var(--color-text-muted); }
          .sidebar-link:hover { background-color: rgba(255, 255, 255, 0.05); color: var(--color-text); }
          .sidebar-activeLink { background-color: rgba(250, 204, 21, 0.1); color: var(--color-accent-gold); font-weight: 700; }
          .sidebar-activeLink::before { content: ''; position: absolute; left: 0; top: 50%; transform: translateY(-50%); width: 4px; height: 60%; background-color: var(--color-accent-gold); border-radius: 0 4px 4px 0; }
          
          /* === CSS untuk Tombol Mobile === */
          .mobile-toggle-button {
            display: none;
            position: fixed;
            top: 1rem;
            left: 1rem;
            z-index: 999;
            background: var(--color-panel-bg);
            border: 1px solid var(--color-panel-border);
            border-radius: 8px;
            padding: 0.5rem;
            color: var(--color-text);
            cursor: pointer;
          }
          
          /* === Media Query untuk Mobile === */
          @media (max-width: 900px) {
            .sidebar { transform: translateX(-100%); }
            .sidebar.isOpen { transform: translateX(0); }
            .sidebar-close-button { display: block; }
            .mobile-toggle-button { display: block; }
          }
        `}</style>
      </body>
    </html>
  );
}
