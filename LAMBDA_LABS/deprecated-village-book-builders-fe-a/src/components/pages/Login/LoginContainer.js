import React, { useEffect } from 'react';
import { Row, Col, Form, Input, Button, Alert } from 'antd';
import { useHistory } from 'react-router-dom';
const LoginContainer = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/dashboard');
  };
  return (
    <div>
      <h1>Login Page</h1>
      <Button shape="round" onClick={handleClick}>
        Go To Dashboard
      </Button>
    </div>
  );
};

export default LoginContainer;
