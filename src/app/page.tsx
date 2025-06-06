// src/app/page.tsx
import Image from 'next/image';
import { profileData } from '@/lib/data'; // Mengambil data dari lib/data.ts
import InfoCard from '@/components/ui/InfoCard'; // Menggunakan komponen kartu
import styles from './Homepage.module.css'; // Menggunakan style khusus homepage

export default function HomePage() {
  return (
    <div className={styles.container}>
      <header className={styles.profileHeader}>
        <h1>{profileData.ign}</h1>
        <p className={styles.playstyle}>{profileData.playstyle}</p>
      </header>

      <div className={styles.mainGrid}>
        <div className={styles.leftColumn}>
          <InfoCard title="About Me in Sky">
            <p>{profileData.bio}</p>
          </InfoCard>

          <InfoCard title="Game Stats">
            <ul className={styles.statsList}>
              <li>✨ Winged Light: <strong>{profileData.wingedLight}</strong></li>
              <li>🔥 Ascended Candles: <strong>{profileData.ascendedCandles}</strong></li>
            </ul>
          </InfoCard>

          <InfoCard title="Current Outfit">
            <ul className={styles.outfitList}>
              {Object.entries(profileData.currentOutfit).map(([type, name]) => (
                <li key={type}>
                  <span>{type}:</span> {name}
                </li>
              ))}
            </ul>
          </InfoCard>
        </div>

        <div className={styles.rightColumn}>
          <InfoCard title="Friend Code">
            <p>Let's be friends!</p>
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