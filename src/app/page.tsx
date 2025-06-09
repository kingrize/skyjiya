"use client";

import { useState } from 'react';
import Image from 'next/image';
import { profileData } from '@/lib/data';
import InfoCard from '@/components/ui/InfoCard';
import styles from './Homepage.module.css';
import { FaFeather, FaFire } from "react-icons/fa6";

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
                  <FaFeather color="#facc15" size={24} style={{ marginRight: 10 }} />
                  <span>
                    Winged Light: <strong style={{ color: "#facc15" }}>{profileData.wingedLight}</strong>
                  </span>
                </li>
                <li className={styles.statItem}>
                  <FaFire color="#facc15" size={24} style={{ marginRight: 10 }} />
                  <span>
                    Ascended Candle: <strong style={{ color: "#facc15" }}>{profileData.ascendedCandles}</strong>
                  </span>
                </li>
              </ul>
            </InfoCard>
            
            {/* SOCIAL & CONTACT */}
            <InfoCard title="Social & Contact">
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", gap: 16 }}>
                <li>
                  <a href="https://discordapp.com/users/yourid" target="_blank" rel="noopener noreferrer" style={{ color: "#7289da", textDecoration: "none", display: "flex", alignItems: "center", gap: 7 }}>
                    <span role="img" aria-label="discord">💬</span> Discord: SkyJiya#1234
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" style={{ color: "#1da1f2", textDecoration: "none", display: "flex", alignItems: "center", gap: 7 }}>
                    <span role="img" aria-label="twitter">🐦</span> Twitter: @skyjiya
                  </a>
                </li>
                <li>
                  <a href="mailto:your@email.com" style={{ color: "#e6edf3", textDecoration: "none", display: "flex", alignItems: "center", gap: 7 }}>
                    <span role="img" aria-label="mail">📧</span> Email: your@email.com
                  </a>
                </li>
              </ul>
            </InfoCard>

            {/* FAVORITES */}
            <InfoCard title="Favorites">
              <div>
                <b>Cosmetics:</b> Umbrella ☂️, Top Hat 🎩, Crab Mask 🦀<br />
                <b>Props:</b> Swing 🪢, Table 🛋️, Music Sheet 🎼<br />
                <b>Spirits:</b> Lightseekers ✨, Manta Whisperer 🐋
              </div>
            </InfoCard>

            {/* MOTTO */}
            <InfoCard title="Motto">
              <blockquote style={{ color: "#ffe066", fontStyle: "italic", fontSize: "1.13em", margin: 0, paddingLeft: "0.5em", borderLeft: "3px solid #facc15" }}>
                &quot;Fly high, shine bright, and light up every darkness.&quot;
              </blockquote>
            </InfoCard>

            {/* JOURNEY */}
            <InfoCard title="Journey">
              <div>
                <b>Started Playing:</b> February 2021<br />
                <b>Total Playtime:</b> 750+ hours
              </div>
            </InfoCard>

            {/* BEST FRIENDS */}
            <InfoCard title="Best Friends">
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", gap: 16 }}>
                <li>
                  <span role="img" aria-label="cloud">☁️</span> CloudRunner
                </li>
                <li>
                  <span role="img" aria-label="star">⭐</span> StarWhisper
                </li>
                <li>
                  <span role="img" aria-label="moth">🦋</span> MothKing
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
