// src/components/ui/MobileMenuToggle.tsx
"use client";
import styles from './MobileMenuToggle.module.css';

type Props = {
  onClick: () => void;
};

// Pastikan komponen didefinisikan sebagai fungsi yang me-return JSX
const MobileMenuToggle = ({ onClick }: Props) => (
  <button onClick={onClick} className={styles.toggleButton} aria-label="Open menu">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </button>
);

// Pastikan ada 'export default'
export default MobileMenuToggle;