import React, { useEffect, useRef, useState } from 'react';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;

    ['/images/generated/mo.png', '/images/generated/tat.png'].forEach((src) => {
      const image = new Image();
      image.src = src;
      void image.decode().catch(() => undefined);
    });

    if (!audio) return;

    audio.volume = 0.5;
    void audio.play().catch(() => {
      // Trình duyệt có thể chặn tự phát cho đến lần tương tác đầu tiên.
      setIsPlaying(false);
    });
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    const shouldPlay = !isPlaying;

    // Đổi hình ngay khi bấm, không chờ trình duyệt hoàn tất lệnh phát nhạc.
    setIsPlaying(shouldPlay);

    if (!shouldPlay) {
      audio.pause();
      return;
    }

    try {
      await audio.play();
    } catch {
      // Vẫn giữ đúng trạng thái nút người dùng vừa chọn nếu file nhạc chưa có.
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music.mp3"
        loop
        preload="auto"
      />
      <button 
        type="button"
        className={`music-player-btn ${isPlaying ? 'playing' : ''}`}
        onClick={() => void togglePlay()}
        aria-label={isPlaying ? 'Tắt nhạc' : 'Bật nhạc'}
        aria-pressed={isPlaying}
        title={isPlaying ? 'Tắt nhạc' : 'Bật nhạc'}
      >
        <span className="music-radiance music-radiance-one" aria-hidden="true" />
        <span className="music-radiance music-radiance-two" aria-hidden="true" />
        <span className="music-radiance music-radiance-three" aria-hidden="true" />
        <img
          src="/images/generated/tat.png"
          alt=""
          aria-hidden="true"
          className={`music-toggle-img music-toggle-img-off ${!isPlaying ? 'is-active' : ''}`}
        />
        <img
          src="/images/generated/mo.png"
          alt=""
          aria-hidden="true"
          className={`music-toggle-img music-toggle-img-on ${isPlaying ? 'is-active' : ''}`}
        />
      </button>
    </>
  );
};
