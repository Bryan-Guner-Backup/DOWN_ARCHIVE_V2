import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
  border: 5px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 10px;
  background: white;
`;

function Footer() {
  return (
    <FooterStyle>
      <h5>MicroFund 2021</h5>
    </FooterStyle>
  );
}

export default Footer;
