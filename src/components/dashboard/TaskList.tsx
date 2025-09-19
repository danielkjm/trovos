import { FC } from 'react';
import { initialTasks, Task } from '@/data/patient';

type TaskListProps = {
  tasks?: Task[];
  onGenerate?: () => void;
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

export const TaskList: FC<TaskListProps> = ({ tasks = initialTasks, onGenerate }) => {
  return (
    <section className="flex h-full flex-col rounded-[32px] bg-white p-6 shadow-[0px_24px_60px_rgba(35,35,70,0.08)]">
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-[20px] font-semibold text-[#2F2F41]">Tasks</h2>
          <button
            type="button"
            onClick={onGenerate}
            className="mt-3 inline-flex items-center gap-2 rounded-[20px] bg-[#F2F2FA] px-3 py-2 text-[13px] font-medium text-[#4A4AEE]"
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
      <div className="space-y-4">
        {tasks.map((task, index) => (
          <article
            key={task.id}
            className={`flex items-start gap-4 border-b border-[#ECECF5] pb-4 ${index === tasks.length - 1 ? 'border-none pb-0' : ''}`}
          >
            {renderTaskIndicator(task.completed)}
            <div>
              <p className="text-[15px] font-medium text-[#2F2F41]">{task.label}</p>
              <p className="text-[13px] text-[#8B8BA0]">{task.dueLabel}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
