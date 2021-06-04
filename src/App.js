import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import './stylesheets/App.scss';
import { Login, Welcome, Error404 } from './components';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Redirect exact from="/" to="/login" />

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/welcome">
            <Welcome />
          </Route>

          <Route path="/404">
            <Error404 />
          </Route>
          <Redirect exact from="*" to="/404" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
