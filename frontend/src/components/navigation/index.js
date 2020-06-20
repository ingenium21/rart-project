import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ThemeStore from '../../themes/store';
import About from '../about';
import { Toggle } from '../batteries/toggle';
import Contact from '../contact';

const Navbar = styled.nav`
  display: flex;
  align-items: center;
`;

const Navlink = styled.div`
  margin: 0 16px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover {
    color: green;
  }
`;

const Logo = styled.h1`
  margin: 0 16px;
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
      <Logo>L O G O</Logo>
      {NewLink(About.Dir, 'About Us')}
      {NewLink(Contact.Dir, 'Contact')}
      <Toggle onToggle={toggleTheme} toggleSize={40} />
    </Navbar>
  );
};
