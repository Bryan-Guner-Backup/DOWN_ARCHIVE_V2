import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import {
  CarouselWrapper,
  CarouselSlot,
  CarouselContainer,
  CarouselDots,
  SelectedDot,
} from './styles/CarouselStyles';

const getOrder = ({ index, pos, numItems }) => {
  return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos;
};
const initialState = { pos: 0, sliding: false, dir: 'RIGHT', dotIndex: 1 };

function reducer(state, { type, numItems }) {
  switch (type) {
    case 'LEFT':
      return {
        ...state,
        dir: 'LEFT',
        sliding: true,
        pos: state.pos === 0 ? numItems - 1 : state.pos - 1,
        dotIndex: state.dotIndex,
      };
    case 'RIGHT':
      return {
        ...state,
        dir: 'RIGHT',
        sliding: true,
        pos: state.pos === numItems - 1 ? 0 : state.pos + 1,
        dotIndex: state.dotIndex,
      };
    case 'STOP':
      return { ...state, sliding: false };
    default:
      return state;
  }
}

const GraphCarousel = props => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const numItems = React.Children.count(props.children);
  const [dots, setDots] = useState(
    <CarouselDots>
      {' '}
      • <SelectedDot>•</SelectedDot> •{' '}
    </CarouselDots>
  );
  const slide = dir => {
    dispatch({ type: dir, numItems });
    setTimeout(() => {
      dispatch({ type: 'STOP' });
    }, 50);
  };

  const colorDot = () => {
    if (state.dotIndex === 0) {
      setDots(
        <CarouselDots>
          {' '}
          <SelectedDot>•</SelectedDot> • •{' '}
        </CarouselDots>
      );
    } else if (state.dotIndex === 1) {
      setDots(
        <CarouselDots>
          {' '}
          • <SelectedDot>•</SelectedDot> •{' '}
        </CarouselDots>
      );
    } else if (state.dotIndex === 2) {
      setDots(
        <CarouselDots>
          {' '}
          • • <SelectedDot>•</SelectedDot>{' '}
        </CarouselDots>
      );
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      state.dotIndex + 1 > 2
        ? (state.dotIndex = 0)
        : (state.dotIndex = state.dotIndex + 1);
      colorDot();
      slide('RIGHT');
    },
    onSwipedRight: () => {
      state.dotIndex - 1 < 0
        ? (state.dotIndex = 2)
        : (state.dotIndex = state.dotIndex - 1);
      colorDot();
      slide('LEFT');
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  return (
    <div {...handlers}>
      <CarouselWrapper>
        <CarouselContainer dir={state.dir} sliding={state.sliding}>
          {React.Children.map(props.children, (child, index) => (
            <CarouselSlot
              key={index}
              order={getOrder({ index: index, pos: state.pos, numItems })}
            >
              {child}
            </CarouselSlot>
          ))}
        </CarouselContainer>
        {dots}
      </CarouselWrapper>
    </div>
  );
};

export default GraphCarousel;
