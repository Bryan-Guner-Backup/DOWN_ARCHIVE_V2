import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Row, Col, Form, Input, Button, Alert } from 'antd';
import axios from 'axios';

function EditLibrary() {
  let { id } = useParams();
  let history = useHistory();
  const [form] = Form.useForm();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`https://54.158.134.245/api/library/${id}`)
      .then(res => {
        form.setFieldsValue({
          name: res.data.name,
          description: res.data.description,
          library_usage: res.data.library_usage,
          notes: res.data.notes,
        });
      })
      .catch(err => {
        setLoading(false);
        setError(err);
      });
  }, [id, form]);

  const onFinish = values => {
    setLoading(true);
    axios
      .put(`https://54.158.134.245/api/library/${id}`, {
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

  const handleDelete = () => {
    setLoading(true);
    axios
      .delete(`https://54.158.134.245/api/library/${id}`)
      .then(() => {
        setLoading(false);
        history.push('/admin/library');
      })
      .catch(error => {
        setLoading(false);
        setError(error);
      });
  };
  return (
    <Row>
      <Col span={12} offset={6}>
        <h1>Edit Library Info</h1>
        <Row justify="end">
          <Button
            type="primary"
            shape="round"
            htmlType="submit"
            loading={loading}
            onClick={handleDelete}
          >
            Delete Library
          </Button>
        </Row>
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
              Update Library
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default EditLibrary;
