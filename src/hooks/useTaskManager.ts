'use client';

import { useCallback, useState } from 'react';
import { Task, initialTasks } from '@/data/patient';

export const useTaskManager = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const generateAiTasks = useCallback(async () => {
    // Placeholder for AI-generated tasks; ready for integration with server/LLM
    setTasks(initialTasks);
  }, []);

  return {
    tasks,
    setTasks,
    generateAiTasks,
  };
};
