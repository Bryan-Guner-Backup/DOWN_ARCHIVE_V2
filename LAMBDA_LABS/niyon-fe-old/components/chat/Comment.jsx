import styled from 'styled-components';
import { theme } from '../../lib/theme';

const moment = require('moment');

const CommentComp = ({
 name, message, date, image, currentUser 
}) => (
  <Comment currentUser={currentUser}>
    <UserData currentUser={currentUser}>
      <PhotoWrapper>
        <Photo>
          <ImgProfile
            src={image || '../../static/profile-placeholder.svg'}
            alt="User Profile Picture"
          />
        </Photo>
      </PhotoWrapper>
      <p className="name">{name}</p>
      <p className="time">{moment(date).fromNow()}</p>
    </UserData>

    <Bubble currentUser={currentUser}>
      <div>{message}</div>
    </Bubble>
  </Comment>
);

const Comment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.currentUser ? 'flex-end' : 'flex-start')};
  .data {
    margin-bottom: 15px;
  }

  .user {
    background: red;
  }
`;

const UserData = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-bottom: 0;
    margin-right: 10px;
  }

  .name {
    font-weight: 500;
  }

  .time {
    color: ${({ theme }) => theme.grey};
  }
`;

const PhotoWrapper = styled.div`
  display: flex;
  margin-right: 5px;
`;

const Photo = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #eaeaea;
  overflow: hidden;
`;

const ImgProfile = styled.img`
  object-fit: cover;
  width: 100%;
`;

const Bubble = styled.div`
  max-width: 60%;
  display: flex;
  div {
    box-sizing: border-box;
    color: ${props => (props.currentUser ? '#222222' : 'white')};
    padding: 10px;
    line-height: 20px;
    background-color: ${props => (props.currentUser ? '#f1f0f0' : '#348fbb')};
    border-radius: 7px;
    margin: 10px 0 20px 0;
    word-break: break-word;
  }

  /* &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 3%;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-bottom-color: #348fbb;
    border-top: 0;
    margin-left: -10px;
    margin-top: -10px;
  } */
`;

export default CommentComp;
