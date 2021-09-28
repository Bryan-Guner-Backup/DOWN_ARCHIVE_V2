import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { register } from '../../../state/actions';
import { FormContainer, layout, tailLayout } from '../../common/FormStyle';
// import registerReducer from '../../../state/reducers'

const initialState = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
};

const Registration = ({ register, registered }) => {
  const [theData, setTheData] = useState(initialState);
  const [form] = Form.useForm();
  let history = useHistory();

  const handleChange = e => {
    setTheData({ ...theData, [e.target.name]: e.target.value });
  };
  const onSubmit = async () => {
    console.log('test');
    await register(theData);
    history.push('/register_pt2');
  };

  return registered ? (
    <Redirect to="/login" />
  ) : (
    <FormContainer>
      <Form onFinish={onSubmit} form={form} {...layout}>
        <Form.Item {...tailLayout}>
          <h1>Register</h1>
        </Form.Item>

        <Form.Item
          label="First_Name"
          name="first_name"
          rules={[{ required: true, message: 'First name is required.' }]}
        >
          <Input
            type="text"
            name="first_name"
            value={theData.first_name}
            onChange={e => handleChange(e)}
          />
        </Form.Item>

        <Form.Item
          label="Last_Name"
          name="last_name"
          rules={[{ required: true, message: 'Last name is required.' }]}
        >
          <Input
            type="text"
            name="email"
            value={theData.last_name}
            onChange={e => handleChange(e)}
          />
        </Form.Item>
        <Form.Item
          label="email"
          name="email"
          rules={[{ required: true, message: 'Email is required.' }]}
        >
          <Input
            type="text"
            name="email"
            value={theData.email}
            onChange={e => handleChange(e)}
          />
        </Form.Item>

        <Form.Item
          label="password"
          name="password"
          rules={[{ required: true, message: 'Password is required.' }]}
        >
          <Input
            type="password"
            name="password"
            value={theData.password}
            onChange={e => handleChange(e)}
          />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button htmlType="submit">Register</Button>
        </Form.Item>
      </Form>
      <h2>Register to become a teacher!</h2>
    </FormContainer>
  );
};

const mapStateToProps = state => {
  return {
    registered: state.authReducer.registered,
  };
};

export default connect(mapStateToProps, { register })(Registration);
