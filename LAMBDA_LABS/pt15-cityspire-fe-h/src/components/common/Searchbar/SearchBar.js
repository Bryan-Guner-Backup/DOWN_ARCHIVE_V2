import React, { useState, useContext } from 'react';
import { Input } from 'antd';
import locationOnSubmit from '../../../utils/locationSubmit';
import setMapObject from '../../../utils/setMapObject';
import { LocationContext } from '../../../state/contexts';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const [searchVal, setSearchVal] = useState('');
  const { setLocation } = useContext(LocationContext);

  const handleChanges = event => {
    setSearchVal(event.target.value);
  };

  const { Search } = Input;
  let l = useLocation();
  let history = useHistory();

  return (
    <Search
      className="SearchBar"
      placeholder="Search for a location"
      value={searchVal}
      onChange={handleChanges}
      enterButton
      onSearch={() => {
        if (l.pathname !== '/map') {
          locationOnSubmit(setMapObject, setLocation, searchVal);
          history.push('/map');
        } else {
          locationOnSubmit(setMapObject, setLocation, searchVal);
        }
      }}
    />
  );
};

export default SearchBar;
