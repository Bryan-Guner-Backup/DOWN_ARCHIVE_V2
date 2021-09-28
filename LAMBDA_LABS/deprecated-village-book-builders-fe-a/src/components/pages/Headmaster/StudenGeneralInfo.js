import React from 'react';
import { Form, Input, Button, DatePicker } from 'antd';
function StudenGeneralInfo({ handleChange, formData }) {
  return (
    <div>
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[{ required: true, message: 'Student First Name is required' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[{ required: true, message: 'Student Last Name is required' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Student Email"
        name="studentEmail"
        rules={[{ required: true, message: 'Student Email is required' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Primary Language"
        name="primaryLanguage"
        rules={[{ required: true, message: 'Primary Language is required' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Date of Birth"
        name="dob"
        rules={[
          {
            required: true,
            message: 'Student Date of Birth is required',
          },
        ]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item>
        <Button shape="round" type="primary" htmlType="submit">
          Next
        </Button>
      </Form.Item>
    </div>
  );
}

export default StudenGeneralInfo;
