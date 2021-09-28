import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMentors } from '../../../state/actions';

const MentorProfile = ({ fetchMentors, profile }) => {
  useEffect(() => {
    fetchMentors(1); // change this later with login
  }, [fetchMentors]);

  console.log('inside the mentor edit form', profile);
  return (
    <div className="form-container">
      <div>
        <h1 className="page-title">Profile</h1>
        <div className="profile-item-title">Name</div>
        <div className="profile-item">
          {/* {profile.first_name} {profile.last_name} */}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    profile: state.mentorReducer.mentorProfile,
  };
};
export default connect(mapStateToProps, { fetchMentors })(MentorProfile);
