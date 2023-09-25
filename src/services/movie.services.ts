import axios, { AxiosInstance, AxiosResponse } from "axios";

export class MovieService {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
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