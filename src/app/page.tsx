"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 0.5);
    }, 16); // 60 FPS
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 overflow-hidden">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Escritório 2.0
        </h1>
        <p className="text-gray-600 mt-2">Sua plataforma de automação jurídica</p>
      </div>

      <div className="w-64 h-64 perspective-1000">
        <div
          className="w-full h-full relative transform-style-preserve-3d"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transition: "transform 0.1s linear",
          }}
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-full flex items-center justify-center bg-white border border-gray-300"
              style={{
                transform: `rotateY(${i * 60}deg) translateZ(128px)`,
              }}
            >
              <img src="/logo.png" alt="Logo" className="w-24 h-24" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
