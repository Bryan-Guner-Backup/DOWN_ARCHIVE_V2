import React from 'react';
import { Form, Input, Button } from 'antd';
function StudentEducationInfo() {
  return (
    <div>
      <Form.Item
        label="English Proficiency"
        name="englishProficiency"
        rules={[
          {
            required: true,
            message: 'English Proficiency is required',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="School Level"
        name="schoolLevel"
        rules={[
          {
            required: true,
            message: 'School Level is required',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Reading Level"
        name="readingLevel"
        rules={[
          {
            required: true,
            message: 'Reading Level is required',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Math Level"
        name="mathLevel"
        rules={[
          {
            required: true,
            message: 'Math Level is required',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button shape="round" type="primary" htmlType="submit">
          Next
        </Button>
      </Form.Item>
    </div>
  );
}

export default StudentEducationInfo;
