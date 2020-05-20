import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import client from 'shared/services/apollo';
import { theme, GlobalStyle, themeMaterialConfig } from 'shared/theme';
import styled, { ThemeProvider } from 'styled-components';
import rtl from 'jss-rtl';
import { create } from 'jss';
import {
  ThemeProvider as MaterialThemeProvider,
  Theme,
  StylesProvider,
  jssPreset,
} from '@material-ui/core/styles';
import { AppContextProvider } from 'App/Context';
import MainRouter from './MainRouter';
import logo from 'shared/assets/logo.png';
import { useTestDoNotDeleteQuery } from 'App/graphql/test.generated';

const Layout = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  max-width: 1140px;
  padding: 0px 15px 100px 15px;
`;

const Logo = styled.img`
  position: absolute;
  margin: 0;
  left: 0;
  top: 25px;
  height: 70px;
  width: auto;

  @media (max-width: 500px) {
    left: 15px;
    height: 50px;
  }
`;

// Configure JSS for rtl
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const App = (): JSX.Element => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={{ ...theme }}>
        <StylesProvider jss={jss}>
          <GlobalStyle />

          <MaterialThemeProvider<Theme> theme={themeMaterialConfig}>
            <AppContextProvider>
              <Router>
                <Layout>
                  <Logo src={logo} alt="Home Flowers Logo" />

                  <MainRouter />
                </Layout>
              </Router>
            </AppContextProvider>
          </MaterialThemeProvider>
        </StylesProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
