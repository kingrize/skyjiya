"use client";

import { useState } from 'react';
import Image from 'next/image';
import { profileData } from '@/lib/data';
import InfoCard from '@/components/ui/InfoCard';
import styles from './Homepage.module.css';
import { FaFeather, FaFire, FaDiscord, FaTwitter, FaEnvelope } from "react-icons/fa6";

// ICON BUTTONS (Icon only!)
const MessageIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
    <line x1="8" y1="9" x2="16" y2="9" />
    <line x1="8" y1="13" x2="14" y2="13" />
  </svg>
);

const AddFriendIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <circle cx="9" cy="7" r="4" />
    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
    <path d="M16 11h6m-3 -3v6" />
  </svg>
);

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className={styles.pageWrapper}>
      {/* SAMPUL */}
      <div className={styles.coverWrapper}>
        <Image
          src="/images/sky-hero.png"
          alt="Sky hero banner"
          fill
          className={styles.coverImage}
          priority
        />
      </div>

      {/* PROFIL HEADER */}
      <div className={styles.profileHeader}>
        <div className={styles.avatarWrapper}>
          <Image
            src={profileData.avatarUrl}
            alt="Profile Avatar"
            width={110}
            height={110}
            className={styles.avatar}
            priority
          />
        </div>
        <div className={styles.socialBar}>
          <a href="https://discordapp.com/users/yourid" title="Discord" target="_blank" rel="noopener"><FaDiscord /></a>
          <a href="https://twitter.com/skyjiya" title="Twitter" target="_blank" rel="noopener"><FaTwitter /></a>
          <a href="mailto:your@email.com" title="Email"><FaEnvelope /></a>
        </div>
        <div className={styles.profileMain}>
          <div className={styles.profileText}>
            <h1 className={styles.name}>{profileData.ign}</h1>
            <p className={styles.status}>{profileData.playstyle}</p>
          </div>
          <div className={styles.headerActions}>
            <button className={`${styles.button} ${styles.primary}`} aria-label="Message">
              <MessageIcon />
            </button>
            <button className={styles.button} aria-label="Add Friend">
              <AddFriendIcon />
            </button>
          </div>
        </div>
      </div>

      {/* TAB NAV */}
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

      {/* TAB CONTENT */}
      <div className={styles.tabContent}>
        {activeTab === 'overview' && (
          <div className={styles.contentGrid}>
            <InfoCard title="About Me">
              <div style={{ lineHeight: 1.6 }}>
                Hello! This is my personal space to share my adventures in the world of <b>Sky: Children of the Light</b>.<br />
                <span style={{ color: "#ffe066" }}>Loves:</span> Candle Running, Music Player, OOB Exploring.<br />
                <span style={{ color: "#ffe066" }}>Playstyle:</span> Chill &amp; Social
              </div>
            </InfoCard>
            <InfoCard title="Game Stats">
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
                  <FaFeather color="#facc15" size={22} style={{ marginRight: 10 }} />
                  <span style={{ fontWeight: 500, minWidth: 140, display: "inline-block" }}>Winged Light:</span>
                  <span style={{ fontWeight: 700, color: "#facc15" }}>{profileData.wingedLight}</span>
                </li>
                <li style={{ display: "flex", alignItems: "center" }}>
                  <FaFire color="#facc15" size={22} style={{ marginRight: 10 }} />
                  <span style={{ fontWeight: 500, minWidth: 140, display: "inline-block" }}>Ascended Candle:</span>
                  <span style={{ fontWeight: 700, color: "#facc15" }}>{profileData.ascendedCandles}</span>
                </li>
              </ul>
            </InfoCard>
            <InfoCard title="Best Friends">
              <ul style={{ listStyle: "disc", paddingLeft: 18, margin: 0 }}>
                <li>CloudRunner</li>
                <li>StarWhisper</li>
                <li>MothKing</li>
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
