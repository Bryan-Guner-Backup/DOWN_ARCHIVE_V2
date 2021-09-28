//Import React
import React from 'react';
import { connect } from 'react-redux';
//Import Actions
import {
  setBreadcrumbs,
  deleteShelf,
  fetchUsersShelves,
} from '../../store/actions';
//Import Components
import BookCard from '../Book/BookCard';
import BookCardContainer from '../Book/styles/BookCardStyle';
//Styling
import { Carousel, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import ShelfSwipeContainer from './styles/StatusShelfStyle';
// Utils

const ShelfSwipe = (props) => {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: props.size || '32px',
        color: props.color || '#547862',
      }}
      spin
    />
  );

  const carouselProps = {
    dots: false,
    infinite: false,
    swipeToSlide: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1119,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const loadingBooks = ['', '', '', '', ''];

  return (
    <ShelfSwipeContainer
      length={loadingBooks.length}
      source={'recommendation'}
      data-testid='shelf-swipe-container'
    >
      <div className='header'>
        <p className='status'>
          {props.title ? props.title : 'Recommendations'}
        </p>
      </div>
      <div className='swiper'>
        <Carousel {...carouselProps}>
          {loadingBooks.map((_book, index) => (
            <BookCardContainer
              thumbnail={''}
              source={props.source}
              conWidth={'88px'}
              data-library={false}
              data-book={''}
            >
              <div className='thumbnail-container'>
                <div data-testid='thumb-button' className='thumbnail'>
                  <Spin indicator={antIcon} />
                </div>
              </div>
            </BookCardContainer>
          ))}
        </Carousel>
      </div>
    </ShelfSwipeContainer>
  );
};

export default connect(null, {
  setBreadcrumbs,
  deleteShelf,
  fetchUsersShelves,
})(ShelfSwipe);
