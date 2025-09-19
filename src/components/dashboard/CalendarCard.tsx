import { FC } from 'react';
import { appointments, Appointment } from '@/data/patient';

const days = [
  ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  [1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19, 20, 21],
  [22, 23, 24, 25, 26, 27, 28],
  [29, 30, '', '', '', '', ''],
];

const GoogleCalendarIcon = () => (
  <svg viewBox="0 0 36 36" className="h-7 w-7">
    <rect width="36" height="36" rx="8" fill="#1967D2" />
    <rect width="36" height="18" rx="8" fill="#4285F4" />
    <rect x="5" y="13" width="26" height="18" rx="6" fill="white" />
    <text
      x="18"
      y="28"
      textAnchor="middle"
      fontSize="14"
      fontWeight="600"
      fill="#1967D2"
      fontFamily="'Inter', sans-serif"
    >
      18
    </text>
  </svg>
);

export const CalendarCard: FC<{ schedule?: Appointment[] }> = ({ schedule = appointments }) => {
  return (
    <section className="flex h-full flex-col rounded-[32px] bg-white p-6 shadow-[0px_24px_60px_rgba(35,35,70,0.08)]">
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-[18px] font-semibold text-[#2F2F41]">September 2025</h2>
        </div>
        <div className="flex items-center gap-3 text-[#6B6B80]">
          <button type="button" aria-label="Previous" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F2F2FA]">
            <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button type="button" aria-label="Next" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F2F2FA]">
            <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6 6 6-6 6" />
            </svg>
          </button>
        </div>
      </header>
      <div className="grid grid-cols-[1fr_220px] gap-6">
        <div className="rounded-[24px] bg-[#F7F7FC] p-5">
          <div className="mb-4 grid grid-cols-7 text-center text-[13px] font-medium text-[#8B8BA0]">
            {days[0].map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-3 text-center text-[15px] font-medium text-[#2F2F41]">
            {days.slice(1).flat().map((day, index) => {
              if (!day) return <span key={`empty-${index}`} />;
              const isActive = day === 18;
              return (
                <span
                  key={day}
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    isActive ? 'bg-[#5B4BFF] text-white shadow-[0px_16px_32px_rgba(79,66,195,0.35)]' : ''
                  }`}
                >
                  {day}
                </span>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between text-[14px] font-medium text-[#4A4AEE]">
            <span>Follow up schedule</span>
            <GoogleCalendarIcon />
          </div>
          <div className="space-y-3">
            {schedule.map((item) => (
              <div
                key={item.id}
                className={`rounded-[20px] p-4 text-[14px] font-medium shadow-[0px_16px_40px_rgba(54,54,119,0.16)] ${
                  item.color === 'purple'
                    ? 'bg-gradient-to-r from-[#A69EFF] via-[#C6BFFF] to-[#DAD3FF] text-[#2F2F41]'
                    : 'bg-white text-[#2F2F41]'
                }`}
              >
                <p>{item.title}</p>
                <p className="mt-1 text-[13px] text-[#4B4B61]">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
