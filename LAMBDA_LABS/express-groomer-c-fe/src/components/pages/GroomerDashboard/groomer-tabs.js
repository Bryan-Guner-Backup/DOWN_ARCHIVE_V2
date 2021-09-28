import React, { useContext, useState } from 'react';
import Appointments from '../Appointments/Appointments';
import FileUpload from '../../common/FileUpload';
// import GCal from '../Appointments/getCalendarEvents';
import { Alert, Col, Form, Row, Tabs, Image } from 'antd';
import Overview from './overview';
import GroomerProfilePage from '../GroomerProfile/GroomerProfilePage';
import RenderFormGR from '../ProfileFormGR/RenderFormGR';
import './groomer-dash.scss';
// context imports
import { FormContext } from '../../../state/contexts/FormContext';
import { GroomersContext } from '../../../state/contexts/GroomersContext';

const { TabPane } = Tabs;
const GroomerTab = () => {
  const { resultInfo } = useContext(FormContext);
  const { groomerInfo } = useContext(GroomersContext);
  const [mode] = useState('left');

  return (
    <div>
      <Tabs
        defaultActiveKey="0"
        tabPosition={mode}
        style={{ height: '100%', marginLeft: '5%' }}
      >
        <TabPane
          style={{ fontSize: '16px' }}
          tab={
            <span>
              <i className="fas fa-paw"></i> Overview
            </span>
          }
          key="0"
        >
          <Overview />
        </TabPane>
        <TabPane
          tab={
            <span>
              <i className="fas fa-paw"></i> My Info
            </span>
          }
          key="1"
        >
          <Row justify={'center'}>
            <Col>
              <RenderFormGR />
            </Col>
          </Row>
          <Row justify={'center'}>
            <h2 style={{ marginTop: '10px' }}>Upload License</h2>
          </Row>
          <Row justify={'center'} style={{ width: '75%', margin: 'auto' }}>
            <FileUpload
              uploadUrl={`groomers/license-upload/${groomerInfo.user_id}`}
            />
          </Row>
          <Row justify={'center'}>
            <Image width={200} src={groomerInfo.license_image_url} />
          </Row>

          <Row justify={'center'} className={'alert-row'}>
            {resultInfo.message !== null ? (
              <Form.Item>
                <Alert
                  message={resultInfo.message}
                  type={resultInfo.type}
                  showIcon
                  className={'alert'}
                />
              </Form.Item>
            ) : null}
          </Row>
          <GroomerProfilePage />
        </TabPane>

        <TabPane
          tab={
            <span>
              <i className="fas fa-paw"></i> Payments
            </span>
          }
          key="2"
        ></TabPane>
        <TabPane
          tab={
            <span>
              <i className="fas fa-paw"></i> Appointments
            </span>
          }
          key="3"
        >
          {/* <GCal /> */}
          <Appointments />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default GroomerTab;
