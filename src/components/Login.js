import React, { useEffect, useRef, useState } from 'react';
import { Redirect } from 'react-router-dom';

import '../stylesheets/Login.scss';
import logo from '../assets/logo.svg';
import googleLogo from '../assets/google.svg';
import githubLogo from '../assets/github.svg';
import microsoftLogo from '../assets/microsoft.svg';
import auth from '../utils/auth';

const emailPattern = /([a-z0-9._%+-]{2,})@\w{2,}\..{2,}$/i;
const passwordPattern = /(?=.*\d)(?=.*[A-Z]).{8,}/;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const isFirstRender = useRef(true);

  useEffect(() => {
    document.title = `Login | ${document.title}`;
  }, []);

  useEffect(() => {
    // Check if it's the initial render
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (!emailPattern.test(email)) {
      emailRef.current.classList.add('invalid');
      setIsValid(false);
      return;
    } else emailRef.current.classList.remove('invalid');

    if (
      !passwordPattern.test(password) ||
      password.includes(email.match(/(.*)@/)[1])
    ) {
      passwordRef.current.classList.add('invalid');
      setIsValid(false);
      return;
    } else passwordRef.current.classList.remove('invalid');

    setIsValid(true);
  }, [email, password]);

  const setInput = setter => e => setter(e.target.value);

  const onLogin = e => {
    e.preventDefault();

    console.log({ email, password });
  };

  return auth.isAuthenticated() ? (
    <Redirect to={{ pathname: '/welcome', state: window.location.pathname }} />
  ) : (
    <div className="login-wrapper">
      <div className="login">
        <div className="logo-card">
          <img src={logo} alt="Instabug logo" />
        </div>

        <span className="login-text">Log in to Instabug</span>

        <div className="social-logins">
          <div className="social-login google">
            <img src={googleLogo} alt="Google logo" />
            <span>Google</span>
          </div>
          <div className="social-login github">
            <img src={githubLogo} alt="Google logo" />
            <span>GitHub</span>
          </div>
          <div className="social-login microsoft">
            <img src={microsoftLogo} alt="Google logo" />
            <span>Microsoft</span>
          </div>

          <span className="divider">or</span>
        </div>

        <form onSubmit={onLogin}>
          <div className="form-field email" ref={emailRef}>
            <label htmlFor="email">Work Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="you@company.com"
              onChange={setInput(setEmail)}
              value={email}
              tabIndex="1"
            />
            <p className="invalid-text">Enter a valid email adrress.</p>
          </div>

          <div className="form-field password" ref={passwordRef}>
            <label htmlFor="password">Password</label>
            <a href="/forgot-password" className="forgot-password">
              Forgot password?
            </a>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="8+ Characters"
              onChange={setInput(setPassword)}
              value={password}
              tabIndex="2"
            />
            <p className="invalid-text">
              Password must be 6 characters or more.
            </p>
          </div>

          <button type="submit" disabled={!isValid}>
            Log in
          </button>
        </form>
      </div>

      <div className="carousel">Slider</div>
    </div>
  );
};

export default Login;
