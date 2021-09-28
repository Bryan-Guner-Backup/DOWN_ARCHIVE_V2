//Import React
import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
//Import Actions
import {
  deleteUserBook,
  addBookToUserLibrary,
  updateBookFavorite,
  updateBookReadingStatus,
  updateBookUserRating,
  updateSingleBookField,
  moveBookFromShelf,
} from '../../store/actions/index';
//Helpers and tracking
import {
  updateBookItem,
  updateDates,
  sendUpTheFlares,
  updateUserRating,
} from '../../utils/helpers';
import history from '../../utils/history';
import { Event } from '../../utils/tracking';
//Import Moment
import moment from 'moment';
//Import Components
import BookCardContainer from './styles/BookCardStyle';
import BookIcon from './BookIcon';
//Import design
import { Button, Rate, Menu, Dropdown, DatePicker } from 'antd';
import DownOutlined from '@ant-design/icons/DownOutlined';
import HeartFilled from '@ant-design/icons/HeartFilled';
import HeartOutlined from '@ant-design/icons/HeartOutlined';

const BookCard = (props) => {
  const { googleId } = props.book;
  // Done
  const [libraryBook, setLibraryBook] = useState(
    props.userBooks.find((b) => b.googleId === googleId) || null
  );
  // Done
  const [inLibrary, setInLibrary] = useState(
    libraryBook !== null ? true : false
  );
  // Done
  const [readrrId, setReadrrId] = useState(
    libraryBook !== null ? libraryBook.bookId : null
  );
  // Done
  const [favorite, setFavorite] = useState(
    libraryBook !== null && libraryBook.favorite ? true : false
  );
  // Done
  const [readingStatus, setReadingStatus] = useState(
    inLibrary ? parseInt(libraryBook.readingStatus) : null
  );
  const [trackBtnLabel, setTrackBtnLabel] = useState('Track this');

  let actionType = null;
  const readingStatusRef = useRef(readingStatus);
  const favoriteRef = useRef(favorite);
  const firstRun = useRef(true);

  // const user = localStorage.getItem('id');

  // Need to fix this...
  // There are two useEffects
  // Dunno what to do here
  useEffect(() => {
    // Can be broken into a switch
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    // run if reading status changes
    if (readingStatusRef.current !== readingStatus) {
      actionType = 'readingStatus';
      readingStatusRef.current = readingStatus;
    }
    // run if favorite status changes
    if (favoriteRef.current !== favorite) {
      actionType = 'favorite';
      favoriteRef.current = favorite;
    }
    // Can be broken into a switch
    updateBookItem(
      props.user,
      readrrId,
      inLibrary,
      props.book,
      actionType,
      favorite,
      parseInt(readingStatus)
    )
      .then((results) => {
        let newBookId;
        console.log('Updating Book');
        if (results.config.method === 'post') {
          // add book to library
          console.log(results.data);
          newBookId = results.data.bookId;
          props.addBookToUserLibrary(results.data);
          setLibraryBook(results.data);
          setReadrrId(results.data.bookId);
          setInLibrary(true);
          window.location.reload();
        }
        // analytics event action
        if (actionType === 'favorite') {
          // favorite update
          props.updateBookFavorite(newBookId || readrrId);
          Event(
            'TRACKING',
            favorite
              ? 'User added a book to favorites from search list.'
              : 'User removed a book from favorites on search list.',
            'BOOK_CARD'
          );
          sendUpTheFlares(
            'success',
            'Success',
            favorite
              ? 'Book added to favorites.'
              : 'Book removed from favorites.'
          );
          window.location.reload();
        } else if (actionType === 'readingStatus' && readingStatus < 4) {
          // reading status update
          props.updateBookReadingStatus(
            newBookId || readrrId,
            parseInt(readingStatus)
          );
          // only move book if not in mybooks
          if (
            history.location.pathname !== '/home' &&
            props.source !== 'search' &&
            props.source !== 'recommendation'
          ) {
            props.moveBookFromShelf(
              newBookId || readrrId,
              parseInt(readingStatus)
            );
          }
          Event(
            'TRACKING',
            'User added a book to start tracking from search list.',
            'BOOK_CARD'
          );
          sendUpTheFlares(
            'success',
            'Success',
            'Reading status has been updated.'
          );
          window.location.reload();
        } else {
          // delete
          props.deleteUserBook(readrrId);
          props.moveBookFromShelf(
            newBookId || readrrId,
            parseInt(readingStatus)
          );
          Event('TRACKING', 'User deleted a book from library.', 'BOOK_CARD');
          sendUpTheFlares(
            'success',
            'Success',
            'Book deleted from your library.'
          );
          window.location.reload();
        }
      })
      .catch((err) => {
        Event(
          'Search',
          'Error tracking/favoriting/deleting a book.',
          'BOOK_CARD'
        );
        sendUpTheFlares(
          'warning',
          'Success',
          'There was an error tracking a book.'
        );
      });
  }, [favorite, readingStatus]);

  // Dunno what to do here
  // Making this a switch
  // Try to update it on the fly rather than forcing a page reload
  useEffect(() => {
    if (readingStatus === 1) {
      setTrackBtnLabel('To read');
      Event('TRACKING', 'User tracked a book to To Read', 'BOOK_CARD');
    } else if (readingStatus === 2) {
      setTrackBtnLabel('In progress');
      Event('TRACKING', 'User tracked a book to In Progress', 'BOOK_CARD');
    } else if (readingStatus === 3) {
      setTrackBtnLabel('Finished');
      Event('TRACKING', 'User tracked a book to Finished', 'BOOK_CARD');
    } else {
      setTrackBtnLabel('Track this');
    }
  }, []);

  // In Progress
  const readingStatusUpdate = (key) => {
    setReadingStatus(key.item.props.value);
    setTrackBtnLabel(key.item.props.children);
  };

  // In Progress
  const updateRating = (rate) => {
    updateUserRating(props.user, libraryBook.bookId, rate)
      .then((result) => {
        Event('RATING', 'User rated a book.', 'BOOK_CARD');
        props.updateBookUserRating(libraryBook.bookId, rate); //update redux state...
        sendUpTheFlares('success', 'Success', 'Your book has been rated');
        setLibraryBook({
          ...libraryBook,
          userRating: rate,
        });
      })
      .catch((err) => console.log(err.response));
  };

  // In Progress
  const handleDates = (date, dateString, whichDate) => {
    updateDates(props.user, readrrId, dateString, whichDate)
      .then((result) => {
        if (result.data.dateStarted)
          props.updateSingleBookField(
            readrrId,
            'dateStarted',
            result.data.dateStarted.split('T')[0]
          );
        if (result.data.dateEnded)
          props.updateSingleBookField(
            readrrId,
            'dateEnded',
            result.data.dateEnded.split('T')[0]
          );
        setLibraryBook({
          ...libraryBook,
          dateStarted:
            result.data.dateStarted && result.data.dateStarted.split('T')[0],
          dateEnded:
            result.data.dateEnded && result.data.dateEnded.split('T')[0],
        });
      })
      .catch((err) => console.log(err));
  };

  // Exported
  const searchMenu = (
    <Menu onClick={(key) => readingStatusUpdate(key)}>
      <Menu.Item key='1' value='1'>
        To read
      </Menu.Item>
      <Menu.Item key='2' value='2'>
        Reading
      </Menu.Item>
      <Menu.Item key='3' value='3'>
        Finished
      </Menu.Item>
    </Menu>
  );

  // Exported
  const libraryMenu = (
    <Menu onClick={(key) => readingStatusUpdate(key)}>
      <Menu.Item key='1' value='1'>
        To read
      </Menu.Item>
      <Menu.Item key='2' value='2'>
        Reading
      </Menu.Item>
      <Menu.Item key='3' value='3'>
        Finished
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='4' value='4'>
        Delete
      </Menu.Item>
    </Menu>
  );

  return (
    <BookCardContainer
      thumbnail={props.book.thumbnail || props.book.smallThumbnail}
      source={props.source}
      conWidth={props.source === 'recommendation' ? '88px' : '335px'}
      data-library={inLibrary}
      data-book={props.book.googleId}
    >
      <div className='thumbnail-container'>
        <div
          data-testid='thumb-button'
          className='thumbnail'
          onClick={() => {
            history.push(`/book/${googleId}`);
            window.location.reload();
            Event('Book', 'User clicked for book details', 'SEARCH_RESULTS');
          }}
        >
          {!props.book.thumbnail && !props.book.smallThumbnail && (
            <BookIcon height='40px' width='40px' fill='#547862' />
          )}
        </div>

        <Dropdown
          overlay={props.source === 'search' ? searchMenu : libraryMenu}
          trigger={['click']}
        >
          <Button
            className={trackBtnLabel === 'Track this' ? 'orange' : 'green'}
          >
            {trackBtnLabel}
            <DownOutlined />
          </Button>
        </Dropdown>
      </div>
            {/* Done */}
      <div className='information'>
        <div className='title-author-and-favorite'>
          <div className='title-and-author'>
            <p
              data-testid='title-link'
              className='title'
              onClick={() => history.push(`/book/${googleId}`)}
            >
              {props.book.title}
            </p>
            {props.book.authors && (
              <p
                data-testid='author-link'
                className='author'
                onClick={() => history.push(`/book/${googleId}`)}
              >
                {props.book.authors.includes(',')
                  ? props.book.authors.split(',')[0]
                  : props.book.authors}
              </p>
            )}
          </div>
          <div className='favorite'>
            {favorite ? (
              <HeartFilled onClick={() => setFavorite(!favorite)} />
            ) : (
              <HeartOutlined onClick={() => setFavorite(!favorite)} />
            )}
          </div>
        </div>
        {/* Done */}
        {props.source === 'library' && (
          <div className='calendars'>
            <div className='calendar'>
              <p>DATE STARTED</p>
              <DatePicker
                placeholder='Started'
                defaultValue={
                  libraryBook !== null && libraryBook.dateStarted !== null
                    ? moment(libraryBook.dateStarted, 'YYYY-MM-DD')
                    : null
                }
                onChange={(date, dateString) =>
                  handleDates(date, dateString, 0)
                }
              />
            </div>

            <div className='calendar'>
              <p>DATE ENDED</p>
              <DatePicker
                placeholder='Ended'
                defaultValue={
                  libraryBook !== null && libraryBook.dateEnded !== null
                    ? moment(libraryBook.dateEnded, 'YYYY-MM-DD')
                    : null
                }
                onChange={(date, dateString) =>
                  handleDates(date, dateString, 1)
                }
              />
            </div>
          </div>
        )}

        {props.source === 'search' && (
          <Rate
            defaultValue={
              libraryBook !== null && parseFloat(libraryBook.userRating)
                ? parseFloat(libraryBook.userRating)
                : props.book.averageRating
            }
            disabled={libraryBook === null}
            allowHalf
            style={
              libraryBook && parseFloat(libraryBook.userRating)
                ? { color: '#d24719' }
                : { color: '#fadb14' }
            }
            onChange={updateRating}
          />
        )}
      </div>
    </BookCardContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    userBooks: state.library.userBooks,
    userShelves: state.library.userShelves,
    user: state.authentication.user.subject,
  };
};

export default connect(mapStateToProps, {
  deleteUserBook,
  addBookToUserLibrary,
  updateBookFavorite,
  updateBookReadingStatus,
  updateBookUserRating,
  updateSingleBookField,
  moveBookFromShelf,
})(BookCard);
