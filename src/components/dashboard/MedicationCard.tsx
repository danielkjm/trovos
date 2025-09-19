import { FC } from 'react';
import { medications, Medication } from '@/data/patient';

const iconMap = {
  sun: (
    <svg aria-hidden className="h-4 w-4 text-[#FAD16E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  ),
  moon: (
    <svg aria-hidden className="h-4 w-4 text-[#A89CFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 1 0 21 12.79Z" />
    </svg>
  ),
};

export const MedicationCard: FC<{ list?: Medication[] }> = ({ list = medications }) => {
  return (
    <section className="flex h-full flex-col rounded-[32px] bg-[#1B1B2C] p-6 text-white shadow-[0px_24px_60px_rgba(24,24,44,0.4)]">
      <header className="mb-4 flex items-start justify-between">
        <div>
          <h2 className="text-[20px] font-semibold">3 Medications</h2>
          <p className="text-[13px] text-white/60">Today&apos;s schedule</p>
        </div>
        <button type="button" aria-label="Edit" className="rounded-full bg-white/10 p-2">
          <svg aria-hidden className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" />
          </svg>
        </button>
      </header>
      <div className="space-y-3">
        {list.map((item, index) => (
          <div
            key={item.id}
            className={`flex items-center justify-between rounded-[16px] px-4 py-3 text-[15px] font-medium ${
              index === 0
                ? 'bg-[#86B8941A] text-[#DFF2D9]'
                : index === 1
                ? 'bg-[#6B5D9C1A] text-[#DED3FF]'
                : 'bg-[#C999F51A] text-[#F5E6FF]'
            }`}
          >
            <span>{item.name}</span>
            <span className="flex items-center gap-2 text-[14px]">
              {item.schedule}
              {iconMap[item.icon]}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
