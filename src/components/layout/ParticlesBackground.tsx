"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particleOptions: ISourceOptions = useMemo(
    () => ({
      background: { color: { value: "transparent" } },
      fpsLimit: 90,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          onClick: { enable: true, mode: "repulse" },
        },
        modes: {
          repulse: {
            distance: 120,
            duration: 0.6,
            speed: 1,
            maxSpeed: 2,
          },
        },
      },
      particles: {
        color: { value: ["#fff", "#ffe066", "#facc15"] },
        move: {
          direction: "top",
          enable: true,
          random: true,
          speed: 0.2,
          straight: false,
        },
        number: { value: 80 },
        opacity: { value: { min: 0.2, max: 0.8 } },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
        links: { enable: false },
      },
      detectRetina: true,
    }),
    [],
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={particleOptions}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};

export default ParticlesBackground;
