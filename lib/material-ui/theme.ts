import { ThemeOptions, createTheme } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgba(1,255,123,0.75)',
    },
    secondary: {
      main: 'rgba(241,56,56,0.75)',
    },
    success: {
      main: '#00ff11',
    },
  },
  spacing: 5,
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: 'Roboto',
  },
});
