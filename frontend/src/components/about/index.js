import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
          <Switch>
            {contributors.map((e, i) => (
              <Route key={`${i}`} path={this.Sublink(e)}>
                <h3>{e}</h3>
              </Route>
            ))}
          </Switch>
        </div>
      );
    };
  },
};
