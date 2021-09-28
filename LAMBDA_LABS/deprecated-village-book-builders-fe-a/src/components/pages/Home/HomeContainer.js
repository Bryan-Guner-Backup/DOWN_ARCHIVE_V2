import React, { useState, useEffect, useMemo } from 'react';

import RenderHomePage from './RenderHomePage';

function HomeContainer({ LoadingComponent }) {
  const [userInfo, setUserInfo] = useState(null);
  // eslint-disable-next-line

  return (
    <>
      <RenderHomePage userInfo={userInfo} />
    </>
  );
}

export default HomeContainer;
