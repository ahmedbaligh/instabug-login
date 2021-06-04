import { users } from './data.json';

class Auth {
  constructor() {
    this.authenticated = localStorage.getItem('instabug-auth')
      ? JSON.parse(localStorage.getItem('instabug-auth'))
      : { status: false };
  }

  login(actions, user) {
    this.authenticated = { status: true, user };
    this.saveAuth();

    actions();
  }

  logout(actions) {
    this.authenticated = { status: false };
    this.saveAuth();

    actions();
  }

  saveAuth() {
    localStorage.setItem('instabug-auth', JSON.stringify(this.authenticated));
  }

  isAuthenticated() {
    return this.authenticated.status;
  }

  getUser() {
    return this.authenticated.user;
  }

  isValid(email, password) {
    for (const user of users) {
      if (user.email === email) {
        return user.password === password;
      }
    }

    return false;
  }
}

export default new Auth();
