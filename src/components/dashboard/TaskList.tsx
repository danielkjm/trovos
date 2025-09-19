'use client';

import { FC, FormEvent, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { initialTasks, Task } from '@/data/patient';

type TaskListProps = {
  tasks?: Task[];
  onGenerateTask?: () => void;
  onToggleTask?: (id: string) => void;
  onRemoveTask?: (id: string) => void;
  onAddTask?: (payload: { label: string; dueLabel: string }) => void;
};

const renderTaskIndicator = (completed?: boolean) => {
  if (completed) {
    return (
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#292949]">
        <svg aria-hidden className="h-3 w-3 text-white" viewBox="0 0 12 10" fill="none">
          <path d="M10.5 1.5 4.5 8.5 1 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }

  return <span className="h-5 w-5 rounded-full border border-[#B4B4C8]" />;
};

export const TaskList: FC<TaskListProps> = ({
  tasks = initialTasks,
  onGenerateTask,
  onToggleTask,
  onRemoveTask,
  onAddTask,
}) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newLabel, setNewLabel] = useState('');
  const [newDue, setNewDue] = useState('Today');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isAdding) {
      const timeout = setTimeout(() => inputRef.current?.focus(), 20);
      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [isAdding]);

  const resetForm = () => {
    setNewLabel('');
    setNewDue('Today');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const label = newLabel.trim();
    if (!label) {
      return;
    }
    onAddTask?.({ label, dueLabel: newDue.trim() || 'Today' });
    resetForm();
    setIsAdding(false);
  };

  return (
    <section className="flex h-full flex-col rounded-[32px] bg-white p-6 shadow-[0px_24px_60px_rgba(35,35,70,0.08)]">
      <header className="mb-6 flex items-start justify-between">
        <div>
          <h2 className="text-[20px] font-semibold text-[#2F2F41]">Tasks</h2>
          <button
            type="button"
            onClick={onGenerateTask}
            className="mt-3 inline-flex items-center gap-2 rounded-[20px] bg-[#F2F2FA] px-3 py-2 text-[13px] font-medium text-[#4A4AEE] cursor-pointer hover:bg-[#E3E3F5] focus:outline-none focus:ring-2 focus:ring-[#4A4AEE] focus:ring-offset-2"
          >
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white text-[12px]">✶</span>
            AI generate tasks
          </button>
        </div>
        <button
          type="button"
          aria-label="Add task"
          onClick={() => {
            if (isAdding) {
              resetForm();
              setIsAdding(false);
            } else {
              setIsAdding(true);
            }
          }}
          className={`flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors ${
            isAdding ? 'bg-[#FF6B6B]' : 'bg-[#292949] hover:bg-[#3F3F63]'
          }`}
        >
          <span className="text-xl leading-none cursor-pointer">{isAdding ? '×' : '+'}</span>
        </button>
      </header>
      <motion.div layout className="space-y-3">
        <AnimatePresence initial={false} mode="popLayout">
          {isAdding && (
            <motion.form
              key="task-form"
              layout
              onSubmit={handleSubmit}
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10, height: 0, marginTop: 0, marginBottom: 0, paddingTop: 0, paddingBottom: 0, borderWidth: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              style={{ overflow: 'hidden' }}
              className="flex w-full flex-col gap-3 rounded-[20px] border border-[#E3E3F5] bg-[#F7F7FC] px-4 py-4 text-[#2F2F41]"
            >
              <div className="flex items-center gap-3">
                <span className="h-5 w-5 rounded-full border border-dashed border-[#B4B4C8]" aria-hidden />
                <input
                  ref={inputRef}
                  value={newLabel}
                  onChange={(event) => setNewLabel(event.target.value)}
                  placeholder="Task name"
                  className="flex-1 rounded-[12px] border border-transparent bg-white px-3 py-2 text-[15px] text-[#2F2F41] outline-none focus:border-[#B9B9FF] focus:ring-2 focus:ring-[#B9B9FF]/40"
                />
              </div>
              <div className="flex items-center gap-3 pl-8">
                <input
                  value={newDue}
                  onChange={(event) => setNewDue(event.target.value)}
                  placeholder="Due (e.g. Today)"
                  className="flex-1 rounded-[12px] border border-transparent bg-white px-3 py-2 text-[13px] text-[#5B5B70] outline-none focus:border-[#B9B9FF] focus:ring-2 focus:ring-[#B9B9FF]/40"
                />
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      resetForm();
                      setIsAdding(false);
                    }}
                    className="rounded-[12px] border border-transparent px-3 py-2 text-[13px] font-medium text-[#6F6F80] hover:border-[#D5D5EF] hover:bg-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-[12px] bg-[#4A4AEE] px-4 py-2 text-[13px] font-semibold text-white hover:bg-[#3D3DD6] focus:outline-none focus:ring-2 focus:ring-[#B9B9FF] focus:ring-offset-1"
                  >
                    Add Task
                  </button>
                </div>
              </div>
            </motion.form>
          )}
          {tasks.map((task) => (
            <motion.article
              key={task.id}
              layout
              initial={{ opacity: 0, scale: 0.95, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -12, height: 0, marginTop: 0, marginBottom: 0, paddingTop: 0, paddingBottom: 0, borderWidth: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              style={{ overflow: 'hidden' }}
              role="button"
              tabIndex={0}
              onClick={() => onToggleTask?.(task.id)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  onToggleTask?.(task.id);
                }
              }}
              className={`group relative flex cursor-pointer items-start gap-4 rounded-[18px] w-full border border-transparent px-4 py-3 transition-colors hover:border-[#E3E3F5] hover:bg-[#F7F7FC] ${
                task.completed ? 'opacity-60' : ''
              }`}
            >
              {renderTaskIndicator(task.completed)}
              <div className="pr-10 flex-1">
                <p
                  className={`text-[15px] font-medium text-[#2F2F41] ${
                    task.completed ? 'line-through' : ''
                  }`}
                >
                  {task.label}
                </p>
                <p className="text-[13px] text-[#8B8BA0]">{task.dueLabel}</p>
              </div>
              <button
                type="button"
                aria-label={`Delete ${task.label}`}
                onClick={(event) => {
                  event.stopPropagation();
                  onRemoveTask?.(task.id);
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/0 p-2 text-[#9B9BB5] opacity-0 transition-colors transition-opacity group-hover:bg-white/80 group-hover:text-[#FF6B6B] group-hover:opacity-100"
              >
                <svg
                  aria-hidden
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 6h18" />
                  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  <path d="M10 11v6" />
                  <path d="M14 11v6" />
                  <path d="M5 6h14l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Z" />
                </svg>
              </button>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
