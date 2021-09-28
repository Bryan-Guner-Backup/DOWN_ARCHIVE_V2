import React, { useEffect } from 'react';
import { AutoComplete, Input } from 'antd';
import { LeftOutlined, SearchOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { searchBarActs } from '../../../state/actions';
import '../../../styles/style.less';

function SearchBar(props) {
  const dispatch = useDispatch();
  const { fetchCities, filterCities } = searchBarActs;
  const { filter, cityData } = useSelector(
    state => state.searchBar
  );
  const theme = useSelector(state => state.theme);

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);
  const onChange = value => dispatch(filterCities(value));
  
  return (
    <AutoComplete
      defaultValue={filter}
      options={cityData}
      onSelect={props.newProps.onSelect}
      defaultActiveFirstOption={true}
      onChange={onChange}
      filterOption={true}
      dropdownMatchSelectWidth={true}
    >
      <Input
        placeholder={'Search'}
        id="mainSearchInput"
        prefix={
          <LeftOutlined
            style={{ color: theme.primaryLight, fontSize: '1.15rem' }}
          />
        }
        suffix={
          <SearchOutlined
            style={{ color: theme.primaryLight, fontSize: '1.15rem' }}
          />
        }
        style={{ borderRadius: 30, height: 50, background: 'unset' }}
        bordered={true}
      />
    </AutoComplete>
  );
}

export default SearchBar;
