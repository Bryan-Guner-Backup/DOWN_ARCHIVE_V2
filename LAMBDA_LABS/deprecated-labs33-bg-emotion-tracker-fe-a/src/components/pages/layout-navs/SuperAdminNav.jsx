import { Avatar, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { UserOutlined, BookFilled, BookOutlined } from '@ant-design/icons';
import './SA.less';
import { useOktaAuth } from '@okta/okta-react';
import MemberTable from '../view-memberdash/MemberTable';
import ProgramTable from '../view-programdash/ProgramTable';

const SuperAdminNav = props => {
  const { authService } = useOktaAuth();
  const { Content, Sider } = Layout;
  const [content, setContent] = useState('');
  const role = props.role;

  const renderSwitch = contentType => {
    switch (contentType) {
      case 'members':
        return <MemberTable />;
      case 'programs':
        return <ProgramTable />;
      default:
        return <div></div>;
    }
  };
  return (
    <>
      <Layout className="superadmin-layout" >
        <Sider
          className="superadmin-sider"
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
          <Menu className="superadmin-menu" mode="inline" defaultSelectedKeys={['0']}>
            <Avatar
              className="logo"
              size={120}
              gap="1"
              style={{ margin: '16px 30px', width: '185px' }}
              src="./BGC_logo2.png"
              shape="square"
            />
            <Menu.Item
              className="menu-item"
              key="0"
              icon={<UserOutlined />}
              onClick={() => setContent('')}
            >
              {role} Dashboard
            </Menu.Item>
            <Menu.Item
              className="menu-item"
              key="1"
              icon={<BookOutlined />}
              onClick={() => setContent('programs')}
            >
              Program Management
            </Menu.Item>
            <Menu.Item
              className="menu-item"
              key="2"
              icon={<UserOutlined />}
              onClick={() => setContent('members')}
            >
              Member Management
            </Menu.Item>
            <Menu.Item key="3" onClick={() => authService.logout()}>
              Logout
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '0 16px' }}>
            <>{renderSwitch(content)}</>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default SuperAdminNav;
