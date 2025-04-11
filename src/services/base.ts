// services/api.service.ts
import Constants from 'expo-constants';

const BASE_URL = Constants?.manifest?.extra?.apiBaseUrl || 'https://your-api.com';

interface RequestOptions extends RequestInit {
  headers?: Record<string, string>;
  token?: string;
}

export class ApiService {
  static async request<T>(endpoint: string, method: string, body?: any, options: RequestOptions = {}): Promise<T> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (options.token) {
      headers['Authorization'] = `Bearer ${options.token}`;
    }

    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
      ...options,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || 'API request failed');
    }

    return response.json();
  }

  static get<T>(endpoint: string, options?: RequestOptions) {
    return this.request<T>(endpoint, 'GET', undefined, options);
  }

  static post<T>(endpoint: string, body: any, options?: RequestOptions) {
    return this.request<T>(endpoint, 'POST', body, options);
  }

  static put<T>(endpoint: string, body: any, options?: RequestOptions) {
    return this.request<T>(endpoint, 'PUT', body, options);
  }

  static delete<T>(endpoint: string, options?: RequestOptions) {
    return this.request<T>(endpoint, 'DELETE', undefined, options);
  }
}
