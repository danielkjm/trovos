import { FC } from 'react';

export const BrandLogo: FC<{ compact?: boolean }> = ({ compact }) => {
  return (
    <div className="flex items-center gap-2">
      <span
        className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#5B5BEA] via-[#5D3AE7] to-[#3D3DDC] text-white"
        aria-hidden
      >
        <span className="h-4 w-4 rounded-full bg-white/90" />
      </span>
      {!compact && (
        <span className="text-[18px] font-semibold text-[#1E1E1E]">trovohealth</span>
      )}
    </div>
  );
};
