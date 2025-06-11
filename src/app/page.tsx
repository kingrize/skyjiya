"use client";

import { useState } from 'react';
import Image from 'next/image';
import { profileData } from '@/lib/data';
import InfoCard from '@/components/ui/InfoCard';
import styles from './Homepage.module.css';
import { FaFeather, FaFire, FaDiscord, FaTwitter, FaEnvelope } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";

// ICON BUTTONS
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
      {/* HERO SECTION */}
      <div className={styles.heroSection} style={{ minHeight: 350 }}>
        <Image
          src="/images/sky-hero.png"
          alt="Sky hero banner"
          fill
          className={styles.heroImage}
          priority
        />
        <div className={styles.heroOverlay}></div>
        <div className={styles.profileRow}>
          <div className={styles.avatarWrapper}>
            <Image
              src={profileData.avatarUrl}
              alt="Profile Avatar"
              width={100}
              height={100}
              className={styles.avatar}
              priority
            />
          </div>
          <div className={styles.profileText}>
            <h1>{profileData.ign}</h1>
            <p>{profileData.playstyle}</p>
          </div>
          <div className={styles.profileActions}>
            <button className={`${styles.button} ${styles.primary}`}>
              <MessageIcon /> Message
            </button>
            <button className={styles.button}>
              <AddFriendIcon /> Add Friend
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
          <>
            {/* Section 1: 3 card */}
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
              <InfoCard title="Social & Contact">
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li style={{ display: "flex", alignItems: "center", marginBottom: 6 }}>
                    <FaDiscord
                      size={19}
                      color="#7289da"
                      style={{ marginRight: 8, cursor: "pointer" }}
                      data-tooltip-id="discordtip"
                      data-tooltip-content="Add me on Discord"
                    />
                    <a href="https://discordapp.com/users/yourid" target="_blank" rel="noopener noreferrer" style={{ color: "#7289da", fontWeight: 500, textDecoration: "none" }}>
                      SkyJiya#1234
                    </a>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", marginBottom: 6 }}>
                    <FaTwitter
                      size={19}
                      color="#1da1f2"
                      style={{ marginRight: 8, cursor: "pointer" }}
                      data-tooltip-id="twittertip"
                      data-tooltip-content="Follow me on Twitter"
                    />
                    <a href="https://twitter.com/skyjiya" target="_blank" rel="noopener noreferrer" style={{ color: "#1da1f2", fontWeight: 500, textDecoration: "none" }}>
                      @skyjiya
                    </a>
                  </li>
                  <li style={{ display: "flex", alignItems: "center" }}>
                    <FaEnvelope
                      size={17}
                      color="#e6edf3"
                      style={{ marginRight: 8, cursor: "pointer" }}
                      data-tooltip-id="mailtip"
                      data-tooltip-content="Email me!"
                    />
                    <a href="mailto:your@email.com" style={{ color: "#e6edf3", fontWeight: 500, textDecoration: "none" }}>
                      your@email.com
                    </a>
                  </li>
                </ul>
                {/* Tooltip component untuk setiap icon */}
                <Tooltip id="discordtip" place="top" />
                <Tooltip id="twittertip" place="top" />
                <Tooltip id="mailtip" place="top" />
              </InfoCard>
            </div>
            <hr className={styles.sectionDivider} />

            {/* Section 2: 3 card */}
            <div className={styles.contentGrid}>
              <InfoCard title="Favorites">
                <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: 4 }}>Cosmetics</div>
                    <ul style={{ paddingLeft: 16, margin: 0 }}>
                      <li>Umbrella</li>
                      <li>Top Hat</li>
                      <li>Crab Mask</li>
                    </ul>
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: 4 }}>Props</div>
                    <ul style={{ paddingLeft: 16, margin: 0 }}>
                      <li>Swing</li>
                      <li>Table</li>
                      <li>Music Sheet</li>
                    </ul>
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: 4 }}>Spirits</div>
                    <ul style={{ paddingLeft: 16, margin: 0 }}>
                      <li>Lightseekers</li>
                      <li>Manta Whisperer</li>
                    </ul>
                  </div>
                </div>
              </InfoCard>
              <InfoCard title="Motto">
                <div style={{
                  background: "rgba(250,204,21,0.08)",
                  borderLeft: "4px solid #facc15",
                  padding: "1em 1.3em",
                  fontStyle: "italic",
                  fontWeight: 500,
                  color: "#ffe066"
                }}>
                  &quot;Fly high, shine bright, and light up every darkness.&quot;
                </div>
              </InfoCard>
              <InfoCard title="Journey">
                <div>
                  <div><span style={{ fontWeight: 600 }}>Started Playing:</span> February 2021</div>
                  <div><span style={{ fontWeight: 600 }}>Total Playtime:</span> 750+ hours</div>
                </div>
              </InfoCard>
            </div>
            <hr className={styles.sectionDivider} />

            {/* Section 3: 1 card (Best Friends) */}
            <div className={styles.contentGrid}>
              <InfoCard title="Best Friends">
                <ul style={{ listStyle: "disc", paddingLeft: 18, margin: 0 }}>
                  <li>CloudRunner</li>
                  <li>StarWhisper</li>
                  <li>MothKing</li>
                </ul>
              </InfoCard>
            </div>
          </>
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
