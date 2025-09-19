'use client';

import { FC } from 'react';

type ChatInputProps = {
  placeholder?: string;
  maxWidthClass?: string;
};

export const ChatInput: FC<ChatInputProps> = ({ placeholder = 'Ask anything...', maxWidthClass = 'max-w-[720px]' }) => {
  return (
    <div
      className={`mx-auto mt-10 w-full rounded-[32px] bg-gradient-to-r from-[#E8DBFF] via-[#E4D7FF] to-[#DED5FF] p-[3px] shadow-[0px_24px_60px_rgba(72,53,171,0.18)] ${maxWidthClass}`}
    >
      <div className="flex items-center gap-4 rounded-[30px] bg-white/80 px-6 py-4 text-[#6B6B80] backdrop-blur-sm">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#5B5BEA] to-[#3D3DDC]">
          <span className="h-3 w-3 rounded-full bg-white" />
        </span>
        <input
          placeholder={placeholder}
          className="flex-1 bg-transparent text-[16px] text-[#2E2E3A] outline-none placeholder:text-[#8B8BA0]"
        />
        <div className="flex items-center gap-4 text-[#5B4BFF]">
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
