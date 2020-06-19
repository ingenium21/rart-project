import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Navbar from '../navigation';
import { Dir as HomepageLink, Homepage } from '../homepage';
import { Dir as ContactLink, Contact } from '../contact';
import { Dir as AboutLink, About } from '../about';

export default () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={HomepageLink} component={Homepage} />
        <Route path={AboutLink} component={About} />
        <Route path={ContactLink} component={Contact} />
      </Switch>
      <Link to={AboutLink}>About!</Link>
      <Link to={ContactLink}>Contact!</Link>
    </Router>
  );
};
