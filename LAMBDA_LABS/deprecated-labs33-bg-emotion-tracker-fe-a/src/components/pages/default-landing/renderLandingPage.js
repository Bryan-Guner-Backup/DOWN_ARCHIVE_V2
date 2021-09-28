// This component will be in tended for someone who logs into the system but does not have a role and therefore the
// application does not know which dashboard to load up.
import React from 'react';
import { Link } from 'react-router-dom';

function RenderLandingPage(props) {
  return (
    <div>
      <h1>Welcome to Labs Basic SPA</h1>
      <div>
        <p>
          This is an example of how we'd like for you to approach page/routable
          components. You have no role!
        </p>
        <p>
          <Link to="/example-list">Example List of Items</Link>
        </p>
      </div>
    </div>
  );
}
export default RenderLandingPage;
