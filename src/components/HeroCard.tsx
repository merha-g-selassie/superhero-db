import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { SuperHero } from '../types/SuperHero';

interface HeroCardProps {
  hero: SuperHero;
}

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  media: {
    height: 250,
  },
  contentRoot: {
    padding: '3px 10px',
  },
});

export const HeroCard: React.FC<HeroCardProps> = ({ hero }) => {
  const classes = useStyles();
  return (
    <motion.div
      whileHover={{
        position: 'relative',
        scale: 1.2,
        zIndex: 1,
        // background: 'white',
        transition: {
          duration: 0.2,
        },
      }}
    >
      <Link href={`/hero/${hero.id}`}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image={hero.images.sm} title={hero.name} />
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
      </Link>
    </motion.div>
  );
};
