import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../styles/headers';
import Organization from './Organization';
import Nav from '../Landing/Nav';
import styled from 'styled-components';

const StyledDiv = styled.div`
  border-bottom: 3px solid gray;
`;

const RenderPartnerAdminsPage = props => {
  return (
    <div>
      <StyledDiv id="painful">
        <Nav />
      </StyledDiv>
      {props.data.map(item => (
        /*Styles and structure imported from Organization component */
        <Organization
          id={item.id}
          name={item.name}
          phone={item.phone}
          address={item.address}
          alt={item.title}
          src={item.thumbnailUrl}
        />
      ))}
    </div>
  );
};
export default RenderPartnerAdminsPage;

RenderPartnerAdminsPage.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      title: PropTypes.string,
      url: PropTypes.string,
      thumbnailUrl: PropTypes.string,
    })
  ).isRequired,
};
