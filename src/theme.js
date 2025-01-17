import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#64ffda',
    },
    background: {
      paper: '#0a192f',
      default: '#0a192f',
    },
    text: {
      primary: '#ccd6f6',
      secondary: '#8892b0',
    },
    divider: 'rgba(100, 255, 218, 0.1)',
  },
  typography: {
    fontFamily: 'Calibre, Inter, "San Francisco", "SF Pro Text", -apple-system, system-ui, sans-serif',
  },
});

export default theme;
