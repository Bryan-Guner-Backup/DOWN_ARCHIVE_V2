import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRooms, fetchPopularByRoom, setCurrentRoom } from '../../actions/';
import RoomsContainer from './styles/roomsStyle';

const Rooms = (props) => {
  const [query, setQuery] = useState("")
  const history = useHistory();

  useEffect(() => {
    props.fetchRooms();
    if (localStorage.getItem("currentRoom")) {
      props.setCurrentRoom(JSON.parse(localStorage.getItem("currentRoom")))
    }
  }, []);

  useEffect(() => {
    const params = new URLSearchParams()
    if (query) {
      params.append("room", query)
      history.push({search: params.toString()})
    } 
  }, [query, history])

  const handleClick = (room) => {
    setQuery(room.id)
    props.setCurrentRoom(room)
    localStorage.setItem("currentRoom", JSON.stringify(room))
  }

  const handleAll = () => {
    setQuery(null);
    props.setCurrentRoom({});
  }

  return (
    <RoomsContainer>
      {/* <h2>Rooms</h2> */}
      <ul>
        <li className="room-item" onClick={handleAll}>All Posts</li>
      {props.rooms.length > 0 ? (
        props.rooms.map((item) => {
          return <li className="room-item" key={item.id} onClick={() => handleClick(item)}>{item.name}</li>;
        })
      ) : (
        <p>No Rooms Loaded</p>
      )}
      </ul>
    </RoomsContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    rooms: state.rooms,
  };
};

export default connect(mapStateToProps, { fetchRooms, fetchPopularByRoom, setCurrentRoom })(
  Rooms
);
