import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { numCitiesToUrl } from '../../../utils/helpers';

import { removeFromCurrent } from '../../../state/actions/cityActs';
import store from '../../../state';

const CloseButtonContainer = styled.button`
  display: flex;
  color: #d3553f;
  transform: rotate(45deg);
  background: none;
  border: none;
  outline: none;
  font-size: 1.5rem;
  align-self: center;
  cursor: pointer;
  &:hover {
    display: flex;
    color: #fff;
    border-radius: 70%;
    background-color: #d3553f;
    width: 2rem;
    height: 2rem;
    justify-content: center;
    align-items: center;
  }
`;

function CloseButton({ cityid, currentCities }) {
  const history = useHistory();
  const { dispatch } = store;

  useEffect(() => {
    // When the number of current cities changes change the url the page is on if applicable
    history.push(numCitiesToUrl(currentCities));
  }, [currentCities, history]);

  const onClick = e => {
    e.preventDefault();

    removeFromCurrent(dispatch, cityid, currentCities);
  };

  return (
    <CloseButtonContainer onClick={onClick}>
      <FaPlus width="1.375rem" />
    </CloseButtonContainer>
  );
}

const mapStateToProps = state => {
  return {
    currentCities: state.currentCities,
  };
};

export default connect(mapStateToProps, {})(CloseButton);
