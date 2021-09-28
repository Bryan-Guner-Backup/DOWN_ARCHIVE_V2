import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import Map from '../ExampleDataViz/mapView';

const { Header, Content, Footer } = Layout;

function RenderHomePage(props) {
  const { userInfo, authService } = props;
  console.log('user info', userInfo);
  return (
    <Layout className="layout">
      <Header>
        <div />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
          <Menu.Item key="0">
            Hi {userInfo.name} Welcome to CitySpire!
          </Menu.Item>
          <Menu.Item key="1">
            <Link to="/profile-list">Favorites</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/example-list">Example List of Items</Link>
          </Menu.Item>
          <Menu.Item key="3" onClick={() => authService.logout()}>
            Logout
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <div>
            <Map />
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}
export default RenderHomePage;
