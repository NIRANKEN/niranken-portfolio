import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Main } from '../Main';

export const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" component={Main} />
    </Switch>
  </Router>
);
