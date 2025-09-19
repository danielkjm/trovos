'use client';

import { motion } from 'framer-motion';
import { FC } from 'react';

type ToggleOption = {
  id: 'dashboard' | 'chat';
  label: string;
};

type ViewToggleProps = {
  active: 'dashboard' | 'chat';
  onChange: (next: 'dashboard' | 'chat') => void;
  options?: ToggleOption[];
};

const defaultOptions: ToggleOption[] = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'chat', label: 'Chat' },
];

export const ViewToggle: FC<ViewToggleProps> = ({ active, onChange, options = defaultOptions }) => {
  return (
    <div className="relative inline-flex items-center rounded-full bg-[#F3F3F7] p-1 text-sm font-medium text-[#6F6F7C] shadow-[0px_6px_18px_rgba(31,31,56,0.08)]">
      {options.map((option) => {
        const selected = option.id === active;
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
            className={`relative z-10 px-5 py-2 transition-colors duration-200 ${
              selected ? 'text-white' : 'text-[#5A5A6F]'
            }`}
          >
            {selected && (
              <motion.span
                layoutId="toggle-pill"
                transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                className="absolute inset-0 -z-10 rounded-full bg-[#5B4BFF]"
              />
            )}
            {option.label}
          </button>
        );
      })}
    </div>
  );
};
