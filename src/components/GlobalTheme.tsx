import { CssBaseline, Paper } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';

interface GlobalThemeProps {
  isDarkMode: boolean;
  children: React.ReactNode;
}

const GlobalTheme: React.FC<GlobalThemeProps> = ({ children, isDarkMode }) => {
  const theme = createMuiTheme({
    palette: {
      type: isDarkMode ? 'dark' : 'light',
      // primary: {
      //   main: '#581888',
      //   light: '#700DA5',
      //   dark: '#ffffff',
      // },
      // secondary: {
      //   main: '#102A43',
      //   light: '#486581',
      //   dark: '#0D33A5',
      // },
      //   info: {
      //     main: '#001A68',
      //     light: '#F9FAFB',
      //   },
      //   text: {
      //     primary: '#001A68',
      //     secondary: '#F9FAFB',
      //   },
      //   error: {
      //     main: '#CF1124',
      //   },
      // },
      // typography: {
      //   fontFamily: 'Open Sans',
      //   h1: {
      //     fontFamily: 'Lato',
      //     fontSize: '48px',
      //     fontWeight: 'normal',
      //     '@media (max-width:750px)': {
      //       fontSize: '24px',
      //       fontWeight: 'normal',
      //     },
      //   },
      //   h2: {
      //     fontSize: '30px',
      //     fontWeight: 'normal',
      //     '@media (max-width:750px)': {
      //       fontSize: '20px',
      //       fontWeight: 'normal',
      //     },
      //   },
      //   h3: {
      //     fontSize: '20px',
      //     fontWeight: 'bold',
      //     '@media (max-width:750px)': {
      //       fontSize: '15px',
      //       fontWeight: 'bold',
      //     },
      //   },
      //   h4: {
      //     fontSize: '18px',
      //     fontWeight: 'normal',
      //   },
      //   h5: {
      //     fontSize: '18px',
      //     fontWeight: 'normal',
      //   },
      //   subtitle1: {
      //     fontSize: '16px',
      //     fontWeight: 'normal',
      //     lineHeight: '1.3',
      //     '@media (max-width:750px)': {
      //       fontSize: '14px',
      //       fontWeight: 'normal',
      //       lineHeight: '1.3',
      //     },
      //   },
      //   subtitle2: {
      //     fontSize: '14px',
      //     fontWeight: 'normal',
      //     '@media (max-width:750px)': {
      //       fontSize: '12px',
      //       fontWeight: 'normal',
      //     },
      //   },
      //   caption: {
      //     fontSize: '12px',
      //     fontWeight: 'normal',
      //   },
      // },
      // overrides: {
      //   MuiButton: {
      //     root: {
      //       borderRadius: '2px',
      //     },
      //   },
      //   MuiOutlinedInput: {
      //     root: {
      //       borderRadius: 0,
      //     },
      //   },
      //   MuiCheckbox: {
      //     root: {
      //       color: '#0D33A5 !important',
      //       borderRadius: '2px',
      //     },
      //   },
      //   MuiCard: {
      //     root: {
      //       borderRadius: 0,
      //       borderColor: '#E4E4E4',
      //       boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
      //     },
      //   },
      //   MuiInputLabel: {
      //     root: {
      //       color: '#627D98 ',
      //     },
      //   },
      //   MuiPopover: {
      //     root: {
      //       maxHeight: 'calc(100% - 96px)',
      //     },
      //   },
    },
    overrides: {
      MuiCard: {
        root: {
          borderRadius: 0,
          borderColor: '#E4E4E4',
          boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
        },
      },
    },
  });

  theme.typography.h2 = {
    fontSize: '30px',
    fontWeight: 'normal',
    '@media (max-width:750px)': {
      fontSize: '20px',
      fontWeight: 'normal',
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper>{children}</Paper>
    </ThemeProvider>
  );
};

export default GlobalTheme;
