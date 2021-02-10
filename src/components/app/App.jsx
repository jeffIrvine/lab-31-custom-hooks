/* eslint-disable max-len */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Main from '../containers/main/Main';
import Detail from '../containers/detail/Detail';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact path="/"
          component = {Main}
        />
        <Route
          exact path="/detail/:id"
          component = {Detail}
        />
      </Switch>
    </Router>
  );
}
