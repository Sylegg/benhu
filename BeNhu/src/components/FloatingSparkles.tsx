import React from 'react';
import { Sparkles } from 'lucide-react';

interface SparkleProps {
  className?: string;
  size?: number;
}

const FloatingSparkle: React.FC<SparkleProps> = ({ className = '', size = 14 }) => (
  <Sparkles
    size={size}
    className={`text-amber-300/50 ${className}`}
    aria-hidden="true"
  />
);

const FloatingSparkles: React.FC = () => {
  return (
    <div className="pointer-events-none" aria-hidden="true">
      <div className="absolute top-8 left-[15%] animate-sparkle">
        <FloatingSparkle size={12} className="text-amber-300/40" />
      </div>
      <div className="absolute top-16 right-[20%] animate-sparkle-delayed">
        <FloatingSparkle size={16} className="text-pink-300/40" />
      </div>
      <div className="absolute top-32 left-[10%] animate-sparkle delay-300">
        <FloatingSparkle size={10} className="text-amber-200/50" />
      </div>
      <div className="absolute top-24 right-[12%] animate-sparkle delay-500">
        <FloatingSparkle size={14} className="text-pink-200/50" />
      </div>
      <div className="absolute top-48 left-[25%] animate-sparkle-delayed delay-700">
        <FloatingSparkle size={11} className="text-amber-300/30" />
      </div>
      <div className="absolute top-40 right-[30%] animate-sparkle delay-200">
        <FloatingSparkle size={13} className="text-pink-300/35" />
      </div>
    </div>
  );
};

export default FloatingSparkles;
