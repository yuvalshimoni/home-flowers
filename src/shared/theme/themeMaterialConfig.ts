import colors from './colors';
import sizes from './sizes';
import { createMuiTheme } from '@material-ui/core/styles';

const themeMaterialConfig = createMuiTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: colors.primary,
    },
  },
  typography: {
    button: {
      width: '100%',
      fontSize: sizes.xl,
      backgroundColor: colors.primary,
    },
  },
});

export default themeMaterialConfig;
