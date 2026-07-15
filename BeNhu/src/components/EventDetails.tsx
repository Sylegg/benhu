import React from 'react';
import { Clock, Calendar, MapPin } from 'lucide-react';
import { invitationData } from '../data/invitationData';

interface EventDetailItemProps {
  icon: React.ReactNode;
  label: string;
  primary: string;
  secondary?: string;
  tertiary?: string;
}

const EventDetailItem: React.FC<EventDetailItemProps> = ({
  icon,
  label,
  primary,
  secondary,
  tertiary,
}) => (
  <div className="flex flex-col items-center text-center px-3 md:px-6 py-5 md:py-8 space-y-2.5 group">
    {/* Icon with soft circle background */}
    <div className="relative mb-1">
      <div
        className="absolute inset-0 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, #fce4ec, transparent)',
          width: '50px',
          height: '50px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        aria-hidden="true"
      />
      <div className="relative text-[#c9a0a0]">{icon}</div>
    </div>

    <span className="font-serif-display text-[#c9a0a0] text-[10px] md:text-xs tracking-[0.25em] uppercase font-medium">
      {label}
    </span>

    <span className="font-serif-display text-[#8b6f5e] text-xl md:text-2xl font-semibold leading-tight tracking-wide">
      {primary}
    </span>

    {secondary && (
      <span className="font-cormorant text-[#a08070] text-base md:text-lg italic">
        {secondary}
      </span>
    )}

    {tertiary && (
      <span className="font-lora text-[#a08070] text-[11px] md:text-xs leading-relaxed max-w-[220px] block">
        {tertiary}
      </span>
    )}
  </div>
);

const EventDetails: React.FC = () => {
  const { event, labels } = invitationData;

  return (
    <section className="relative w-full px-4 md:px-6 py-6 md:py-10" aria-label="Event details">
      <div className="relative max-w-2xl mx-auto">
        {/* Outer decorative frame */}
        <div className="paper-texture shadow-paper relative">
          {/* Thin decorative border inset */}
          <div
            className="absolute inset-3 md:inset-5 pointer-events-none"
            style={{
              border: '1px solid rgba(201, 160, 160, 0.3)',
            }}
            aria-hidden="true"
          />

          {/* Corner ornaments */}
          <div className="absolute top-4 md:top-6 left-4 md:left-6 text-[#c9a0a0]/30 text-lg" aria-hidden="true">✿</div>
          <div className="absolute top-4 md:top-6 right-4 md:right-6 text-[#c9a0a0]/30 text-lg" aria-hidden="true">✿</div>
          <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-[#c9a0a0]/30 text-lg" aria-hidden="true">✿</div>
          <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 text-[#c9a0a0]/30 text-lg" aria-hidden="true">✿</div>

          {/* Inner content */}
          <div className="relative p-5 md:p-8">
            {/* Three columns on desktop, stacked on mobile */}
            <div className="flex flex-col md:flex-row md:items-start">
              {/* Time */}
              <div className="flex-1 border-b md:border-b-0 md:border-r border-[#e8c8c8]/40">
                <EventDetailItem
                  icon={<Clock size={28} strokeWidth={1.3} />}
                  label={labels.time}
                  primary={event.time}
                  secondary={event.period}
                />
              </div>

              {/* Date */}
              <div className="flex-1 border-b md:border-b-0 md:border-r border-[#e8c8c8]/40">
                <EventDetailItem
                  icon={<Calendar size={28} strokeWidth={1.3} />}
                  label={labels.date}
                  primary={event.date}
                />
              </div>

              {/* Location */}
              <div className="flex-1">
                <EventDetailItem
                  icon={<MapPin size={28} strokeWidth={1.3} />}
                  label={labels.location}
                  primary={event.location.name}
                  tertiary={event.location.address}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
