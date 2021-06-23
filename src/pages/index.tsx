import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import { HeroCardList } from '../components/HeroCardList';
import { SuperHeroService } from '../services/SuperHeroService';
import { CustomError } from '../types/CustomError';
import { SuperHero } from '../types/SuperHero';

interface Props {
  response: SuperHero[] | CustomError;
}

const IndexPage: NextPage<Props> = ({ response }) => {
  console.log(response);

  return Array.isArray(response) ? (
    <div>
      <HeroCardList heroes={response} />
    </div>
  ) : (
    <div>Error</div>
  );
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const superHeroService = new SuperHeroService();
  const response = await superHeroService.getAllSuperHeroes();
  return {
    props: {
      response: response,
    },
  };
};
