import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useState } from 'react';

const PartnerStyle = styled.div`
  display: flex;
  padding-left: 10%;
  width: 90%;
  margin-left: 5%;
  padding-top: 2%;
  flex-wrap: flex-wrap;
  :hover {
    border: 2px solid #2fa689;
  }
  .hide {
    display: none;
  }
  button {
    display: flex;
    font-size: 0.5rem;
    height: 4rem;
    width: 5rem;
    margin-left: 2rem;
    background-color: white;
    justify-content: center;
  }
  .butto {
    margin-bottom: 3rem;
    padding-right: 1rem;
  }
  figure {
    display: inline-flex;
    height: 10rem;
    width: 20%;
  }
  img {
    width: 9.5rem;
    height: 9.5rem;
  }
  h2 {
    color: #2fa689;
    width: 20rem;
    height: 30%;
    margin-left: 25%;
  }
  h3 {
    margin-left: 25%;
    color: #2fa689;
    width: 30rem;
  }
`;
const Organization = item1 => {
  const [isActive, setActive] = useState('false');
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <PartnerStyle>
      <figure key={item1.id}>
        <img className="corp" src={item1.thumbnailUrl} alt={item1.title} />
        <h2>{item1.name}</h2>
        <button onClick={handleToggle}>
          <h2 className="butto">click for details</h2>
        </button>
        <figcaption>
          <h3 id={item1.id} className={isActive ? 'hide' : null}>
            {item1.phone}
          </h3>
          <h3 id={item1.id} className={isActive ? 'hide' : null}>
            {item1.address}
          </h3>
        </figcaption>
      </figure>
    </PartnerStyle>
  );
};

export default Organization;

Organization.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      title: PropTypes.string,
      url: PropTypes.string,
      thumbnailUrl: PropTypes.string,
    })
  ).isRequired,
};
