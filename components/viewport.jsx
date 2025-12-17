"use client";
import { useState, useEffect } from "react";

export default function ViewportSize() {
  const [mounted, setMounted] = useState(false);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    setMounted(true); // mark client-side
    const update = () =>
      setSize({ w: window.innerWidth, h: window.innerHeight });

    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  if (!mounted) return null; // ⛔ No HTML rendered during SSR

  return (
    <div
      className="
      fixed bottom-4 right-4 
      bg-black/80 text-white text-sm 
      px-3 py-1 rounded 
      z-[9999] select-none font-semibold
    "
    >
      {size.w} px × {size.h} px
    </div>
  );
}
