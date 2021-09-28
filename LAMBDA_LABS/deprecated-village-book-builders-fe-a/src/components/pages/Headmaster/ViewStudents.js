import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Table, Row, Col, Button } from 'antd';
const { Column } = Table;
function ViewStudents() {
  const [students, setStudents] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios.get('https://54.158.134.245/api/students').then(result => {
      setStudents(result.data);
    });
  }, []);
  const addStudentClick = () => history.push('/headmaster/student/add');
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Student List</h1>

      <Row>
        <Col span={20} offset={2}>
          <Table
            dataSource={students}
            onRow={(record, rowIndex) => {
              return {
                onClick: event => {
                  history.push(`/headmaster/student/${record.id}`);
                },
                onMouseEnter: event => {
                  document.body.style.cursor = 'pointer';
                },
                onMouseLeave: event => {
                  document.body.style.cursor = 'default';
                },
              };
            }}
          >
            <Column title="First Name" dataIndex="firstName" key="firstName" />
            <Column title="Last Name" dataIndex="lastName" key="lastName" />
            <Column title="Email" dataIndex="studentEmail" key="studentEmail" />
          </Table>
          <Button
            shape="round"
            type="primary"
            htmlType="submit"
            onClick={addStudentClick}
          >
            Add Student
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default ViewStudents;
