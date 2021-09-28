import React from 'react';
import Plot from 'react-plotly.js';

const RenderGraph = () => {
  const trace1 = {
    y: [5500, 200, 3302],
    x: ['Total Population', 'Total Served', 'Growth'],
    type: 'bar',
    name: 'Social Effect',
  };
  const trace2 = {
    y: [500, 3300, 302],
    x: ['Total Population', 'Total Served', 'Growth'],
    type: 'bar',
    name: 'Economic Effect (USD)',
  };
  const trace3 = {
    y: [5200, 3320, 3602],
    x: ['Total Population', 'Total Served', 'Growth'],
    type: 'bar',
    name: 'Economic Effect (RWF)',
  };

  const data = [trace1, trace2, trace3];
  const layout = {
    width: 490,
    height: 320,
    font: { size: 11 },
    showlegend: true,
    legend: {
      x: 0.5,
      xanchor: 'center',
      y: 1.6,
    },
    plot_bgcolor: '#161345',
    color: 'white',
  };

  return (
    <Plot
      className="graph"
      data={data}
      layout={layout}
      config={{
        displayModeBar: false,
        responsive: true,
        fillFrame: true,
      }}
    />
  );
};

export default RenderGraph;
