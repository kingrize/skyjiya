"use client";
import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 350);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed", right: 22, bottom: 32, zIndex: 900,
        padding: 12, borderRadius: "50%", background: "#141920e0", border: "2px solid #facc15",
        color: "#facc15", fontWeight: 700, fontSize: 22, cursor: "pointer", boxShadow: "0 4px 24px 0 #1114"
      }}
      aria-label="Back to top"
    >↑</button>
  );
}
