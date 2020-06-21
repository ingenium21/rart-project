import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Pages from './components/routing';
import { GlobalStyle } from './themes/global';
import { darkTheme, lightTheme } from './themes/themes';
import ThemeStore from './themes/store';
import styled from 'styled-components';

const Page = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  transition: 0.5s;
`;

export default () => {
  const [theme] = ThemeStore.Store.paths(ThemeStore.Accessor.theme).link(
    useState()
  );
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Page>
        <Pages />
      </Page>
    </ThemeProvider>
  );
};
