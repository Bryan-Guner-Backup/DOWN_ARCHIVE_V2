import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h1>404 Page Not Found</h1>
      <h2>Sorry for the inconvenience</h2>
      <h2>
        The page you followed might have been removed, or the link might be
        broken
      </h2>
      <Link to="/">
        <button>Back To Account</button>
      </Link>
      <a href="https://www.saverlife.org">
        <button>SaverLife Home</button>
      </a>
      <a href="https://help.saverlife.org/hc/en-us/">
        <button>SaverLife Help</button>
      </a>
    </div>
  );
};

export default NotFoundPage;
