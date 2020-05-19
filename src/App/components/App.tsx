import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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

const Layout = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  max-width: 1140px;
  padding-bottom: 100px;

  @media (max-width: 500px) {
    padding-right: 15px;
    padding-left: 15px;
  }
`;

const Logo = styled.h1`
  position: absolute;
  margin: 0;
  left: 0;
  top: 25px;
  font-size: ${({ theme }) => theme.sizes.huge}px;

  @media (max-width: 500px) {
    left: 15px;
    font-size: ${({ theme }) => theme.sizes.md}px;
  }
`;

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const App = (): JSX.Element => {
  return (
    <StylesProvider jss={jss}>
      <GlobalStyle />

      <MaterialThemeProvider<Theme> theme={themeMaterialConfig}>
        <AppContextProvider>
          <Router>
            <ThemeProvider theme={{ ...theme }}>
              <Layout>
                <Logo>Home Flowers</Logo>

                <MainRouter />
              </Layout>
            </ThemeProvider>
          </Router>
        </AppContextProvider>
      </MaterialThemeProvider>
    </StylesProvider>
  );
};

export default App;
