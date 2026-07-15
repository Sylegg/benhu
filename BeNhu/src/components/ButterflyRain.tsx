import React, { useEffect, useState } from 'react';

const BUTTERFLY_IMG = '/images/generated/butterfly-single.png';
const BUTTERFLY_COUNT = 15;

interface ButterflyData {
  id: number;
  left: string;
  fallDuration: string;
  swayDuration: string;
  delay: string;
  scale: number;
}

export const ButterflyRain: React.FC = () => {
  const [butterflies, setButterflies] = useState<ButterflyData[]>([]);

  useEffect(() => {
    // Generate butterflies on client side to avoid hydration mismatch
    const newButterflies = Array.from({ length: BUTTERFLY_COUNT }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      fallDuration: `${Math.random() * 10 + 8}s`, // 8s to 18s
      swayDuration: `${Math.random() * 3 + 3}s`, // 3s to 6s
      delay: `-${Math.random() * 20}s`, // start at different points in animation
      scale: Math.random() * 0.35 + 0.25, // 0.25 to 0.6 scale
    }));
    setButterflies(newButterflies);
  }, []);

  return (
    <div className="butterfly-rain-container" aria-hidden="true">
      {butterflies.map(b => (
        <div 
          key={b.id} 
          className="falling-butterfly-wrapper"
          style={{ 
            left: b.left,
            animationDuration: b.fallDuration,
            animationDelay: b.delay
          }}
        >
          <img 
            src={BUTTERFLY_IMG} 
            className="falling-butterfly-img" 
            alt="" 
            style={{ 
              '--scale': b.scale,
              animationDuration: b.swayDuration,
              animationDelay: b.delay 
            } as React.CSSProperties}
          />
        </div>
      ))}
    </div>
  );
};
