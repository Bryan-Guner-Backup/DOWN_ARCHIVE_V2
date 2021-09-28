import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../../assets/Citrics Icon.svg';
import { FaSearchengin, FaUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import AdvancedSearch from '../AdvancedSearch';

const HeaderBar = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 134px;
  align-items: center;
  margin: 0 auto;
  justify-content: space-around;
  background-color: #c4c4c4;
  .header-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 245px;
    margin: 1% 0 1% 2%;
    cursor: pointer;
    .header-logo-icon {
      height: 70px;
    }
    .header-logo-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-left: 5px;
      .header-logo-h1 {
        font-family: 'Norwester', sans-serif;
        text-transform: uppercase;
        line-height: 56px;
        font-size: 56px;
        color: #d35540;
        padding: 0;
        margin: 0;
      }
      .header-logo-h3 {
        font-family: 'Montserrat', sans-serif;
        text-transform: uppercase;
        text-align: center;
        font-size: 8px;
        font-stretch: ultra-expanded;
        letter-spacing: 1px;
        font-weight: 800;
        line-height: 8px;
        padding: 0;
        margin: 0;
      }
    }
  }

  .search {
    display: flex;
    flex-direction: row;
    text-align: center;
    width: 60%;
    align-items: center;
    align-content: center;
  }

  .aside {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 0.875rem;
    color: #ffffff;
    cursor: pointer;
    .advanced-search {
      font-family: 'Roboto', sans-serif;
      text-align: left;
      line-height: 0.875rem;
      margin-right: 1%;
      margin: auto 1%;
    }
    .advanced-search-icon {
      width: 40px;
      height: 40px;
    }
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 11.13%;
    margin: 2% 2% 2% 0;
    .profile {
      cursor: pointer;
      color: #5e5e5e;
      height: 42px;
      width: 42px;
    }

    div {
      display: flex;
      font-size: 0.75rem;
      align-items: flex-end;
      margin: 1% 0 1% 5%;
      color: #d35540;
    }
  }
`;

const SearchBar = styled.form`
  width: 60%;
  padding: 20px;

  input {
    position: relative;
    display: flex;
    border-radius: 25px;
    border: 0;
    display: inline-block;
    width: 150%;
    text-align: center;
  }
`;

const searchable = {
  term: '',
};

export const Header = () => {
  const [searchTerm, setSearchTerm] = useState(searchable);
  const [displayAdvanced, setDisplayAdvanced] = useState(false);
  const searching = useSelector(state => state.isSearching);
  const { push } = useHistory();

  const handleChanges = e => {
    e.preventDefault();
    setSearchTerm({ ...searchTerm, [e.target.name]: e.target.value });
  };

  return (
    <HeaderBar>
      <div onClick={() => push('/')} className="header-logo">
        <img src={logo} alt="Citrics Logo" className="header-logo-icon" />
        <div className="header-logo-text">
          <h1 className="header-logo-h1">Citrics</h1>
          <h3 className="header-logo-h3">A Nomad's Guide To The City</h3>
        </div>
      </div>

      <div className="search">
        {searching ? (
          <SearchBar className="sb-dis">
            <label name="term" htmlFor="term">
              <input
                name="term"
                value={searchTerm.term}
                onChange={handleChanges}
                placeholder="Start your search..."
                type="text"
              />
            </label>
          </SearchBar>
        ) : null}
      </div>

      <div className="right">
        <div className="aside">
          <button
            onClick={() => setDisplayAdvanced(true)}
            className="advanced-search"
          >
            Advanced <br /> Search
          </button>
          {displayAdvanced ? (
            <AdvancedSearch setDisplayAdvanced={setDisplayAdvanced} />
          ) : null}
          <FaSearchengin size="40px" className="advanced-search-icon" />
        </div>
        <FaUserCircle
          className="profile"
          size="42px"
          onClick={() => push('/testprofile')}
        />
      </div>
    </HeaderBar>
  );
};
