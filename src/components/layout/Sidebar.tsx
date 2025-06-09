"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";

const navLinks = [
  { name: "Profile", href: "/" },
  { name: "Gallery", href: "/gallery" },
];

export default function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const pathname = usePathname();

  return (
    <>
      <aside className={`${styles.sidebar} ${isOpen ? styles.isOpen : ""}`}>
        <div className={styles.header}>
          <span className={styles.logo}>🌟 SkyJiya</span>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close sidebar">
            &times;
          </button>
        </div>
        <nav>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? styles.active : styles.link}
                  onClick={onClose}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      {/* Overlay saat sidebar terbuka di mobile */}
      {isOpen && <div className={styles.overlay} onClick={onClose}></div>}
    </>
  );
}
