import React from 'react';
import 'antd/dist/antd.css';
// import './index.css';
import { Card } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

function CityInfo(props) {
  const crimeRate = props.cityInfo.crime_overall;
  // console.log("props", props.cityInfo.walkability[0]);
  // const walkScore = props.cityInfo.walkability[0].walk_score;
  // console.log("walkability", props.cityInfo.walkability);

  return (
    <div className="site-card-border-less-wrapper">
      <Card
        title={props.city + ', ' + props.state}
        bordered={false}
        style={{ width: 300 }}
      >
        <p>Average Rent Price:</p>
        <p>Overall Crime Rate: {crimeRate}</p>
        <p>Walkability Score: </p>
        <HeartOutlined />
      </Card>
    </div>
  );
}
export default CityInfo;
