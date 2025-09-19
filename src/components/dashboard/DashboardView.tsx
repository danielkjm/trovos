import { FC } from 'react';
import { TaskList } from './TaskList';
import { MedicationCard } from './MedicationCard';
import { FilesCard } from './FilesCard';
import { CalendarCard } from './CalendarCard';
import { ChatInput } from '@/components/chat/ChatInput';
import { CareTeamCard } from './CareTeamCard';
import { useTaskManager } from '@/hooks/useTaskManager';

export const DashboardView: FC = () => {
  const { tasks, generateAiTasks } = useTaskManager();

  return (
    <section className="flex flex-1 flex-col gap-8">
      <CareTeamCard />
      <div className="grid grid-cols-[320px_minmax(0,1fr)] gap-8">
        <TaskList tasks={tasks} onGenerate={generateAiTasks} />
        <div className="grid grid-cols-2 grid-rows-[minmax(0,260px)_minmax(0,1fr)] gap-6">
          <MedicationCard />
          <FilesCard />
          <div className="col-span-2">
            <CalendarCard />
          </div>
        </div>
      </div>
      <ChatInput maxWidthClass="max-w-[900px]" />
    </section>
  );
};
