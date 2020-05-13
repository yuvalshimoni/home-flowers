import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from 'shared/theme';
import { AppContextProvider } from 'App/Context';
import MainRouter from './MainRouter';

const Layout = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
`;

const App = (): JSX.Element => {
  return (
    <AppContextProvider>
      <Router>
        <ThemeProvider theme={{ ...theme }}>
          <GlobalStyle />
          <Layout>
            <h1>Home Flowers</h1>

            <MainRouter />
          </Layout>
        </ThemeProvider>
      </Router>
    </AppContextProvider>
  );
};

export default App;
