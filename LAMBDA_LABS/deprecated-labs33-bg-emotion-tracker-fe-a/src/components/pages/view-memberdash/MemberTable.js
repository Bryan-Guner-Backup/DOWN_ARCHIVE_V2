import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Table } from 'antd';
import axios from 'axios';

// ---- Imports for Ant Design Modal Component ------
import { Modal, Button } from 'antd';
import CsvImport from './new-modal-member/CsvImport';
import ManualMemberIdForm from './new-modal-member/ManualMemberIdForm';
import QRCodeGenerator from './new-modal-member/QRCodeRender';

import './new-modal-member/styles/renderModal.less';

//----------------------------------------------------

const MemberTable = () => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  // -------- State for QR Generation ------
  const [newMemberId, setNewMemberId] = useState([]);
  const [toggle, setToggle] = useState(false);

  const history = useHistory();

  const showModal = () => {
    setVisible(true);
  };

  const QRredirect = () => {
    setToggle(!toggle);
  };

  const handleOk = () => {
    // setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  // --------- End of Modal Code ---------

  const [members, setMembers] = useState([]);

  const tokens = JSON.parse(localStorage.getItem('okta-token-storage'));
  const access_token = tokens.accessToken.accessToken;

  const newData = [];
  const dataConverter = data => {
    for (let i = 0; i < data.length; i++) {
      newData.push({ key: i, memberID: data[i].memberid });
    }
    setMembers(newData);
  };

  useEffect(() => {
    axios
      .get(`https://bg-emotion-tracker-be-a.herokuapp.com/members/members`, {
        headers: {
          Authorization: 'Bearer ' + access_token,
        },
      })
      .then(res => {
        dataConverter(res.data);
      })
      .catch(error => {
        console.log('THis is you error --->', error);
      });
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
          <h1>Member Management</h1>
        </div>
        <div>
          {newMemberId.length > 0 && (
            <Button type="primary" onClick={QRredirect}>
              Create New ID's
            </Button>
          )}
          <Button type="primary" onClick={showModal}>
            Add Members
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
          <div className="manualFormWindow">
            <ManualMemberIdForm
              newMemberId={newMemberId}
              setNewMemberId={setNewMemberId}
            />
          </div>

          <div className="csvDisplayWindow">
            <CsvImport
              newMemberId={newMemberId}
              setNewMemberId={setNewMemberId}
            />
          </div>
        </div>
      </Modal>
      {/* end of modal rendering code  */}
      {toggle === false && (
        <Table dataSource={members}>
          <Column title="MemberID" dataIndex="memberID" key="memberID" />
        </Table>
      )}
      {toggle === true && <QRCodeGenerator newMemberId={newMemberId} />}
    </div>
  );
};
export default MemberTable;
