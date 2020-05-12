import React, { useMemo } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from 'shared/theme';
import Order from 'order';
import { useAppState } from 'App/hooks/useAppState';
import { AppContext, AppContextProvider } from 'App/context';

const Layout = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
`;

const App = () => {
  const { cart, cartDispatch } = useAppState();
  const context = useMemo((): AppContext => ({
    state: {
      cart,
      cartDispatch,
    }
  }), [cart, cartDispatch]);

  return (
    <AppContextProvider value={context}>
      <Router>
        <ThemeProvider theme={{ ...theme }}>
          <GlobalStyle />
          <Layout>
            <h1>Home Flowers</h1>

            <Switch>
              <Route path="/check">
                <div>Check</div>
              </Route>
              {/* This route should be placed last because it matches every possible route */}
              <Route path="/">
                <Order />
              </Route>
            </Switch>
          </Layout>
        </ThemeProvider>
      </Router>
    </AppContextProvider>
  );
};

export default App;
