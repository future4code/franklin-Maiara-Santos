import { createTheme } from '@mui/material/styles';
import { primaryColor, neutralColor } from './colors';

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      constrastText: "white"
    },
    text: {
      primary: neutralColor,
    },
  },
});

export default theme;