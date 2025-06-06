// src/components/layout/Navbar.tsx
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.brand}>SkyJiya</Link>
      <div className={styles.navLinks}>
        <Link href="/">Profile</Link>
        <Link href="/gallery">Gallery</Link>
      </div>
    </nav>
  );
};
export default Navbar;