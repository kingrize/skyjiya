// src/components/ui/InfoCard.tsx
import React from 'react';
import styles from './InfoCard.module.css';

type InfoCardProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

const InfoCard = ({ title, children, className }: InfoCardProps) => {
  return (
    <section className={`${styles.card} ${className || ''}`}>
      <h3>{title}</h3>
      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
};

export default InfoCard;