'use client';

import { FC } from 'react';

type ChatInputProps = {
  placeholder?: string;
  maxWidthClass?: string;
  variant?: 'gradient' | 'glass' | 'transparent';
};

export const ChatInput: FC<ChatInputProps> = ({
  placeholder = 'Ask anything...',
  maxWidthClass = 'max-w-[720px]',
  variant = 'gradient',
}) => {
  const isGlass = variant === 'glass';
  const isTransparent = variant === 'transparent';

  const baseShell = `mx-auto mt-10 w-full ${maxWidthClass}`;
  const shellClasses = isGlass
    ? `${baseShell} rounded-[32px] border border-white/50 bg-white/20 p-[3px] shadow-[0px_24px_60px_rgba(35,35,70,0.16)] backdrop-blur-xl`
    : isTransparent
    ? `${baseShell} rounded-[32px] shadow-[0px_18px_46px_rgba(31,31,56,0.1)]`
    : `${baseShell} rounded-[32px] bg-gradient-to-r from-[#E8DBFF] via-[#E4D7FF] to-[#DED5FF] p-[3px] shadow-[0px_24px_60px_rgba(72,53,171,0.18)]`;

  const bodyClasses = isGlass
    ? 'flex items-center gap-4 rounded-[30px] border border-white/40 bg-white/30 px-6 py-4 text-[#5B5B70] backdrop-blur-2xl'
    : isTransparent
    ? 'flex items-center gap-4 rounded-[30px] border border-[#E3E3F5] bg-transparent px-6 py-4 text-[#5B5B70]'
    : 'flex items-center gap-4 rounded-[30px] bg-white/80 px-6 py-4 text-[#6B6B80] backdrop-blur-sm';

  const textColor = isGlass ? 'text-[#2D2D3F]' : isTransparent ? 'text-[#2F2F41]' : 'text-[#2E2E3A]';
  const placeholderColor = isGlass
    ? 'placeholder:text-[#7D7D8E]'
    : isTransparent
    ? 'placeholder:text-[#9FA0B6]'
    : 'placeholder:text-[#8B8BA0]';

  const iconShell = isGlass
    ? 'bg-gradient-to-br from-white/70 via-white/40 to-white/20'
    : 'bg-gradient-to-br from-[#5B5BEA] to-[#3D3DDC]';

  const iconInner = isGlass ? 'bg-[#5B4BFF]' : 'bg-white';
  const actionColor = isGlass ? 'text-[#5A54FF]' : 'text-[#5B4BFF]';

  return (
    <div className={shellClasses}>
      <div className={bodyClasses}>
        <span className={`flex h-9 w-9 items-center justify-center rounded-full ${iconShell}`}>
          <span className={`h-3 w-3 rounded-full ${iconInner}`} />
        </span>
        <input
          placeholder={placeholder}
          className={`flex-1 bg-transparent text-[16px] ${textColor} outline-none ${placeholderColor}`}
        />
        <div className={`flex items-center gap-4 ${actionColor}`}>
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
