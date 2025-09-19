'use client';

import { FC } from 'react';

type ChatInputProps = {
  placeholder?: string;
  maxWidthClass?: string;
  variant?: 'gradient' | 'glass';
};

export const ChatInput: FC<ChatInputProps> = ({
  placeholder = 'Ask anything...',
  maxWidthClass = 'max-w-[720px]',
  variant = 'gradient',
}) => {
  const isGlass = variant === 'glass';
  const shellClasses = isGlass
    ? `mx-auto mt-10 w-full rounded-[32px] border border-white/50 bg-white/20 p-[3px] shadow-[0px_24px_60px_rgba(35,35,70,0.16)] backdrop-blur-xl ${maxWidthClass}`
    : `mx-auto mt-10 w-full rounded-[32px] bg-gradient-to-r from-[#E8DBFF] via-[#E4D7FF] to-[#DED5FF] p-[3px] shadow-[0px_24px_60px_rgba(72,53,171,0.18)] ${maxWidthClass}`;

  const bodyClasses = isGlass
    ? 'flex items-center gap-4 rounded-[30px] border border-white/40 bg-white/30 px-6 py-4 text-[#5B5B70] backdrop-blur-2xl'
    : 'flex items-center gap-4 rounded-[30px] bg-white/80 px-6 py-4 text-[#6B6B80] backdrop-blur-sm';

  const textColor = isGlass ? 'text-[#2D2D3F]' : 'text-[#2E2E3A]';
  const placeholderColor = isGlass ? 'placeholder:text-[#7D7D8E]' : 'placeholder:text-[#8B8BA0]';

  return (
    <div className={shellClasses}>
      <div className={bodyClasses}>
        <span
          className={`flex h-9 w-9 items-center justify-center rounded-full ${
            isGlass
              ? 'bg-gradient-to-br from-white/70 via-white/40 to-white/20'
              : 'bg-gradient-to-br from-[#5B5BEA] to-[#3D3DDC]'
          }`}
        >
          <span className={`h-3 w-3 rounded-full ${isGlass ? 'bg-[#5B4BFF]' : 'bg-white'}`} />
        </span>
        <input
          placeholder={placeholder}
          className={`flex-1 bg-transparent text-[16px] ${textColor} outline-none ${placeholderColor}`}
        />
        <div className={`flex items-center gap-4 ${isGlass ? 'text-[#5A54FF]' : 'text-[#5B4BFF]'}`}>
          <button type="button" aria-label="Voice input">
            <svg
              aria-hidden
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 3a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Z" />
              <path d="M19 10a7 7 0 0 1-14 0" />
              <path d="M12 17v4" />
              <path d="M8 21h8" />
            </svg>
          </button>
          <button type="button" aria-label="Send">
            <svg
              aria-hidden
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="m3 3 18 9-18 9 4-9-4-9Z" />
              <path d="M7 12h12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
