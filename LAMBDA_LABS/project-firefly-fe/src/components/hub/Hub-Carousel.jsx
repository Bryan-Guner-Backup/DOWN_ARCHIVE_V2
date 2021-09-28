import React, { useState } from 'react';
import { CarouselDiv } from './Hub-Styles';

const Carousel = (props) => {
  const [images, setImages] = useState(props.images || []);
  const [selected, setSelected] = useState(0);

  const moveLeft = e => {
    if(selected <= 0) setSelected(images.length - 1);
    else setSelected(selected - 1);
  };

  const moveRight = e => {
    if(selected >= images.length - 1) setSelected(0);
    else setSelected(selected + 1);
  };

  return (
    <CarouselDiv className='carousel' style={ props.styles ? props.styles : {} }>
      <div className='left-arrow' onClick={moveLeft}>{'<'}</div>
      <div className='reel'>
        {images.map((i, index) => {
          return <img className={index === selected ? 'carousel-img selected' : 'carousel-img'} src={i} alt='Carousel' key={index} />;
        })}
      </div>
      <div className='right-arrow' onClick={moveRight}>{'>'}</div>
    </CarouselDiv>
  );
};

export default Carousel;
