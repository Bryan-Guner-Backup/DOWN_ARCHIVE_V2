import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PhotoSection from './PhotoSection';
import Bio from './MyBio';
import { fetchUser } from '../../redux/actions/userActions';

const Container = styled.main`
  width: 100%;
`;

function Profile(props) {
  useEffect(() => props.getUser(props.user), [props.user]);

  if (!props.userReducer.user || props.userReducer.queryingDatabase) {
    return <div />;
  }

  if (props.userReducer.error) {
    return <div>{props.userReducer.errorMessage}</div>;
  }

  const job = props.userReducer.user.job
    ? props.userReducer.user.job.tech_name
    : 'Not listed';
  const photoProps = {
    ...props.userReducer,
    profileUser: { ...props.userReducer.user, job }
  };

  return (
    <Container>
      <Head>
        <title>
          Niyon | {props.userReducer.user.first_name}{' '}
          {props.userReducer.user.last_name} | Profile
        </title>
      </Head>
      <PhotoSection {...photoProps} isLoggedInUser />
      <Bio {...props.userReducer} />
    </Container>
  );
}

Profile.propTypes = {
  getUser: PropTypes.func.isRequired,
  user: PropTypes.shape().isRequired,
  userReducer: PropTypes.shape().isRequired
};

const mapStateToProps = ({ userReducer }) => ({ userReducer });

export default connect(
  mapStateToProps,
  { getUser: fetchUser }
)(Profile);
