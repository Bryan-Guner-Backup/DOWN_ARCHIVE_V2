import React from 'react';
import styled from 'styled-components';
import { FaSearchengin, FaSearch } from 'react-icons/fa';
import Searchbar from '../Searchbar/searchbar';

const HeaderBar = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 15vh;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  background-color: rgba(00, 00, 00, 0.3);

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
    width: 15%;
    font-size: 0.875rem;
    color: #ffffff;
    cursor: pointer;
    .advanced-search {
      font-family: 'Roboto', sans-serif;
      text-align: left;
      line-height: 1.1rem;
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
    justify-content: flex-end;
    align-content: center;
    flex-direction: row;
    width: 35%;
    margin-right: 5%;

    .login-btn {
      background-color: unset;
      border: unset;
      font-size: 1.5rem;
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      color: #ffffff;
      cursor: pointer;
      &:focus {
        border: none;
        outline: none;
      }
    }

    .compare-cities-btn {
      margin: 2%;
      width: 13.3125rem;
      background-color: #d35540;
      border: 0;
      border-radius: 15px;
      color: #ffffff;
      height: 3rem;
      font-size: 1.5rem;
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      cursor: pointer;
      &:focus {
        border: none;
        outline: none;
      }
    }
  }
`;

const SearchBar = styled.form`
  display: flex;
  margin: auto 0;
  margin-left: 10%;
  width: 370px;
  height: 46.16px;
  .search-icon-container {
    display: flex;
    align-items: center;
    background-color: #ffffff;
    border-radius: 0 15px 15px 0;
    color: #c4c4c4;
    height: 46.16px;
    width: 55px;
    padding: 0 4%;
    .search-icon {
      height: 27.56px;
      width: 27.56px;
      color: #c4c4c4;
    }
  }
  label {
    width: 100%;
    input {
      display: flex;
      border-radius: 15px 0 0 15px;
      border: 0;
      display: inline-block;
      text-align: start;
      padding: 0 5%;
      height: 46.16px;
      width: 100%;
      color: #000000;
      font-size: 1.5rem;
      font-family: 'Roboto', sans-serif;
      &::placeholder {
        color: #c4c4c4;
        font-size: 1.5rem;
        font-family: 'Roboto', sans-serif;
      }
      &:focus {
        border: none;
        outline: none;
      }
    }
  }
`;

export const LandingHeader = () => {
  return (
    <div>
      <HeaderBar>
        <div className="search">
          <SearchBar className="sb-dis">
            <label name="term" htmlFor="term">
              <Searchbar />
            </label>
            <div className="search-icon-container">
              <FaSearch className="search-icon" />
            </div>
          </SearchBar>

          <div className="aside">
            <p className="advanced-search">
              Advanced <br /> Search
            </p>
            <FaSearchengin size="40px" className="advanced-search-icon" />
          </div>
        </div>

        <div className="right">
          <button className="login-btn">Login</button>
          <button className="compare-cities-btn">Compare Cities</button>
        </div>
      </HeaderBar>
    </div>
  );
};
