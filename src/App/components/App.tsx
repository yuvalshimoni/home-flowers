import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../shared/theme';

const App = () => (
  <ThemeProvider theme={{ ...theme }}>
    <h1>Home Flowers</h1>
  </ThemeProvider>
);

export default App; 
