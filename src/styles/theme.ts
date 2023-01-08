// eslint-disable-next-line import/named
import { createTheme, responsiveFontSizes, Theme } from '@mui/material/styles';
import { grey, teal, red } from '@mui/material/colors';

let theme: Theme = createTheme({
  palette: {
    mode: 'dark',
    // common: {},
    // primary: {},
    // secondary: {},
    // success: {},
    // info: {},
    // error: {},
    // background: {},
    // text: {},
  },
  typography: {
    fontFamily: [
      'Roboto',
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
    h2: {
      fontSize: '32px',
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    h3: {
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
            'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
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
  },
});

theme = responsiveFontSizes(theme);

export default theme;
