import { AutoComplete } from 'antd';
import 'antd/dist/antd.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { numCitiesToUrl } from '../../../utils/helpers';

import { getCities, addToCurrent } from '../../../state/actions/cityActs';
import store from '../../../state';

import styled from 'styled-components';

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 0;
  width: 320px;
  height: 46.16px;
  background-color: white;
  border-radius: 15px 0 0 15px;
  .search-bar {
    margin-left: 2%;
    border: unset;
  }
`;

const { Option } = AutoComplete;
function SearchBar(props) {
  const history = useHistory();
  const { dispatch } = store;

  const cityDict = {};
  const { allCities, currentCities } = props;

  useEffect(() => {
    console.log('search works');
    fetch('https://labs28-d-citrics-api.herokuapp.com/cities/allid')
      .then(response => {
        return response.json();
      })
      .then(data => {
        getCities(dispatch, data);
      });
  }, [dispatch]);

  function onSelect(cityName) {
    single(cityDict[cityName]);
  }

  function single(id) {
    fetch(`https://labs28-d-citrics-api.herokuapp.com/cities/city/${id}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        addToCurrent(dispatch, data);
      });
  }

  useEffect(() => {
    // Takes in the number of current cities and returns the url for the page to be on.
    history.push(numCitiesToUrl(currentCities.length));
  }, [currentCities, history]);

  return (
    <SearchBarContainer>
      <AutoComplete
        className="search-bar"
        onSelect={onSelect}
        placeholder="search"
        filterOption={true}
        style={{ width: '100%', border: 'unset' }}
      >
        {allCities.map(city => {
          cityDict[city.citynamestate] = city.cityid;
          return (
            <Option key={city.cityid} value={city.citynamestate}>
              {city.citynamestate}
            </Option>
          );
        })}
      </AutoComplete>
    </SearchBarContainer>
  );
}

const mapStateToProps = state => {
  return {
    allCities: state.allCities,
    currentCities: state.currentCities,
    filter: state.filter,
  };
};

export default connect(mapStateToProps, {})(SearchBar);
