import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Navbar from '../navigation';
import Homepage from '../homepage';
import Contact from '../contact';
import About from '../about';

export default () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={Homepage.link} component={Homepage.comp} />
        <Route path={About.link} component={About.comp} />
        <Route path={Contact.link} component={Contact.comp} />
      </Switch>
      <Link to={About.link}>About!</Link>
      <Link to={Contact.link}>Contact!</Link>
    </Router>
  );
};
