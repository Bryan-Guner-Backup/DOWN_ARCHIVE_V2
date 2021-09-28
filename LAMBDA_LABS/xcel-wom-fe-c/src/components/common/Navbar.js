import React, { useState, useEffect, useMemo } from 'react';
import { Menu } from 'antd';
import { useHistory } from 'react-router-dom';
import xcel from '../assets/xcel.png';
import { Layout } from 'antd';
import { useOktaAuth } from '@okta/okta-react';

const { Header } = Layout;

function Navbar() {
  const history = useHistory();
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);
  // eslint-disable-next-line
  const [memoAuthService] = useMemo(() => [authService], []);

  useEffect(() => {
    let isSubscribed = true;

    memoAuthService
      .getUser()
      .then(info => {
        // if user is authenticated we can use the authService to snag some user info.
        // isSubscribed is a boolean toggle that we're using to clean up our useEffect.
        if (isSubscribed) {
          setUserInfo(info);
        }
      })
      .catch(err => {
        isSubscribed = false;
        return setUserInfo(null);
      });
    return () => (isSubscribed = false);
  }, [memoAuthService]);

  const handleLoginPush = () => {
    history.push('/login');
  };

  const handleDashPush = () => {
    history.push('/dashboard');
  };

  return (
    <Header style={headerStyle}>
      <div style={logo}>
        <img alt="Xcel WO" height="100px" src={xcel} />
      </div>
      <Menu
        style={menuStyle}
        width="200px"
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
      >
        <Menu.Item style={itemStyle} key="1">
          Home
        </Menu.Item>
        <Menu.Item style={itemStyle} key="2">
          About Us
        </Menu.Item>
        <Menu.Item style={itemStyle} key="3">
          Contact Us
        </Menu.Item>
        {authState.isAuthenticated && userInfo ? (
          <Menu.Item style={itemStyle} key="4" onClick={handleDashPush}>
            Dashboard
          </Menu.Item>
        ) : (
          <Menu.Item style={itemStyle} key="4" onClick={handleLoginPush}>
            Login
          </Menu.Item>
        )}
      </Menu>
    </Header>
  );
}

let headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '15px 0',
  background: 'white',
  height: '100px',
  zIndex: '99',
};

let logo = {
  display: 'flex',
  justifyContent: 'flex-start',
  marginLeft: '4%',
};

let menuStyle = {
  width: '60%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '0 auto',
  height: '40px',
  background: 'none',
};

let itemStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '18.33%',
  fontSize: '20px',
  color: 'black',
  fontWeight: '600',
  boxSizing: 'border-box',
  right: '20px',
};

export default Navbar;
