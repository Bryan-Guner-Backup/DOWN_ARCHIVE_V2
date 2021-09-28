import React, { useState, useEffect } from 'react';
// import OldMap from './OldMap';
import { useDispatch } from 'react-redux';
import Map from './Map';
import Graph from './Graph';
import About from './About';
import FiltersForm from './FilterForm';
import 'antd/dist/antd.css';
import '../../styles/index.css';
import { Tabs, Button, Popover } from 'antd';
import NavBar from './NavBar';
import { fetchIncidents } from '../../state/actions';
import calendar from '../../assets/calendar.jpg';

export const App = () => {
  const { TabPane } = Tabs;
  const dispatch = useDispatch();

  const openFilters = (
    <Popover
      placement="bottomRight"
      title={<span>Filter Your Results</span>}
      content={<FiltersForm />}
      trigger="click"
    >
      <Button type="link">Open Filters</Button>
    </Popover>
  );
  useEffect(() => {
    // -> showcase our data instantly from the api call
    dispatch(fetchIncidents());
  }, []);

  return (
    <div>
      <NavBar />
      <div className="tabs-container">
        <Tabs
          defaultActiveKey="1"
          type="card"
          size="large"
          tabBarExtraContent={openFilters}
          tabBarStyle={{
            backgroundColor: '#003767',
            paddingTop: '10px',
            paddingLeft: '5px',
          }}
        >
          <TabPane tab="Map" key="1">
            <div className="map-container">
              <div id="map" style={{ display: 'block' }}>
                {<Map />}
              </div>
              {/* Future contribution: Make the calendar into a working component instead of just having a picture. Could possibly be used instead of graph. */}
              <img
                src={calendar}
                alt="Calendar showing amount of days how many people die to police each day."
              ></img>

              <div className="map-tab-text">
                <div>
                  <h3> AMERICAN IDEALS. UNIVERSAL VALUES.</h3>
                  <p>
                    On human rights, the United States must be a beacon.
                    Activists fighting for freedom around the globe continue to
                    look to our country for inspiration and count on us for
                    support. Upholding human rights is not only a moral
                    obligation; it’s a vital national interest: America is
                    strongest when our policies and actions match our values.
                  </p>
                </div>
              </div>
              <footer className="page-footer">
                <small>© Copyright 2020. All rights reserved.</small>
              </footer>
            </div>
          </TabPane>
          <TabPane tab="Graph" key="2" style={{ backgroundColor: '#191a1a' }}>
            <div id="graph">{<Graph />}</div>
          </TabPane>
          <TabPane tab="About" key="3">
            <div id="about">{<About />}</div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};
