import { Divider, Grid, useMediaQuery } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { SuperHero } from '../types/SuperHero';
import { PowerStatsRadarChart } from './PowerStatsRadarChart';

interface HeroDetailsProps {
  superHero: SuperHero | null;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    mobileRoot: {
      margin: 16,
      width: 'auto',
    },
    media: {
      height: 300,
    },
    cover: {
      width: 260,
    },
  })
);

export const HeroDetails: React.FC<HeroDetailsProps> = ({ superHero }) => {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.up('sm'));
  const matchesMd = useMediaQuery(theme.breakpoints.up('md'));
  const classes = useStyles();
  return superHero ? (
    <div>
      {matchesSm ? (
        <Card className={classes.root}>
          <CardMedia className={classes.cover} image={superHero.images.lg} title={superHero.name} />
          <CardContent>
            <Grid
              container
              direction={matchesMd ? 'row' : 'column'}
              justify="space-evenly"
              alignItems={matchesMd ? 'center' : 'flex-start'}
            >
              <Grid item xs={matchesMd ? 6 : 12}>
                <Typography component="h5" variant="h5">
                  {superHero.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Civil name: {superHero.biography.fullName}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Race: {superHero.appearance.race}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Occupation: {superHero.work.occupation}
                </Typography>
              </Grid>
              <Grid container item justify="center" xs={matchesMd ? 6 : 12}>
                <PowerStatsRadarChart stats={superHero.powerstats} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ) : (
        <Card className={classes.mobileRoot}>
          <CardMedia className={classes.media} image={superHero.images.lg} title={superHero.name} />
          <CardContent>
            <Typography variant="h4">{superHero.name}</Typography>
            <Typography variant="h5" color="textSecondary">
              Civil name: {superHero.biography.fullName}
            </Typography>
            <Typography variant="h5" color="textSecondary">
              Race: {superHero.appearance.race}
            </Typography>
            <Typography variant="h5" color="textSecondary">
              Occupation: {superHero.work.occupation}
            </Typography>
          </CardContent>
          <Divider style={{ width: '70%', margin: '0 auto' }} />
          <Grid container item justify="center">
            <PowerStatsRadarChart stats={superHero.powerstats} />
          </Grid>
        </Card>
      )}
    </div>
  ) : (
    <div>No hero found</div>
  );
};
