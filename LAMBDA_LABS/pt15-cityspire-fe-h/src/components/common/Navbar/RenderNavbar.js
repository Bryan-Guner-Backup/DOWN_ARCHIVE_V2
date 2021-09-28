import React, { useState } from 'react';

// dependencies
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
// constants and styles
import logo from '../../../assets/CitySpireLogo-Light.png';
const { SubMenu } = Menu;

const RenderNavbar = ({ userInfo, authService, ...props }) => {
  const [current, setCurrent] = useState('');

  const handleClick = e => {
    console.log('click', e);
    setCurrent(e.key);
  };

  return (
    <>
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        theme="dark"
      >
        <Menu.Item key="logo">
          <a href="/">
            <img src={logo} alt="logo" width="70" />
          </a>
        </Menu.Item>
        <Menu.Item key="question" icon={<SearchOutlined />}>
          <Link to="/search" rel="noopener noreferrer">
            Search for Location
          </Link>
        </Menu.Item>
        {userInfo ? (
          <SubMenu
            key="SubMenu"
            icon={<UserOutlined />}
            title={userInfo.given_name}
          >
            <Menu.Item key="profile">
              <Link to="/profile-list" rel="noopener noreferrer">
                My Profile
              </Link>
            </Menu.Item>
            <Menu.Item key="logout">
              <Link
                to="/"
                rel="noopener noreferrer"
                onClick={e => {
                  e.preventDefault();
                  authService.logout();
                }}
              >
                Log out
              </Link>
            </Menu.Item>
          </SubMenu>
        ) : (
          <Menu.Item key="alipay">
            <Link to="/login" rel="noopener noreferrer">
              Log in
            </Link>
          </Menu.Item>
        )}
      </Menu>
    </>
  );
};

export default RenderNavbar;
