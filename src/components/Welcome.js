import React, { useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';

import '../stylesheets/Welcome.scss';
import auth from '../utils/auth';
import logo from '../assets/logo.svg';

const Welcome = () => {
  const history = useHistory();

  useEffect(() => {
    document.title = 'Welcome | Instabug';
  }, []);

  const onLogout = () => auth.logout(() => history.push(`/login`));

  return !auth.isAuthenticated() ? (
    <Redirect to={{ pathname: '/login', state: history.location.pathname }} />
  ) : (
    <div className="welcome">
      <header>
        <div className="wrapper">
          <a href="https://instabug.com/" target="blank" className="site-logo">
            <img src={logo} alt="Instabug logo" />
            Instabug
          </a>

          <button className="logout" onClick={onLogout}>
            Log Out
          </button>
        </div>
      </header>

      <div className="welcome-text">Welcome to Instabug, {auth.getUser()}!</div>
    </div>
  );
};

export default Welcome;
