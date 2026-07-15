import React from 'react';
import { Heart } from 'lucide-react';
import { invitationData } from '../data/invitationData';

const EnvelopeDecoration: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`relative group cursor-default ${className}`}
      style={{ transform: 'rotate(3deg)' }}
      aria-label="Decorative envelope with celebration message"
    >
      {/* Shadow layer */}
      <div
        className="absolute inset-0 rounded-b-md opacity-20"
        style={{
          background: '#8b6f5e',
          filter: 'blur(12px)',
          transform: 'translateY(6px)',
        }}
        aria-hidden="true"
      />

      {/* Envelope body */}
      <div className="relative w-48 md:w-56 animate-envelope">
        {/* Envelope base */}
        <div
          className="relative overflow-visible rounded-b-md"
          style={{
            height: '130px',
            background: 'linear-gradient(165deg, #f4c2c2 0%, #e8b4b4 40%, #dca8a8 100%)',
          }}
        >
          {/* Envelope flap (open) */}
          <div
            className="absolute -top-[38px] left-0 right-0"
            style={{
              height: '44px',
              background: 'linear-gradient(180deg, #f8d0d0 0%, #f0bebe 100%)',
              clipPath: 'polygon(0 100%, 50% 10%, 100% 100%)',
            }}
            aria-hidden="true"
          />

          {/* Diagonal fold lines */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background: `
                linear-gradient(135deg, transparent 48%, rgba(139,111,94,0.3) 49%, rgba(139,111,94,0.3) 50%, transparent 51%),
                linear-gradient(225deg, transparent 48%, rgba(139,111,94,0.3) 49%, rgba(139,111,94,0.3) 50%, transparent 51%)
              `,
            }}
            aria-hidden="true"
          />

          {/* Inner card popping out */}
          <div
            className="absolute left-3 right-3 -top-5 bg-[#fdf6ed] shadow-paper rounded-sm p-4 pt-5 text-center
                        transition-transform duration-500 ease-out group-hover:-translate-y-3"
            style={{
              background: 'linear-gradient(135deg, #fdf6ed 0%, #fef9f3 50%, #fdf6ed 100%)',
              border: '1px solid rgba(244,194,194,0.2)',
            }}
          >
            <p className="font-script text-[#b76e79] text-sm md:text-base leading-relaxed">
              {invitationData.messages.envelopeMessage.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < 2 && <br />}
                </React.Fragment>
              ))}
            </p>
            {/* Small heart */}
            <Heart
              size={10}
              className="text-pink-400/50 fill-pink-300/30 mx-auto mt-2"
              aria-hidden="true"
            />
          </div>

          {/* Envelope bottom fold shadow */}
          <div
            className="absolute bottom-0 left-0 right-0 h-10 opacity-15"
            style={{
              background: 'linear-gradient(0deg, rgba(139,111,94,0.3) 0%, transparent 100%)',
            }}
            aria-hidden="true"
          />
        </div>

        {/* Pink satin ribbon across envelope */}
        <div
          className="absolute top-16 -left-2 -right-2 h-3 opacity-70"
          style={{
            background: 'linear-gradient(180deg, #e8a8a8 0%, #d4a0a0 40%, #c99090 100%)',
            boxShadow: '0 1px 3px rgba(139,111,94,0.15)',
          }}
          aria-hidden="true"
        />

        {/* Small flowers */}
        <svg className="absolute -right-5 -top-6 w-10 h-10 opacity-80" viewBox="0 0 40 40" fill="none" aria-hidden="true">
          <circle cx="20" cy="12" r="5" fill="#fce4ec" />
          <circle cx="12" cy="20" r="4" fill="#f4c2c2" opacity="0.8" />
          <circle cx="28" cy="20" r="4.5" fill="#fce4ec" opacity="0.9" />
          <circle cx="16" cy="28" r="3.5" fill="#f4c2c2" opacity="0.7" />
          <circle cx="24" cy="28" r="3" fill="#fce4ec" opacity="0.8" />
          <circle cx="20" cy="20" r="2.5" fill="#e8a8a8" opacity="0.6" />
          {/* Tiny leaves */}
          <path d="M10 14 Q6 10 12 12" fill="#a8c890" opacity="0.5" />
          <path d="M30 14 Q34 10 28 12" fill="#a8c890" opacity="0.5" />
        </svg>

        <svg className="absolute -left-4 bottom-0 w-8 h-8 opacity-70" viewBox="0 0 30 30" fill="none" aria-hidden="true">
          <circle cx="15" cy="10" r="4" fill="#fce4ec" />
          <circle cx="10" cy="17" r="3" fill="#f4c2c2" opacity="0.7" />
          <circle cx="20" cy="17" r="3.5" fill="#fce4ec" opacity="0.8" />
          <circle cx="15" cy="14" r="2" fill="#e8a8a8" opacity="0.5" />
        </svg>
      </div>
    </div>
  );
};

export default EnvelopeDecoration;
