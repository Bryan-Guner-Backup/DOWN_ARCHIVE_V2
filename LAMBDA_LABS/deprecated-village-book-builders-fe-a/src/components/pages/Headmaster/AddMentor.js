import React, { useState } from 'react';
import axios from 'axios';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Form, Space, Input, Button, Alert } from 'antd';

const StyledDiv = styled.div`
  text-align: center;
  margin-top: 25px;
`;

function AddMentor() {
  const [error, setError] = useState(null);

  const history = useHistory();
  const onFinish = values => {
    axios
      .post('https://54.158.134.245/api/headmaster/mentors', values)
      .then(res => console.log(res))
      .catch(err => setError(err));
  };

  const onFinishFailed = errorInfo => {
    setError(errorInfo);
  };

  return (
    <Row>
      <Col span={12} offset={6}>
        <StyledDiv>
          <h1>Add Mentor</h1>
          {error && (
            <Alert
              message="There was an error"
              description="Your request could not be completed"
              type="error"
              closable
            />
          )}
          <Space> </Space>
          <Form
            layout="vertical"
            name="addMentor"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[
                { required: true, message: 'Mentor First Name is required' },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[
                { required: true, message: 'Mentor Last Name is required' },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Mentor Email is required' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button shape="round" type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </StyledDiv>
      </Col>
    </Row>
  );
}

export default AddMentor;
