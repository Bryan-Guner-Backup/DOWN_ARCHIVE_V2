import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const CarouselSlot = styled.div`
  flex: 1 0 100%;
  flex-basis: 100%;
  margin-right: 0px;
  order: ${props => props.order};
`;

export const CarouselContainer = styled.div`
  display: flex;
  transition: ${props => (props.sliding ? 'none' : 'transform 1s ease')};
  transform: ${props => {
    if (!props.sliding) return 'translateX(calc(-100%))';
    if (props.dir === 'LEFT') return 'translateX(calc(2 * (-100%)))';
    return 'translateX(0%)';
  }};
`;

export const CarouselDots = styled.p`
  font-size: 2.5rem;
  letter-spacing: 0.8rem;
  margin-bottom: 60px;
`;

export const SelectedDot = styled.span`
  font-size: 3.5rem;
  color: rgb(189, 35, 125);
`;
