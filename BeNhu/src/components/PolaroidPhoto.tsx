import React from 'react';
import { Heart } from 'lucide-react';
import { WaxSeal, DoodleHearts } from './PrincessDecorations';
import { invitationData } from '../data/invitationData';

const PolaroidPhoto: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center">
      {/* Polaroid frame */}
      <div
        className="relative bg-white p-2.5 pb-12 shadow-paper-heavy hover-lift cursor-default"
        style={{ transform: 'rotate(4deg)', maxWidth: '170px' }}
      >
        {/* Washi tape at top */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <div
            className="h-5 w-16 rounded-sm opacity-80"
            style={{
              background: 'linear-gradient(135deg, rgba(244,194,194,0.75), rgba(252,228,236,0.85), rgba(244,194,194,0.75))',
              transform: 'rotate(-2deg)',
              boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
            }}
            aria-hidden="true"
          />
        </div>

        {/* Photo area */}
        <div
          className="relative overflow-hidden bg-pink-50"
          style={{ width: '145px', height: '175px' }}
        >
          <img
            src={invitationData.graduate.secondaryPhoto}
            alt={`${invitationData.graduate.name} in graduation attire - secondary portrait`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Subtle warm vignette */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle, transparent 45%, rgba(244,194,194,0.12) 100%),
                linear-gradient(180deg, transparent 80%, rgba(139,111,94,0.06) 100%)
              `,
            }}
            aria-hidden="true"
          />
        </div>

        {/* Polaroid caption area (white bottom strip) */}
        <div className="absolute bottom-2 left-3 right-3 text-center">
          <span className="font-script text-[#c9a0a0] text-[10px] tracking-wide opacity-60">
            ♡ memories ♡
          </span>
        </div>

        {/* Hand-drawn hearts near polaroid */}
        <div className="absolute -right-8 top-6">
          <DoodleHearts />
        </div>

        {/* Small floating hearts on left */}
        <div className="absolute -left-6 top-16" aria-hidden="true">
          <Heart size={10} className="text-pink-300/50 fill-pink-200/30 animate-pulse-heart" />
        </div>
        <div className="absolute -left-4 top-24" aria-hidden="true">
          <Heart size={7} className="text-pink-300/35 fill-pink-200/20 animate-pulse-heart delay-500" />
        </div>
      </div>

      {/* Wax seal below polaroid */}
      <div className="mt-3 -ml-6" style={{ transform: 'rotate(-10deg)' }}>
        <WaxSeal size={48} />
      </div>
    </div>
  );
};

export default PolaroidPhoto;
