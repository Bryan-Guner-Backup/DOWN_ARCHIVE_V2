import React from 'react';

function LandingBodyPage() {
  return (
    <section style={landingBodyPage}>
      <div style={box}>
        <h3 style={h3Style}>Excutive apartment</h3>
        <div style={h3Under}></div>
        <img
          alt="XCEL WORK ORDER"
          width={300}
          src="https://clintwoodapartments.com/wp-content/uploads/home-image.jpg"
        />
        <p>
          Just 5 minutes to Twelve Corners, Park Ave, the UR Medical Center and
          the Canal Path makes Clintweeod and attractive place to live.
        </p>
      </div>
      <div style={box}>
        <h3 style={h3Style}>Overview</h3>
        <div style={h3Under}></div>
        <ul>
          <li>Desirable Brighton School Distric</li>
          <li>Heat and hot water included</li>
          <li>Relax at the pool</li>
          <li>Close to shopping</li>
          <li>Onsite Laundry Facilities</li>
          <li>Credit Card Payments Accepted</li>
        </ul>
      </div>
      <div style={box}>
        <h3 style={h3Style}>Location Details</h3>
        <div style={h3Under}></div>
        <p>1600 Pennsylvania Avenue NW, Washington, DC 20500</p>
      </div>
    </section>
  );
}

let landingBodyPage = {
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
export default LandingBodyPage;
