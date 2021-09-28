import React from 'react';
import { Menu } from 'antd';
import { useHistory } from 'react-router-dom';
import xcel from '../assets/xcel.png';
import { Layout } from 'antd';
const { Header } = Layout;

function NavbarLogout() {
  const history = useHistory();

  const handlePush = () => {
    localStorage.clear();
    history.push('/');
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
        <Menu.Item style={itemStyle} key="4" onClick={handlePush}>
          Logout
        </Menu.Item>
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
  color: '#333',
  fontWeight: '600',
  boxSizing: 'border-box',
  right: '20px',
};

export default NavbarLogout;
