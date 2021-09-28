import React from 'react';
import { useOktaAuth } from '@okta/okta-react';


const Login = () => { 
  const { authService } = useOktaAuth();

  // Okta login - redirects to '/dashboard'
  const login = () => authService.login('/dashboard');

  
  return (
        <button onClick={login}>Login / Register</button>
    )
};
export default Login;