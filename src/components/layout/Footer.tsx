// src/components/layout/Footer.tsx
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} SkyJiya. Inspired by Sky: Children of the Light.</p>
    </footer>
  );
};

export default Footer;