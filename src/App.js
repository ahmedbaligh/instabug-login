import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import './stylesheets/App.scss';
import Login from './components/Login';

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
            Welcome
          </Route>

          <Route path="/404">Error 404</Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
