import { useState, useEffect } from 'react';

import { taskApi } from '../api/taskApi';

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    try {
      const data = await taskApi.getAllTasks();
      setTasks(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch tasks');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
    const interval = setInterval(fetchTasks, 1000);
    return () => clearInterval(interval);
  }, []);

  const addTask = async (name) => {
    try {
      await taskApi.createTask({ name });
      fetchTasks();
    } catch (err) {
      setError('Failed to create task');
    }
  };

  const updateTaskStatus = async (taskId, status) => {
    try {
      await taskApi.updateTask(taskId, { status });
      fetchTasks();
    } catch (err) {
      setError('Failed to update task');
    }
  };

  return { tasks, isLoading, error, addTask, updateTaskStatus };
};
