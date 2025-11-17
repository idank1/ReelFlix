import { Rail, ApiResponse } from '../../types';
import { httpClient } from './client';

/**
 * Rails API service
 */
class RailsApi {
  /**
   * Get all rails
   */
  async getRails(): Promise<ApiResponse<Rail[]>> {
    return httpClient.get<Rail[]>('/rails');
  }
}

export const railsApi = new RailsApi();

