import React, { useEffect, useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

type InvitationCoverProps = {
  onOpening: () => void;
  onOpen: () => void;
};

export const InvitationCover: React.FC<InvitationCoverProps> = ({ onOpening, onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    document.body.classList.add('cover-visible');
    return () => document.body.classList.remove('cover-visible');
  }, []);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    onOpening();
    window.setTimeout(onOpen, 1750);
  };

  return (
    <section className={`invitation-cover ${isOpening ? 'is-opening' : ''}`} aria-label="Thiệp mời tốt nghiệp">
      <img
        className="invitation-cover-art"
        src="/images/generated/invitation-cover.png"
        alt="Bìa thiệp tốt nghiệp màu hồng với hoa, nơ và vương miện"
      />

      <div className="cover-shimmer" aria-hidden="true">
        <i /><i /><i /><i /><i /><i />
      </div>

      {isOpening && (
        <div className="opening-butterflies" aria-hidden="true">
          {Array.from({ length: 18 }, (_, index) => (
            <img key={`out-${index}`} className={`opening-butterfly butterfly-fly-out butterfly-out-${index + 1}`} src="/images/generated/butterfly-single.png" alt="" />
          ))}
        </div>
      )}

      <div className="cover-copy">
        <p className="cover-invitation">Đến tham dự lễ tốt nghiệp của</p>
        <h1><span>Lê Thị</span><span>Quỳnh Như</span></h1>
        <div className="cover-name-ornament" aria-hidden="true">
          <b>❧</b><i /><span>❀</span><i /><b>❧</b>
        </div>
        <p className="cover-message">Một cột mốc mới – Một hành trình mới<br />Hãy đến và cùng lan tỏa niềm vui nhé!</p>

        <button type="button" className="open-invitation-btn" onClick={handleOpen} disabled={isOpening}>
          <Sparkles size={17} aria-hidden="true" />
          <span>{isOpening ? 'Đang mở thiệp...' : 'Mở thiệp'}</span>
          <Sparkles size={17} aria-hidden="true" />
        </button>
      </div>
    </section>
  );
};
