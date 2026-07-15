import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { CrownSVG, BabysBreath, BowSVG, DoodleHearts } from './PrincessDecorations';
import { invitationData } from '../data/invitationData';

const GraduatePortrait: React.FC = () => {
  return (
    <section className="relative w-full flex flex-col items-center py-4 md:py-8" aria-label="Graduate portrait">
      {/* Container for the whole portrait area */}
      <div className="relative w-full max-w-3xl mx-auto flex items-end justify-center min-h-[420px] md:min-h-[540px]">

        {/* ── Left: Bouquet & Message ─────────── */}
        <div className="hidden md:flex flex-col items-center absolute left-4 lg:left-8 bottom-12 z-10 w-32 lg:w-44">
          <div className="relative">
            <BabysBreath className="mb-1" />
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2">
              <BowSVG size={65} />
            </div>
          </div>
          <div className="mt-10 text-center px-1">
            <p className="font-cormorant text-[#8b6f5e] text-sm lg:text-base italic leading-relaxed">
              {invitationData.messages.sideMessage.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < 2 && <br />}
                </React.Fragment>
              ))}
            </p>
            <div className="flex justify-center mt-2">
              <DoodleHearts />
            </div>
          </div>
        </div>

        {/* ── Center: Portrait ────────────────── */}
        <div className="relative z-[5] flex flex-col items-center">
          {/* Crown behind the portrait (above graduation cap) */}
          <div className="animate-float-slow relative z-[6] -mb-2">
            <CrownSVG size={65} className="drop-shadow-sm" />
          </div>

          {/* Circular pink background with lace/doily */}
          <div className="relative">
            {/* Outer glow ring */}
            <div
              className="absolute rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(252,228,236,0.5) 0%, rgba(244,194,194,0.2) 50%, transparent 70%)',
                width: '380px',
                height: '380px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -48%)',
              }}
              aria-hidden="true"
            />

            {/* Lace doily ring (scalloped) */}
            <div
              className="absolute"
              style={{
                width: '340px',
                height: '340px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -48%)',
                borderRadius: '50%',
                background: `
                  radial-gradient(circle at center, transparent 45%, rgba(255,255,255,0.15) 46%, rgba(255,255,255,0.15) 47%, transparent 48%)
                `,
                backgroundSize: '16px 16px',
                border: '2px solid rgba(255,255,255,0.25)',
              }}
              aria-hidden="true"
            />

            {/* Inner gradient circle */}
            <div
              className="absolute rounded-full shadow-soft-glow glitter-overlay"
              style={{
                background: 'radial-gradient(circle at 50% 40%, #fce4ec 0%, #f8d7e0 35%, #f4c2c2 65%, rgba(244,194,194,0.3) 100%)',
                width: '300px',
                height: '300px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -48%)',
              }}
              aria-hidden="true"
            />

            {/* Sparkles around portrait */}
            <div className="absolute -top-6 right-0 animate-sparkle" aria-hidden="true">
              <Sparkles size={16} className="text-amber-300/60" />
            </div>
            <div className="absolute top-8 -left-10 animate-sparkle-delayed" aria-hidden="true">
              <Sparkles size={14} className="text-pink-300/50" />
            </div>
            <div className="absolute bottom-20 -right-6 animate-sparkle delay-300" aria-hidden="true">
              <Sparkles size={12} className="text-amber-200/50" />
            </div>
            <div className="absolute top-1/2 -left-8 animate-sparkle delay-500" aria-hidden="true">
              <Sparkles size={10} className="text-amber-300/40" />
            </div>

            {/* Small hearts floating */}
            <div className="absolute top-12 right-[-12px] animate-pulse-heart" aria-hidden="true">
              <Heart size={10} className="text-pink-300/50 fill-pink-200/30" />
            </div>
            <div className="absolute bottom-28 left-[-8px] animate-pulse-heart delay-500" aria-hidden="true">
              <Heart size={8} className="text-pink-300/40 fill-pink-200/20" />
            </div>

            {/* Stars */}
            <svg className="absolute -top-2 left-8 animate-sparkle-delayed w-4 h-4" viewBox="0 0 16 16" aria-hidden="true">
              <polygon points="8,0 10,6 16,6 11,10 13,16 8,12 3,16 5,10 0,6 6,6" fill="#d4a574" opacity="0.35" />
            </svg>
            <svg className="absolute bottom-16 right-[-14px] animate-sparkle w-3 h-3" viewBox="0 0 16 16" aria-hidden="true">
              <polygon points="8,0 10,6 16,6 11,10 13,16 8,12 3,16 5,10 0,6 6,6" fill="#d4a574" opacity="0.3" />
            </svg>

            {/* Graduate image */}
            <img
              src={invitationData.graduate.mainPhoto}
              alt={`${invitationData.graduate.name} wearing graduation gown and cap from ${invitationData.graduate.university}`}
              className="relative z-[2] w-60 h-80 md:w-72 md:h-[400px] object-contain drop-shadow-lg mx-auto"
              style={{ filter: 'drop-shadow(0 4px 12px rgba(139,111,94,0.15))' }}
              loading="eager"
            />
          </div>
        </div>

        {/* ── Mobile: Bouquet overlay ─────────── */}
        <div className="md:hidden absolute left-0 bottom-4 z-10 flex flex-col items-center scale-[0.6] origin-bottom-left">
          <BabysBreath />
          <BowSVG size={50} className="-mt-4" />
        </div>
      </div>

      {/* Mobile message below portrait */}
      <div className="md:hidden mt-4 text-center px-8">
        <p className="font-cormorant text-[#8b6f5e] text-sm italic leading-relaxed">
          {invitationData.messages.sideMessage.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < 2 && <br />}
            </React.Fragment>
          ))}
        </p>
        <div className="flex justify-center mt-1">
          <DoodleHearts className="w-8 h-10" />
        </div>
      </div>
    </section>
  );
};

export default GraduatePortrait;
