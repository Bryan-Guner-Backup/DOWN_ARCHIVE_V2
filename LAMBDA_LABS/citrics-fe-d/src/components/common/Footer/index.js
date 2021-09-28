import React from 'react';
import icon from '../../../assets/Citrics Icon white.svg';
import styled from 'styled-components';

const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #2e3c48;
  width: 100%;
  height: 166px;
  padding: 1.5rem;
  padding-bottom: 0;
  .nav-div {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      display: flex;
      flex-basis: 10%;
      margin-left: 2.5%;
    }
    .nav-menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-basis: 90%;
      margin-right: 27.5%;
      margin-left: 20%;
      a {
        text-decoration: none;
        font-family: 'Roboto';
        font-size: 1.125rem;
        color: #fff;
      }
    }
  }
  .footer-text-div {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-top: 1%;
    margin: 0;
    p {
      color: #fff;
      font-family: 'Roboto';
      font-size: 0.625rem;
      margin: 0;
    }
  }
`;

export default function Footer() {
  return (
    <FooterDiv>
      <div className="nav-div">
        <img src={icon} alt="citrics icon" />
        <nav className="nav-menu">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Meet the Team</a>
          <a href="#">Advanced Search</a>
          <a href="https://github.com/orgs/Lambda-School-Labs/teams/labs28-d-citrics">
            Github
          </a>
        </nav>
      </div>
      <div className="footer-text-div">
        <p>Built by your fellow nomads at Lambda School © Citrics 2020</p>
        <p>Lambda School Labs 2020</p>
      </div>
    </FooterDiv>
  );
}
