import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';



function RenderLandingPage(props) {
  return (
    <div>
       <Nav />
      <h1>MicroFund</h1>
      <p>Helping microentrepreneurs around the world to start their businesses.</p>
      <div>
        <p>
          What is MicroFund?
        </p>
        <p>
          <Link to="/example-list">Example List of Items</Link>
        </p>
      </div>
    </div>

  );
}
export default RenderLandingPage;
