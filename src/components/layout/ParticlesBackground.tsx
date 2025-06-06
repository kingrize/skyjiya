"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  // useEffect ini akan dieksekusi sekali saja untuk memuat engine partikel
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Memuat paket 'slim' untuk partikel
      await loadSlim(engine);
    }).then(() => {
      // Setelah engine siap, set state 'init' menjadi true
      setInit(true);
    });
  }, []);

  // Konfigurasi partikel
  const particleOptions: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: ["#FFD700", "#FFFFFF"],
        },
        links: {
          enable: false,
        },
        move: {
          direction: "top",
          enable: true,
          random: true,
          speed: 0.5,
          straight: false,
        },
        number: {
          value: 80,
        },
        opacity: {
          value: { min: 0.1, max: 0.5 },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  // Hanya render komponen <Particles /> jika state 'init' sudah true
  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={particleOptions}
      />
    );
  }

  // Kembalikan elemen kosong selagi engine loading
  return <></>;
};

export default ParticlesBackground;