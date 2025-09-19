import { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { initialTasks, Task } from '@/data/patient';

type TaskListProps = {
  tasks?: Task[];
  onGenerateTask?: () => void;
  onToggleTask?: (id: string) => void;
  onRemoveTask?: (id: string) => void;
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

  return <span className="h-5 w-6 rounded-full border border-[#B4B4C8]" />;
};

export const TaskList: FC<TaskListProps> = ({
  tasks = initialTasks,
  onGenerateTask,
  onToggleTask,
  onRemoveTask,
}) => {
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
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#292949] text-white"
        >
          <span className="text-xl leading-none">+</span>
        </button>
      </header>
      <motion.div layout className="space-y-3">
        <AnimatePresence initial={false} mode="popLayout">
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
              <div className="pr-10 w-60">
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
