import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Table, Row, Col, Button } from 'antd';
const { Column } = Table;
function ViewMentors() {
  const [mentors, setMentors] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios.get('https://54.158.134.245/api/mentors').then(result => {
      setMentors(result.data);
    });
  }, []);
  const addMentorsClick = () => history.push('/headmaster/mentor/add');
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Mentor List</h1>

      <Row>
        <Col span={20} offset={2}>
          <Button
            shape="round"
            type="primary"
            htmlType="submit"
            onClick={addMentorsClick}
          >
            Add Mentor
          </Button>
          <Table
            dataSource={mentors}
            onRow={(record, rowIndex) => {
              return {
                onClick: event => {
                  history.push(`/headmaster/mentor/${record.id}`);
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
            <Column title="Email" dataIndex="email" key="email" />
          </Table>
        </Col>
      </Row>
    </div>
  );
}

export default ViewMentors;
