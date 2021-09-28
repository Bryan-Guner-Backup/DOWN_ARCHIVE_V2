import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { connect } from 'react-redux';
import {
  fetchRecent,
  fetchUsersLikedPosts,
  fetchPopularByRoom,
} from '../../actions';
import Question from './question';
// import Rooms from './rooms';
import QuestionsContainer from './styles/questionsStyle';

const Questions = (props) => {
  const { search } = useLocation();
  const { room } = queryString.parse(search);

  useEffect(() => {
    if (room) {
      props.fetchPopularByRoom(room);
    } else {
      props.fetchRecent();
    }
    props.fetchUsersLikedPosts();
  }, [room]);
 
  console.log(props.currentRoom)
  return (
    <>
      <QuestionsContainer>
        {props.currentRoom.banner_image && <img className="room-banner" src={props.currentRoom.banner_image}/>}
        <div className="room-title">
          {props.currentRoom && <h2>{props.currentRoom.name}</h2>}
          {!props.currentRoom.name && <h2>All Posts</h2>}
        </div>
        <div className="room-description">
          <p>{props.currentRoom.description}</p>
        </div>
        {props.posts.length > 0 ? (
          props.posts.map((item, index) => <Question key={index} post={item} />)
        ) : (
          <div className="no-posts-found">
            <p>
              <i className="fas fa-exclamation"></i>No posts found
            </p>
          </div>
        )}
        {props.posts.length > 0 && (
          <p className="youve-reached-the-end">You've reached the end!</p>
        )}
      </QuestionsContainer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    search: state.search,
    posts: state.posts,
    currentRoom: state.currentRoom,
  };
};

export default connect(mapStateToProps, {
  fetchRecent,
  fetchUsersLikedPosts,
  fetchPopularByRoom,
})(Questions);
