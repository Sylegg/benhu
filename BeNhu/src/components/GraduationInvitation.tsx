import React from 'react';
import { CalendarDays, Clock3, Heart, Sparkles } from 'lucide-react';
import { invitationData } from '../data/invitationData';
import { RSVPFormSection } from './RSVPFormSection';
import { ButterflyRain } from './ButterflyRain';

const ART = {
  crown: '/images/generated/crown-single.png',
  flower: '/images/generated/flower-single.png',
  butterfly: '/images/generated/butterfly-single.png',
  bow: '/images/generated/bow-single.png',
  heroBackground: '/images/generated/hero-paper-background.png',
  graduate: '/images/generated/graduate-cutout.png',
  benhu: '/images/generated/benhu.png',
  cap: '/images/generated/graduation-cap.png',
  bouquet: '/images/generated/flower-bouquet.png',
  princessCrest: '/images/generated/princess-crest.png',
} as const;

const GraduationInvitation: React.FC = () => {
  const { event, graduate, messages } = invitationData;
  const graduateNameParts = graduate.name.split(' ');
  const graduateNameFirstLine = graduateNameParts.slice(0, 2).join(' ');
  const graduateNameSecondLine = graduateNameParts.slice(2).join(' ');

  return (
    <main className="invitation-page">
      <ButterflyRain />
      <div className="invitation-grain" aria-hidden="true" />
      <div className="invitation-glow invitation-glow-left" aria-hidden="true" />
      <div className="invitation-glow invitation-glow-right" aria-hidden="true" />

      <header className="hero-preface">
        <div className="hero-preface-kicker">
          <span />
          <Sparkles size={13} strokeWidth={1.5} />
          <p>Graduation celebration</p>
          <Sparkles size={13} strokeWidth={1.5} />
          <span />
        </div>
        <h1>Lễ tốt nghiệp</h1>
        <p>Một cột mốc thật đẹp, một ngày vui thật đáng nhớ</p>
      </header>

      <div className="hero-preface-crest" aria-hidden="true">
        <img src={ART.princessCrest} alt="" />
      </div>

      <div className="hero-container relative mx-auto w-full max-w-[720px]" style={{ position: 'relative' }}>
        <img className="hero-bouquet" src={ART.bouquet} alt="" aria-hidden="true" style={{ position: 'absolute', zIndex: 20 }} />
        <img className="hero-condau" src="/images/generated/condau.png" alt="" aria-hidden="true" style={{ position: 'absolute', zIndex: 14 }} />
        <img className="hero-bow-single" src="/images/generated/bow-single.png" alt="" aria-hidden="true" style={{ position: 'absolute', zIndex: 30 }} />
        <section className="layered-hero" aria-labelledby="hero-title" style={{ margin: 0 }}>
          <div className="hero-light hero-light-one" aria-hidden="true" />
          <div className="hero-light hero-light-two" aria-hidden="true" />

          <img className="hero-class-badge-img" src="/images/generated/2026.png" alt="Class of 2026" />

          <div className="hero-side-message">
            <Heart size={16} fill="currentColor" />
            <p>Cùng nhau chia sẻ<br />niềm vui trong ngày<br />đặc biệt này nhé!</p>
          </div>

          <div className="hero-portrait-halo" aria-hidden="true" />
          <img
            className="hero-graduate"
            src={ART.graduate}
            alt={`${graduate.name} trong trang phục tốt nghiệp của ${graduate.university}`}
            loading="eager"
          />

          <img className="hero-butterfly hero-butterfly-one" src={ART.butterfly} alt="" aria-hidden="true" />
          <img className="hero-butterfly hero-butterfly-two" src={ART.butterfly} alt="" aria-hidden="true" />
          <img className="hero-butterfly hero-butterfly-three" src={ART.butterfly} alt="" aria-hidden="true" />
          <img className="hero-butterfly hero-butterfly-four" src={ART.butterfly} alt="" aria-hidden="true" />
          <img className="hero-butterfly hero-butterfly-five" src={ART.butterfly} alt="" aria-hidden="true" />
          <img className="hero-butterfly hero-butterfly-six" src={ART.butterfly} alt="" aria-hidden="true" />
          <img className="hero-butterfly hero-butterfly-seven" src={ART.butterfly} alt="" aria-hidden="true" />

          <div className="hero-polaroid" aria-hidden="true">
            <div className="hero-polaroid-photo">
              <img src={ART.benhu} alt="" />
            </div>
            <span>♡</span>
          </div>

          <div className="hero-sparkles" aria-hidden="true">
            <i /><i /><i /><i /><i /><i />
            <i /><i /><i /><i /><i /><i />
            <i /><i /><i /><i /><i /><i />
            <i /><i /><i /><i /><i />
          </div>
        </section>

        <div className="hero-title-block">
          <h1 id="hero-title">Graduation</h1>
        </div>
      </div>

      <div className="section-transition princess-transition" aria-hidden="true">
        <span />
        <img className="transition-bow" src={ART.bow} alt="" />
        <img className="transition-flower" src={ART.flower} alt="" />
        <img className="transition-butterfly" src={ART.butterfly} alt="" />
        <span />
      </div>

      <section className="invitation-details-section" aria-labelledby="invitation-details-title">
        <div className="details-paper-back details-paper-back-left" aria-hidden="true" />
        <div className="details-paper-back details-paper-back-right" aria-hidden="true" />

        <article className="details-paper">
          {/* Decorative Sparkles */}
          <div className="details-sparkles" aria-hidden="true">
            <i /><i /><i /><i /><i />
            <i /><i /><i /><i /><i />
            <i /><i /><i /><i /><i />
          </div>

          <img className="details-art details-flower details-flower-left" src={ART.flower} alt="" aria-hidden="true" />
          <img className="details-art details-butterfly" src={ART.butterfly} alt="" aria-hidden="true" />

          <div className="details-heading">
            <img className="details-heading-crown" src={ART.crown} alt="" aria-hidden="true" />
            <div className="details-greeting-row">
              <span aria-hidden="true">❧</span>
              <p className="details-greeting">{messages.invitationGreeting}</p>
              <span aria-hidden="true">❧</span>
            </div>
            <div className="details-recipient"><span>{messages.invitationRecipient}</span></div>
            <p className="details-lead">{messages.invitationBody}</p>
            <div className="details-name-composition">
              <h2 id="invitation-details-title">
                <span style={{ position: 'relative' }}>
                  <img className="details-name-crown-left" src={ART.crown} alt="" aria-hidden="true" />
                  {graduateNameFirstLine}
                  <Sparkles className="name-sparkle name-sparkle-1" />
                </span>
                <span style={{ position: 'relative' }}>
                  {graduateNameSecondLine}
                  <Sparkles className="name-sparkle name-sparkle-2" />
                </span>
              </h2>
            </div>
            <div className="details-name-flourish" aria-hidden="true">
              <span>❧</span><i /><b>❀</b><i /><span>❧</span>
            </div>

          </div>

          <div className="event-card">
            <span className="event-corner event-corner-top" aria-hidden="true" />
            <span className="event-corner event-corner-bottom" aria-hidden="true" />

            <div className="event-card-top">
              <div className="event-info-item">
                <div className="event-icon"><Clock3 size={22} strokeWidth={1.5} /></div>
                <span className="event-label">Thời gian</span>
                <time dateTime="09:30"><strong>{event.time}</strong></time>
              </div>

              <div className="event-info-item">
                <div className="event-icon"><CalendarDays size={22} strokeWidth={1.5} /></div>
                <span className="event-label">{event.dayOfWeek}</span>
                <time dateTime="2026-06-27"><strong>{event.date}</strong></time>
              </div>
            </div>

            <div className="event-location">
              <strong>{event.location.name}</strong>
              <p>{event.location.address}</p>


              <a href="https://www.google.com/maps/search/?api=1&query=T%C3%B2a+J%2C+%C4%90%E1%BA%A1i+h%E1%BB%8Dc+V%C4%83n+Lang+C%C6%A1+s%E1%BB%9F+3%2C+69%2F68+%C4%90%E1%BA%B7ng+Th%C3%B9y+Tr%C3%A2m%2C+H%E1%BB%93+Ch%C3%AD+Minh" target="_blank" rel="noopener noreferrer" className="location-btn">
                Mở Google Maps
              </a>
            </div>
          </div>

          <div className="details-closing">
            <p>Rất hân hạnh<br />được đón tiếp! <Heart size={13} fill="currentColor" /></p>
            <div className="celebrate-note">
              <span>Liên hệ</span>
              <span>0909876902 - Vũ</span>
            </div>
          </div>


        </article>
      </section>

      <div className="section-garland-decor" aria-hidden="true">
        <img src="/images/generated/butterfly-garland.png" alt="" />
      </div>

      <div className="rsvp-wrap">
        <RSVPFormSection />
      </div>

      <footer className="invitation-footer">
        <span />
        <Heart size={12} fill="currentColor" />
        <p>{graduate.name}</p>
        <Heart size={12} fill="currentColor" />
        <span />
      </footer>
    </main>
  );
};

export default GraduationInvitation;
