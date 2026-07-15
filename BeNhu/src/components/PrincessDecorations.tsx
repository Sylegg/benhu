import React from 'react';
import { Heart } from 'lucide-react';

/* ── SVG Crown ──────────────────────────────── */
export const CrownSVG: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 60,
}) => (
  <svg
    width={size}
    height={size * 0.7}
    viewBox="0 0 100 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M10 55 L20 20 L35 38 L50 8 L65 38 L80 20 L90 55 Z"
      fill="url(#crownGrad)"
      stroke="#d4a574"
      strokeWidth="1.5"
    />
    <circle cx="20" cy="18" r="4" fill="#f4c2c2" />
    <circle cx="50" cy="6" r="5" fill="#d4a574" />
    <circle cx="80" cy="18" r="4" fill="#f4c2c2" />
    <line x1="12" y1="55" x2="88" y2="55" stroke="#d4a574" strokeWidth="2" />
    <line x1="14" y1="60" x2="86" y2="60" stroke="#c9a0a0" strokeWidth="1.5" />
    <defs>
      <linearGradient id="crownGrad" x1="0" y1="0" x2="100" y2="70">
        <stop offset="0%" stopColor="#f4c2c2" />
        <stop offset="50%" stopColor="#d4a574" />
        <stop offset="100%" stopColor="#f4c2c2" />
      </linearGradient>
    </defs>
  </svg>
);

/* ── SVG Bow ────────────────────────────────── */
export const BowSVG: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 80,
}) => (
  <svg
    width={size}
    height={size * 0.55}
    viewBox="0 0 120 66"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M60 33 C40 5 5 10 10 33 C5 56 40 61 60 33Z"
      fill="url(#bowGradL)"
      stroke="#c9a0a0"
      strokeWidth="1"
    />
    <path
      d="M60 33 C80 5 115 10 110 33 C115 56 80 61 60 33Z"
      fill="url(#bowGradR)"
      stroke="#c9a0a0"
      strokeWidth="1"
    />
    <ellipse cx="60" cy="33" rx="7" ry="5" fill="#c9a0a0" />
    <path d="M55 38 Q52 55 48 64" stroke="#c9a0a0" strokeWidth="2" fill="none" />
    <path d="M65 38 Q68 55 72 64" stroke="#c9a0a0" strokeWidth="2" fill="none" />
    <defs>
      <linearGradient id="bowGradL" x1="10" y1="10" x2="60" y2="56">
        <stop offset="0%" stopColor="#f4c2c2" />
        <stop offset="100%" stopColor="#e8a8a8" />
      </linearGradient>
      <linearGradient id="bowGradR" x1="110" y1="10" x2="60" y2="56">
        <stop offset="0%" stopColor="#f4c2c2" />
        <stop offset="100%" stopColor="#e8a8a8" />
      </linearGradient>
    </defs>
  </svg>
);

/* ── Floral Branch ──────────────────────────── */
export const FloralBranch: React.FC<{ className?: string; flip?: boolean }> = ({
  className = '',
  flip = false,
}) => (
  <svg
    width="80"
    height="40"
    viewBox="0 0 80 40"
    fill="none"
    className={`${className} ${flip ? 'scale-x-[-1]' : ''}`}
    aria-hidden="true"
  >
    <path d="M5 35 Q20 30 40 20 Q55 12 75 5" stroke="#c9a0a0" strokeWidth="1.2" fill="none" />
    <circle cx="20" cy="28" r="3" fill="#f4c2c2" opacity="0.7" />
    <circle cx="35" cy="22" r="2.5" fill="#e8a8a8" opacity="0.6" />
    <circle cx="50" cy="15" r="3.5" fill="#f4c2c2" opacity="0.7" />
    <circle cx="65" cy="9" r="2" fill="#e8a8a8" opacity="0.5" />
    <circle cx="25" cy="30" r="1.5" fill="#fce4ec" opacity="0.8" />
    <circle cx="55" cy="13" r="1.5" fill="#fce4ec" opacity="0.8" />
    {/* Leaves */}
    <path d="M15 32 Q12 26 18 28" fill="#b8c9a0" opacity="0.5" />
    <path d="M45 18 Q42 12 48 14" fill="#b8c9a0" opacity="0.5" />
    <path d="M60 10 Q57 4 63 6" fill="#b8c9a0" opacity="0.5" />
  </svg>
);

/* ── Baby's Breath Flowers ──────────────────── */
export const BabysBreath: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    width="100"
    height="130"
    viewBox="0 0 100 130"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    {/* Stems */}
    <path d="M50 130 Q45 100 35 70 Q30 50 25 30" stroke="#9ab88a" strokeWidth="1.5" fill="none" />
    <path d="M50 130 Q52 95 55 65 Q58 45 60 25" stroke="#9ab88a" strokeWidth="1.2" fill="none" />
    <path d="M50 130 Q55 105 65 80 Q70 65 75 45" stroke="#9ab88a" strokeWidth="1" fill="none" />
    <path d="M50 130 Q42 110 30 90 Q22 75 18 55" stroke="#9ab88a" strokeWidth="1" fill="none" />
    {/* Flower clusters */}
    {[
      [25, 28], [22, 35], [30, 22], [18, 42],
      [60, 23], [55, 30], [65, 28], [58, 18],
      [75, 43], [72, 50], [78, 38], [70, 55],
      [18, 53], [15, 60], [22, 48], [12, 55],
      [35, 68], [32, 62], [38, 72], [30, 75],
      [55, 63], [52, 58], [58, 68],
      [65, 78], [62, 82], [68, 75],
    ].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r={2 + (i % 3) * 0.5} fill="#fce4ec" opacity={0.7 + (i % 3) * 0.1} />
    ))}
    {[
      [27, 30], [62, 25], [77, 45], [20, 57], [37, 70], [57, 65],
    ].map(([cx, cy], i) => (
      <circle key={`inner-${i}`} cx={cx} cy={cy} r={1} fill="#f4c2c2" opacity="0.9" />
    ))}
  </svg>
);

/* ── Tape Strip ─────────────────────────────── */
export const TapeStrip: React.FC<{ className?: string; rotation?: number }> = ({
  className = '',
  rotation = -3,
}) => (
  <div
    className={`washi-tape ${className}`}
    style={{ transform: `rotate(${rotation}deg)` }}
    aria-hidden="true"
  />
);

/* ── Paper Clip ─────────────────────────────── */
export const PaperClip: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    width="20"
    height="50"
    viewBox="0 0 20 50"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M7 5 Q7 2 10 2 Q13 2 13 5 L13 40 Q13 47 10 47 Q7 47 7 40 L7 12 Q7 8 10 8 Q13 8 13 12"
      stroke="#d4a574"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

/* ── Wax Seal ───────────────────────────────── */
export const WaxSeal: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 60,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 60 60"
    className={className}
    aria-hidden="true"
  >
    <circle cx="30" cy="30" r="25" fill="url(#waxGrad)" />
    {/* Wavy edge */}
    {Array.from({ length: 16 }).map((_, i) => {
      const angle = (i * 360) / 16;
      const rad = (angle * Math.PI) / 180;
      const cx = 30 + 27 * Math.cos(rad);
      const cy = 30 + 27 * Math.sin(rad);
      return <circle key={i} cx={cx} cy={cy} r={4} fill="url(#waxGrad)" />;
    })}
    {/* Leaf emblem */}
    <path
      d="M30 16 Q35 22 35 30 Q35 38 30 44 Q25 38 25 30 Q25 22 30 16Z"
      fill="none"
      stroke="#fce4ec"
      strokeWidth="1.2"
    />
    <line x1="30" y1="18" x2="30" y2="42" stroke="#fce4ec" strokeWidth="0.8" />
    <defs>
      <radialGradient id="waxGrad" cx="40%" cy="35%">
        <stop offset="0%" stopColor="#e8a8a8" />
        <stop offset="100%" stopColor="#c9a0a0" />
      </radialGradient>
    </defs>
  </svg>
);

/* ── Small floating hearts ──────────────────── */
export const FloatingHearts: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex flex-col gap-2 ${className}`} aria-hidden="true">
    <Heart size={10} className="text-pink-300/60 animate-pulse-heart fill-pink-200/40" />
    <Heart size={8} className="text-pink-300/40 animate-pulse-heart delay-300 fill-pink-200/30 ml-2" />
    <Heart size={12} className="text-pink-300/50 animate-pulse-heart delay-500 fill-pink-200/40" />
  </div>
);

/* ── Doodle Hearts ──────────────────────────── */
export const DoodleHearts: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg width="40" height="50" viewBox="0 0 40 50" className={className} aria-hidden="true">
    <path d="M10 15 Q10 8 15 8 Q20 8 20 15 Q20 8 25 8 Q30 8 30 15 Q30 22 20 28 Q10 22 10 15Z"
      fill="none" stroke="#e8a8a8" strokeWidth="1" />
    <path d="M5 35 Q5 30 8 30 Q11 30 11 35 Q11 30 14 30 Q17 30 17 35 Q17 40 11 44 Q5 40 5 35Z"
      fill="#fce4ec" opacity="0.5" />
    <path d="M25 38 Q25 34 27 34 Q29 34 29 38 Q29 34 31 34 Q33 34 33 38 Q33 42 29 45 Q25 42 25 38Z"
      fill="none" stroke="#f4c2c2" strokeWidth="0.8" />
  </svg>
);

export default PrincessDecorations;

function PrincessDecorations() {
  return null;
}
