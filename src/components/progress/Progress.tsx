import React from 'react';
import { Grid, CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  position: {
    minHeight: '50vh',
  },
});

export interface ProgressProps {
  isCentered?: boolean;
}

/**
 *
 * Copmonent displaying a loading indicator
 *
 * ```jsx
 * <div>
 *  <Progress isCentered />
 * </div>
 * ```
 */

const Progress: React.FC<ProgressProps> = ({ isCentered }) => {
  const classes = useStyles();
  return (
    <Grid
      className={isCentered ? classes.position : ''}
      container
      justify="center"
      alignItems="center"
    >
      <CircularProgress color="primary" />
    </Grid>
  );
};

export default Progress;
