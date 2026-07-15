import { FormEvent, useState } from "react";
import {
  Check,
  Heart,
  LoaderCircle,
  Send,
  X,
} from "lucide-react";

type AttendanceStatus =
  | "attending"
  | "not_attending";

interface RsvpFormData {
  fullName: string;
  attendance: AttendanceStatus;
  message: string;
}

const INITIAL_FORM: RsvpFormData = {
  fullName: "",
  attendance: "attending",
  message: "",
};

export const RSVPFormSection = () => {
  const [formData, setFormData] =
    useState<RsvpFormData>(INITIAL_FORM);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [isSuccess, setIsSuccess] =
    useState(false);

  const [error, setError] =
    useState("");

  const scriptUrl = import.meta.env.VITE_RSVP_SCRIPT_URL as string | undefined;

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setError("");

    if (!formData.fullName.trim()) {
      setError("Vui lòng nhập họ và tên.");
      return;
    }

    if (!scriptUrl) {
      setError(
        "Chưa cấu hình VITE_RSVP_SCRIPT_URL.",
      );
      return;
    }

    try {
      setIsSubmitting(true);

      const body = new URLSearchParams({
        fullName: formData.fullName.trim(),
        attendance: formData.attendance,
        message: formData.message.trim(),
      });

      const response = await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        body,
      });

      /*
       * Với no-cors, response.type sẽ là "opaque".
       * Điều này chỉ xác nhận trình duyệt đã gửi request,
       * không xác nhận Google Sheet đã ghi thành công.
       */
      console.log("RSVP request sent:", {
        responseType: response.type,
        fullName: formData.fullName.trim(),
        attendance: formData.attendance,
        message: formData.message.trim(),
      });

      setIsSuccess(true);
      setFormData(INITIAL_FORM);
    } catch (submitError) {
      console.error(submitError);

      setError(
        "Không thể gửi xác nhận. Vui lòng thử lại.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {isSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#85525c]/30 backdrop-blur-sm p-4">
          <section className="relative w-full max-w-sm rounded-[2rem] border border-[#e8b7c0] bg-[#fffaf6] px-6 py-12 text-center shadow-[0_20px_60px_rgba(170,80,100,0.3)]">
            <img 
              src="/images/generated/butterfly-single.png" 
              alt="" 
              aria-hidden="true"
              className="absolute -right-5 top-1/2 w-10 -translate-y-1/2 object-contain opacity-70 drop-shadow-sm" 
              style={{ transform: 'rotate(15deg)' }}
            />

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#bd596d] text-white shadow-lg">
              <Check size={30} />
            </div>

            <h2 className="mt-5 font-serif text-3xl text-[#a64257]">
              Cảm ơn bạn đã xác nhận
            </h2>

            <p className="mt-3 leading-7 text-[#79575e]">
              Thông tin của bạn đã được ghi nhận.
            </p>

            <button
              type="button"
              onClick={() => setIsSuccess(false)}
              className="group mt-7 inline-flex items-center justify-center gap-2 rounded-full border border-[#d89aa6] px-6 py-3 font-medium text-[#a64257] transition hover:bg-[#fff0f3] hover:shadow-sm"
            >
              <img 
                src="/images/generated/butterfly-single.png" 
                alt="" 
                className="w-5 object-contain opacity-80 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110 drop-shadow-sm" 
                style={{ transform: 'rotate(-10deg)' }}
              />
              Gửi xác nhận khác
              <img 
                src="/images/generated/butterfly-single.png" 
                alt="" 
                className="w-5 object-contain opacity-80 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 drop-shadow-sm" 
                style={{ transform: 'rotate(10deg)' }}
              />
            </button>
          </section>
        </div>
      )}


    <section className="relative mx-auto w-full max-w-lg overflow-hidden rounded-[2rem] border border-[#e8b7c0] bg-[#fffaf6] p-6 shadow-[0_20px_60px_rgba(170,80,100,0.16)] sm:p-9 z-10 mb-16 mt-2">
      <div
        aria-hidden="true"
        className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#f7d8de]/70 blur-2xl"
      />

      <header className="relative text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#e4adb8] bg-[#fdecef] text-[#b74f64]">
          <Heart size={22} />
        </div>

        <h2 className="mt-4 font-serif text-3xl text-[#a64257] sm:text-4xl">
          Xác nhận tham dự
        </h2>

        <p className="mx-auto mt-3 max-w-sm leading-7 text-[#806067]">
          Sự hiện diện của bạn sẽ làm ngày đặc
          biệt này thêm trọn vẹn.
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="relative mt-8 space-y-6"
      >
        <div>
          <label
            htmlFor="fullName"
            className="mb-2 block text-sm font-semibold text-[#85525c]"
          >
            Họ và tên
          </label>

          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            maxLength={100}
            value={formData.fullName}
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                fullName: event.target.value,
              }))
            }
            placeholder="Nhập họ và tên của bạn"
            className="w-full rounded-2xl border border-[#ecd0d5] bg-white/85 px-4 py-3.5 text-[#603f46] outline-none transition placeholder:text-[#bca5aa] focus:border-[#c96e80] focus:ring-4 focus:ring-[#f5d7dd]"
          />
        </div>

        <div>
          <label
            htmlFor="attendance"
            className="mb-2 block text-sm font-semibold text-[#85525c]"
          >
            Bạn có tham dự không?
          </label>

          <div className="relative">
            <select
              id="attendance"
              name="attendance"
              value={formData.attendance}
              onChange={(event) =>
                setFormData((current) => ({
                  ...current,
                  attendance: event.target.value as AttendanceStatus,
                }))
              }
              className="w-full appearance-none rounded-2xl border border-[#ecd0d5] bg-white/85 px-4 py-3.5 text-[#603f46] outline-none transition focus:border-[#c96e80] focus:ring-4 focus:ring-[#f5d7dd]"
            >
              <option value="attending">Tham dự</option>
              <option value="not_attending">Không tham dự</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#85525c]">
              <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-semibold text-[#85525c]"
          >
            Lời chúc gửi đến bạn
          </label>

          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                message: event.target.value,
              }))
            }
            placeholder="Chúc mừng tốt nghiệp rực rỡ..."
            className="w-full resize-none rounded-2xl border border-[#ecd0d5] bg-white/85 px-4 py-3.5 text-[#603f46] outline-none transition placeholder:text-[#bca5aa] focus:border-[#c96e80] focus:ring-4 focus:ring-[#f5d7dd]"
          />
        </div>

        {error && (
          <p
            role="alert"
            className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#aa4258] via-[#c65f73] to-[#aa4258] px-6 py-4 font-semibold text-white shadow-[0_12px_30px_rgba(178,70,92,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_35px_rgba(178,70,92,0.4)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <LoaderCircle
                size={19}
                className="animate-spin"
              />
              Đang gửi...
            </>
          ) : (
            <>
              <Send size={18} />
              Gửi xác nhận
            </>
          )}
        </button>
      </form>
    </section>
    </>
  );
};
