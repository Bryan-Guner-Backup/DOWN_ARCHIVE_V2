import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { StyledButton, buttonTheme } from '../Landing/Landing-styles';
import { saveRoleId } from '../../state/actions/authenticationActions';
import devices from '../../utils/devices';

const StyledUserType = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  flex-wrap: wrap;

  @media ${devices.tablet} {
    margin-top: 2rem;
  }

  .user-type-container {
    align-items: center;
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 6px 8px #d3d3d3;
    display: flex;
    height: 22rem;
    justify-content: space-evenly;
    width: 21rem;
    padding: 2rem 1rem;
    margin: 1rem;
    flex-direction: column;
  }

  .user-description {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 80%;
    height: 100%;

    ul {
      margin: 0;
      padding: 0;
      font-size: 1.1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      height: 100%;

      li {
        list-style: none;
        text-align: center;
        color: #808080;
      }
    }
    h3 {
      font-size: 1.4rem;
      color: #141414;
      margin: 0;
    }
  }
  .user-decision button {
    font-size: 1.2rem;
    padding: 0.8rem 2rem;
  }
`;

const UserTypePage = ({ userReducer, saveRoleId, handleNext }) => {
  return (
    <StyledUserType className='users-container'>
      <div className='user-type-container'>
        <div className='user-description'>
          <h3>As A Coach</h3>
          <ul>
            <li>
              Set your own <b>income</b>
            </li>
            <li>
              <b>Coach</b> beginner developers through technical and interveiw skills
            </li>
            <li>
              Help <b>grow</b> the community
            </li>
          </ul>
        </div>
        <div className='user-decision'>
          <StyledButton
            theme={buttonTheme}
            onClick={() => saveRoleId(handleNext, 2)}
          >
            Join As Coach
          </StyledButton>
        </div>
      </div>
      <div className='user-type-container'>
        <div className='user-description'>
          <h3>As A Student</h3>
          <ul>
            <li>
              <b>Master</b> new technologies
            </li>
            <li>
              Feel <b>confident</b> in the online interview setting
            </li>
            <li>
              Land your <b>dream</b> job and start earning!
            </li>
          </ul>
        </div>
        <div className='user-decision'>
          <StyledButton
            theme={buttonTheme}
            onClick={() => saveRoleId(handleNext, 1)}
          >
            Join As Student
          </StyledButton>
        </div>
      </div>
    </StyledUserType>
  );
};

export default connect(state => state, { saveRoleId })(UserTypePage);
