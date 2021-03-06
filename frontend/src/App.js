import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Pages from './components/routing';
import { GlobalStyle } from './themes/global';
import { darkTheme, lightTheme } from './themes/themes';
import ThemeStore from './themes/store';
import styled, { css } from 'styled-components';
import { ThemeList } from './themes/themes';

const Page = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    transition: 0.5s;
    min-height: 100vh;
  `}
`;

export default () => {
  const [theme] = ThemeStore.Store.paths(ThemeStore.Accessor.theme).link(
    useState()
  );
  const themeMode = theme === ThemeList.light ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Page>
        <Pages />
      </Page>
    </ThemeProvider>
  );
};
