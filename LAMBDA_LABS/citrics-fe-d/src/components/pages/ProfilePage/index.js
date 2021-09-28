import React, { useState } from 'react';
import styled from 'styled-components';
import { Header } from '../../common/Header';
import { FaUserCircle } from 'react-icons/fa';
import Footer from '../../common/Footer';

const ProfileContainer = styled.section`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;

  .inner-container {
    display: flex;
    width: 100%;
    min-height: 100vh - 134px - 166px;
    justify-content: center;

    .left {
      display: flex;
      width: 45%;
      flex-direction: column;
      justify-content: center;

      div {
        margin: 5%;
      }

      .notcard {
        display: flex;
        font-size: 1.2rem;
      }
    }

    .middle,
    .right {
      display: flex;
      width: 25%;
      flex-direction: column;
      align-items: flex-end;

      div {
        margin: 5% 0;
      }
    }

    .middle {
      align-items: center;
    }

    .logout {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2% 0;
      width: 153px;
      height: 45.61px;
      background-color: #d35540;
      border-radius: 15px;

      .logout-btn {
        background-color: unset;
        border: unset;
        font-size: 1.5rem;
        color: #ffffff;
        font-weight: 700;
      }
    }

    .history {
      display: flex;
      justify-content: space-between;
      font-size: 1rem;

      h3 {
        font-size: 1.3rem;
      }

      button {
        background-color: rgba(0, 0, 0, 0);
        border: 0;
      }
    }
  }
  .footer-div {
    justify-self: flex-end;
  }
`;

export const ProfilePage = () => {
  const [userPhoto, setUserPhoto] = useState();
  return (
    <ProfileContainer>
      <Header />
      <div className="inner-container">
        <div className="left">
          <div className="profilePicture">
            {userPhoto ? (
              <div className="notcard">
                <img
                  src={userPhoto}
                  width="150px"
                  alt="{username}'s profile display pic"
                />
              </div>
            ) : (
              <div className="notcard">
                <FaUserCircle color="#000000" size="150px" />

                <div>
                  <h3>Name</h3>
                  <h3>Email</h3>
                  <h3>Current Location</h3>
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="history">
              <h3>Activity History</h3>
              <button>Delete History</button>
            </div>
            <div>
              {/* {recentActivity.map(c => {
                            return (
                                <h4>{c.name}</h4>
                                <p>{activityDate}</p>
                            )
                        })} */}
            </div>
          </div>
        </div>
        <div className="middle">
          <div>
            <h2>Favorite Cities</h2>
            <ul>
              {/* {favoriteCities.map(c => {
                            return (
                                <li><button onClick={}>X</button>{c.name}</li>
                            )
                        })} */}
            </ul>
          </div>
        </div>

        <div className="right">
          <div className="logout">
            <button className="logout-btn">Logout</button>
          </div>
        </div>
      </div>
      <div className="footer-div">
        <Footer />
      </div>
    </ProfileContainer>
  );
};
