import React from 'react';
import { Row, Col, Button } from 'antd';

function RenderVillageDashboard() {
  return (
    <Row gutter={[16, 24]}>
      <Col xs={{ span: 12, offset: 6 }} style={{ textAlign: 'center' }}>
        <h1>Headmaster Dashboard</h1>
        <Button
          type="primary"
          shape="round"
          href="/admin/library"
          block
          style={{
            height: '30px',
            width: '200px',
          }}
        >
          School Library
        </Button>
      </Col>
      <Col xs={{ span: 12, offset: 6 }} style={{ textAlign: 'center' }}>
        <Button
          type="primary"
          shape="round"
          href="/village"
          block
          style={{
            height: '30px',
            width: '200px',
          }}
        >
          Village Info
        </Button>
      </Col>
      <Col xs={{ span: 12, offset: 6 }} style={{ textAlign: 'center' }}>
        <Button
          type="primary"
          shape="round"
          href="/edit-headmaster"
          block
          style={{
            height: '30px',
            width: '200px',
          }}
        >
          Update Profile
        </Button>
      </Col>
      <Col xs={{ span: 12, offset: 6 }} style={{ textAlign: 'center' }}>
        <Button
          type="primary"
          shape="round"
          href="/headmaster/student/"
          block
          style={{
            height: '30px',
            width: '200px',
          }}
        >
          Mentees / Students
        </Button>
      </Col>
      <Col xs={{ span: 12, offset: 6 }} style={{ textAlign: 'center' }}>
        <Button
          type="primary"
          shape="round"
          href="/headmaster/mentor/"
          block
          style={{
            height: '30px',
            width: '200px',
          }}
        >
          Mentor
        </Button>
      </Col>
    </Row>
  );
}
export default RenderVillageDashboard;
