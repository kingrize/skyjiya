"use client";
import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css';
import Sidebar from './Sidebar'; // Pastikan import Sidebar benar
import ThemeToggle from '../ui/ThemeToggle';

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.left}>
          <Link href="/" className={styles.brand}>SkyJiya</Link>
        </div>
        <div className={styles.navLinks}>
          <Link href="/">Profile</Link>
          <Link href="/gallery">Gallery</Link>
          <ThemeToggle />
        </div>
        <button
          className={`${styles.hamburger} ${sidebarOpen ? styles.open : ''}`}
          onClick={() => setSidebarOpen((v) => !v)}
          aria-label={sidebarOpen ? "Close menu" : "Open menu"}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      {/* Sidebar Slide-in */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
