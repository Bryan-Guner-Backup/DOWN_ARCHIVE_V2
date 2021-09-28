import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Table, Row, Col, Button, Alert } from 'antd';

import { useUser } from '../../../state/UserContext';
const { Column } = Table;

function Library() {
  const [libraries, setLibraries] = useState([]);
  const [error, setError] = useState();
  let history = useHistory();

  useEffect(() => {
    axios
      .get('https://54.158.134.245/api/library')
      .then(res => {
        setLibraries(res.data);
      })
      .catch(err => {
        setError(err);
      });
  }, []);
  return (
    <Row>
      <Col span={20} offset={2}>
        <h1>Libraries</h1>
        {error ? (
          <Alert
            message="There was an error"
            description="Your request could not be completed"
            type="error"
            closable
          />
        ) : (
          <Table
            dataSource={libraries}
            onRow={(record, rowIndex) => {
              return {
                onClick: event => {
                  history.push(`/admin/library/${record.id}`);
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
            <Column title="Library Name" dataIndex="name" key="name" />
            <Column
              title="Description"
              dataIndex="description"
              key="description"
            />

            <Column
              title="Library Usage"
              dataIndex="library_usage"
              key="library_usage"
            />
            <Column title="Notes" dataIndex="notes" key="notes" />
          </Table>
        )}
        <Button
          type="primary"
          shape="round"
          onClick={() => history.push('/admin/library/add')}
        >
          Add Library
        </Button>
      </Col>
    </Row>
  );
}

export default Library;
