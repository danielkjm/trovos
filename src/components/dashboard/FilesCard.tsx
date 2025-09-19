import { FC } from 'react';
import { fileSummaries, FileSummary } from '@/data/patient';

export const FilesCard: FC<{ files?: FileSummary[] }> = ({ files = fileSummaries }) => {
  return (
    <section className="flex h-full flex-col rounded-[32px] bg-[#9BC7A71A] p-6 text-[#2F2F41] shadow-[0px_24px_60px_rgba(55,76,66,0.14)]">
      <header className="mb-6 flex items-start justify-between">
        <div>
          <h2 className="text-[20px] font-semibold">Files</h2>
          <p className="text-[13px] text-[#4D5A50]">Important documents</p>
        </div>
        <button type="button" aria-label="Edit" className="rounded-full bg-white/40 p-2 text-[#4D5A50]">
          <svg aria-hidden className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" />
          </svg>
        </button>
      </header>
      <div className="grid grid-cols-2 gap-4">
        {files.map((file) => (
          <div
            key={file.id}
            className="flex h-28 flex-col items-center justify-center rounded-[20px] bg-[#9EC4A9] text-white shadow-[0px_12px_24px_rgba(63,102,76,0.25)]"
          >
            <span className="text-[36px] font-bold leading-none">{file.count}</span>
            <span className="text-[14px]">{file.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
