import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { ButtonElement } from '..';
import 'antd/dist/antd.css';
import './header.css';

const { Header } = Layout;

const HeaderElement = () => {
  const { authState, authService } = useOktaAuth();
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Menu className="menu" theme="dark" mode="horizontal">
        <Menu.Item key="1" className="logo">
          <Link to="/">CitySpire</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/profile-list">My Profile</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/my-locations">My Locations</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <ButtonElement
            type="primary"
            handleClick={() => authService.logout()}
            buttonText="Logout"
          >
            LogOut
          </ButtonElement>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderElement;
