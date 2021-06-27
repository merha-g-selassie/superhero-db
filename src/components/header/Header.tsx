import { makeStyles } from '@material-ui/core';
import { motion } from 'framer-motion';
import React from 'react';

const useStyles = makeStyles(() => ({
  text: {
    fontFamily: 'Hall of Heroes regular',
    fontSize: '32px',
    textAlign: 'center',
  },
}));

export const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
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
        <h1 className={classes.text}>SuperHero DB</h1>
      </motion.div>
    </div>
  );
};
