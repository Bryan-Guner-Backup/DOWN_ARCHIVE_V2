import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';
import { Header } from '../../common/Header';
import { DescriptionSection } from './DecriptionSection';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 100vw;
  min-width: 100%;
  height: 100vh;
  font-family: 'Roboto', sans-serif;
  align-content: center;
  font-size: 1rem;
  overflow: hidden;
  /* new styling */
  .city-select-inner-div {
    display: flex;
    flex-direction: row;
    .vs-text {
      position: absolute;
      font-size: 4rem;
      top: 30%;
      color: #fff;
      background-color: #d3553fcc;
      border-radius: 50%;
      width: 135px;
      height: 135px;
      text-align: center;
      line-height: 120px;
    }
    /* end of new styling */

    .split {
      flex-direction: column;
      display: flex;
      margin: 0 auto;
      align-items: center;
      justify-content: center;
      width: 30vw;
      height: 55vh;
      .icons {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        background-color: #c4c4c4;
        width: 100px;
        height: 100px;
      }
    }

    .float {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 2.5rem;
      color: #000000;

      .vs {
        font-size: 4rem;
      }

      .compare-btn {
        display: flex;
        text-align: center;
        position: relative;
        justify-content: center;
        font-size: 1.5rem;
        background-color: #d35540;
        width: 275px;
        height: 52px;
        border-radius: 30px;
        color: #ffffff;

        p {
          margin: auto;
        }
      }
    }
    */ .info {
      display: flex;
      flex-flow: row wrap;
      width: 100%;
      margin: 1%;
      justify-content: center;
    }

    .bottom {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .graph {
      height: 35vh;
      width: 40vw;
      text-align: center;
      display: flex;
      font-size: 5rem;
    }
  } //end
`;

export const CitySelect = () => {
  const cityOne = useState('');
  const cityTwo = useState('');

  return (
    <>
      <Container>
        <Header />
        <div className="city-select-inner-div">
          <div className="split">
            {!cityOne ? (
              <div></div>
            ) : (
              <div className="icons">
                <FaPlus size="50px" />
              </div>
            )}
          </div>

          <div className="float">
            <p className="vs"> vs.</p>
            <div className="compare-btn">
              <p>COMPARE</p>
            </div>
          </div>

          <div className="split">
            {!cityTwo ? (
              <div></div>
            ) : (
              <div className="icons">
                <FaPlus size="50px" />
              </div>
            )}
          </div>
        </div>
        <DescriptionSection />
      </Container>
    </>
  );
};
