import React from 'react';
import { Layout } from 'antd';
import HeaderContents from './HeaderContents';
import FooterContents from './FooterContents';
import ContentContents from './ContentContents';

import '../../../antD/styles/antDLayoutHFCRS.css';

// This is antd's page layout component.
// It contains a header, footer main content area (center) and
// right sidebar

// It makes use of HeaderContents, FooterContents, ContentContents,
// and SidebarContents

// This allows us to build components and send it to the layout and render
// the layout without it caring what components it is being sent.  We can
// use this component to render any type of header components or any other
// components without rebuilding the layout over and over again.

// Current design is structural only (to verify placement of components)
// Design update is needed

// Required props: headerComponents, FooterComponents, ContentComponents, SidebarComponents
// If not needed still pass null

const LayoutHFC = props => {
  const { Header, Footer, Content } = Layout;
  return (
    <Layout className="page-layout">
      <Header className="header-footer">
        <HeaderContents>{props.HeaderComponents}</HeaderContents>
      </Header>
      <Layout>
        <Content className="content">
          <ContentContents>{props.ContentComponents}</ContentContents>
        </Content>
      </Layout>
      <Footer className="footer">
        <FooterContents>{props.FooterComponents}</FooterContents>
      </Footer>
    </Layout>
  );
};

export default LayoutHFC;
