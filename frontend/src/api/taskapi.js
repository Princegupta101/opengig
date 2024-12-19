import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

export const taskApi = {
  async getAllTasks() {
    const response = await axios.get(`${BASE_URL}/tasks`);
    return response.data;
  },

  async createTask(taskData) {
    const response = await axios.post(`${BASE_URL}/tasks`, taskData);
    return response.data;
  },

  async updateTask(taskId, taskData) {
    const response = await axios.put(`${BASE_URL}/tasks/${taskId}`, taskData);
    return response.data;
  }
};