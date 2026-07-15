import React from 'react';
import { CalendarDays, Clock3, Heart, MapPin, Sparkles } from 'lucide-react';
import { invitationData } from '../data/invitationData';
import { RSVPFormSection } from './RSVPFormSection';

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

  return (
    <main className="invitation-page">
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
        <img className="hero-bow" src="/images/no.png" alt="" aria-hidden="true" style={{ position: 'absolute', zIndex: 30 }} />
        <img className="hero-bouquet" src={ART.bouquet} alt="" aria-hidden="true" style={{ position: 'absolute', zIndex: 20 }} />
        <img className="hero-condau" src="/images/generated/condau.png" alt="" aria-hidden="true" style={{ position: 'absolute', zIndex: 40 }} />
        <section className="layered-hero" aria-labelledby="hero-title" style={{ margin: 0 }}>
          <img className="layered-hero-bg" src={ART.heroBackground} alt="" aria-hidden="true" />
          <div className="hero-light hero-light-one" aria-hidden="true" />
          <div className="hero-light hero-light-two" aria-hidden="true" />

          <div className="hero-title-block">
            <span>Happy</span>
            <h1 id="hero-title">Graduation</h1>
            <p>Ngày em viết nên một chương thật đẹp</p>
          </div>

          <img className="hero-cap" src={ART.cap} alt="" aria-hidden="true" />
          <img className="hero-class-badge-img" src="/images/generated/2026.png" alt="Class of 2026" />

          <div className="hero-side-message">
            <Heart size={16} fill="currentColor" />
            <p>Cùng nhau chia sẻ<br />niềm vui trong ngày<br />đặc biệt này nhé!</p>
          </div>

          <div className="hero-portrait-halo" aria-hidden="true" />
          <img className="hero-crown" src={ART.crown} alt="" aria-hidden="true" />
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
          </div>
        </section>
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
          <img className="details-art details-flower details-flower-left" src={ART.flower} alt="" aria-hidden="true" />
          <img className="details-art details-flower details-flower-right" src={ART.flower} alt="" aria-hidden="true" />
          <img className="details-art details-butterfly" src={ART.butterfly} alt="" aria-hidden="true" />
          <img className="details-art details-bow" src={ART.bow} alt="" aria-hidden="true" />

          <div className="details-seal" aria-hidden="true">
            <Sparkles size={14} />
            <span>QN</span>
          </div>

          <div className="details-heading">
            <p className="details-greeting">{messages.invitationGreeting}</p>
            <div className="details-recipient">{messages.invitationRecipient}</div>
            <p className="details-lead">{messages.invitationBody}</p>
            <h2 id="invitation-details-title">{graduate.name}</h2>
            <div className="mini-floral-rule" aria-hidden="true"><span>✦</span><span>❀</span><span>✦</span></div>
            <p className="details-university">{graduate.university}</p>
            <p className="details-address">{event.location.address}</p>
          </div>

          <div className="event-card">
            <span className="event-corner event-corner-top" aria-hidden="true" />
            <span className="event-corner event-corner-bottom" aria-hidden="true" />

            <div className="event-card-top">
              <div className="event-info-item">
                <div className="event-icon"><Clock3 size={22} strokeWidth={1.5} /></div>
                <span className="event-label">Thời gian</span>
                <time dateTime="09:30"><strong>{event.time}</strong></time>
                <small>{event.period}</small>
              </div>

              <div className="event-info-item">
                <div className="event-icon"><CalendarDays size={22} strokeWidth={1.5} /></div>
                <span className="event-label">{event.dayOfWeek}</span>
                <time dateTime="2026-06-27"><strong>{event.date}</strong></time>
              </div>
            </div>

            <div className="event-location">
              <MapPin size={23} fill="currentColor" strokeWidth={1.4} />
              <span className="event-label">Địa điểm</span>
              <strong>{event.location.name}</strong>
              <p>{event.location.address}</p>
            </div>
          </div>

          <div className="details-closing">
            <p>Rất hân hạnh<br />được đón tiếp! <Heart size={13} fill="currentColor" /></p>
            <div className="celebrate-note">
              <span>Let&apos;s celebrate</span>
              <span>this special day</span>
              <span>together! ♡</span>
            </div>
          </div>

          <div className="details-bottom-decor" aria-hidden="true">
            <img src={ART.flower} alt="" />
            <img src={ART.crown} alt="" />
            <img src={ART.butterfly} alt="" />
          </div>
        </article>
      </section>

      <div className="rsvp-wrap">
        <RSVPFormSection />
      </div>

      <footer className="invitation-footer">
        <span />
        <Heart size={12} fill="currentColor" />
        <p>{graduate.name} · Class of {graduate.graduationYear}</p>
        <Heart size={12} fill="currentColor" />
        <span />
      </footer>
    </main>
  );
};

export default GraduationInvitation;
