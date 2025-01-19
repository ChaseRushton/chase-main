import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#64ffda',
    },
    background: {
      paper: '#000000',
      default: '#000000',
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
