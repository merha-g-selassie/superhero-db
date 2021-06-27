import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import { Container } from '../components/Container';
import { SuperHeroService } from '../services/SuperHeroService';
import { CustomError } from '../types/CustomError';
import { SuperHero } from '../types/SuperHero';

interface Props {
  response: SuperHero[] | CustomError;
}

const IndexPage: NextPage<Props> = ({ response }) => {
  return <Container response={response} />;
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const superHeroService = new SuperHeroService();
  const response = await superHeroService.getAllSuperHeroes();
  // { code: 404, message: 'Ooops' }
  return {
    props: {
      response: response,
    },
  };
};
