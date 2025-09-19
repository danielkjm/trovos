import { FC } from 'react';

const conversations = [
  'New Chat',
  'Metoprolol frequency',
  'Insurance company details',
  'Cardio thoracic surgery',
  'Exercise routine',
  'Nap frequency for recovery',
  'Good exercises for recovery',
  'Healthy meal alternatives',
];

export const ChatSidebar: FC = () => {
  return (
    <aside className="flex w-[280px] flex-col rounded-[24px] bg-white/90 p-6 shadow-[0px_20px_42px_rgba(31,31,56,0.08)]">
      <label className="mb-6 flex items-center gap-3 rounded-[30px] bg-[#F6F6FB] px-5 py-3 text-sm text-[#6F6F7C]">
        <input
          placeholder="Search"
          className="w-full bg-transparent text-[15px] text-[#2E2E3A] outline-none placeholder:text-[#9B9BA8]"
        />
        <svg
          aria-hidden
          className="h-4 w-4 text-[#6F6F7C]"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
      </label>
      <nav className="flex-1 space-y-2">
        {conversations.map((item, index) => (
          <button
            key={item}
            className={`w-full rounded-[18px] px-4 py-3 text-left text-[15px] font-medium text-[#46465A] transition-colors ${
              index === 0 ? 'bg-[#E5E5F8] text-[#4A4AEE]' : 'bg-white hover:bg-[#F2F2FA]'
            }`}
            type="button"
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
};
