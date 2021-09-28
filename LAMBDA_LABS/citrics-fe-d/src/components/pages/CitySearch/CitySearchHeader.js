import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { HeaderBar, SearchBar } from './style';
import Searchbar from '../../common/Searchbar/searchbar';
import AdvancedSearch from '../../common/AdvancedSearch';
import { FaUserCircle, FaSearch } from 'react-icons/fa';
import logo from '../../../assets/Citrics Icon.svg';

export default function CitySearchHeader() {
  const { push } = useHistory();
  const [displayAdvanced, setDisplayAdvanced] = useState(false);

  return (
    <div>
      <HeaderBar>
        <div className="left">
          <div onClick={() => push('/')} className="header-logo">
            <img src={logo} alt="Citrics Logo" className="header-logo-icon" />
            <div className="header-logo-text">
              <h1 className="header-logo-h1">Citrics</h1>
              <h3 className="header-logo-h3">A Nomad's Guide To The City</h3>
            </div>
          </div>
          <div className="search">
            <SearchBar className="sb-dis">
              <label name="term" htmlFor="term">
                <Searchbar />
              </label>
              <div className="search-icon-container">
                <FaSearch className="search-icon" />
              </div>
            </SearchBar>
            <div
              onClick={e => {
                e.preventDefault();
                setDisplayAdvanced(true);
              }}
              className="aside"
            >
              Advanced Search
            </div>
            {displayAdvanced ? (
              <AdvancedSearch setDisplayAdvanced={setDisplayAdvanced} />
            ) : null}
          </div>
        </div>

        <div className="right">
          <FaUserCircle size="42px" />
        </div>
      </HeaderBar>
    </div>
  );
}
