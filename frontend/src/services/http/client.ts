import { ApiResponse } from '../../types';

// For simulator/emulator: use localhost
// For physical device: change to your computer's IP (e.g., 'http://10.100.102.37:3000/api')
// Find your IP with: ipconfig getifaddr en0
const API_BASE_URL = __DEV__
  ? 'http://10.100.102.37:3000/api' // Using your computer's IP for device testing
  : 'https://your-api-url.com/api'; // Update for production

/**
 * Base HTTP client for API requests
 */
class HttpClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  /**
   * Perform a GET request
   */
  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  /**
   * Perform a PATCH request
   */
  async patch<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }
}

export const httpClient = new HttpClient(API_BASE_URL);

