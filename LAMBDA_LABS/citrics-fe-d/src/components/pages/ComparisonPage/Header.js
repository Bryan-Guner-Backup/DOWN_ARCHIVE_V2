import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../../assets/Citrics Icon.svg';
import { FaSearchengin, FaUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const HeaderBar = styled.div`
  display: flex;
  width: 100%;
  height: 15vh;
  align-items: center;
  margin: 0 auto;
  justify-content: space-around;
  background-color: #c4c4c4;

  .left {
    display: flex;
    align-items: center;
    width: 20%;
    margin: 1% 0 1% 2%;

    h1 {
      font-family: 'Norwester', sans-serif;
      text-transform: uppercase;
      font-size: 3.5rem;
      letter-spacing: 3px;
      color: #d35540;
    }

    h3 {
      position: relative;
      font-size: 0.75rem;
      font-family: 'Montserrat', sans-serif;
      text-transform: uppercase;
      top: -50px;
    }

    div {
      position: relative;
      display: flex;
      flex-direction: column;
      margin: 0 2%;
      align-items: flex-start;
      justify-content: center;
      top: 22.5px;
    }
  }

  .search {
    text-align: center;
    display: flex;
    width: 55%;
    margin: 2% 2.5% 2% 0;
  }

  .right {
    display: flex;
    align-items: center;
    align-content: flex-end;
    width: 15%;
    margin: 2% 0;

    .profile {
      margin: 0 15%;
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
  const searching = useSelector(state => state.isSearching);
  const { push } = useHistory();

  const handleChanges = e => {
    e.preventDefault();
    setSearchTerm({ ...searchTerm, [e.target.name]: e.target.value });
  };

  return (
    <HeaderBar>
      <div onClick={() => push('/')} className="left">
        <img src={logo} alt="Citrics Logo" height="90px" />

        <div>
          <h1>CITRICS</h1>
          <h3>A nomad's guide to the city</h3>
        </div>
      </div>

      <div className="search"></div>

      <div className="right">
        <div onClick={() => push('/multiple-city')}>
          <p>
            Advanced <br /> Search
          </p>{' '}
          &nbsp;
          <FaSearchengin size="45px" />
        </div>
        <FaUserCircle
          className="profile"
          size="50px"
          onClick={() => push('/testprofile')}
        />
      </div>
    </HeaderBar>
  );
};
