import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch, connect } from 'react-redux';
import Searchbar from '../Searchbar/searchbar';
import { toggleSearch } from '../../../state/actions/cityActs';

const SearchContainer = styled.div`
  position: fixed;
  justify-content: center;
  align-items: center;
`;

export const IfSearching = props => {
  const searching = useSelector(state => state.isSearching);
  const dispatch = useDispatch();

  return (
    <SearchContainer>
      <div>
        <button onClick={() => toggleSearch(dispatch)}>X</button>
        <Searchbar />
      </div>
    </SearchContainer>
  );
};

const mapStateToProps = state => {
  return {
    isSearching: state.isSearching,
  };
};

export default connect(mapStateToProps, { toggleSearch })(IfSearching);
