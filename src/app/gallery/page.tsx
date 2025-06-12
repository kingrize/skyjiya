"use client";
import Masonry from "react-masonry-css";
import Image from "next/image";
import styles from "./Gallery.module.css";

const galleryImages = [
  { src: "/gallery/sky1.jpg", alt: "Sky Photo 1" },
  { src: "/gallery/sky2.jpg", alt: "Sky Photo 2" },
  { src: "/gallery/sky3.jpg", alt: "Sky Photo 3" },
  { src: "/gallery/sky4.jpg", alt: "Sky Photo 4" },
  { src: "/gallery/sky5.jpg", alt: "Sky Photo 5" },
  { src: "/gallery/sky6.jpg", alt: "Sky Photo 6" },
   { src: "/gallery/sky7.jpg", alt: "Sky Photo 7" },
    { src: "/gallery/sky8.jpg", alt: "Sky Photo 8" },
  // Tambah lagi sesuai gambar kamu
];

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  900: 2,
  600: 1
};

export default function GalleryPage() {
  return (
    <div className={styles.galleryWrapper}>
      <h1 className={styles.galleryTitle}>Gallery</h1>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.masonryGrid}
        columnClassName={styles.masonryColumn}
      >
        {galleryImages.map((img, idx) => (
          <div key={idx} className={styles.galleryCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={img.src}
                alt={img.alt}
                width={500}
                height={700}
                className={styles.image}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
                placeholder="blur"
                blurDataURL="/gallery/blur-placeholder.jpg"
              />
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
}
