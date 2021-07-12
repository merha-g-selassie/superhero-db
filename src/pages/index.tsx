import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import { Container } from '../components/Container';
import { CustomError } from '../types/CustomError';
import { SuperHero } from '../types/SuperHero';
import { useQuery } from 'react-query';
import { SuperHeroApi } from '../api/SuperHeroApi';

interface Props {
  response: SuperHero[] | CustomError;
}

const IndexPage: NextPage<Props> = ({ response }) => {
  const { data, status } = useQuery('supes', SuperHeroApi.getInstance().getSuperHeroes, {
    initialData: response,
  });

  if (status === 'error') return <div>Error...</div>;
  if (status === 'loading') return <div>Loading...</div>;
  return <Container response={data as SuperHero[] | CustomError} />;
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const supApi = SuperHeroApi.getInstance();
  const response = await supApi.getSuperHeroes();

  return {
    props: {
      response: response,
    },
  };
};
