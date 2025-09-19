import { FC, useMemo } from 'react';
import { ChatInput } from '@/components/chat/ChatInput';
import { Medication, medications as defaultMedications } from '@/data/patient';

const getIcon = (icon: Medication['icon']) => {
  if (icon === 'sun') {
    return (
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
    );
  }
  return (
    <svg aria-hidden className="h-4 w-4 text-[#A89CFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 1 0 21 12.79Z" />
    </svg>
  );
};

type MedicationDetailViewProps = {
  selectedId: string;
  onSelect: (id: string) => void;
  onBack: () => void;
  medications?: Medication[];
};

export const MedicationDetailView: FC<MedicationDetailViewProps> = ({
  selectedId,
  onSelect,
  onBack,
  medications = defaultMedications,
}) => {
  const selectedMedication = useMemo(
    () => medications.find((item) => item.id === selectedId) ?? medications[0],
    [medications, selectedId],
  );

  if (!selectedMedication) {
    return null;
  }

  return (
    <section className="flex flex-1 flex-col gap-10">
      <div className="flex gap-10">
        <aside className="w-[260px] shrink-0">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 rounded-full bg-[#1F1F38] px-4 py-2 text-[14px] font-medium text-white shadow-[0px_14px_28px_rgba(31,31,56,0.2)]"
          >
            <svg aria-hidden className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Dashboard
          </button>
          <div className="mt-6 space-y-3">
            {medications.map((med) => {
              const isActive = med.id === selectedMedication.id;
              return (
                <button
                  key={med.id}
                  type="button"
                  onClick={() => onSelect(med.id)}
                  className={`flex w-full items-center justify-between rounded-[18px] px-5 py-4 text-left text-[15px] font-medium transition-colors ${
                    isActive
                      ? 'bg-[#A4CDAF] text-[#1F3A28] shadow-[0px_16px_36px_rgba(63,102,76,0.24)]'
                      : 'bg-white text-[#3B3B4F] shadow-[0px_10px_24px_rgba(41,41,73,0.08)] hover:bg-[#F4F4FC]'
                  }`}
                >
                  <div>
                    <p>{med.name}</p>
                    <p className="text-[13px] text-[#717189]">{med.schedule}</p>
                  </div>
                  {getIcon(med.icon)}
                </button>
              );
            })}
          </div>
        </aside>
        <div className="w-px bg-[#E3E3F2]" />
        <div className="flex flex-1 flex-col gap-8">
          <div>
            <p className="text-[14px] font-semibold uppercase tracking-[0.2em] text-[#7A7A8F]">Medications</p>
            <h1 className="mt-2 text-[36px] font-semibold text-[#2F2F41]">{selectedMedication.name}</h1>
          </div>
          <div className="rounded-[28px] bg-[#F7F7FC] px-6 py-5 text-[15px] text-[#4A4A66] shadow-[0px_18px_40px_rgba(84,84,132,0.12)]">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF2C9]">
                <svg aria-hidden className="h-5 w-5 text-[#F5B400]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 18h.01" />
                  <path d="M8 22h8" />
                  <path d="m7.001 10.91 1.514-4.6A3 3 0 0 1 11.362 4h1.272a3 3 0 0 1 2.847 2.31l1.518 4.61A5.5 5.5 0 0 1 12.58 18" />
                </svg>
              </span>
              <p>{selectedMedication.description}</p>
            </div>
          </div>
          <div className="grid grid-cols-[minmax(0,320px)_minmax(0,1fr)] gap-6">
            <div className="flex flex-col rounded-[30px] bg-white p-6 text-center text-[#2F2F41] shadow-[0px_24px_60px_rgba(35,35,70,0.12)]">
              <div className="mb-6 flex items-center justify-between text-[13px] text-[#8B8BA0]">
                <span>{selectedMedication.schedule}</span>
                <button type="button" className="rounded-full bg-[#E8E4FF] px-3 py-1 text-[12px] font-medium text-[#5A4AE3]">
                  Refill
                </button>
              </div>
              <div className="flex items-center justify-center gap-6 text-[44px] font-semibold">
                <button type="button" className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E1E1F0] text-[32px] text-[#6B6B80]">
                  −
                </button>
                <span>{selectedMedication.pillCount}</span>
                <button type="button" className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E1E1F0] text-[32px] text-[#6B6B80]">
                  +
                </button>
              </div>
              <p className="mt-4 text-[14px] text-[#6B6B80]">Pills</p>
            </div>
            <div className="rounded-[30px] bg-[#1B1B2C] p-6 text-white shadow-[0px_28px_64px_rgba(24,24,44,0.4)]">
              <h2 className="text-[18px] font-semibold">Instructions</h2>
              <ul className="mt-4 space-y-3 text-[14px] text-white/85">
                {selectedMedication.instructions.slice(0, 4).map((tip, index) => (
                  <li key={index}>• {tip}</li>
                ))}
              </ul>
              {selectedMedication.instructions.slice(4).map((tip, index) => (
                <p key={`extra-${index}`} className="mt-4 text-[13px] text-white/70">
                  {tip}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ChatInput maxWidthClass="max-w-[900px]" variant="glass" />
    </section>
  );
};
