import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

export const Dir = '/app/info/about';

export const About = () => {
  const sublink = (sublink) => Dir + '/' + sublink;

  const contributors = ['ash', 'ivan', 'ren', 'zlec', 'zork'];

  return (
    <div>
      <h2>About</h2>
      <ul>
        {contributors.map((e) => (
          <li>
            <Link to={sublink(e)}>{e}!</Link>
          </li>
        ))}
      </ul>
      <Switch>
        {contributors.map((e) => (
          <Route path={sublink(e)}>
            <h3>{e}</h3>
          </Route>
        ))}
      </Switch>
    </div>
  );
};
