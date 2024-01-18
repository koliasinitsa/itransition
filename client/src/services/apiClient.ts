// src/services/apiclient.ts

import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000', // Замените на ваш адрес сервера
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerUser = async (userData: any) => {
  try {
    const response = await apiClient.post('/auth/register', userData);
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await apiClient.post('/auth/login', { email, password });
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export default apiClient;
