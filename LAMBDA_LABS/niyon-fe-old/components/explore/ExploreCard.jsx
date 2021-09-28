import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from 'antd';
import Link from 'next/link';
import { Heading3 } from '../~common';
import { profile_placeholder } from '../../lib/utils';
import { theme } from '../../lib/theme';

function ExploreCard(props) {
  const position = props.Mentor ? 'Mentor' : 'Mentee';

  const job = props.job ? props.job.tech_name : 'Not listed';

  return (
    <Link
      href={{
        pathname: '/profile',
        query: { id: props.id }
      }}
    >
      <Wrapper>
        <Contents>
          <PhotoWrapper>
            <Photo>
              <ImgProfile
                src={props.profile_picture || profile_placeholder}
                alt="Profile Picture"
              />
            </Photo>
          </PhotoWrapper>
          <Text>
            <StyledH3>
              {props.first_name || 'Not Listed'} {props.last_name}
            </StyledH3>
            <small>Field: {job || 'Not listed'}</small>
            <Bio>
              <p>{props.biography}</p>
            </Bio>
          </Text>
        </Contents>

        <Location>
          <L>
            <Icon type="book" />
            <small>{position}</small>
          </L>
          <L>
            <Icon type="global" />
            <small>
              {props.location && props.location.city_name},{' '}
              {props.location && props.location.country_name}
            </small>
          </L>
        </Location>
      </Wrapper>
    </Link>
  );
}

ExploreCard.propTypes = {
  Mentor: PropTypes.shape().isRequired,
  biography: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  location: PropTypes.shape().isRequired,
  profile_picture: PropTypes.string.isRequired,
  job: PropTypes.shape.isRequired
};

const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 48%;
  height: 200px;
  padding: 1rem 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin: 1rem 0;
  transition: transform 200ms;
  background: white;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.tabletWidth}) {
    width: 100%;
    padding: 0.5rem 1rem;
    margin: 0;
  }

  &:hover {
    transform: scale(1.025);
  }
`;

const Contents = styled.div`
  display: flex;
  padding: 10px 0;
`;

const PhotoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
`;

const Photo = styled.div`
  width: 100px;
  height: 100px;
  background: #eaeaea;
  border-radius: 50%;
  overflow: hidden;
`;

const ImgProfile = styled.img`
  object-fit: cover;
  width: 100%;
`;

const Text = styled.div`
  font-size: ${({ theme }) => theme.h4};
`;

const Location = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #484848;

  div {
    display: flex;
    align-items: center;
  }
`;

const L = styled.div`
  color: #484848;

  small {
    margin: 0 10px;
  }
`;

const Bio = styled.div`
  flex-grow: 1;
  min-width: 0;
  display: none;

  @media (min-width: ${({ theme }) => theme.mobileWidth}) and (max-width: ${({
      theme
    }) => theme.tabletWidth}) {
    display: contents;
  }

  p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const StyledH3 = styled(Heading3)`
  @media (max-width: ${({ theme }) => theme.tabletWidth}) {
    margin-right: 30px;
    font-size: 10px;
  }
`;

export default ExploreCard;
