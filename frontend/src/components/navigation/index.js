import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ThemeStore from '../../themes/store';
import About from '../about';
import { Toggle } from '../batteries/toggle';
import Contact from '../contact';
import LogoImage from '../../logo.png';

const Navbar = styled.nav`
  display: flex;
  align-items: center;

  padding: ${({ theme }) => theme.sizes.s1} 0;
`;

const Navlink = styled.div`
  margin: 0 ${({ theme }) => theme.sizes.m};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: ${(props) => props.theme.sizes.l1};

  &:hover {
    -webkit-transition: 0.4s;
    transition: 0.4s;

    color: green;
  }
`;

const Logo = styled.h1`
  margin: 0 ${({ theme }) => theme.sizes.m};
`;

const StyledToggle = styled(Toggle)`
  margin-left: auto;
  margin-right: ${({ theme }) => theme.sizes.m};
`;

const NewLink = (to, text, submenu) => (
  <Navlink>
    <StyledLink to={to}>{text}</StyledLink>
    {submenu}
  </Navlink>
);

export default () => {
  const toggleTheme = () => {
    const themeAccess = ThemeStore.Accessor.theme;
    const theme = ThemeStore.Store.get(themeAccess);
    theme === 'light'
      ? ThemeStore.Store.set(themeAccess, 'dark')
      : ThemeStore.Store.set(themeAccess, 'light');
  };

  return (
    <Navbar>
      <Logo>
        <img src={LogoImage} alt="L O G O" width="48px" height="48px" />
      </Logo>
      {NewLink(About.Dir, 'About Us')}
      {NewLink(Contact.Dir, 'Contact')}
      <StyledToggle onToggle={toggleTheme} toggleSize={40} />
    </Navbar>
  );
};
