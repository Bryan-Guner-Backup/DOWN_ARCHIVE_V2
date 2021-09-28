import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Row, Col, Form, Input, Button, Alert } from 'antd';
import axios from 'axios';

function EditStudent() {
  let { id } = useParams();
  let history = useHistory();
  const [form] = Form.useForm();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`https://54.158.134.245/api/students/${id}`)
      .then(res => {
        form.setFieldsValue({
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          studentEmail: res.data.studentEmail,
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
      .patch(`https://54.158.134.245/api/students/${id}`, {
        firstName: values.firstName,
        lastName: values.lastName,
        studentEmail: values.studentEmail,
      })
      .then(() => {
        setLoading(false);
        history.push('/headmaster/student');
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
      .delete(`https://54.158.134.245/api/students/${id}`)
      .then(() => {
        setLoading(false);
        history.push('/headmaster/student');
      })
      .catch(error => {
        setLoading(false);
        setError(error);
      });
  };
  return (
    <Row>
      <Col span={12} offset={6}>
        <h1>Edit Student Info</h1>
        <Row justify="end">
          <Button
            shape="round"
            type="primary"
            htmlType="submit"
            loading={loading}
            onClick={handleDelete}
          >
            Delete Student
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
            label="First Name"
            name="firstName"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Student Email"
            name="studentEmail"
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
              Update Student
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default EditStudent;
