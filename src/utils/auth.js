class Auth {
  constructor() {
    this.authenticated = Boolean(localStorage.getItem('instabug-auth'));
  }

  login() {
    this.authenticated = true;
    this.saveAuth();
  }

  logout() {
    this.authenticated = false;
    this.saveAuth();
  }

  saveAuth() {
    localStorage.setItem('instabug-auth', this.authenticated);
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
