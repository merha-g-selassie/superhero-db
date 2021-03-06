import { Grid } from '@material-ui/core';
import React from 'react';
import { SuperHero } from '../types/SuperHero';
import { HeroCard } from './HeroCard';

interface HeroCardListProps {
  heroes: SuperHero[] | null;
}

export const HeroCardList: React.FC<HeroCardListProps> = ({ heroes }) => {
  return heroes?.length ? (
    <Grid container direction="row" spacing={4} justify="center">
      {heroes.map((hero: SuperHero) => (
        <Grid item key={hero.id}>
          <HeroCard hero={hero} />
        </Grid>
      ))}
    </Grid>
  ) : (
    <div>List empty</div>
  );
};
