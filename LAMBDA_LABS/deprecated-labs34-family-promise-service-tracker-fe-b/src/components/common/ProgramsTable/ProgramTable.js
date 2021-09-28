import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import TagsComponent from './Tags';
import { Table, Input, Typography, Form, Tag, Space, Popconfirm } from 'antd';
import {
  LoadingOutlined,
  PlusOutlined,
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons';

//action import
import {
  getAllProgramsAction,
  addProgramAction,
  editProgramAction,
  deleteProgramAction,
} from '../../../state/actions';

const ProgramTable = ({
  getAllProgramsAction,
  editProgramAction,
  deleteProgramAction,
  programs,
  change,
}) => {
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');

  useEffect(() => {
    getAllProgramsAction();
  }, [change]);

  const isEditing = record => record.program_id === editingKey;

  const edit = record => {
    form.setFieldsValue({
      name: '',
      type: '',
      description: '',
      ...record,
    });
    setEditingKey(record.program_id);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const deleteProgram = key => {
    deleteProgramAction(key);
    console.log('key', key);
  };

  const save = async programId => {
    try {
      const programObj = await form.validateFields();
      console.log('programObj', programObj);
      console.log('programId', programId);
      editProgramAction(programId, programObj);
      setEditingKey('');
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'Program Name',
      dataIndex: 'name',
      key: 'name',
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="name"
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: `Please Input name!`,
              },
            ]}
          >
            <Input defaultValue={record.name} />
          </Form.Item>
        ) : (
          <>{record.name}</>
        );
      },
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="type"
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: `Please Input type!`,
              },
            ]}
          >
            <Input defaultValue={record.type} />
          </Form.Item>
        ) : (
          <>{record.type}</>
        );
      },
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="description"
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: `Please Input description!`,
              },
            ]}
          >
            <Input defaultValue={record.description} />
          </Form.Item>
        ) : (
          <>{record.description} </>
        );
      },
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Space size="middle">
              <a
                onClick={() => save(record.program_id)}
                style={{ color: '#1890FF', marginRight: 8 }}
              >
                Save
              </a>
              <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                <a style={{ color: '#1890FF' }}>Cancel</a>
              </Popconfirm>
            </Space>
          </span>
        ) : (
          <Space size="large">
            <Typography.Link
              disabled={editingKey !== ''}
              style={{ color: '#1890FF' }}
              onClick={() => edit(record)}
            >
              {<EditOutlined />}
            </Typography.Link>

            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => {
                deleteProgram(record.program_id);
              }}
              danger
            >
              {<DeleteOutlined />}
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  return (
    <>
      {programs.length < 1 && <LoadingOutlined className="loader" />},
      {programs.length >= 1 && (
        <Form form={form}>
          <Table
            className="desktop-table"
            columns={columns}
            dataSource={programs}
            bordered
          />
        </Form>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    programs: state.program.programs,
    change: state.program.change,
  };
};

export default connect(mapStateToProps, {
  getAllProgramsAction,
  addProgramAction,
  editProgramAction,
  deleteProgramAction,
})(ProgramTable);
