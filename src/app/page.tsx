// src/app/page.tsx
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { profileData } from '@/lib/data';
import InfoCard from '@/components/ui/InfoCard';
import styles from './Homepage.module.css';

const MessageIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" /><line x1="8" y1="9" x2="16" y2="9" /><line x1="8" y1="13" x2="14" y2="13" /></svg>;
const AddFriendIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="9" cy="7" r="4" /><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /><path d="M16 11h6m-3 -3v6" /></svg>;

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.heroSection}>
        <Image
          src="/images/sky-hero.png"
          alt="Sky hero banner"
          layout="fill"
          objectFit="cover"
          className={styles.heroImage}
          priority
        />
        <div className={styles.heroOverlay}></div>
        <div className={styles.profileInfo}>
          <Image
            src={profileData.avatarUrl}
            alt="Profile Avatar"
            width={120}
            height={120}
            className={styles.avatar}
          />
          <div className={styles.profileText}>
            <h1>{profileData.ign}</h1>
            <p>{profileData.playstyle}</p>
          </div>
          <div className={styles.profileActions}>
              <button className={`${styles.button} ${styles.primary}`}><MessageIcon/> Message</button>
              <button className={styles.button}><AddFriendIcon/> Add Friend</button>
          </div>
        </div>
      </div>
      
      <nav className={styles.tabNav}>
        <button 
          className={`${styles.tabButton} ${activeTab === 'overview' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={`${styles.tabButton} ${activeTab === 'friend_code' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('friend_code')}
        >
          Friend Code
        </button>
      </nav>

      <div className={styles.tabContent}>
        {activeTab === 'overview' && (
          <div className={styles.contentGrid}>
            <InfoCard title="About Me">
                <p>{profileData.bio}</p>
            </InfoCard>
            <InfoCard title="Game Stats">
              <ul className={styles.statsList}>
                <li className={styles.statItem}>
                  <Image src="/images/icons/icon-wl.png" alt="Winged Light icon" width={24} height={24} />
                  <span>Winged Light: <strong>{profileData.wingedLight}</strong></span>
                </li>
                <li className={styles.statItem}>
                  <Image src="/images/icons/icon-ac.png" alt="Ascended Candle icon" width={24} height={24} />
                  <span>Ascended Candle: <strong>{profileData.ascendedCandles}</strong></span>
                </li>
              </ul>
            </InfoCard>
          </div>
        )}
        {activeTab === 'friend_code' && (
          <InfoCard title="Scan My Code">
            <p className={styles.friendCodeText}>ID: {profileData.friendCode}</p>
            <div className={styles.qrCodeContainer}>
              <Image src={profileData.qrCodeUrl} alt="Sky Friend QR Code" width={250} height={250} priority />
            </div>
          </InfoCard>
        )}
      </div>
    </div>
  );
}