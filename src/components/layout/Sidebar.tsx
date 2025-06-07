"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Sidebar.module.css';

const navLinks = [
  { name: 'Profile', href: '/' },
  { name: 'Gallery', href: '/gallery' },
];

// Menambahkan Props baru: isOpen dan onClose
type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Sidebar = ({ isOpen, onClose }: Props) => {
  const pathname = usePathname();
  const sidebarClasses = `${styles.sidebar} ${isOpen ? styles.isOpen : ''}`;

  return (
    <aside className={sidebarClasses}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">SkyJiya</Link>
        </div>
        <button onClick={onClose} className={styles.closeButton} aria-label="Close menu">&times;</button>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navLinks.map((link) => (
            <li key={link.name} onClick={onClose}> {/* Tutup sidebar saat link diklik */}
              <Link href={link.href} className={pathname === link.href ? styles.activeLink : styles.link}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;