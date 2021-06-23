import { Gender } from './Gender';

export interface Appearance {
  gender: Gender;
  race: null | string;
  height: string[];
  weight: string[];
  eyeColor: string;
  hairColor: string;
}
