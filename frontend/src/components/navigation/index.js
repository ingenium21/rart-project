import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoImage from '../../logo.png';
import ThemeStore from '../../themes/store';
import { ThemeList } from '../../themes/themes';
import About from '../about';
import { Toggle } from '../batteries/toggle';
import Contact from '../contact';
import { darken } from 'polished';

const Navbar = styled.nav`
  display: flex;
  align-items: center;

  padding: ${({ theme }) => theme.sizes.s1} 0;

  background-color: ${({ theme }) => theme.colors.navbg};
  transition: 0.5s;
`;

const SubMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  min-width: 120px;

  background-color: ${({ theme }) => darken(0.03, theme.colors.navbg)};
`;

const Navlink = styled.div`
  margin: 0 ${({ theme }) => theme.sizes.m};
  padding: ${({ theme }) => theme.sizes.m} 0;

  position: relative;

  ${SubMenu} {
    display: none;
  }

  &:hover ${SubMenu} {
    display: block;
  }
`;

const List = styled.ul``;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: ${(props) => props.theme.sizes.l1};

  &:hover {
    -webkit-transition: 0.4s;
    transition: 0.4s;

    color: green;
  }
`;

const ListItem = styled.li`
  width: 100%;
  text-align: center;
  padding: ${(props) => props.theme.sizes.s1} 0;

  ${StyledLink} {
    font-size: ${(props) => props.theme.sizes.m};
  }
`;

const Logo = styled.h1`
  margin: 0 ${({ theme }) => theme.sizes.m};
`;

const StyledToggle = styled(Toggle)`
  margin-left: auto;
  margin-right: ${({ theme }) => theme.sizes.m};
`;

const NewLink = ({ to, text, children }) => (
  <Navlink>
    <StyledLink to={to}>{text}</StyledLink>
    {children && <SubMenu>{children}</SubMenu>}
  </Navlink>
);

export default () => {
  const toggleTheme = () => {
    const themeAccess = ThemeStore.Accessor.theme;
    const theme = ThemeStore.Store.get(themeAccess);
    const newTheme =
      theme === ThemeList.light ? ThemeList.dark : ThemeList.light;
    ThemeStore.Store.set(themeAccess, newTheme);
    localStorage.setItem('theme', newTheme);
  };
  const initialTheme =
    ThemeStore.Store.get(ThemeStore.Accessor.theme) || ThemeList.light;

  const contributors = ['ash', 'ivan', 'ren', 'zlec', 'zork'];

  return (
    <Navbar>
      <Logo>
        <img src={LogoImage} alt="L O G O" width="48px" height="48px" />
      </Logo>
      <NewLink to={About.Dir} text={'About Us'}>
        <List>
          {contributors.map((e, i) => (
            <ListItem key={`${i}`}>
              <StyledLink to={About.Sublink(e)}>{e}!</StyledLink>
            </ListItem>
          ))}
        </List>
      </NewLink>
      <NewLink to={Contact.Dir} text={'Contact'} />
      <StyledToggle
        onToggle={toggleTheme}
        toggleSize={40}
        isChecked={initialTheme === 'dark'}
      />
    </Navbar>
  );
};
