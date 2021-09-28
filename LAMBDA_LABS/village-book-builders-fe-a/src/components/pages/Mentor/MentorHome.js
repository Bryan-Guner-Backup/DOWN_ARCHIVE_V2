import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMentors } from '../../../state/actions';
// import mentorList from './MentorList'

const MentorHome = props => {
  const { profile } = props;

  useEffect(() => {
    props.fetchMentors(1); // change this later with login
  }, []);
  // console.log(profile);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }} className="page-title">
        Mentor Home Page
      </h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    profile: state.mentorReducer.mentorProfile,
  };
};

export default connect(mapStateToProps, { fetchMentors })(MentorHome);
