const authConfig = {
  clientId: '0oad4j740gxzwQKnx356',
  issuer: 'https://dev-493506.oktapreview.com/oauth2/default',
  redirectUri: 'https://localhost:3000',
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
