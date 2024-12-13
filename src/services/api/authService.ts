import { axiosInstance } from './axiosInstance';

interface LoginResponse {
  access_token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

export const authService = {
  login: async (email: string, password: string): Promise<LoginResponse> => {
    const response = await axiosInstance.post('/token', 
      new URLSearchParams({
        username: email,
        password: password,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    
    localStorage.setItem('access_token', response.data.access_token);
    return response.data;
  },

  googleLogin: async (googleToken: string): Promise<LoginResponse> => {
    const response = await axiosInstance.post('/login/google', {
      token: googleToken
    });
    
    localStorage.setItem('access_token', response.data.access_token);
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('access_token');
  },

  verifyToken: async (): Promise<boolean> => {
    const token = localStorage.getItem('access_token');
    if (!token) return false;

    try {
      await axiosInstance.get('/chat/history');
      return true;
    } catch {
      authService.logout();
      return false;
    }
  }
}; 