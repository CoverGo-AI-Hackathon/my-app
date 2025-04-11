import AsyncStorage from "@react-native-async-storage/async-storage";
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

export const info = async (token: string) => {
  try {
    const data = await ApiService.get<[{
      aboutMe: string
      displayName: string
      dob: string | null
      email: string
      gender: string
      money: number
      phone: string
      picture: string
    }]>('api/info', {
      token: token
    })
    if (data.length > 0) {
      console.log('User', data[0])
      return data[0]
    }
    return false
  } catch (error: any) {
    console.log('User error', error.message)
  } 
}