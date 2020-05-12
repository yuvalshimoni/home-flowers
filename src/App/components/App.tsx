import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from 'shared/theme';
import Order from 'order';

const Layout = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
`;

const App = () => (
  <ThemeProvider theme={{ ...theme }}>
    <GlobalStyle />
    <Layout>
      <h1>Home Flowers</h1>

      <Order />
    </Layout>
  </ThemeProvider>
);

export default App;
