import { Appearance } from './Appearance';
import { Biography } from './Biography';
import { Connections } from './Connections';
import { Images } from './Images';
import { Powerstats } from './Powerstats';
import { Work } from './Work';

export interface SuperHero {
  id: number;
  name: string;
  slug: string;
  powerstats: Powerstats;
  appearance: Appearance;
  biography: Biography;
  work: Work;
  connections: Connections;
  images: Images;
}
