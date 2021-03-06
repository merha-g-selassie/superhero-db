import { Container, Grid } from '@material-ui/core';
import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { BackButton } from '../../components/BackButton';
import { HeroDetails } from '../../components/HeroDetails';
import Progress from '../../components/progress/Progress';
import { SuperHeroService } from '../../services/SuperHeroService';
import { CustomError } from '../../types/CustomError';
import { SuperHero } from '../../types/SuperHero';
import { isInstanceOfError } from '../../utils/utils';
import ErrorMessage from '../../components/ErrorMessage';

const HeroPage: NextPage = () => {
  const [superHero, setSuperHero] = useState<SuperHero | null>(null);
  const [error, setError] = useState<CustomError | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const router = useRouter();
  const intId = typeof router.query.id === 'string' ? parseInt(router.query.id) : -1;

  useEffect(() => {
    const getSuperHero = async (): Promise<void> => {
      const superHeroService = new SuperHeroService();
      const res = await superHeroService.getSuperHeroById(intId);

      if (!isInstanceOfError(res)) {
        setSuperHero(res as SuperHero);
      } else {
        setError(res as CustomError);
      }
      setIsLoading(false);
    };

    if (intId > 0) {
      getSuperHero();
    }
  }, [intId]);

  return (
    <Container maxWidth="lg">
      {isLoading ? (
        <Progress isCentered />
      ) : (
        <Grid container direction="column" justify="flex-start" alignItems="center">
          <Grid item>
            <Grid container direction="row" alignItems="center" justify="flex-start">
              <Grid item sm={4} xs={2}>
                <BackButton />
              </Grid>
              <Grid item sm={8} xs={10}>
                <h1>{superHero ? superHero.name : ''}</h1>
              </Grid>
            </Grid>
            {!error ? (
              <HeroDetails superHero={superHero} />
            ) : (
              <div>
                <ErrorMessage error={error} />
              </div>
            )}
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default HeroPage;
