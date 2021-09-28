import React from 'react';
import { Divider, Empty, Layout } from 'antd';
import NavbarDashboard from '../../common/NavbarDashboard';
import '../../../styles/dashboard.css';

function RenderDashboard(props) {
  const { userInfo, authService } = props;
  const { Content } = Layout;

  return (
    <Layout className="dash-container">
      <NavbarDashboard userInfo={userInfo} authService={authService} />
      <h2>Work Order Dashboard</h2>
      <Divider style={{ margin: '12px 0' }}></Divider>
      <Content className="dash-content">
        <section>
          <h3>Waiting for Approval</h3>
          <div className="dash-newWO">
            <Empty></Empty>
          </div>
        </section>
        <Divider type="vertical" style={{ height: '100%' }}></Divider>
        <section>
          <h3>Approved/In Progress</h3>
          <div className="dash-approvedWO">
            <Empty></Empty>
          </div>
        </section>
      </Content>
    </Layout>
  );
}
export default RenderDashboard;
