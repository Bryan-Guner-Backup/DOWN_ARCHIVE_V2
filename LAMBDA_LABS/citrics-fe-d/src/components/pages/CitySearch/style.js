import styled from 'styled-components';

const CitySearchDiv = styled.div`
  display: flex;
  height: 100vh;
  overflow-y: hidden;
  div.citySearchCont {
    display: flex;
    min-height: 100vh;
    section.citySearchTextDescription {
      width: 50%;
      display: flex;
      flex-direction: column-reverse;
      background-repeat: no-repeat;
      background-color: #cccccc;
      background-position: center;
      background-size: cover;

      div.citySearchTextCont {
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        padding: 2%;
        margin: 4% auto;
        width: 88%;

        h2 {
          color: white;
        }

        p {
        }
      }
    }
    section.citySearchDataPanel {
      display: flex;
      flex-direction: column;
      width: 50%;
      div.citySearchMap {
        height: 45%;
        width: 100%;
      }
      div.citySearchDataCont {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 55%;
        div.citySearchSingleCityChart {
          height: 40%;
          width: 80%;
          padding: 0;
        }
        div.city-search-details {
          height: 60%;
          width: 100%;
          padding: 0;
          margin: 0;
        }
      }
    }
  }
`;

const HeaderBar = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 15vh;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  background-color: unset;
  z-index: 100;
  .left {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 50%;
    .header-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20%;
        margin: 1% 0 1% 10%;
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
      flex-direction: column;
      width: 50%;
      align-items: flex-end;
      align-content: center;
      justify-content: center;
      padding-top: 2.5%;
      margin-right: 5%;
    }

    .aside {
      font-family: 'Roboto', sans-serif;
      display: flex;
      align-items: flex-end;
      margin: 0;
      color: #ffffff;
      font-size: .875rem;
      cursor: pointer;
      }
    }
  }

  .right {
    display: flex;
    justify-content: flex-end;
    align-content: flex-end;
    font-size: 1rem;
    color: #5e5e5e;
    flex-direction: row;
    width: 50%;
    padding: 1% 2.5%;
  }
`;
const SearchBar = styled.form`
  display: flex;
  margin: auto 0;
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

export { HeaderBar, SearchBar, CitySearchDiv };
