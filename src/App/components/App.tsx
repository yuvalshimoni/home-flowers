import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { theme, GlobalStyle } from 'shared/theme';
import styled, { ThemeProvider } from 'styled-components';

import rtl from 'jss-rtl';
import { create } from 'jss';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';

import { createMuiTheme, ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles';

import { AppContextProvider } from 'App/Context';

import MainRouter from './MainRouter';

const Layout = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
`;

const themeMaterial = createMuiTheme({
  direction: 'rtl',
});

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const App = (): JSX.Element => {
  return (
    <StylesProvider jss={jss}>
      <MaterialThemeProvider theme={themeMaterial}>
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
      </MaterialThemeProvider>
    </StylesProvider>
  );
};

export default App;
