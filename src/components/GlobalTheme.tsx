import { CssBaseline } from '@material-ui/core';
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default GlobalTheme;
