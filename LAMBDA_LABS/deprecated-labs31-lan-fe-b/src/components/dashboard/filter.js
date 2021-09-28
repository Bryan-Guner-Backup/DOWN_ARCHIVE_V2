import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchRecent, fetchPopular } from '../../actions';
import FilterContainer from './styles/filterStyle';

const Filter = (props) => {
  const [input, setInput] = useState('Recent');

  const onChange = (event) => {
    setInput(event.target.value);

    if (event.target.value === 'Recent') {
      props.fetchRecent();
    } else {
      props.fetchPopular();
    }
  };

  return (
    <FilterContainer>
      <div className="filters">
        <label htmlFor="sort">SORT</label>
        <select name="sort" value={input} onChange={onChange}>
          <option value="Recent">Recent</option>
          <option value="Popular">Popular</option>
        </select>
      </div>

      {props.currentRoom.name && (
        <button
          className="post-a-question"
          onClick={() => props.history.push('/post')}
        >
          <i className="fas fa-plus"></i>Post a question
        </button>
      )}
    </FilterContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    currentRoom: state.currentRoom,
  };
};

export default connect(mapStateToProps, { fetchRecent, fetchPopular })(Filter);
