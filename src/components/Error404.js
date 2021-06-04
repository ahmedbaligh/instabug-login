import React, { useEffect } from 'react';

import '../stylesheets/Error404.scss';
import { illustration404 } from '../assets';

const Error404 = () => {
  useEffect(() => {
    document.title =
      'User Feedback & Bug reporting tool for iOS & Android mobile apps';
  }, []);

  return (
    <div className="error-wrapper">
      <div className="illustration">
        <img src={illustration404} alt="" />
      </div>

      <div className="error">
        <h1 className="error-code">404 - Page Not Found!</h1>
        <span className="error-message">
          Sorry, that page doesn't exist. What would you like to do?
        </span>
      </div>
    </div>
  );
};

export default Error404;
