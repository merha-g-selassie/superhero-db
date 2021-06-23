import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { SuperHero } from '../types/SuperHero';

interface HeroCardProps {
  hero: SuperHero;
}

const useStyles = makeStyles({
  root: {
    width: 200,
  },
  media: {
    height: 140,
  },
  contentRoot: {
    padding: '3px 10px',
  },
});

export const HeroCard: React.FC<HeroCardProps> = ({ hero }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={hero.images.md} title={hero.name} />
        <CardContent className={classes.contentRoot}>
          <Typography align="left" gutterBottom variant="h6" noWrap>
            {hero.name}
          </Typography>
          <Typography align="left" gutterBottom variant="subtitle1" noWrap>
            {hero.biography.fullName ? hero.biography.fullName : 'Unknown identity'}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
