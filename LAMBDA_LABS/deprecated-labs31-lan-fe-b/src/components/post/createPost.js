import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { postQuestion, fetchRooms } from '../../actions';
import Header from '../common/header';
import CreatePostContainer from './styles/createPostStyle';

const CreatePost = (props) => {
  const history = useHistory();
  useEffect(() => {
    if(props.rooms.length == 0) {
      props.fetchRooms();
    }
    if(props.currentRoom != '') {
      setInput({ ...input, room_id: props.currentRoom.id })
    }
  }, [])

  let roomOptions = props.rooms.map((room) => (
    <option key={room.id} value={room.id}>{room.name}</option> 
  ))

  const [category, setCategory] = useState('');
  const [input, setInput] = useState({
    room_id: '',
    question: '',
    answer: '',
  });
  const [error, setError] = useState({
    checkbox: '',
    question: '',
    answer: '',
  });

  const onChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (input.question === '') {
      setError({
        checkbox: '',
        question: 'Please enter a question',
        answer: '',
      });
    } else if (input.answer === '') {
      setError({
        checkbox: '',
        question: '',
        answer: 'Please enter an answer',
      });
    } else {
      setError({
        checkbox: '',
        question: '',
        answer: '',
      });
      props
        .postQuestion(
          input.question,
          input.answer,
          input.room_id
          // props.user.track,
          // props.history
        )
        .then((response) => {
          const params = new URLSearchParams()
          params.append("room", props.currentRoom.id)
          history.push({pathname: '/', search: params.toString()})
          // props.history.push(`/?room=${props.currentRoom.id}`);
        })
        .catch((error) => {
          console.log(error);
          setError({
            checkbox: '',
            question: '',
            answer: 'An entry exceeds the character limit',
          });
        });
    }
  };

  return (
    <>
      <Header history={props.history} />
      <CreatePostContainer category={category}>
        <h2>Create a post</h2>
        <form autoComplete="off" spellCheck="false" onSubmit={onSubmit}>
          {/* <p className="category">Category</p>
          <div className="categories">
            <button type="button" onClick={() => setCategory('Behavioral')}>
              Behavioral
            </button>
            <button type="button" onClick={() => setCategory('Technical')}>
              Technical
            </button>
          </div> */}
          <label>Room</label>
          <select
            name="room_id"
            value={input.room_id}
            onChange={onChange}
            >
              {roomOptions}
            </select>
          {error.checkbox && <p className="error">{error.checkbox}</p>}

          <label>Topic</label>
          <input
            type="text"
            name="question"
            placeholder="Topic..."
            value={input.question}
            onChange={onChange}
          />
          {error.question && <p className="error">{error.question}</p>}

          <label>Text</label>
          <textarea
            type="text"
            name="answer"
            placeholder="Body text..."
            value={input.answer}
            onChange={onChange}
          />
          {error.answer && <p className="error">{error.answer}</p>}

          <div className="buttons">
            <button type="button" onClick={() => props.history.push('/')}>
              <i className="fas fa-times"></i>Cancel
            </button>
            <button type="submit">
              Submit<i className="fas fa-check"></i>
            </button>
          </div>
        </form>
      </CreatePostContainer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    currentRoom: state.currentRoom,
    rooms: state.rooms
  };
};

export default connect(mapStateToProps, { postQuestion, fetchRooms })(CreatePost);
