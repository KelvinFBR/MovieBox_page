import axios, { AxiosInstance, AxiosResponse } from "axios";

export class MovieService {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: 'https://moviesdatabase.p.rapidapi.com/',
      headers: {
        'X-RapidAPI-Key': '8f6e6e389fmsh4c6f51b67c2627cp17601ajsn7191aad9e112',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      },
      timeout: 5000, 
    });
  }

  async getTitleTypes<T>(endpoint: string, params = {}): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.instance.get(endpoint, { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  
  async searchByFilter<T>(endpoint: string, params = {}): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.instance.get(endpoint, { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

}