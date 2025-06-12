"use client";
import Link from "next/link";
import { FaUser, FaImages } from "react-icons/fa";
import styles from "./Sidebar.module.css";

export default function Sidebar({ isOpen = false, onClose }: { isOpen?: boolean; onClose?: () => void }) {
  // Close overlay & drawer hanya di mobile
  return (
    <>
      {/* Overlay hanya muncul di mobile drawer */}
      <div
        className={`${styles.overlay} ${isOpen ? styles.active : ""}`}
        onClick={onClose}
      />
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <div className={styles.logoBar}>
          <span className={styles.logo}>🌟</span>
          <span className={styles.brand}>SKYJIYA</span>
        </div>
        <nav className={styles.menu}>
          <Link href="/" className={styles.menuItem} onClick={onClose}>
            <FaUser className={styles.menuIcon} /> Profile
          </Link>
          <Link href="/gallery" className={styles.menuItem} onClick={onClose}>
            <FaImages className={styles.menuIcon} /> Gallery
          </Link>
        </nav>
      </aside>
    </>
  );
}
