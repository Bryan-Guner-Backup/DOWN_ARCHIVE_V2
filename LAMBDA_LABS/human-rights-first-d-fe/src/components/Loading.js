//libraries
import React, { useEffect } from 'react';
import Plot from 'react-plotly.js';
import About from './not_use/common/About';
import TopList from '../components/TopList';
import 'antd/dist/antd.css';

import { Tabs, Button, Popover } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { mapSelection } from '../state/actions/mapActions';
import { barSelection } from '../state/actions/barActions';
import { pieSelection } from '../state/actions/pieActions';
import { forceSelection } from '../state/actions/forceActions';
import { incidentSelection } from '../state/actions/incidentsActions';
import { demoSelection } from '../state/actions/demoActions';
import { listSelection } from '../state/actions/listAction';

// filter-forms
import Map from './forms/Map';

const Loading = () => {
  const { TabPane } = Tabs;
  const mapData = useSelector(state => state.map.data);
  const mapLayout = useSelector(state => state.map.layout);
  const barData = useSelector(state => state.bar.data);
  const barLayout = useSelector(state => state.bar.layout);
  const pieData = useSelector(state => state.pie.data);
  const pieLayout = useSelector(state => state.pie.layout);
  const forceData = useSelector(state => state.force.data);
  const forceLayout = useSelector(state => state.force.layout);
  const incidentData = useSelector(state => state.incident.data);
  const incidentLayout = useSelector(state => state.incident.layout);
  const demoLayout = useSelector(state => state.demo.layout);
  const demoData = useSelector(state => state.demo.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(barSelection());
    dispatch(mapSelection());
    dispatch(pieSelection());
    dispatch(forceSelection());
    dispatch(incidentSelection());
    dispatch(demoSelection());
    dispatch(listSelection());
  }, []);

  function callback(key) {
    console.log(key);
  }

  const operations = (
    <Popover
      placement="bottomRight"
      title={<span></span>}
      content={<Map />}
      trigger="click"
    >
      <Button type="link">Incident Filters</Button>
    </Popover>
  );

  return (
    <div>
      <main>
        <Tabs onChange={callback} type="card" tabBarExtraContent={operations}>
          <TabPane tab="Police Use of Force" key="1">
            <Button
              placement="right"
              // title={<span></span>}
              // content={<Map />}
              trigger="click"
            ></Button>
            <Plot data={forceData} layout={forceLayout} />
            <Plot data={incidentData} layout={incidentLayout} />
          </TabPane>

          <TabPane tab="Incidents of Killing" key="2">
            <Plot data={mapData} layout={mapLayout} />
            <Plot data={barData} layout={barLayout} />
            <Plot data={pieData} layout={pieLayout} />
            <Plot data={demoData} layout={demoLayout} />
          </TabPane>

          <TabPane tab="Top 5 States Police Use of Force" key="4">
            <TopList />
          </TabPane>

          <TabPane tab="About" key="3">
            <About />
          </TabPane>
        </Tabs>
      </main>
      <footer className="page-footer" style={{ paddingTop: '20px' }}>
        <h1 style={{ fontSize: '15px' }}>
          © Copyright 2020. All rights reserved.
        </h1>
      </footer>
    </div>
  );
};

export default Loading;
