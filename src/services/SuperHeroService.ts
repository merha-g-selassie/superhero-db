import { SuperHeroApi } from '../api/SuperHeroApi';
import { CustomError } from '../types/CustomError';
import { SuperHero } from '../types/SuperHero';
import { requestError } from '../utils/handleRequestError';

export class SuperHeroService {
  private superHeroApi = SuperHeroApi.getInstance();

  public async getAllSuperHeroes(): Promise<SuperHero[] | CustomError> {
    try {
      const superHeroes = await this.superHeroApi.getSuperHeroes();
      return superHeroes;
    } catch (err) {
      return requestError(err);
    }
  }

  public getSuperHero(id: number, superHeroes: SuperHero[]): SuperHero | null {
    return superHeroes.find((hero) => hero.id === id) || null;
  }

  public async getSuperHeroById(id: number): Promise<SuperHero | CustomError> {
    try {
      const superHero = await this.superHeroApi.getSuperHero(id);
      return superHero;
    } catch (err) {
      return requestError(err);
    }
  }
}
