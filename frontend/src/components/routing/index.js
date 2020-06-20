import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from '../navigation';
import Homepage from '../homepage';
import Contact from '../contact';
import About from '../about';

export default () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={Homepage.Dir} component={Homepage.Comp} />
        <Route path={About.Dir} component={About.Comp} />
        <Route path={Contact.Dir} component={Contact.Comp} />
      </Switch>
    </Router>
  );
};
