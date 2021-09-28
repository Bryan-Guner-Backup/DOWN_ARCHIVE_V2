//libraries
import React, { useEffect } from 'react';
import Plot from 'react-plotly.js';
import { useSelector, useDispatch } from 'react-redux';
import { mapSelection } from '../state/actions/mapActions';
import { barSelection } from '../state/actions/barActions';
import { pieSelection } from '../state/actions/pieActions';
import { forceSelection } from '../state/actions/forceActions';
import { incidentSelection } from '../state/actions/incidentsActions';
import { demoSelection } from '../state/actions/demoActions';

export default function Visualization() {
  //states
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
  }, []);

  //Todo: make map full width and height
  return (
    <div>
      <Plot data={mapData} layout={mapLayout} />
      <Plot data={barData} layout={barLayout} />
      <Plot data={pieData} layout={pieLayout} />
      <Plot data={forceData} layout={forceLayout} />
      <Plot data={incidentData} layout={incidentLayout} />
      <Plot data={demoData} layout={demoLayout} />
    </div>
  );
}
