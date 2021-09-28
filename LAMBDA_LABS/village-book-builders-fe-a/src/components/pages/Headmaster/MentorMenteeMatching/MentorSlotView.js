import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchMentors } from '../../../../state/actions/index';
import MentorSLot from './MentorSlotCard';

const MentorSlotView = props => {
  useEffect(() => {
    props.fetchMentors();
  }, []);

  return (
    <div>
      <h1>Mentor Time Slots</h1>
      <div>
        {props.mentors
          .sort((a, b) =>
            a.availability.as_early_as > b.availability.as_early_as ? 1 : -1
          )
          .map(item => (
            <MentorSLot key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.headmasterReducer.isLoading,
    mentors: state.headmasterReducer.mentors,
  };
};

export default connect(mapStateToProps, { fetchMentors })(MentorSlotView);
