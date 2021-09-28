import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRooms } from '../../actions/index';
import Header from '../common/header';
import CreateRooms from './createRooms';
import { Rooms } from './Rooms';
import { updateRoom, deleteRoom } from '../../actions/index';

const EditRooms = (props) => {
  useEffect(() => {
    props.fetchRooms();
  }, []);
  return (
    <>
      <Header history={props.history} />
      <CreateRooms />
      {props.rooms.map((item) => (
        <Rooms
          item={item}
          update={props.updateRoom}
          delete={props.deleteRoom}
          key={item.id}
        />
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    rooms: state.rooms,
  };
};

export default connect(mapStateToProps, { fetchRooms, updateRoom, deleteRoom })(
  EditRooms
);
