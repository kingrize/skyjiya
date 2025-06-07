// src/components/layout/Navbar.tsx
import Link from 'next/link';
import styles from './Navbar.module.css';
import ThemeToggle from '../ui/ThemeToggle'; // <-- 1. Impor komponen baru

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.brand}>SkyJiya</Link>
      <div className={styles.navLinks}>
        <Link href="/">Profile</Link>
        <Link href="/gallery">Gallery</Link>
        <ThemeToggle /> {/* <-- 2. Tambahkan tombol di sini */}
      </div>
    </nav>
  );
};
export default Navbar;