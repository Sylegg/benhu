import React from 'react';
import { Heart } from 'lucide-react';
import { FloralBranch, TapeStrip } from './PrincessDecorations';
import { invitationData } from '../data/invitationData';

const InvitationMessage: React.FC = () => {
  return (
    <section
      className="relative w-full px-3 md:px-6 -mt-8 md:-mt-16 z-10"
      aria-label="Invitation message"
    >
      {/* Offset pink paper layer behind */}
      <div
        className="absolute inset-x-6 md:inset-x-12 top-6 bottom-6 rounded-sm"
        style={{
          background: 'linear-gradient(135deg, #fce4ec, #f8d7e0)',
          transform: 'rotate(0.6deg)',
          boxShadow: '0 2px 8px rgba(139,111,94,0.06)',
        }}
        aria-hidden="true"
      />

      {/* Another pink paper layer */}
      <div
        className="absolute inset-x-8 md:inset-x-16 top-3 bottom-3 rounded-sm"
        style={{
          background: 'linear-gradient(225deg, #fce4ec, #f4d4d9)',
          transform: 'rotate(-0.4deg)',
          boxShadow: '0 1px 6px rgba(139,111,94,0.04)',
        }}
        aria-hidden="true"
      />

      {/* Main cream paper */}
      <div className="relative max-w-2xl mx-auto paper-texture shadow-paper-heavy torn-edge-top torn-edge-bottom">
        {/* Tape strips at top corners */}
        <div className="absolute -top-3 left-8 z-20">
          <TapeStrip rotation={-5} />
        </div>
        <div className="absolute -top-3 right-8 z-20">
          <TapeStrip rotation={4} />
        </div>

        {/* Inner padding */}
        <div className="py-12 md:py-16 px-6 md:px-14">
          {/* Content */}
          <div className="text-center space-y-5 md:space-y-6">
            {/* Decorative line above */}
            <div className="flex justify-center items-center gap-3 mb-2" aria-hidden="true">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#c9a0a0]/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#c9a0a0]/40" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#c9a0a0]/30" />
            </div>

            {/* Thân mời */}
            <p className="font-great-vibes text-3xl md:text-4xl lg:text-5xl text-[#b76e79]">
              {invitationData.messages.invitationGreeting}
            </p>

            {/* Ribbon banner for recipient */}
            <div className="flex justify-center py-1">
              <div className="ribbon-banner">
                <span className="font-serif-display text-xs md:text-sm font-bold tracking-[0.15em] uppercase">
                  {invitationData.messages.invitationRecipient}
                </span>
              </div>
            </div>

            {/* Invitation body */}
            <p className="font-cormorant text-[#8b6f5e] text-base md:text-lg italic leading-relaxed">
              {invitationData.messages.invitationBody}
            </p>

            {/* Graduate name with hearts */}
            <div className="py-2">
              <div className="flex items-center justify-center gap-3">
                <Heart
                  size={14}
                  className="text-pink-400/60 fill-pink-300/40 animate-pulse-heart flex-shrink-0"
                  aria-hidden="true"
                />
                <h2 className="font-great-vibes text-4xl md:text-5xl lg:text-6xl text-[#b76e79] leading-tight">
                  {invitationData.graduate.name}
                </h2>
                <Heart
                  size={14}
                  className="text-pink-400/60 fill-pink-300/40 animate-pulse-heart delay-300 flex-shrink-0"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* University with botanical ornaments */}
            <div className="flex items-center justify-center gap-2 md:gap-4">
              <FloralBranch className="opacity-40 w-14 md:w-20 hidden sm:block" flip />
              <h3 className="font-serif-display text-[#c9a0a0] text-base md:text-xl tracking-wider italic">
                {invitationData.graduate.university}
              </h3>
              <FloralBranch className="opacity-40 w-14 md:w-20 hidden sm:block" />
            </div>

            {/* Address */}
            <p className="font-lora text-[#8b6f5e] text-xs md:text-sm leading-relaxed max-w-sm mx-auto opacity-80">
              {invitationData.event.location.address}
            </p>

            {/* Decorative line below */}
            <div className="flex justify-center items-center gap-3 pt-2" aria-hidden="true">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#c9a0a0]/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#c9a0a0]/40" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#c9a0a0]/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvitationMessage;
