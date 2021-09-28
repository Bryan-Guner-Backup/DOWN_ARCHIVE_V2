import * as React from "react";
import { Chart } from "react-google-charts";

export const BudgetRing = ({ totals, user, size, pH, c1, c2 }) => {
  const total = Math.round(totals);
  const data = [
    ["Budget", "Amount"],
    ["Total Consumed", total],
    ["Remaining", user - total < 0 ? 0 : user - total],
  ];

  const options = {
    pieHole: pH,
    is3D: false,
    legend: {
      position: "none",
    },
    chartArea: {
      width: size,
      height: size,
    },
    backgroundColor: "none",
    enableInteractivity: false,
    fontSize: 12,
    colors: [c1, c2],
    pieSliceText: "none",
  };

  return (
    <div style={{ margin: "10px 0" }}>
      <Chart
        chartType="PieChart"
        width={185}
        height={185}
        data={data}
        options={options}
      />
    </div>
  );
};
