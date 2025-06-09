// src/lib/data.ts (Versi Terbaru)

export const profileData = {
  ign: 'Jiya!', // Ganti dengan nama Anda
  friendCode: 'ABCD-1234-WXYZ', // Ganti dengan kode teman Anda
  qrCodeUrl: '/images/sky-qrcode.png',
  avatarUrl: '/images/avatar.jpg', // <-- INI BARIS YANG DITAMBAHKAN
  wingedLight: 120, // Ganti dengan jumlah WL Anda
  ascendedCandles: 250, // Ganti dengan jumlah AC Anda
  playstyle: 'Loves Candle Running, Music Player, and OOB Exploring.',
  bio: 'Hello! This is my personal space to share my adventures in the world of Sky: Children of the Light.',
  currentOutfit: {
    hair: 'Mellow Musician Hair',
    cape: 'Triumphant Tai Chi-ist Cape',
    mask: 'Grateful Shell Collector Mask',
    accessory: 'Days of Bloom Butterfly Accessory',
    prop: 'Jellyfish Whisperer Umbrella',
  } as { [key: string]: string },
};

export const galleryImages = [
  {
    src: '/images/screenshots/sky-pic-1.png',
    title: 'Sanctuary Islands',
    description: 'Flying over the clouds at dusk.'
  },
  {
    src: '/images/screenshots/sky-pic-2.png',
    title: 'The Golden Wasteland',
    description: 'A moment of peace before the danger.'
  },
  {
    src: '/images/screenshots/sky-pic-3.png',
    title: 'Valley of Triumph',
    description: 'Sliding down the slopes with friends.'
  },
  {
    src: '/images/screenshots/sky-pic-4.png',
    title: 'Vault of Knowledge',
    description: 'Exploring the ancient library.'
  },
  // Tambahkan gambar lain dengan format yang sama
];