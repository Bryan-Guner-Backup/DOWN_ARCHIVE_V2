import React from 'react';
import { Form, Input, Button } from 'antd';
import { useHistory } from 'react-router-dom';

function StudentParentInfo({ error }) {
  return (
    <div>
      <Form.Item
        label="Parents/Guardian Names"
        name="parentName"
        rules={[{ required: true, message: 'Parents/Guardian Names' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Parent Phone #"
        name="parentPhoneNumber"
        rules={[{ required: true, message: 'Parent Phone # is required' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Parent Email"
        name="parentEmail"
        rules={[{ required: true, message: 'Parent Email is required' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button shape="round" type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </div>
  );
}

export default StudentParentInfo;
