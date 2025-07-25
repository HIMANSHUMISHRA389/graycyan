import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#9c27b0',
      light: '#ba68c8',
      dark: '#7b1fa2',
    },
    secondary: {
      main: '#03dac6',
    },
    background: {
      default: '#0d1117',
      paper: '#1a1a1a',
    },
    surface: {
      main: '#2d2d2d',
      light: '#363636',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#2d2d2d',
          borderRadius: 12,
          border: '1px solid #404040',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: '#2d2d2d',
          borderRadius: '12px !important',
          border: '1px solid #404040',
          '&:before': {
            display: 'none',
          },
          marginBottom: 16,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
        },
      },
    },
  },
});