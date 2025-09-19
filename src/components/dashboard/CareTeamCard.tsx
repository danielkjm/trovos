import { FC } from 'react';
import { careManagerCount } from '@/data/patient';

export const CareTeamCard: FC = () => {
  return (
    <div className="flex items-center justify-between rounded-[50px] bg-white/95 px-8 py-4 shadow-[0px_20px_48px_rgba(31,31,56,0.1)] backdrop-blur">
      <div className="flex items-center gap-4">
        <div className="flex items-center -space-x-2">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-[url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&w=120&h=120&q=60')] bg-cover bg-center" />
          <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-[url('https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=facearea&w=120&h=120&q=60')] bg-cover bg-center" />
        </div>
        <div>
          <p className="text-[17px] font-semibold text-[#2F2F41]">{careManagerCount} Care Managers</p>
          <p className="text-[13px] text-[#8B8BA0]">Cardiothoracic specialists on call</p>
        </div>
      </div>
      <div className="flex items-center gap-3 text-[#4A4AEE]">
        <button type="button" aria-label="Call" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EEF0FF]">
          <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2.03Z" />
          </svg>
        </button>
        <button type="button" aria-label="Message" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EEF0FF]">
          <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
          </svg>
        </button>
        <button type="button" aria-label="Email" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EEF0FF]">
          <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
            <path d="m22 6-10 7L2 6" />
          </svg>
        </button>
      </div>
    </div>
  );
};
