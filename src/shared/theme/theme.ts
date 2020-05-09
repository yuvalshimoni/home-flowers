import {} from 'styled-components';

import colors from './colors';
import sizes from './sizes';

const theme = {
  colors,
  sizes,
};

declare module 'styled-components' {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}

export default theme;
