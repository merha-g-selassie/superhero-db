import { createStyles, IconButton, makeStyles, Theme } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useRouter } from 'next/router';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginRight: theme.spacing(2),
    },
    menuButton: {
      marginRight: theme.spacing(5),
    },
  })
);

export const BackButton: React.FC = () => {
  const classes = useStyles();
  const router = useRouter();

  const handleClick = (): void => {
    router.back();
  };

  return (
    <div className={classes.root}>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        onClick={handleClick}
      >
        <ArrowBackIcon fontSize="large" />
      </IconButton>
    </div>
  );
};
