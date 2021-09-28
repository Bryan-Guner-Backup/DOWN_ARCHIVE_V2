import React from 'react';
import { Avatar, Divider } from 'antd';
import moment from 'moment';

const MentorSLot = props => {
  let x = moment(props.item.availability.as_early_as, 'HH:mm').format('H:mm');
  let y = moment(props.item.availability.as_late_as, 'HH:mm').format('H:mm');

  return (
    <div>
      <Divider />
      <div>
        <Avatar src={props.item.mentor_picture} />
        <header>{props.item.first_name + ' ' + props.item.last_name}</header>
        <header>Time Zone: </header>
        <header>{props.item.availability.time_zone}</header>
        <header>Availability: </header>
        <header>{x + ' - ' + y}</header>
      </div>
    </div>
  );
};

export default MentorSLot;
