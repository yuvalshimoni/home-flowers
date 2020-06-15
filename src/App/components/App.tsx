import React, { useCallback } from 'react';
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
import Footer from './Footer';
import logo from 'shared/assets/logo.png';

const Layout = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  max-width: 1140px;
  padding: 0px 15px 100px 15px;
  min-height: 100vh;
`;

const Logo = styled.img`
  position: absolute;
  margin: 0;
  left: 0;
  top: 25px;
  height: 70px;
  width: auto;
  cursor: pointer;
  z-index: 55;

  @media (max-width: 500px) {
    left: 15px;
    height: 50px;
  }
`;

// Configure JSS for rtl
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const App = (): JSX.Element => {
  const onClickLogo = useCallback(() => {
    document.location.href = '/';
  }, []);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={{ ...theme }}>
        <StylesProvider jss={jss}>
          <GlobalStyle />

          <MaterialThemeProvider<Theme> theme={themeMaterialConfig}>
            <AppContextProvider>
              <Layout>
                <Logo src={logo} alt="Home Flowers Logo" onClick={onClickLogo} />

                <MainRouter />
              </Layout>

              <Footer />
            </AppContextProvider>
          </MaterialThemeProvider>
        </StylesProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
