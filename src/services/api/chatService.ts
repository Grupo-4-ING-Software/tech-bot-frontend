import { axiosInstance } from './axiosInstance';
import { DiagramNode } from '../../types/diagram';

export interface ChatHistory {
  id: string;
  user_id: string;
  prompt: string;
  response: {
    data: {
      id: string;
      title: string;
      description: string;
      resources: Array<{
        title: string;
        url: string;
        type: string;
      }>;
      children: DiagramNode[];
    };
  };
  created_at: string;
}

export const chatService = {
  getChatHistory: async (): Promise<ChatHistory[]> => {
    const response = await axiosInstance.get('/chat/history');
    return response.data;
  },

  getChat: async (chatId: string): Promise<ChatHistory> => {
    const response = await axiosInstance.get(`/chat/${chatId}`);
    return response.data;
  },

  deleteChat: async (chatId: string): Promise<void> => {
    await axiosInstance.delete(`/chat/${chatId}`);
  },

  deleteAllChats: async (): Promise<void> => {
    await axiosInstance.delete('/chat/history/all');
  },

  generateChat: async (prompt: string): Promise<ChatHistory> => {
    const response = await axiosInstance.post('/chat', { prompt });
    return response.data;
  }
}; 