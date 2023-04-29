import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { red } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// const headerFont = "'Cinzel', serif";
const headerFont = "'Cormorant Garamond', serif";
const bodyFont = "'Montserrat', sans-serif";

declare module '@mui/material/styles' {
  interface Palette {
    light: Palette['primary'];
    reverse: Palette['primary'];
  }

  interface PaletteOptions {
    light: PaletteOptions['primary'];
    reverse: PaletteOptions['primary'];
  }
}

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: '#602F32',
      // main: '#675443',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#EFE3B8',
    },
    reverse: {
      main: '#ffffff',
      // contrastText: '#675443',
      contrastText: '#602F32',
    },
    light: {
      main: '#EFE3B8',
      contrastText: '#fff',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#602F32',
      secondary: '#EFE3B8',
    },
  },
  typography: {
    h1: {
      fontFamily: headerFont,
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
        lineHeight: '1.167',
      },
    },
    h2: {
      fontFamily: headerFont,
    },
    h3: {
      fontFamily: headerFont,
    },
    h4: {
      fontFamily: headerFont,
    },
    h5: {
      fontFamily: headerFont,
    },
    body1: {
      fontFamily: bodyFont,
    },
    body2: {
      fontFamily: bodyFont,
    },
    button: {
      fontFamily: bodyFont,
    },
  },
  shape: {
    borderRadius: 0,
  },
});

theme = responsiveFontSizes(theme);

export default theme;
