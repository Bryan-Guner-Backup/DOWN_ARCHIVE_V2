import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import StudentSearch from '../Student/StudentSearch';

import MentorProfile from './MentorProfile';
import MentorHome from './MentorHome';

import { fetchMentors } from '../../../state/actions';
import Logout from '../../Logout.js';
import { Layout, Menu, PageHeader, Button, Avatar } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  //   FormOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

const MentorDashboard = props => {
  const { profile } = props;

  useEffect(() => {
    props.fetchMentors(1); // change this later with login
  }, []);
  // console.log('Mentors:', profile);

  const { Content, Sider } = Layout;

  return (
    <div>
      <Layout>
        <Sider
          theme="light"
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <Menu mode="inline" defaultSelectedKeys={['4']}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '2rem 1rem',
              }}
            >
              <Avatar style={{ color: '#FF914D' }} icon={<UserOutlined />} />
              <div style={{ fontSize: '.75rem', padding: '1rem' }}>
                {profile.last_name}
              </div>
            </div>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <NavLink to="/dashboard">Home</NavLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              <NavLink to="/profile">Profile</NavLink>
            </Menu.Item>
            <Menu.Item key="7" icon={<LogoutOutlined />}>
              <Link to="/logout">Logout</Link>
            </Menu.Item>
          </Menu>
          <div>
            <img
              style={{ padding: '2rem 1rem' }}
              src="/images/vbb-full-logo.png"
              alt="VBB logo"
              width="150"
            ></img>
          </div>
        </Sider>
        <Layout>
          <PageHeader
            title={`Hello, ${profile.first_name} ${profile.last_name}`}
            extra={[
              <Button key="2" type="primary">
                <a href="/logout">Logout</a>
              </Button>,
            ]}
          ></PageHeader>
          <Content style={{ padding: '2rem', backgroundColor: 'white' }}>
            <Switch>
              <Route path="/dashboard" component={MentorHome} />
              <Route exact path="/profile" component={MentorProfile} />

              <Route path="/student-search" component={StudentSearch} />

              <Route path="/logout" component={Logout} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loggedIn: state.authReducer.loggedIn,
    userId: state.authReducer.userId,
    role: state.authReducer.role,
    profile: state.teacherReducer.teacherProfile,
  };
};

export default connect(mapStateToProps, { fetchMentors })(MentorDashboard);
