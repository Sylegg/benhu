import React, { useState } from 'react';
import { invitationData } from '../data/invitationData';
import { Mail, Heart } from 'lucide-react';
import { Flower2 } from 'lucide-react';

export const RSVPFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    attendance: 'Sẽ tham dự đúng giờ!',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Temporary logic for demonstration
    alert(`Cảm ơn ${formData.name}! Lời chúc của bạn đã được gửi. (Đây là bản demo giao diện)`);
  };

  return (
    <section className="relative w-full max-w-[600px] mx-auto mt-12 mb-16 animate-fade-in-up delay-500 z-10">
      <div className="relative bg-cream rounded-xl p-8 md:p-10 border-rose-gold shadow-realistic z-0">
        {/* Subtle background texture */}
        <div className="absolute inset-0 texture-paper-grain pointer-events-none rounded-xl z-0" />
        
        {/* Decorative images */}
        <img className="absolute w-[64px] top-[10px] left-[-15px] -rotate-12 z-20 animate-float-slow drop-shadow-md" src="/images/no.png" alt="" aria-hidden="true" />
        <img className="absolute w-[58px] right-[-10px] top-[40%] rotate-[18deg] z-20 animate-butterfly drop-shadow-md" src="/images/buom.png" alt="" aria-hidden="true" />
        
        {/* Header */}
        <div className="relative z-10 text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Flower2 size={20} className="text-rose-400 animate-float-slow" fill="currentColor" />
            <h2 className="font-serif text-deep-rose text-2xl md:text-3xl font-bold tracking-wide effect-rose-gold-foil">
              Xác Nhận & Gửi Lời Chúc
            </h2>
            <Flower2 size={20} className="text-rose-400 animate-float-slow delay-200" fill="currentColor" />
          </div>
          <p className="font-serif text-muted-brown text-sm md:text-base">
            Hãy để lại lời nhắn chúc mừng cho <strong className="text-deep-rose font-bold">{invitationData.graduate.name}</strong> nhé! <Heart size={14} className="inline text-rose-400" fill="currentColor" />
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-5">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="rsvp-label">
              Tên của bạn là gì? <span className="text-rose-400">*</span>
            </label>
            <input
              type="text"
              id="name"
              required
              className="princess-input"
              placeholder="Nhập họ tên của bạn..."
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          {/* Attendance Select */}
          <div>
            <label htmlFor="attendance" className="rsvp-label">
              Bạn tham dự cùng Như chứ? <span className="text-rose-400">*</span>
            </label>
            <div className="relative">
              <select
                id="attendance"
                className="princess-input appearance-none cursor-pointer"
                value={formData.attendance}
                onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
              >
                <option value="Sẽ tham dự đúng giờ!">💖 Sẽ tham dự đúng giờ!</option>
                <option value="Chưa chắc chắn">✨ Mình sẽ cố gắng sắp xếp</option>
                <option value="Không thể tham dự">🥺 Tiếc quá, mình bận mất rồi</option>
              </select>
              {/* Custom arrow for select */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-rose-400">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="message" className="rsvp-label">
              Lời chúc gửi đến Quỳnh Như <Heart size={12} className="inline text-rose-300" strokeWidth={3} />
            </label>
            <textarea
              id="message"
              rows={3}
              className="princess-input resize-none"
              placeholder="Chúc Như tốt nghiệp rực rỡ, ngày càng xinh đẹp và thành công..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            {/* Small floating hearts decoration behind textarea */}
            <div className="absolute right-8 mt-2 animate-float-slow pointer-events-none">
              <Heart size={10} className="text-rose-200" fill="currentColor" opacity={0.6} />
            </div>
            <div className="absolute right-12 mt-6 animate-float-very-slow pointer-events-none">
              <Heart size={14} className="text-rose-100" fill="currentColor" opacity={0.5} />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="relative group overflow-hidden w-full md:w-auto px-12 py-3 rounded-full border border-champagne-gold/60 shadow-realistic transition-transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 satin-ribbon-gradient opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex items-center justify-center gap-2 text-white font-serif tracking-widest font-bold uppercase text-sm">
                <Mail size={16} strokeWidth={2.5} />
                Gửi Lời Chúc
              </div>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
