import { FC } from 'react';
import { ChatInput } from './ChatInput';

export const ChatView: FC = () => {
  return (
    <section className="flex flex-1 flex-col items-center justify-between gap-10 py-10">
      <div className="flex flex-1 flex-col items-center justify-center gap-6">
        <span className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-[#5B5BEA] via-[#5D3AE7] to-[#3D3DDC] text-white shadow-[0px_30px_60px_rgba(64,54,164,0.24)]">
          <span className="h-20 w-20 rounded-full bg-white/20" />
        </span>
        <div className="text-center">
          <p className="text-[30px] font-semibold text-[#2F2F41]">Trovo AI</p>
          <p className="text-[16px] text-[#6F6F7C]">Your personal care manager assistant</p>
        </div>
      </div>
      <ChatInput variant="transparent" />
    </section>
  );
};
