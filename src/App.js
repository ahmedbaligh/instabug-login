import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import logo from './assets/logo.svg';

const App = () => {
  return (
    <Router>
      <div>
        <div>
          <img src={logo} alt="" />

          <div>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/welcome">Welcome</Link>
              </li>
            </ul>
          </div>
        </div>

        <Switch>
          <Route exact path="/login">
            Login
          </Route>

          <Route exact path="/welcome">
            Welcome
          </Route>

          <Route path="*">Error 404</Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
