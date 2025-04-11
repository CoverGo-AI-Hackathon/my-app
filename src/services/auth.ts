import { ApiService } from "./base"; 


const login = async () => {
  try {
    const data = await ApiService.post<{ token: string }>('/auth/login', {
      email: 'demo@gmail.com',
      password: '123456',
    });
    console.log('Token:', data.token);
  } catch (error: any) {
    console.error('Login error:', error.message);
  }
};
