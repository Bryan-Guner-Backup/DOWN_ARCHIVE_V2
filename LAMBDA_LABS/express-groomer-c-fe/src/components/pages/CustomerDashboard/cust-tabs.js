import { Alert, Row, Tabs } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import Overview from './overview';
import CustomerProfilePage from '../CustomerProfile/CustProContainer';
import { ProfileFormPO } from '../ProfileFormPO';
import { PetForm } from '../PetForm';
import { RenderPetProfile } from '../PetProfile';
import RenderFavGroomer from './RenderFavGroomer';
// context imports
import { FormContext } from '../../../state/contexts/FormContext';
// import FileUpload from '../../common/FileUpload';
// import { CustomersContext } from '../../../state/contexts/CustomersContext';
import { APIContext } from '../../../state/contexts/APIContext';
import { useOktaAuth } from '@okta/okta-react';
// import { PetsContext } from '../../../state/contexts/PetsContext'; // testing that context is updated before pets are rendered in RenderPetProfile

const { TabPane } = Tabs;

// this will need to be deleted and pet, setPet will be used instead once
// hooked up
// const pet = {};

const CustTab = () => {
  const { authState } = useOktaAuth();
  // const [pet, setPet] = useState();
  const [mode] = useState('left');
  // context state
  const { resultInfo } = useContext(FormContext);
  // const { custInfo } = useContext(CustomersContext);
  const { getCustomerByID } = useContext(APIContext);
  const { getPet } = useContext(APIContext);
  const { getGroomerByID } = useContext(APIContext);

  // const {getGroomerByID} = useContext(APIContext);
  // const { pets } = useContext(PetsContext); // testing that context is updated before pets are rendered in RenderPetProfile

  useEffect(() => {
    getCustomerByID(authState);
    getPet(authState);
    getGroomerByID('00ulthapbErVUwVJy4x6');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            <ProfileFormPO />
          </Row>
          <Row justify={'center'} style={{ height: '60px' }}>
            {resultInfo.message !== null ? (
              <Alert
                message={resultInfo.message}
                type={resultInfo.type}
                showIcon
                style={{ marginTop: '20px', height: '40px' }}
              />
            ) : null}
          </Row>
          <CustomerProfilePage />
        </TabPane>

        <TabPane
          tab={
            <span>
              <i className="fas fa-paw"></i> My Pets
            </span>
          }
          key="2"
        >
          <div>
            {/* Pet form is placed inside a row component for easy center alignment*/}
            <Row justify={'center'}>
              <PetForm /> {/* This is the ADD PET button */}
            </Row>

            <RenderPetProfile />
          </div>
        </TabPane>

        <TabPane
          tab={
            <span>
              <i className="fas fa-paw"></i> Appointments
            </span>
          }
          key="3"
        >
          Appointments
        </TabPane>

        <TabPane
          tab={
            <span>
              <i className="fas fa-paw"></i> Saved Groomers
            </span>
          }
          key="4"
        >
          <RenderFavGroomer />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default CustTab;
