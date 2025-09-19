'use client';

import { useCallback, useMemo, useState } from 'react';
import { Task, aiTaskSuggestions, initialTasks } from '@/data/patient';

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

  const removeTask = useCallback((taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  }, []);

  const generateAiTask = useCallback(async () => {
    setTasks((prev) => {
      const existingLabels = new Set(prev.map((task) => task.label));
      const suggestion = aiTaskSuggestions.find(
        (item) => !existingLabels.has(item.label),
      );

      const formatDate = (date: Date) =>
        new Intl.DateTimeFormat('en-US', {
          month: '2-digit',
          day: '2-digit',
          year: '2-digit',
        }).format(date);

      const fallback = {
        label: 'Check in with care manager about recovery progress',
        dueLabel: formatDate(new Date()),
      };

      const source = suggestion ?? fallback;

      const newTask: Task = {
        id: `task-${Date.now()}`,
        label: source.label,
        dueLabel: source.dueLabel,
        completed: false,
      };

      return [newTask, ...prev];
    });
  }, []);

  return {
    tasks: sortedTasks,
    setTasks,
    generateAiTask,
    toggleTask,
    removeTask,
  };
};
