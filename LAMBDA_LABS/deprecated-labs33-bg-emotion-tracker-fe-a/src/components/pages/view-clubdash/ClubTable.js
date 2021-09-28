import React from 'react';
import { Layout, Menu, Avatar, Table } from 'antd';
import { UserOutlined, BookFilled, BookOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Content, Sider } = Layout;
const ClubTable = props => {
  /*this is dummy data, it will be deleted. */
  const { Column } = Table;
  const { userInfo, authService } = props;
  const data = [
    {
      key: '1',
      memberID: 968987,
      clubID: 192834,
      miscellaneousID: 'This member is the leader of club #928374',
    },
    {
      key: '2',
      memberID: 123456,
      clubID: 192735,
      miscellaneousID: 'This member is the associate director of club #833989',
    },
    {
      key: '3',
      memberID: 654321,
      clubID: 982361,
      miscellaneousID: 'This member is the director of club #199876 ',
    },
  ];

  return (
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
          <Avatar size={100} gap="5" icon={<UserOutlined />} />
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
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '10px',
                }}
              >
                <div>
                  <h1>Club Management</h1>
                </div>
                <div>
                  <button>ADD CLUB</button>
                </div>
              </div>

              <Table dataSource={data}>
                <Column
                  title="DirectorID"
                  dataIndex="memberID"
                  key="memberID"
                />
                <Column title="ClubID" dataIndex="clubID" key="clubID" />
                <Column
                  title="Miscellaneous"
                  dataIndex="miscellaneousID"
                  key="miscellaneousID"
                />
              </Table>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default ClubTable;
