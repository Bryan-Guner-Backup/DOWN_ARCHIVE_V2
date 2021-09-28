import React from 'react';
import HeaderElement from '../../common/Header/HeaderElement';
import SearchForm from '../../common/SerachForm/SearchForm';
import { Layout, Typography } from 'antd';
import 'antd/dist/antd.css';
import './home.css';

const { Content, Footer } = Layout;
const { Title } = Typography;

function RenderHomePage(props) {
  const { userInfo, authService } = props;

  return (
    <Layout className="layout" style={{ height: '100vh' }}>
      <HeaderElement />
      <Content
        className="contentWrapper"
        style={{ padding: '0 50px', marginTop: 64 }}
      >
        <div className="site-layout-content">
          <Title className="homeTitle" style={{ fontWeight: 300 }}>
            Hi, <span>{userInfo.name}</span> what's your next location?
          </Title>
          <SearchForm />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>CitySpire ©2021</Footer>
    </Layout>
  );
}
export default RenderHomePage;
