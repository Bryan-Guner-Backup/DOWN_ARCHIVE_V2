import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

function NavigationHeader(): JSX.Element {
  return (
    <Layout className="layout">
      <Header style={{ padding: 0 }}>
        <Menu mode="horizontal" theme="light">
          <Menu.Item>
            <Link to="/">
              Home
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/attendance">
              Attendance Tracker
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/teambuilder">
              Team Builder
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/learnersuccess">
              Learner Success Auditing
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/fourth">
              Fourth Component
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
}

export default NavigationHeader;
