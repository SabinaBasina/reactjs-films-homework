const authConfig = {
  clientId: '0oam1rxwzJuvi4oI9356',
  issuer: 'https://dev-936073.okta.com/oauth2/default',
  redirectUri: 'https://my-react-app-git-part3.sabina98bel.now.sh/implicit/callback',
  scope: 'openid profile email',
};

async function checkAuthentication() {
  const authenticated = await this.props.auth.isAuthenticated();

  if (authenticated !== this.state.authenticated) {
    this.setState({ authenticated });

    if (authenticated && !this.state.user) {
      this.setState({ user: await this.props.auth.getUser() });
    }
  }
}

async function login() {
  this.props.auth.login('/');
}

async function logout() {
  this.props.auth.logout('/login');
}

async function redirectToLogin({ history }) {
  history.push('/login');
}

export {
  checkAuthentication,
  redirectToLogin,
  login,
  logout,
  authConfig,
};
