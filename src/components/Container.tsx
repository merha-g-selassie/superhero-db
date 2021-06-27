import Grid from '@material-ui/core/Grid';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { CustomError } from '../types/CustomError';
import { SuperHero } from '../types/SuperHero';
import { isInstanceOfError } from '../utils/utils';
import ErrorMessage from './ErrorMessage';
import { HeroCardList } from './HeroCardList';
import { SearchBar } from './SearchBar';

interface ContainerProps {
  response: SuperHero[] | CustomError;
}

export const Container: React.FC<ContainerProps> = ({ response }) => {
  const [filteredHeroes, setFilteredHeroes] = useState<SuperHero[]>([]);
  const [name, setName] = useState('');

  useEffect(() => {
    const superHeroes = Array.isArray(response) ? response : [];
    const filtered = superHeroes.filter((superHero) =>
      superHero.name.toLowerCase().includes(name.toLowerCase())
    );

    setFilteredHeroes(filtered);
  }, [response, name]);

  return (
    <Grid container direction="column" alignItems="center" spacing={1}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { scale: 0.8, opacity: 0 },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.9,
            },
          },
        }}
      >
        <Grid item>
          <h1 style={{ textAlign: 'center' }}>SuperHero DB</h1>
        </Grid>
      </motion.div>
      {isInstanceOfError(response) ? (
        <Grid item>
          <ErrorMessage error={response as CustomError} />
        </Grid>
      ) : (
        <>
          <Grid item>
            <SearchBar setValue={setName} />
          </Grid>
          <Grid item>
            <HeroCardList heroes={filteredHeroes} />
          </Grid>
        </>
      )}
    </Grid>
  );
};
