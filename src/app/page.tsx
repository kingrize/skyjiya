// src/app/page.tsx
import Image from 'next/image';
import { profileData } from '@/lib/data';
import InfoCard from '@/components/ui/InfoCard';
import styles from './Homepage.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <header className={styles.profileHeader}>
        <h1>{profileData.ign}</h1>
        <p className={styles.playstyle}>{profileData.playstyle}</p>
      </header>

      <div className={styles.mainGrid}>
        {/* --- KIRI --- */}
        <div className={styles.leftColumn}>
          <InfoCard title="About Me in Sky">
            <p>{profileData.bio}</p>
          </InfoCard>

          <InfoCard title="Game Stats">
            <ul className={styles.statsList}>
              <li className={styles.statItem}>
                <Image 
                  src="/images/icons/icon-wl.png" 
                  alt="Winged Light icon" 
                  width={24} 
                  height={24} 
                />
                <span>Winged Light: <strong>{profileData.wingedLight}</strong></span>
              </li>
              <li className={styles.statItem}>
                <Image 
                  src="/images/icons/icon-ac.png" 
                  alt="Ascended Candle icon" 
                  width={24} 
                  height={24} 
                />
                <span>Ascended Candle: <strong>{profileData.ascendedCandles}</strong></span>
              </li>
            </ul>
          </InfoCard>

          <InfoCard title="Current Outfit">
            <div className={styles.outfitGrid}>
              {Object.entries(profileData.currentOutfit).map(([type, name]) => (
                <div key={type} className={styles.outfitItem}>
                  <span className={styles.outfitType}>{type}:</span>
                  <span className={styles.outfitName}>{name}</span>
                </div>
              ))}
            </div>
          </InfoCard>
        </div>

        {/* --- KANAN --- */}
        <div className={styles.rightColumn}>
          <InfoCard title="Friend Code">
            {/* INI PERBAIKANNYA */}
            <p>Let&apos;s be friends!</p>
            <p className={styles.friendCodeText}>ID: {profileData.friendCode}</p>
            <div className={styles.qrCodeContainer}>
              <Image
                src={profileData.qrCodeUrl}
                alt="Sky Friend QR Code"
                width={250}
                height={250}
                priority
              />
            </div>
          </InfoCard>
        </div>
      </div>
    </div>
  );
}