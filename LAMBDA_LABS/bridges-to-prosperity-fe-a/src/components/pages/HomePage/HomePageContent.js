import React, { useContext, useEffect } from 'react';
import { BridgesContext } from '../../../state/bridgesContext';
import { RenderMap } from '../DataViz/index';
import Navigation from '../../common/Navigation';
import Footer from '../../common/Footer';
import { getDSData, getBridgeData, getHospitalData } from '../../../api/index';

const HomePageReact = () => {
  const {
    bridgeData,
    setBridgeData,
    hospitalData,
    setHospitalData,
  } = useContext(BridgesContext);

  useEffect(() => {
    getBridgeData().then(data => {
      setBridgeData(data);
      // console.log(`bridge: ${data}`)
    });

    getHospitalData().then(data => {
      setHospitalData(data);
      // console.log(data)
    });
  }, [setBridgeData]);

  return (
    <div className="container">
      <Navigation />
      <div className="map_container">
        <RenderMap />
      </div>
      <Footer />
    </div>
  );
};

export default HomePageReact;
