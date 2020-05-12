import React, { useMemo } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from 'shared/theme';
import { useAppState } from 'App/hooks/useAppState';
import { AppContext, AppContextProvider } from 'App/context';
import MainRouter from './MainRouter';

const Layout = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
`;

const App = (): JSX.Element => {
  const { cart, cartDispatch, costumerDetails, setCostumerDetails } = useAppState();

  const context = useMemo(
    (): AppContext => ({
      state: {
        cart,
        cartDispatch,
        costumerDetails,
        setCostumerDetails,
      },
    }),
    [cart, costumerDetails],
  );

  return (
    <AppContextProvider value={context}>
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
