import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Bottom = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  div {
    width: 75%;
    margin: 1% auto;
    text-align: center;
    font-size: 1rem;
    color: #000000;
    font-weight: bold;
  }
`;

export const DescriptionSection = () => {
  return (
    <Bottom className="bottom">
      <div>
        <p>
          * The Cost-of-Living Index (CLI) is based on a National Average of
          consumer costs for goods and services. A score of 100% means that the
          CLI in the given city is at the National Average. Whereas, a score
          above or below reflects a CLI of above average prices or below average
          prices, respectively, when compared to the National Average.
        </p>
        <p>
          To filter the results when you do the search in the search bar you can
          toggle criteria in Advanced Search.
        </p>
      </div>
    </Bottom>
  );
};
