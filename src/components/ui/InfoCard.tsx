import React from 'react';
import styles from './InfoCard.module.css';

type InfoCardProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;       // Icon opsional di header
  subtitle?: string;            // Subtitle opsional
};

const InfoCard = ({ title, children, className, icon, subtitle }: InfoCardProps) => {
  return (
    <section className={`${styles.card} ${className || ''}`}>
      <div className={styles.header}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <div>
          <h3>{title}</h3>
          {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
        </div>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
};

export default InfoCard;
