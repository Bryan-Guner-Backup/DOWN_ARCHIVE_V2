import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';

import { Modal, Button } from 'antd';
import CsvProgramImport from './CsvProgramImport';

const ProgramTable = () => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  const [programs, setPrograms] = useState([]);

  const tokens = JSON.parse(localStorage.getItem('okta-token-storage'));
  const access_token = tokens.accessToken.accessToken;

  const newData = [];
  const dataConverter = data => {
    for (let i = 0; i < data.length; i++) {
      newData.push({
        key: i,
        programID: data[i].programid,
        name: data[i].name,
      });
    }
    setPrograms(newData);
  };

  useEffect(() => {
    axios
      .get(`https://bg-emotion-tracker-be-a.herokuapp.com/programs/programs`, {
        headers: {
          Authorization: 'Bearer ' + access_token,
        },
      })
      .then(res => {
        dataConverter(res.data);
      })
      .catch(error => {
        console.log('This is you error --->', error);
      });
    // eslint-disable-next-line
  }, []);

  const { Column } = Table;

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '10px',
        }}
      >
        <div>
          <h1>Program Management</h1>
        </div>
        <div>
          <Button type="primary" onClick={showModal}>
            Add Programs
          </Button>
        </div>
      </div>
      {/* The modal only appears on button click  */}
      <Modal
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div className="mainDisplayWindow">
          <div className="csvDisplayWindow">
            <CsvProgramImport />
          </div>
        </div>
      </Modal>
      {/* end of modal rendering code  */}
      <Table dataSource={programs}>
        <Column title="ProgramID" dataIndex="name" key="programID" />
      </Table>
    </div>
  );
};

export default ProgramTable;
