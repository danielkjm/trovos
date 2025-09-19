'use client';

import { useCallback, useMemo, useState } from 'react';
import { Task, initialTasks } from '@/data/patient';

export const useTaskManager = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const sortedTasks = useMemo(() => {
    return [...tasks].sort((a, b) => {
      if (a.completed && !b.completed) return 1;
      if (!a.completed && b.completed) return -1;
      return 0;
    });
  }, [tasks]);

  const toggleTask = useCallback((taskId: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  }, []);

  const generateAiTasks = useCallback(async () => {
    // Placeholder for AI-generated tasks; ready for integration with server/LLM
    setTasks(initialTasks);
  }, []);

  return {
    tasks: sortedTasks,
    setTasks,
    generateAiTasks,
    toggleTask,
  };
};
