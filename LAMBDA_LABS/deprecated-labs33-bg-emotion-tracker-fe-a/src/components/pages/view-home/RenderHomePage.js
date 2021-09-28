import React from 'react';
import { Layout, Menu, Avatar } from 'antd';
import { UserOutlined, BookFilled, BookOutlined } from '@ant-design/icons';
import MemberTable from '../view-memberdash/MemberTable';
import { Link } from 'react-router-dom';

const { Content, Sider } = Layout;

function RenderHomePage(props) {
  const { userInfo, authService } = props;
  return (
    <div>
      <Layout>
        <Sider
          breakpoint="lg"
          width="250"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
            <Avatar
              size={120}
              gap="1"
              style={{ margin: '16px 30px', width: '185px' }}
              src="./BGC_logo2.png"
              shape="square"
            />
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/program-table">Program Management</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<BookOutlined />}>
              <Link to="/">Member Management</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<BookFilled />}>
              <Link to="/club-table">Club Management</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
              QR Generator
            </Menu.Item>
            <Menu.Item key="5" onClick={() => authService.logout()}>
              Logout
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          <Content style={{ margin: '24px 16px 0' }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: '100vh' }}
            >
              <MemberTable />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
export default RenderHomePage;
