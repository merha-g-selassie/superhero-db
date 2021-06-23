import { SuperHeroApi } from '../api/SuperHeroApi';
import { CustomError } from '../types/CustomError';
import { SuperHero } from '../types/SuperHero';
import { requestError } from '../utils/handleRequestError';

export class SuperHeroService {
  private superHeroApi = SuperHeroApi.getInstance();

  public async getAllSuperHeroes(): Promise<SuperHero[] | CustomError> {
    console.log('asdfasdf');
    try {
      const superHeroes = await this.superHeroApi.getSuperHeroes();
      console.log(superHeroes);
      return superHeroes;
    } catch (err) {
      return requestError(err);
    }
  }
}
