import React from 'react';
import Plot from 'react-plotly.js';

const RenderGraph = () => {
  const graphWidth = window.innerWidth * 0.25;
  const graphHeight = window.innerHeight * 0.4;

  const trace1 = {
    x: [5500, 2000, 302],
    y: ['Population', 'Accessable Services', 'Growth'],
    orientation: 'h',
    type: 'bar',
  };

  const data = [trace1];
  const layout = {
    width: graphWidth,
    height: graphHeight,
    autosize: false,
    font: { size: 11 },
    showlegend: false,
    plot_bgcolor: '#161345',
    color: 'white',
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    yaxis: {
      automargin: true,
    },
    xaxis: {
      automargin: true,
    },
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
