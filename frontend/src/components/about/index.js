import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { AppLocation } from '../config';

export default {
  Dir: AppLocation('info/about'),
  get Sublink() {
    return (sublink) => this.Dir + '/' + sublink;
  },
  get Comp() {
    return () => {
      const contributors = ['ash', 'ivan', 'ren', 'zlec', 'zork'];

      return (
        <div>
          <h2>About</h2>
          <ul>
            {contributors.map((e) => (
              <li>
                <Link to={this.Sublink(e)}>{e}!</Link>
              </li>
            ))}
          </ul>
          <Switch>
            {contributors.map((e) => (
              <Route path={this.Sublink(e)}>
                <h3>{e}</h3>
              </Route>
            ))}
          </Switch>
        </div>
      );
    };
  },
};
