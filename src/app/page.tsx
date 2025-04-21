"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 1);
    }, 30); // Suavidade da rotação
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Escritório 2.0</h1>
      
      <div className="w-[200px] h-[200px] perspective-[1000px]">
        <div
          className="w-full h-full relative transform-style-preserve-3d"
          style={{
            transform: `rotateY(${rotation}deg)`,
          }}
        >
          {["front", "right", "back", "left", "top", "bottom"].map((face, i) => (
            <div
              key={face}
              className="absolute w-full h-full flex items-center justify-center bg-white border border-gray-300 shadow-md"
              style={{
                transform: `
                  rotateY(${i * 90}deg) 
                  translateZ(100px)
                `,
              }}
            >
              <img src="/logo.png" alt="Logo" className="w-20 h-20" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
