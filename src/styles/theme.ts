// eslint-disable-next-line import/named
import { createTheme, responsiveFontSizes, Theme } from '@mui/material/styles';
import { grey, teal, red } from '@mui/material/colors';

let theme: Theme = createTheme({
  palette: {
    mode: 'dark',
    common: {
      white: '#FFF',
      black: '#000',
    },
    primary: {
      main: '#2B1200',
    },
    secondary: {
      main: '#8D1E00',
    },
    success: {
      main: '#EAB809',
    },
    info: {
      main: '#CF5C00',
    },
    error: {
      main: '#FF0000',
    },
    background: {
      paper: '#CF5C00',
    },
    text: {
      primary: '#FFF',
      secondary: '#EAB809',
    },
  },
  typography: {
    fontFamily: [
      'Russo One',
      'sans-serif',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Helvetica Neue',
      'Arial',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
    ].join(','),
    fontSize: 14,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    htmlFontSize: 16,
    h2: {
      fontFamily: 'Russo One',
      fontSize: '42px',
      fontWeight: 700,
      textTransform: 'uppercase',
      color: 'transparent',
      letterSpacing: '4px',
      userSelect: 'none',
      WebkitTextStroke: '0.5px #EAB809',

      '&:hover': {
        transition: 'all linear 0.2s',
        color: '#EAB809',
        WebkitTextStroke: '1px #EAB809',
      },
    },
    h3: {
      fontFamily: 'Russo One',
      fontSize: '20px',
      fontWeight: 700,
      textTransform: 'uppercase',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            'linear-gradient(-45deg, #304E30, #5B7C70, #172A10, #796E20)',
          backgroundSize: '400% 400%',
          animation: 'gradient 15s ease infinite',
          height: '100vh',

          '@keyframes gradient': {
            '0%': {
              backgroundPosition: '0% 50%',
            },
            '50%': {
              backgroundPosition: '100% 50%',
            },
            '100%': {
              backgroundPosition: '0% 50%',
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '&.MuiContainer-maxWidthXl': {
            maxWidth: 1440,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#8D1E00',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#555',
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
