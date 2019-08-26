import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#33d375',
      main: '#00c853',
      dark: '#008c3a',
      contrastText: '#fff',
    },
    secondary: {
      light: '#5381ff',
      main: '#2962ff',
      dark: '#1c44b2',
      contrastText: '#fff',
    },
    type: 'dark',
  },
});