import { createGlobalStyle } from 'styled-components';
import Reset from 'styled-reset';
import { css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ${Reset}

  ${({ theme }) => css`
    div,
    p,
    li,
    span {
      color: ${theme.colors.text};
      font-size: ${theme.sizes.m};
    }
    a {
      color: ${theme.colors.linktext};
      font-size: ${theme.sizes.m};
    }
  `}
`;
