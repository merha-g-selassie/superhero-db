import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

export default abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
    });
  }

  private initializeInterceptors = (): void => {
    this.instance.interceptors.response.use(this.handleResponse, this.handleError);
  };

  private handleResponse = (response: AxiosResponse): AxiosResponse => response;

  private handleError = (error: AxiosError): Promise<never> => Promise.reject(error);
}
