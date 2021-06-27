import React from 'react';
import { CustomError } from '../types/CustomError';
import Image from 'next/Image';
import { Typography, useMediaQuery, useTheme } from '@material-ui/core';
interface ErrorMessageProps {
  error: CustomError;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  const { message } = error;
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down(640));
  //xs' | 'sm' | 'md' | 'lg' | 'xl'
  return (
    <>
      <Image
        src="/images/batman-server-error.png"
        alt="Error image"
        width={matchesMd ? 800 : 500}
        height={matchesMd ? 800 : 500}
      />
      <div style={{ padding: '0 20px' }}>
        <Typography variant="h5">{message}</Typography>
        <Typography variant="h6">Try refreshing the page.</Typography>
      </div>
    </>
  );
};

export default ErrorMessage;
