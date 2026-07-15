import React from 'react';
import { GraduationCap, Sparkles } from 'lucide-react';
import { CrownSVG, BowSVG, FloralBranch, PaperClip } from './PrincessDecorations';
import { invitationData } from '../data/invitationData';

/* ── Class Badge ──────────────────────────────── */
const ClassBadge: React.FC = () => (
  <div className="relative flex flex-col items-center">
    {/* Crown above badge */}
    <div className="animate-float -mb-2 relative z-10">
      <CrownSVG size={44} />
    </div>

    {/* Badge circle */}
    <div className="relative">
      {/* Stitched outer ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: '2px dashed rgba(255,255,255,0.35)',
          margin: '-4px',
          borderRadius: '50%',
        }}
        aria-hidden="true"
      />

      <div
        className="relative w-22 h-22 md:w-26 md:h-26 rounded-full flex flex-col items-center justify-center shadow-paper"
        style={{
          background: 'linear-gradient(145deg, #d4a0a0 0%, #c99595 40%, #be8e8e 100%)',
          width: '100px',
          height: '100px',
        }}
      >
        {/* Inner highlight */}
        <div
          className="absolute inset-1 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.6), transparent 60%)',
          }}
          aria-hidden="true"
        />

        <span className="font-cormorant text-white/80 text-xs italic tracking-wide relative z-[1]">
          {invitationData.messages.classBadge.line1}
        </span>
        <span className="font-serif-display text-white text-2xl md:text-3xl font-bold leading-none relative z-[1]">
          {invitationData.messages.classBadge.line2}
        </span>
      </div>
    </div>

    {/* Bow below badge */}
    <div className="-mt-1.5 relative z-[2]">
      <BowSVG size={55} />
    </div>

    {/* Paper clip at edge */}
    <div className="absolute -top-2 -right-4">
      <PaperClip />
    </div>

    {/* Small floral branches */}
    <div className="absolute -left-10 top-6 opacity-60">
      <FloralBranch className="w-16" />
    </div>
    <div className="absolute -right-10 bottom-14 opacity-50 scale-x-[-1]">
      <FloralBranch className="w-14" />
    </div>
  </div>
);

/* ── Invitation Header ────────────────────────── */
const InvitationHeader: React.FC = () => {
  return (
    <header className="relative w-full pt-6 md:pt-10 pb-2 md:pb-4 px-4 md:px-8">
      <div className="flex flex-col sm:flex-row items-center justify-between max-w-3xl mx-auto gap-4 sm:gap-6">

        {/* Title area */}
        <div className="flex-1 text-center sm:text-left relative order-1">
          {/* Sparkle decorations around title */}
          <div className="absolute -top-3 left-[5%] sm:left-[-5px] animate-sparkle" aria-hidden="true">
            <Sparkles size={14} className="text-amber-300/50" />
          </div>
          <div className="absolute top-2 right-[10%] sm:right-auto sm:left-[75%] animate-sparkle-delayed" aria-hidden="true">
            <Sparkles size={11} className="text-pink-300/45" />
          </div>
          <div className="absolute bottom-[-8px] left-[45%] animate-sparkle delay-500" aria-hidden="true">
            <Sparkles size={10} className="text-amber-300/35" />
          </div>

          {/* Graduation Cap icon */}
          <div className="flex justify-center sm:justify-start mb-2" aria-hidden="true">
            <div className="relative">
              <GraduationCap size={36} className="text-[#c9a0a0]" strokeWidth={1.5} />
              {/* Small sparkle next to cap */}
              <Sparkles size={8} className="absolute -top-1 -right-2 text-amber-300/60 animate-sparkle" />
            </div>
          </div>

          {/* HAPPY */}
          <h1 className="font-serif-display text-[#c9a0a0] text-3xl md:text-4xl lg:text-[2.8rem] tracking-[0.18em] uppercase leading-tight font-medium">
            {invitationData.messages.headerHappy}
          </h1>

          {/* Graduation - large script */}
          <p
            className="font-great-vibes text-5xl md:text-6xl lg:text-7xl leading-[1.1] -mt-1 md:-mt-2"
            style={{
              color: '#b76e79',
              textShadow: '0 1px 2px rgba(183,110,121,0.1)',
            }}
          >
            {invitationData.messages.headerGraduation}
          </p>
        </div>

        {/* Class Badge */}
        <div className="order-2 flex-shrink-0">
          <ClassBadge />
        </div>
      </div>
    </header>
  );
};

export default InvitationHeader;
