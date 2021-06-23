import { API_BASE_URL } from '../constants';
import { SuperHero } from '../types/SuperHero';
import HttpClient from './HttpClient';

export class SuperHeroApi extends HttpClient {
  private static instance: SuperHeroApi;

  private constructor() {
    super(API_BASE_URL);
  }

  public static getInstance(): SuperHeroApi {
    if (!this.instance) {
      this.instance = new SuperHeroApi();
    }

    return this.instance;
  }

  public getSuperHeroes = async (): Promise<SuperHero[]> => {
    const res = await this.instance.get<SuperHero[]>('/all.json');
    return res.data;
  };
}
