import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../common';

function RenderHomePage(props) {
  return (
    <div>
      <h1>Hi,Welcome to Labs Basic SPA</h1>
      <div>
        <p>
          <Link to="/headmaster/student/">View Students</Link>
        </p>
        <p>
          <Link to="/headmaster/student/add">Add Student</Link>
        </p>
      </div>
    </div>
  );
}
export default RenderHomePage;
