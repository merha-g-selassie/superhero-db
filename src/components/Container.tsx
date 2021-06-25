import React from 'react';
import { CustomError } from '../types/CustomError';
import { SuperHero } from '../types/SuperHero';
import { HeroCardList } from './HeroCardList';

interface HeroCardListProps {
  response: SuperHero[] | CustomError;
}

export const Container: React.FC<HeroCardListProps> = ({ response }) => {
  const superHeroes = Array.isArray(response) ? response : [];

  return superHeroes?.length ? <HeroCardList heroes={superHeroes} /> : <div>Error. List empty</div>;
};
