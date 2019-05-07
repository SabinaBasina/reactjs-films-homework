const authConfig = {
  clientId: '0oajq2rexaSuN2H23356',
  issuer: 'https://dev-936073.okta.com/oauth2/default',
  redirectUri: 'http://localhost:3000',
  scope: 'openid profile email',
};

async function checkAuthentication() {
  const isAuthenticated = await this.props.auth.isAuthenticated();

  if (isAuthenticated !== this.state.isAuthenticated) {
    this.setState({ isAuthenticated });

    if (isAuthenticated && !this.state.user) {
      this.setState({ user: await this.props.auth.getUser() });
    }
  }
}

async function redirectToLogin({ history }) {
  history.push('/login');
}

export { checkAuthentication, redirectToLogin, authConfig };
