import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Form, Input, Button, Alert } from 'antd';
import axios from 'axios';

function AddLibrary() {
  let history = useHistory();
  const [form] = Form.useForm();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onFinish = values => {
    setLoading(true);
    axios
      .post(`https://54.158.134.245/api/library/`, {
        name: values.name,
        description: values.description,
        library_usage: values.library_usage,
        notes: values.notes,
      })
      .then(() => {
        setLoading(false);
        history.push('/admin/library');
      })
      .catch(err => {
        setLoading(false);
        setError(err);
      });
  };

  const onFinishFailed = errorInfo => {
    setError(errorInfo);
  };

  return (
    <Row>
      <Col span={12} offset={6}>
        <h1>Add A Library</h1>

        {error && (
          <Alert
            message="There was an error"
            description="Your request could not be completed"
            type="error"
            closable
          />
        )}
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Library Name"
            name="name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Library Description"
            name="description"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Library Usage"
            name="library_usage"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Library Notes"
            name="notes"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button
              shape="round"
              type="primary"
              htmlType="submit"
              loading={loading}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default AddLibrary;
