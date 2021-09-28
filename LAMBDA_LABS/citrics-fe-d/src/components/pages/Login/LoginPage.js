import React from 'react';
import LoginContainer from './LoginContainer.js';
import { Layout } from 'antd'; // TODO refactor to styled components

function LoginPage() {
  return (
    <div>
      <Layout
        className="layout"
        style={
          {
            /* If replacing login page with modal, this page won't be necessary. */
          }
        }
      >
        <LoginContainer />
      </Layout>
    </div>
  );
}

export default LoginPage;
