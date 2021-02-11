/* eslint-disable max-len */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Main from '../../containers/Main';
import Detail from '../../containers/Detail';
import Header from '../Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route
          exact path="/"
          component = {Main}
        />
        <Route
          exact path="/details/:id"
          component = {Detail}
        />
      </Switch>
    </Router>
  );
}
