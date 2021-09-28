import React, { useContext, useEffect, useState } from 'react';

import LayoutHFCRS from '../../common/layoutComponents/LayoutHFCRS';
import DetailsPane from '../components/DetailsPane';
import Map from '../components/Map';
import MapHeader from '../components/MapHeader';

import { axiosCodes, axiosAPICall } from '../../../utils/axiosEndpoints';
import { Context } from '../../../state/contexts';

// Implementation makes use the layout: LayoutHFCRS.js
// Adding multiple components FooterComponents={<><Comp1 /> <Comp2 /></>}

const Home = ({ LoadingComponent }) => {
  const { userInfo } = useContext(Context);
  const [userData, setUserData] = userInfo;

  //I'm putting the api call to get user infor here cause IDK where else to put it right now and this is what loads after login
  useEffect(() => {
    axiosAPICall(
      '/profiles/authenticate',
      axiosCodes.GET,
      null,
      res => {
        setUserData({
          id: res.data.id,
          name: res.data.name,
          email: res.data.email,
        });
      },
      err => {
        console.log('error: ', err);
      }
    );
  }, []);

  const [mapLatLng, setMapLatLng] = useState(null); //useState([-104.9876, 39.7405]);
  const [currentPlaceSelection, setCurrentPlaceSelection] = useState({});
  return (
    <div className="page">
      <LayoutHFCRS
        HeaderComponents={
          <MapHeader
            setMapLatLng={setMapLatLng}
            setCurrentPlaceSelection={setCurrentPlaceSelection}
          />
        }
        FooterComponents={null}
        ContentComponents={
          <>
            <Map
              mapLatLng={mapLatLng}
              currentPlaceSelection={currentPlaceSelection}
            />
          </>
        }
        SidebarComponents={null}
      />
    </div>
  );
};

export default Home;
