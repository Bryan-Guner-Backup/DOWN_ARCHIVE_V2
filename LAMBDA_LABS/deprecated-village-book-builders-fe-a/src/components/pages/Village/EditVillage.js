import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Form, Input, Button, Alert } from 'antd';

function EditVillage() {
  let { id } = useParams();
  let history = useHistory();
  const [form] = Form.useForm();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`https://54.158.134.245/api/village/${id}`)
      .then(res => {
        form.setFieldsValue({
          longitude: res.data.longitude,
          latitude: res.data.latitude,
          educationContactName: res.data.educationContactName,
          educationContactEmail: res.data.educationContactEmail,
          educationContactPhone: res.data.educationContactPhone,
          driveLink: res.data.driveLink,
          notes: res.data.notes,
          villageContactName: res.data.villageContactName,
          villageContactPhone: res.data.villageContactPhone,
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
      .put(`https://54.158.134.245/api/village/${id}`, {
        longitude: values.longitude,
        latitude: values.latitude,
        educationContactName: values.educationContactName,
        educationContactEmail: values.educationContactEmail,
        educationContactPhone: values.educationContactPhone,
        driveLink: values.driveLink,
        notes: values.notes,
        villageContactName: values.villageContactName,
        villageContactPhone: values.villageContactPhone,
      })
      .then(() => {
        setLoading(false);
        history.push('/village');
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
        <h1>Update Village Info</h1>

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
            label="Longitude"
            name="longitude"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Latitude"
            name="latitude"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Education Contact Name"
            name="educationContactName"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Education Contact Email"
            name="educationContactEmail"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Education Contact Phone"
            name="educationContactPhone"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Google Drive Link"
            name="driveLink"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Notes" name="notes" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Village Contact Name"
            name="villageContactName"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Village Contact Phone"
            name="villageContactPhone"
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
              Update Village
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default EditVillage;
