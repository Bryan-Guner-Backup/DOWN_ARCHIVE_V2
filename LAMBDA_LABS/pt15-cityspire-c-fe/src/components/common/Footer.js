import React from 'react';

const year = new Date().getFullYear();

const Footer = () => {
  return <p>Copyright © {year} Lambda Labs</p>;
};

export default Footer;
