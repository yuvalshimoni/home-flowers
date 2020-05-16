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
  width: 100%;
  margin: 0 auto;
  max-width: 1140px;
`;

const Logo = styled.h1`
  top: 0;
  left: 0;
  position: absolute;
  font-size: ${({ theme }) => theme.sizes.xxl}px;
`;

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const App = (): JSX.Element => {
  return (
    <StylesProvider jss={jss}>
      <MaterialThemeProvider<Theme> theme={themeMaterialConfig}>
        <AppContextProvider>
          <Router>
            <ThemeProvider theme={{ ...theme }}>
              <GlobalStyle />
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
