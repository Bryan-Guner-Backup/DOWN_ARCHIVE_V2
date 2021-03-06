import React, {
  Component,
  useState,
} from 'react';

import { connect } from 'react-redux';

import {
  Divider,
  Form,
  Input,
  Switch,
  Select,
  DatePicker,
  Space,
  Button
} from 'antd';

import { useForm } from '../../hooks';

import '../../less/admin.less';

/*Form Styling*/
const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};

const buttonLayout = {
  wrapperCol: { offset: 12, span: 16 },
};

const switchLayout = {
  wrapperCol: { offset: 20 },
};

/*End Form Styling*/

const { Option } = Select;

const initialValues = {
  first_name: '',
  last_name: '',
  phone: '',
  email: '',
  role: '',
};

const AddUserForm = ({ editMode, record, formUpdated }) => {
    const [editedNotSaved, setEditedNotSaved] = useState(false);
    const [values, handleChanges, clearForm] = useForm(initialValues);

    return(
        <div>
            <Form
                {...layout}
                name= "basic"
                className={editedNotSaved ? 'editing' : ''}
                initialValues={initialValues}
            >
                {editMode ? (<Form.Item {...switchLayout}>
                                <Switch
                                    defaultChecked
                                    checkedChildren="Activated"
                                    unCheckedChildren="Deactivated"
                                    name="activate"
                                />
                            </Form.Item>) : (
                                <></>
                            )}
                <Form.Item
                    label="First Name"
                >
                    <Input
                        name="first_name" 
                        defaultValue={editMode ? record.first_name : ''}
                        onChange={
                            (e) => {
                                handleChanges(e);
                                setEditedNotSaved(true);
                            }
                        }
                    />
                </Form.Item>
                <Form.Item
                    label="Last Name"
                >
                    <Input
                        name="last_name"
                        defaultValue={editMode ? record.last_name : ''}
                        onChange={
                            (e) => {
                                handleChanges(e);
                                setEditedNotSaved(true);
                            }
                        }
                    />
                </Form.Item>
                <Form.Item
                    label="Phone"
                >
                    <Input
                        name="phone"
                        defaultValue={editMode ? record.phone : ''}
                        onChange={
                            (e) => {
                                handleChanges(e);
                                setEditedNotSaved(true);
                            }
                        }
                    />
                </Form.Item>
                <Form.Item
                    label="Email"
                >
                    <Input
                        name="email"
                        defaultValue={editMode ? record.email : ''}
                        onChange={
                            (e) => {
                                handleChanges(e);
                            }
                        }
                    />
                </Form.Item>
                <Form.Item
                    label="Role">
                    <Select
                        name="role"
                        defaultValue={editMode ? record.role : ''}
                        onChange={
                            (e) => {
                                handleChanges(e);
                            }
                        }
                    >
                        <Option value="Admin">Admin</Option>
                        <Option value="Headmaster">Headmaster</Option>
                        <Option value="Mentee">Mentee</Option>
                        <Option value="Mentor">Mentor</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="DOB"
                >
                    <Space direction="vertical">
                        <DatePicker
                            defaultValue={editMode ? record.dob : ''}
                        />
                    </Space>
                </Form.Item>
                <Form.Item {...buttonLayout}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className={editedNotSaved ? 'button-editing' : 'button'}
                        onClick={() => setEditedNotSaved(false)}
                    >
                        {editMode ? 'Edit User' : 'Add New User'}
                    </Button>
                </Form.Item>
            </Form>
            <Divider />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
};

export default connect(mapStateToProps)(AddUserForm);
