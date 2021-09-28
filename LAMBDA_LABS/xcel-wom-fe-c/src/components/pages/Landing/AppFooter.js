import React from 'react';
import { Button } from 'antd';

function AppFooter() {
  return (
    <section style={footerContainer}>
      <div style={box}>
        <h3 style={h3Style}>Contact</h3>
        <div style={h3Under}></div>
        <p>Phone: 585-123-4567</p>
        <p>After Hours: 585-321-7654</p>
        <p>info@apartments.com</p>
      </div>
      <div style={box}>
        <h3 style={h3Style}>Office hours</h3>
        <div style={h3Under}></div>
        <p>Weekdays: 8AM - 5PM</p>
        <p>Saturday: 9AM -5PM</p>
        <p>Sunday: 1PM - 5PM</p>
      </div>
      <div style={box}>
        <h3 style={h3Style}>Check Avalability</h3>
        <div style={h3Under}></div>
        <p>
          Are you interested in becoming a part of our community? Submit a
          request form to begin the process.
        </p>
        <Button type="primary">Check Availability</Button>
      </div>
    </section>
  );
}

let footerContainer = {
  borderTop: '3px black solid',
  padding: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  margin: '2% 20%',
  position: 'relative',
  top: '-300px',
};

let box = {
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  width: '28%',
  height: 'auto',
  fontSize: '19px',
};

let h3Style = {
  borderBottom: '1px #fe4a49 solid',
  margin: '0',
};

let h3Under = {
  borderTop: '4px #fe4a49 solid',
  marginTop: '0',
  marginBottom: '15px',
  width: '25%',
};
export default AppFooter;
